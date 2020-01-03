import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play/play.service";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  private results: string[];

  constructor(private playService: PlayService) { }

  ngOnInit() {
    this.getResults();
  }

  private restart(){
    this.playService.restart().subscribe();
  }

  private getResults(){
    this.playService.getResults().subscribe((data: string[])=>{
      this.results = data;
    });
  }
}
