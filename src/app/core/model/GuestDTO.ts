export default class GuestDTO{
  private _id:string;
  private _name:string;
  private _nic:number;
  private _email:string;


  constructor(id: string, name: string, nic: number, email: string) {
    this._id = id;
    this._name = name;
    this._nic = nic;
    this._email = email;
  }


  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get nic(): number {
    return this._nic;
  }

  set nic(value: number) {
    this._nic = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }
}
