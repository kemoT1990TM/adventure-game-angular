import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Gate} from "./gate";
import {GateService} from "./gate.service";
import {LocationService} from "../location/location.service";
import {LocationComponent} from "../location/location.component";

@Component({
  selector: 'app-directions',
  templateUrl: './directions.component.html',
  styleUrls: ['./directions.component.css']
})
export class DirectionsComponent implements OnInit {

  private gates: Gate[];
  locationComponent: LocationComponent;

  constructor(private gateService: GateService, private locationService: LocationService) { }

  ngOnInit() {
    this.gateService.getGates().subscribe(data => {
      this.gates = data;
    });
  }

  changeLocation(gate: Gate){
    this.gateService.changeLocation(gate).subscribe(data =>{
      this.locationService.getLocation();
      });
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
