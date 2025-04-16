import {Injectable} from '@angular/core';
import {v4} from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private static readonly KEY = "users";

  public getUsers(): Map<string, string> {
    const json = localStorage.getItem('users');
    return json
      ? new Map(JSON.parse(json)) as Map<string, string>
      : new Map<string, string>();
    // TODO
  }

  public create(name: string): boolean {
    console.log("creating user" + name);
    // TODO checks if empty, whitespaces, ...
    const users = this.read();
    if (!users) {
      const users = new Map<string, string>();
      users.set(name, v4());
      this.save(users);
      return true;
    }
    if (users.has(name)) {
      return false;
    }
    users.set(name, v4());
    this.save(users);
    return true;
  }

  public delete(name: string): boolean {
    const users = this.read();
    if (!users || !users.has(name)) {
      return false;
    }
    users.delete(name);
    this.save(users);
    return true;
  }

  private read(): Map<string, string> | undefined {
    const json = localStorage.getItem(AuthService.KEY);
    if (json) {
      const obj = JSON.parse(json);
      return new Map(obj) as Map<string, string>;
    }
    return undefined;
  }

  private save(map: Map<string, string>) {
    const array = Array.from(map);
    const json = JSON.stringify(array);
    localStorage.setItem(AuthService.KEY, json);
  }

}
