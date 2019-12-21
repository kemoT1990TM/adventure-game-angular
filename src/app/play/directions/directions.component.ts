import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GateService} from "./gate.service";
import {LocationService} from "../location/location.service";
import {LocationComponent} from "../location/location.component";
import {Gate} from "../location/gate";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  private gates: Gate[];

  constructor(private locationService: LocationService) { }

  ngOnInit() {
    this.locationService.getGates().subscribe();
  }

  changeLocation(gate: Gate){
    this.locationService.changeLocation(gate).subscribe();
  }

  // @Output() updateView = new EventEmitter();
  //
  // public create(name, description, archived, selectedParents): void {
  //   http.post.subscribe(() => {
  //     this.messageService.success('Worked');
  //     //here the other component should call the get method and refresh the page afterwards
  //     this.updateView.emit();
  //   }, () => {
  //     this.messageService.error('Error');
  //   });;
  // }
}
