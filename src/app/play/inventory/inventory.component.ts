import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play.service";
import {Item} from "../items/item";

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.css']
})
export class InventoryComponent implements OnInit {

  private inventory: Item[];

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.playService.refreshNedded$.subscribe(()=>
    this.getInventory()
    );
    this.getInventory()
  }

  private getInventory(){
    this.playService.getInventory().subscribe((data:Item[]) =>{
      this.inventory = data;
    });
  }

  private dropItem(item: Item){
    this.playService.dropItem(item).subscribe();
  }

}
