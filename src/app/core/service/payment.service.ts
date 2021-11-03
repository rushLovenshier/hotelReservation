import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  url = environment.baseUrl

  constructor(private http: HttpClient) { }

  public saveRegistration(guest:Object, registration: any[], total: number):Observable<any>{
    return this.http.post(this.url+'payment/savePayment',{
      guest,registration,total
    });
  }
}
