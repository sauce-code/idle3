import {Component} from '@angular/core';
import {ModelService} from '../model.service';
import {ControllerService} from '../controller.service';

@Component({
  selector: 'app-buildings',
  imports: [],
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.css'
})
export class BuildingsComponent {

  constructor(
    protected modelService: ModelService,
    protected controllerService: ControllerService,
  ) {
  }

}
