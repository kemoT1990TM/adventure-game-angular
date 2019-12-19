import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {Gate} from "./gate";

@Injectable()
export class GateService{

  private readonly gatesUrl: string;

  constructor(private http: HttpClient) {
    this.gatesUrl="/api/game/gates"
  }

  getGates(){
    return this.http.get<Gate[]>(this.gatesUrl)
  }

  changeLocation(gate: Gate){
    console.log(JSON.stringify(gate));
    return this.http.post("/api/game/change",gate);
  }
}
