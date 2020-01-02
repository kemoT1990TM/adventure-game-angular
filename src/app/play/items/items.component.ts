import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play.service";
import {Item} from "./item";

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  private items: Item[];

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=>{
      this.getItems();
    });
    this.getItems()
  }

  private getItems(){
    this.playService.getItems().subscribe(
      (data: Item[])=>{this.items = data;});
  }

  private takeItem(item: Item){
    this.playService.takeItem(item).subscribe();
  }

}
