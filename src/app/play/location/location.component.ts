import { Component, OnInit } from '@angular/core';
import {LocationService} from "./location.service";
import {Gate} from "../directions/gate";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private location: Location;

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getLocation().toPromise().then(data => {
      this.location = data;});
  }
}
