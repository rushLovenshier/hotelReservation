import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import RoomDTO from "../model/RoomDTO";

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  url = environment.baseUrl

  constructor(private http: HttpClient) { }

  public saveRoom(data: RoomDTO): Observable<any>{
    return this.http.post(this.url+'room/saveRoom', {
      id: data.id,
      availability: data.availability,
      time: data.time
    });
  }

  public deleteRoom(id: string): Observable<any> {
    return this.http.delete(this.url+'room/deleteRoom', {
      headers: {id}
    });
  }

  public updateRoom(data: RoomDTO): Observable<any>{
    return this.http.put(this.url+'room/updateRoom', {
      id: data.id,
      availability: data.availability,
      time: data.time

    });
  }

  public searchRoom(id: string): Observable<any>{
    return this.http.get(this.url+'room/searchRoom', {
      headers: {id}
    });
  }

  public getAllRooms(): Observable<any>{
    return this.http.get(this.url+'room/getAllRooms')
  }
}

