export class Item{
  public id: string;
  public locId: number;
  public name: string;
  public description: string;
  public required: string;

  constructor(id: string, locId: number, name: string, description: string, required: string) {
    this.id = id;
    this.locId = locId;
    this.name = name;
    this.description = description;
    this.required = required;
  }
}
