import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {RegistrationService} from "../../../../../../core/service/registration.service";

@Component({
  selector: 'app-search-registration',
  templateUrl: './search-registration.component.html',
  styleUrls: ['./search-registration.component.scss']
})
export class SearchRegistrationComponent implements OnInit {
  searchRegistrationForm= new FormGroup({
    nic: new FormControl('', Validators.required)
  })
  selectedGuest: any = null;

  constructor(private service: RegistrationService) { }

  ngOnInit(): void {
  }

  searchData() {
    this.service.searchRegistration(this.searchRegistrationForm.get('nic')?.value).subscribe(response=>{
      this.selectedGuest = response.data;
    }, error=>{
      console.log(error);
      alert('No Registration Found! Try Again!');
    })
  }
}
