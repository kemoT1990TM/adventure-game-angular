import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map, tap} from 'rxjs/operators';
import {Subject} from "rxjs";
import {Gate} from "./location/gate";
import {Item} from "./items/item";

@Injectable()
export class PlayService {

  private readonly locationUrl: string;
  private readonly gatesUrl: string;
  private readonly itemsUrl: string;
  private readonly startUrl: string;
  private readonly restartUrl: string;
  private readonly inventoryUrl: string;
  private readonly quitUrl: string;
  private readonly resultsUrl: string;
  private readonly itemMessageUrl: string;
  private readonly gateMessageUrl: string;
  private readonly itemTakeUrl: string;
  private readonly itemDropUrl: string;
  private readonly gateChangeUrl: string;

  private _refreshNedded$ = new Subject<void>();

  get refreshNedded$(){
    return this._refreshNedded$;
  }

  constructor(private http: HttpClient) {
    this.locationUrl = "/api/game/location";
    this.gatesUrl = "/api/game/gates";
    this.itemsUrl = "/api/game/items";
    this.startUrl = "/api/game/start";
    this.restartUrl = "/api/game/restart";
    this.inventoryUrl = "/api/game/inventory";
    this.quitUrl = "/api/game/exit";
    this.resultsUrl = "/api/game/results";
    this.itemMessageUrl = "/api/game/item/message";
    this.gateMessageUrl = "/api/game/gate/message";
    this.itemTakeUrl = "/api/game/item/take";
    this.itemDropUrl = "/api/game/item/drop";
    this.gateChangeUrl = "/api/game/gate/change";
  }

  getLocation() {
    return this.http.get<Location>(this.locationUrl).pipe(map((data: Location) => {
      return data;
    }));
  }

  getGates() {
    return this.http.get<Gate[]>(this.gatesUrl).pipe(map((data: Gate[]) => {
      return data;
    }));
  }

  getItems() {
    return this.http.get<Item[]>(this.itemsUrl).pipe(map((data: Item[]) => {
      return data;
    }));
  }

  getInventory() {
    return this.http.get<Item[]>(this.inventoryUrl).pipe(map((data: Item[]) => {
      return data;
    }));
  }

  getResults() {
    return this.http.get<string[]>(this.resultsUrl).pipe(map((data: string[]) => {
      return data;
    }));
  }

  getItemMessage() {
    return this.http.get<string[]>(this.itemMessageUrl).pipe(map((data: string[]) => {
      return data;
    }));
  }

  getGateMessage() {
    return this.http.get<string[]>(this.gateMessageUrl).pipe(map((data: string[]) => {
      return data;
    }));
  }

  changeLocation(gate: Gate){
    return this.http.post(this.gateChangeUrl,gate).pipe(
      tap(()=>{
      this._refreshNedded$.next();})
    );
  }

  takeItem(item: Item){
    return this.http.post(this.itemTakeUrl,item).pipe(
      tap(()=>{
        this._refreshNedded$.next();})
    );
  }

  dropItem(item: Item){
    return this.http.post(this.itemDropUrl,item).pipe(
      tap(()=>{
        this._refreshNedded$.next();})
    );
  }

  quit() {
    return this.http.get<void>(this.quitUrl);
  }

  start() {
    return this.http.get<void>(this.startUrl);
  }

  restart() {
    return this.http.get<void>(this.restartUrl);
  }
}
