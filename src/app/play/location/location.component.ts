import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play.service";

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  private location: Location;

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=> {
        this.getLocation();
      });
    this.getLocation();
  }

  private getLocation(){
    this.playService.getLocation().subscribe(
      (data: Location) => {
        this.location = data;
      });
  }
}
