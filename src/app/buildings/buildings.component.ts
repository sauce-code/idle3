import {Component} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-buildings',
  imports: [],
  templateUrl: './buildings.component.html',
  styleUrl: './buildings.component.css'
})
export class BuildingsComponent {

  constructor(
    protected dataService: DataService
  ) {
  }

}
