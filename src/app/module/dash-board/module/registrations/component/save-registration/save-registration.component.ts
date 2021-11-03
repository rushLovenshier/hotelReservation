import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../../../../core/service/registration.service";
import RegistrationDTO from "../../../../../../core/model/RegistrationDTO";

@Component({
  selector: 'app-save-registration',
  templateUrl: './save-registration.component.html',
  styleUrls: ['./save-registration.component.scss']
})
export class SaveRegistrationComponent implements OnInit {
  saveRegistrationForm = new FormGroup({
    nic: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    id: new FormControl('', Validators.required),
    time: new FormControl('', Validators.required)
  })

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  saveData() {
    let dto = new RegistrationDTO(
      this.saveRegistrationForm.get('nic')?.value,
      this.saveRegistrationForm.get('name')?.value,
      this.saveRegistrationForm.get('id')?.value,
      this.saveRegistrationForm.get('time')?.value,
    )
    this.service.saveRegistration(dto).subscribe(response=>{
      alert(response.message);
    },error=>{
      console.log(error);
    })

  }
}
