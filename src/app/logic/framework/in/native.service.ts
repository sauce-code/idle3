import {Injectable} from '@angular/core';
import {ApplicationService} from '../../application/application.service';
import GameView from './GameView';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  constructor(
    private readonly applicationService: ApplicationService,
  ) {
  }

  public get(id: string): GameView {
    const castle = this.applicationService.get(id);
    return GameView.of(castle);
  }

  public delete(playerId: string): boolean {
    return this.applicationService.delete(playerId);
  }

  public upgrade(id: string): GameView | undefined {
    const castle = this.applicationService.upgrade(id);
    return castle
      ? GameView.of(castle)
      : undefined;
  }

}
