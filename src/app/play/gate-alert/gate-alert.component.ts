import { Component, OnInit } from '@angular/core';
import {Gate} from "../location/gate";
import {PlayService} from "../play.service";

@Component({
  selector: 'app-gate-alert',
  templateUrl: './gate-alert.component.html',
  styleUrls: ['./gate-alert.component.css']
})
export class GateAlertComponent implements OnInit {

  private gateMessage: string[];

  constructor(private playService: PlayService) {
  }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=> {
      this.getGateMessage();
    });
    this.getGateMessage();
  }

  private getGateMessage(){
    this.playService.getGateMessage().subscribe((data: string[]) => {
      console.log(this.gateMessage)
      this.gateMessage = data;});
  }


}
