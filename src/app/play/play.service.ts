import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map, tap} from 'rxjs/operators';
import {BehaviorSubject, Subject, throwError} from "rxjs";
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

  changeLocation(gate: Gate){
    return this.http.post("/api/game/change",gate).pipe(
      tap(()=>{
      this._refreshNedded$.next();})
    );
  }

  takeItem(item: Item){
    return this.http.post("/api/game/take",item).pipe(
      tap(()=>{
        this._refreshNedded$.next();})
    );
  }

  dropItem(item: Item){
    return this.http.post("/api/game/drop",item).pipe(
      tap(()=>{
        this._refreshNedded$.next();})
    );
  }

  start() {
    return this.http.get<void>(this.startUrl);
  }

  restart() {
    return this.http.get<void>(this.restartUrl);
  }
}
