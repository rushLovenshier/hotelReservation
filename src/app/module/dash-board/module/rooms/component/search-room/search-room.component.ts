import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../../core/service/room.service";

@Component({
  selector: 'app-search-room',
  templateUrl: './search-room.component.html',
  styleUrls: ['./search-room.component.scss']
})
export class SearchRoomComponent implements OnInit {
  selectedRoom: any = null;
  searchRoomForm= new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private service: RoomService) { }

  ngOnInit(): void {
  }

  searchData() {
    this.service.searchRoom(this.searchRoomForm.get('id')?.value).subscribe(response=>{
      this.selectedRoom = response.data;
    }, error=>{
      console.log(error);
      alert('No Room Found! Try Again!');
    })
  }
}
