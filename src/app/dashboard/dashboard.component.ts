import { Component } from '@angular/core';
import {ModelService} from '../model.service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {


  constructor(
    protected modelService: ModelService,
  ) {
  }

}
