import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../../../../core/service/registration.service";
import RegistrationDTO from "../../../../../../core/model/RegistrationDTO";

@Component({
  selector: 'app-update-registration',
  templateUrl: './update-registration.component.html',
  styleUrls: ['./update-registration.component.scss']
})
export class UpdateRegistrationComponent implements OnInit {
  updateRegistrationForm=  new FormGroup({
    nic: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  updateData() {
    let dto = new RegistrationDTO(
      this.updateRegistrationForm.get('nic')?.value,
      this.updateRegistrationForm.get('name')?.value,
      this.updateRegistrationForm.get('id')?.value,
      this.updateRegistrationForm.get('time')?.value
    )
    this.service.updateRegistration(dto).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
      alert('Something went wrong! Try Again!');
    })
  }
}
