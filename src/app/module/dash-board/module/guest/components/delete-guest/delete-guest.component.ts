import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {GuestService} from "../../../../../../core/service/guest.service";

@Component({
  selector: 'app-delete-guest',
  templateUrl: './delete-guest.component.html',
  styleUrls: ['./delete-guest.component.scss']
})
export class DeleteGuestComponent implements OnInit {
  deleteGuestForm = new FormGroup({
    id: new FormControl('', Validators.required)
  })

  constructor(private service: GuestService) { }

  ngOnInit(): void {
  }

  deleteData() {
    this.service.deleteGuest(this.deleteGuestForm.get('id')?.value).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('No Guest found!');
    })
  }
}
