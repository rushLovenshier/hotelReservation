export default class RegistrationDTO {
  private _nic: string;
  private _name: string;
  private _id: string;
  private _time: string;


  constructor(nic: string, name: string, id: string, time: string) {
    this._nic = nic;
    this._name = name;
    this._id = id;
    this._time = time;
  }

  get time(): string {
    return this._time;
  }

  set time(value: string) {
    this._time = value;
  }

  get nic(): string {
    return this._nic;
  }

  set nic(value: string) {
    this._nic = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }
}
