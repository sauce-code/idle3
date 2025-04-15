import {Injectable} from '@angular/core';
import Castle from '../../domain/Castle';

@Injectable({
  providedIn: 'root'
})
export class CastleRepositoryService {

  public static readonly KEY = 'castle';

  public get(): Castle | null {
    const json = localStorage.getItem(CastleRepositoryService.KEY);
    return json === null
      ? null
      : this.parse(json);
  }

  private parse(json: string): Castle {
    const obj = JSON.parse(json);
    return new Castle(
      new Date(obj.startDate),
      new Date(obj.lastUpdate),
      obj.resources,
      obj.level,
    );
  }

  public save(castle: Castle): void {
    const json = JSON.stringify(castle);
    localStorage.setItem(CastleRepositoryService.KEY, json);
  }

  public reset() {
    localStorage.clear();
  }

}
