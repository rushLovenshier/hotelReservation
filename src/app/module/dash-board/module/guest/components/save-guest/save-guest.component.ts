import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../../core/service/guest.service";
import GuestDTO from "../../../../../../core/model/GuestDTO";

@Component({
  selector: 'app-save-guest',
  templateUrl: './save-guest.component.html',
  styleUrls: ['./save-guest.component.scss']
})
export class SaveGuestComponent implements OnInit {
  saveGuestForm = new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
  })

  constructor(private service: GuestService) { }

  ngOnInit(): void {
  }

  saveData() {
    let dto = new GuestDTO(
      this.saveGuestForm.get('id')?.value,
      this.saveGuestForm.get('name')?.value,
      this.saveGuestForm.get('nic')?.value,
      this.saveGuestForm.get('email')?.value,
    )
    this.service.saveGuest(dto).subscribe(response=>{
      alert(response.message);
    },error=>{
      console.log(error);
    })

  }
}
