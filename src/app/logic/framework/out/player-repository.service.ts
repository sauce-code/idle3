import { Injectable } from '@angular/core';
import Player from '../../domain/Player';

@Injectable({
  providedIn: 'root'
})
export class PlayerRepositoryService {

  private static readonly KEY = 'player';

  private static path(id: string): string {
    return `${PlayerRepositoryService.KEY}/${id}`;
  }

  public get(id: string): Player | null {
    const path = PlayerRepositoryService.path(id);
    const json = localStorage.getItem(path);
    return json
      ? this.parse(json)
      : null;
  }

  public save(player: Player): void {
    const json = JSON.stringify(player);
    localStorage.setItem(PlayerRepositoryService.path(player.id), json);
  }

  private parse(json: string): Player {
    const obj = JSON.parse(json);
    return new Player(
      obj.id,
      obj.castle,
    );
  }

  public delete(playerId: string) {
    const path = PlayerRepositoryService.path(playerId);
    localStorage.removeItem(path);
  }

}
