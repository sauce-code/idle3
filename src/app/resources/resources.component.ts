import {Component} from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent {

  constructor(
    protected modelService: ModelService,
  ) {
  }

}
