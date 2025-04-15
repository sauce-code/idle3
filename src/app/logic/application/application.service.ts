import {Injectable} from '@angular/core';
import {CastleRepositoryService} from '../framework/out/castle-repository.service';
import Castle from '../domain/Castle';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {

  constructor(
    private castleRepositoryService: CastleRepositoryService
  ) {
  }

  public get(): Castle {
    const castle = this.castleRepositoryService.get();
    return castle
      ? castle
      : this.init();
  }

  public upgrade(): Castle | undefined {
    const castle = this.castleRepositoryService.get();
    if (!castle) {
      throw new Error('No Castle');
    }
    castle.update();
    const success = castle.upgrade();
    if (!success) {
      return undefined;
    }
    this.castleRepositoryService.save(castle);
    return castle;
  }

  public reset() {
    this.castleRepositoryService.reset();
    return this.init();
  }

  private init(): Castle {
    const newCastle = Castle.create();
    this.castleRepositoryService.save(newCastle);
    return newCastle;
  }

}
