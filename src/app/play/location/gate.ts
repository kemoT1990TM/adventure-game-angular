export class Gate {
  public id: string;
  public locId: number;
  public direction: string;
  public destId: number;
  public required: string;
  public fullName: string;

  constructor(id: string, locId: number, direction: string, destId: number, required: string, fullName: string) {
    this.id = id;
    this.locId = locId;
    this.direction = direction;
    this.destId = destId;
    this.required = required;
    this.fullName = fullName;
  }
}
