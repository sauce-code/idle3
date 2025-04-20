import { Component } from '@angular/core';
import {ControllerService} from '../controller.service';

@Component({
  selector: 'app-options',
  imports: [],
  templateUrl: './options.component.html',
  styleUrl: './options.component.css'
})
export class OptionsComponent {

  constructor(
    protected controllerService: ControllerService,
  ) {
  }

  protected readonly localStorage = localStorage;
}
