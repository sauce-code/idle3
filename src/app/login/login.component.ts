import {Component, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {UserService} from '../user.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  @Input() name?: string;

  constructor(
    protected readonly userService: UserService,
  ) {
  }

  createUser() {
    console.log(this.name);
    if (this.name) {
      this.userService.create(this.name);
    }
  }

  deleteUser(name: string) {
    console.log(name);
    if (name) {
      this.userService.delete(name);
    }
  }

  login(name: string) {
    this.userService.login(name);
  }

}
