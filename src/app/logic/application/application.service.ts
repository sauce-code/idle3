import {Injectable} from '@angular/core';
import {CastleRepositoryService} from '../framework/out/castle-repository.service';
import Castle from '../domain/Castle';
import {PlayerRepositoryService} from '../framework/out/player-repository.service';
import Player from '../domain/Player';
import {v4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private readonly playerRepository: PlayerRepositoryService,
    private readonly castleRepositoryService: CastleRepositoryService,
  ) {
  }

  // TODO create player method

  public get(id: string): Castle {
    const player = this.playerRepository.get(id);
    if (!player) {
      const uuid = v4();
      const newCastle = Castle.create(uuid);
      this.castleRepositoryService.save(newCastle);
      const newPlayer = new Player(id, newCastle.id);
      this.playerRepository.save(newPlayer);
      return newCastle;
    }
    const castle = this.castleRepositoryService.get(player.castle);
    if (!castle) {
      const uuid = v4();
      const newCastle = Castle.create(uuid);
      this.castleRepositoryService.save(newCastle);
      return newCastle;
    }
    return castle;
  }

  public delete(playerId: string): boolean {
    const player = this.playerRepository.get(playerId);
    if (!player) {
      return false;
    }
    const castle = this.castleRepositoryService.get(player.castle);
    if (castle) {
      this.castleRepositoryService.delete(player.castle);
    }
    this.playerRepository.delete(playerId);
    return true;
  }

  public upgrade(id: string): Castle | undefined {
    const player = this.playerRepository.get(id);
    if (!player) {
      throw new Error(`No Player ${id} found.`);
    }
    const castle = this.castleRepositoryService.get(player.castle);
    if (!castle) {
      throw new Error(`No Castle ${player.castle} found.`);
    }
    castle.update();
    const success = castle.upgrade();
    if (!success) {
      return undefined;
    }
    this.castleRepositoryService.save(castle);
    return castle;
  }

}
