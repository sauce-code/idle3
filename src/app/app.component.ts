import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import {ResourcesComponent} from './resources/resources.component';
import {NgIf} from '@angular/common';
import {LoginComponent} from './login/login.component';
import {ModelService} from './model.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, ResourcesComponent, NgIf, LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'idle3';

  constructor(
    protected modelService: ModelService,
  ) {
  }

}
