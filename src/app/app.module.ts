import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './play/inventory/inventory.component';
import { LocationComponent } from './play/location/location.component';
import { ItemsComponent } from './play/items/items.component';
import { DirectionsComponent } from './play/directions/directions.component';
import { GateAlertComponent } from './play/gate-alert/gate-alert.component';
import { ItemAlertComponent } from './play/item-alert/item-alert.component';
import { FormsModule } from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './home/home.component';
import { PlayComponent } from './play/play.component';
import { GameOverComponent } from './game-over/game-over.component';
import {HttpClientModule} from "@angular/common/http";
import {LocationService} from "./play/location/location.service";
import {GateService} from "./play/directions/gate.service";

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'play', component: PlayComponent },
  { path: 'game-over', component: GameOverComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    LocationComponent,
    ItemsComponent,
    DirectionsComponent,
    GateAlertComponent,
    ItemAlertComponent,
    HomeComponent,
    PlayComponent,
    GameOverComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    LocationService,
    GateService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
