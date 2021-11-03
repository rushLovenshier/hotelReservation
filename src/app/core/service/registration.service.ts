import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import RegistrationDTO from "../model/RegistrationDTO";

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  url = environment.baseUrl

  constructor(private http: HttpClient) { }

  public saveRegistration(data: RegistrationDTO): Observable<any>{
    return this.http.post(this.url+'registration/saveRegistration', {
      nic: data.nic,
      name: data.name,
      id: data.id,
      time: data.time
    });
  }

  public deleteRegistration(nic: string): Observable<any> {
    return this.http.delete(this.url+'registration/deleteRegistration', {
      headers: {nic}
    });
  }

  public updateRegistration(data: RegistrationDTO): Observable<any>{
    return this.http.put(this.url+'registration/updateRegistration', {
      nic: data.nic,
      name: data.name,
      id: data.id,
      time: data.time
    });
  }

  public searchRegistration(nic: string): Observable<any>{
    return this.http.get(this.url+'registration/searchRegistration', {
      headers: {nic}
    });
  }

  public getAllRegistrations(): Observable<any>{
    return this.http.get(this.url+'Registration/getAllRegistrations')
  }
}
