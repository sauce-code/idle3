import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _res: number = 0;
  private _level: number = 1;
  private _income: number = this._level * 2.1;

  constructor() {
  }

  get res(): number {
    return this._res;
  }

  get level(): number {
    return this._level;
  }

  get income(): number {
    return this._income;
  }

  public refresh(): void {
    console.log("refresh called");
    this._res = this._res += this._income;
  }

  public upgrade(): void {
    console.log("upgrade called");
    this._res = this._res - this._level * 10;
    this._level = this._level + 1;
    this._income = this._level * 2.1;
  }

}
