import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play/play.service";

@Component({
  selector: 'app-game-over',
  templateUrl: './game-over.component.html',
  styleUrls: ['./game-over.component.css']
})
export class GameOverComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  private restart(){
    this.playService.restart().subscribe();
  }
}
