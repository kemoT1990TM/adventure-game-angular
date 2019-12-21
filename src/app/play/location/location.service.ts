import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {catchError, map} from 'rxjs/operators';
import {throwError} from "rxjs";
import {Gate} from "./gate";

@Injectable()
export class LocationService {

  private readonly locationUrl: string;
  private readonly gatesUrl: string;

  constructor(private http: HttpClient) {
    this.locationUrl = "/api/game/location";
    this.gatesUrl = "/api/game/gates";
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

  changeLocation(gate: Gate){
    console.log(JSON.stringify(gate));
    return this.http.post("/api/game/change",gate);
  }
}
