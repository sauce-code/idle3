import {Injectable} from '@angular/core';
import {ModelService} from './model.service';
import {NativeService} from './logic/framework/in/native.service';

@Injectable({
  providedIn: 'root'
})
export class ControllerService {

  constructor(
    private modelService: ModelService,
    private nativeService: NativeService,
  ) {
    const response = this.nativeService.get();
    this.updateModel(response);
  }

  public upgrade(): void {
    console.log("upgrade");
    const response = this.nativeService.upgrade();
    if (response) {
      this.updateModel(response);
    }
  }

  private updateModel(response: string) {
    console.log(response);
    const obj = JSON.parse(response);
    this.modelService.startDate = new Date(obj.startDate);
    this.modelService.lastUpdate = new Date(obj.lastUpdate);
    this.modelService.res = obj.res;
    this.modelService.level = obj.level;
    this.modelService.income = obj.income;
    this.modelService.upgradeCost = obj.upgradeCost;
    this.modelService.refresh();
  }

  public reset() {
    console.log("reset");
    const response = this.nativeService.reset();
    this.updateModel(response);
  }

}
