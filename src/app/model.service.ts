import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  playerId = "";
  castleId = "";
  startDate: Date = new Date();
  lastUpdate: Date = new Date();
  res = 0;
  level = 0;
  income = 0;
  upgradeCost = 0;
  upgradeDisabled = false;

  constructor() {
    setInterval(() => this.refresh(), 100);
  }

  refresh() {
    const now = new Date();
    const elapsedMillis = now.getTime() - this.lastUpdate.getTime();
    const elapsedSeconds = elapsedMillis / 1_000;
    this.lastUpdate = now;
    this.res += elapsedSeconds * this.income;
    this.upgradeDisabled = this.res < this.upgradeCost;
  }

  clear() {
    this.playerId = "";
    this.castleId = "";
    this.startDate = new Date();
    this.lastUpdate = new Date();
    this.res = 0;
    this.level = 0;
    this.income = 0;
    this.upgradeCost = 0;
    this.upgradeDisabled = false;
  }

}
