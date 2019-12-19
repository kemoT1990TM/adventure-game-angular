import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";

@Injectable()
export class LocationService{

  private readonly locationUrl: string;

  constructor(private http: HttpClient) {
    this.locationUrl="/api/game/location"
  }

  getLocation(){
    return this.http.get<Location>(this.locationUrl);
  }
}
