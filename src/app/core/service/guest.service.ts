import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import GuestDTO from "../model/GuestDTO";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GuestService {

  url = environment.baseUrl

  constructor(private http: HttpClient) {}

  public saveGuest(data: GuestDTO): Observable<any>{
    return this.http.post(this.url+'guest/saveGuest', {
      id: data.id,
      name: data.name,
      nic: data.nic,
      email: data.email
    });
  }

  public deleteGuest(id: string): Observable<any> {
    return this.http.delete(this.url+'guest/deleteGuest', {
      headers: {id}
    });
  }

  public updateGuest(data: GuestDTO): Observable<any>{
    return this.http.put(this.url+'guest/updateGuest', {
      id: data.id,
      name: data.name,
      nic: data.nic,
      email: data.email
    });
  }

  public searchGuest(id: string): Observable<any>{
    return this.http.get(this.url+'guest/searchGuest', {
      headers: {id}
    });
  }

  public getAllGuests(): Observable<any>{
    return this.http.get(this.url+'guest/getAllGuests')
  }
}
