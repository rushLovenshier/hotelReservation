import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../../core/service/guest.service";
import GuestDTO from "../../../../../../core/model/GuestDTO";

@Component({
  selector: 'app-update-guest',
  templateUrl: './update-guest.component.html',
  styleUrls: ['./update-guest.component.scss']
})
export class UpdateGuestComponent implements OnInit {
  updateGuestForm =  new FormGroup({
    id: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    nic: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required)
})

  constructor(private service: GuestService) { }

  ngOnInit(): void {
  }

  updateData() {
    let dto = new GuestDTO(
      this.updateGuestForm.get('id')?.value,
      this.updateGuestForm.get('name')?.value,
      this.updateGuestForm.get('nic')?.value,
      this.updateGuestForm.get('email')?.value
    )
    this.service.updateGuest(dto).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('Something went wrong! Try Again!');
    })

  }
}
