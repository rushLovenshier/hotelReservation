import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../../core/service/room.service";
import RoomDTO from "../../../../../../core/model/RoomDTO";

@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.scss']
})
export class UpdateRoomComponent implements OnInit {

  updateRoomForm=  new FormGroup({
    id: new FormControl('', Validators.required),
    availability: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  constructor(private service: RoomService) { }

  ngOnInit(): void {
  }

  updateData() {
    let dto = new RoomDTO(
      this.updateRoomForm.get('id')?.value,
      this.updateRoomForm.get('availability')?.value,
      this.updateRoomForm.get('time')?.value
    )
    this.service.updateRoom(dto).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('Something went wrong! Try Again!');
    })
  }
}
