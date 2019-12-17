import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LocationComponent } from './location/location.component';
import { ItemsComponent } from './items/items.component';
import { DirectionsComponent } from './directions/directions.component';
import { GateAlertComponent } from './gate-alert/gate-alert.component';
import { ItemAlertComponent } from './item-alert/item-alert.component';

@NgModule({
  declarations: [
    AppComponent,
    InventoryComponent,
    LocationComponent,
    ItemsComponent,
    DirectionsComponent,
    GateAlertComponent,
    ItemAlertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
