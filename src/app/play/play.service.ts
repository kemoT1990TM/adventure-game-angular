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
  private _refreshNedded$ = new Subject<void>();

  get refreshNedded$(){
    return this._refreshNedded$;
  }

  constructor(private http: HttpClient) {
    this.locationUrl = "/api/game/location";
    this.gatesUrl = "/api/game/gates";
    this.itemsUrl = "/api/game/items";
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

  changeLocation(gate: Gate){
    return this.http.post("/api/game/change",gate).pipe(
      tap(()=>{
      this._refreshNedded$.next();})
    );
  }

  takeItem(item: Item){
    console.log(JSON.stringify(item));
    return this.http.post("/api/game/take",item).pipe(
      tap(()=>{
        this._refreshNedded$.next();})
    );
  }
}
