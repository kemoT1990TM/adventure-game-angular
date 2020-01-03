import { Component, OnInit } from '@angular/core';
import {PlayService} from "../play/play.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private playService: PlayService) { }

  ngOnInit() {
  }

  private start(){
    this.playService.start().subscribe();
  }

}
