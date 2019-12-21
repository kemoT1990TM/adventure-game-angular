import { Component, OnInit } from '@angular/core';
import {LocationService} from "./location.service";
import {Gate} from "./gate";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation().subscribe();
  }
}
