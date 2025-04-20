import {Injectable} from '@angular/core';
import {ModelService} from './model.service';
import {NativeService} from './logic/framework/in/native.service';
import GameView from './logic/framework/in/GameView';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    private modelService: ModelService,
    private nativeService: NativeService,
  ) {
  }

  public get(): void {
    const response = this.nativeService.get(this.modelService.playerId);
    this.updateModel(response);
  }

  public upgrade(): void {
    console.log("upgrade");
    const response = this.nativeService.upgrade(this.modelService.playerId);
    if (response) {
      this.updateModel(response);
    }
  }

  private updateModel(view: GameView) {
    console.log(view);
    this.modelService.startDate = new Date(view.startDate);
    this.modelService.lastUpdate = new Date(view.lastUpdate);
    this.modelService.res = view.res;
    this.modelService.level = view.level;
    this.modelService.income = view.income;
    this.modelService.upgradeCost = view.upgradeCost;
    this.modelService.refresh();
  }

  public delete(playerId: string) {
    this.nativeService.delete(playerId);
  }

}
