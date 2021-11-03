import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RoomService} from "../../../../../../core/service/room.service";
import RoomDTO from "../../../../../../core/model/RoomDTO";

@Component({
  selector: 'app-save-room',
  templateUrl: './save-room.component.html',
  styleUrls: ['./save-room.component.scss']
})
export class SaveRoomComponent implements OnInit {
  saveRoomForm = new FormGroup({
    id: new FormControl('', Validators.required),
    availability: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  constructor(private service: RoomService) { }

  ngOnInit(): void {
  }

  saveData() {
    let dto = new RoomDTO(
      this.saveRoomForm.get('id')?.value,
      this.saveRoomForm.get('availability')?.value,
      this.saveRoomForm.get('time')?.value
    )
    this.service.saveRoom(dto).subscribe(response=>{
      alert(response.message);
    },error=>{
      console.log(error);
      alert(error.message);
    })

  }
}
