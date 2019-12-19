import {Gate} from "../directions/gate";
import {Item} from "../items/item";

export class Location {
  public id: string;
  public locId: number;
  public description: string;
  public gates: Gate[] = [];
  public items: Item[] = [];

  constructor(id: string, locId: number, description: string, gates: Gate[], items: Item[]) {
    this.id = id;
    this.locId = locId;
    this.description = description;
    this.gates = gates;
    this.items = items;
  }
}
