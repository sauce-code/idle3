import {Injectable} from '@angular/core';
import {ApplicationService} from '../../application/application.service';
import GameView from './GameView';
import Castle from '../../domain/Castle';

@Injectable({
  providedIn: 'root'
})
export class NativeService {

  constructor(
    private readonly applicationService: ApplicationService,
  ) {
  }

  public get(): string {
    const castle = this.applicationService.get();
    return this.parse(castle);
  }

  public upgrade(): string | undefined {
    const castle = this.applicationService.upgrade();
    return castle
      ? this.parse(castle)
      : undefined;
  }

  public reset(): string {
    const castle = this.applicationService.reset();
    return this.parse(castle);
  }

  private parse(castle: Castle): string {
    const gameView = new GameView(
      castle.startDate,
      castle.lastUpdate,
      castle.resources,
      castle.level,
      castle.income,
      castle.upgradeCost,
    );
    return JSON.stringify(gameView);
  }

}
