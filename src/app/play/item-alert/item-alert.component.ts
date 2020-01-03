import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play.service";
import {isNgTemplate} from "@angular/compiler";

@Component({
  selector: 'app-item-alert',
  templateUrl: './item-alert.component.html',
  styleUrls: ['./item-alert.component.css']
})
export class ItemAlertComponent implements OnInit {

  private itemMessage: string[];

  constructor(private playService: PlayService) {
  }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=> {
      this.getItemMessage();
    });
    this.getItemMessage();
  }

  private getItemMessage(){
    this.playService.getItemMessage().subscribe((data: string[]) => {
      console.log(this.itemMessage);
      this.itemMessage = data;});
  }

}
