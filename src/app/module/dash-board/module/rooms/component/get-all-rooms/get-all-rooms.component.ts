import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../../core/service/room.service";

@Component({
  selector: 'app-get-all-rooms',
  templateUrl: './get-all-rooms.component.html',
  styleUrls: ['./get-all-rooms.component.scss']
})
export class GetAllRoomsComponent implements OnInit {
  rooms: any[]=[];

  constructor(private service: RoomService) { }

  ngOnInit(): void {
    this.service.getAllRooms().subscribe(response=>{
      this.rooms = response.data;
      console.log(response.data);
    }, error=>{
      console.log(error);
    })
  }

}
