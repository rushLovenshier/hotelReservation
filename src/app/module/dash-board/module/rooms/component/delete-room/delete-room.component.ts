import { Component, OnInit } from '@angular/core';
import {RoomService} from "../../../../../../core/service/room.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.scss']
})
export class DeleteRoomComponent implements OnInit {
  deleteRoomForm = new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private service: RoomService) { }

  ngOnInit(): void {
  }

  deleteData() {
    this.service.deleteRoom(this.deleteRoomForm.get('id')?.value).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('No Guest found!');
    })
  }
}
