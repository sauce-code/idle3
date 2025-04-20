import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {ModelService} from "./model.service";
import {ControllerService} from "./controller.service";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    users: Map<string, string>;

    constructor(
        private readonly authService: AuthService,
        private readonly modelService: ModelService,
        private readonly controllerService: ControllerService,
    ) {
        // TODO
        this.users = this.authService.getUsers();
    }

    create(name: string) {
        console.log("Creating new user");
        this.authService.create(name);
        this.fetch();
    }

    delete(name: string) {
        console.log(`deleting user ${name}`);
        this.controllerService.delete(this.users.get(name) as string);
        this.authService.delete(name);
        this.fetch();
    }

    login(name: string) {
        this.modelService.playerId = this.users.get(name) as string;
        this.controllerService.get();
    }

    fetch() {
        this.users = this.authService.getUsers();
    }

}
