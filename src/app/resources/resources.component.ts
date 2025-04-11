import {Component, OnInit} from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-resources',
  imports: [],
  templateUrl: './resources.component.html',
  styleUrl: './resources.component.css'
})
export class ResourcesComponent implements OnInit {
  protected res?: number;

  constructor(
    protected dataService: DataService
  ) {
  }

  ngOnInit(): void {
    setInterval(() => this.dataService.refresh(), 1000);
  }

}
