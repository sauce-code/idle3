import {Injectable} from '@angular/core';
import Castle from '../../domain/Castle';

@Injectable({
  providedIn: 'root'
})
export class CastleRepositoryService {

  private static readonly KEY = 'castle';

  private static path(id: string): string {
    return `${CastleRepositoryService.KEY}/${id}`;
  }

  public get(id: string): Castle | null {
    const path = CastleRepositoryService.path(id);
    const json = localStorage.getItem(path);
    return json
      ? this.parse(json)
      : null;
  }

  private parse(json: string): Castle {
    const obj = JSON.parse(json);
    return new Castle(
      obj.id,
      new Date(obj.startDate),
      new Date(obj.lastUpdate),
      obj.resources,
      obj.level,
    );
  }

  public save(castle: Castle): void {
    const json = JSON.stringify(castle);
    localStorage.setItem(CastleRepositoryService.path(castle.id), json);
  }

  delete(id: string) {
    const path = CastleRepositoryService.path(id);
    localStorage.removeItem(path);
  }

}
