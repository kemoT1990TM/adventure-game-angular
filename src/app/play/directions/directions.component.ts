import {Component, OnInit} from '@angular/core';
import {Gate} from "../location/gate";
import {PlayService} from "../play.service";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  private gates: Gate[];

  constructor(private playService: PlayService) {
  }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=> {
      this.getGates();
    });
    this.getGates();
  }

  private getGates(){
    this.playService.getGates().subscribe((data: Gate[]) => {
      this.gates = data;});
  }

  private changeLocation(gate: Gate){
    this.playService.changeLocation(gate).subscribe();
  }

}
