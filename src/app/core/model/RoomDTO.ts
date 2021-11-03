export default class RoomDTO {
  private _id: string;
  private _availability: string;
  private _time: string;

  constructor(id: string, availability: string, time:  string) {
    this._id = id;
    this._availability = availability;
    this._time = time;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }


  get availability(): string {
    return this._availability;
  }

  set availability(value: string) {
    this._availability = value;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }
}
