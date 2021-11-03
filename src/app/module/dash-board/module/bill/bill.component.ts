import { Component, OnInit } from '@angular/core';
import {GuestService} from "../../../../core/service/guest.service";
import {RegistrationService} from "../../../../core/service/registration.service";
import {PaymentService} from "../../../../core/service/payment.service";

@Component({
  selector: 'app-bill',
  templateUrl: './bill.component.html',
  styleUrls: ['./bill.component.scss']
})
export class BillComponent implements OnInit {
  guests: any[] = []
  registrations: any[] = []
  selectedGuest: any = null;
  selectedRegistration: any = null;
  cart: any[] = [];
  totalCost= 0.0;

  constructor(private _guestService: GuestService, private _registrationService: RegistrationService, private _paymentService: PaymentService) { }

  ngOnInit(): void {
    this.loadAllGuests()
    this.loadAllRegistrations()
  }

  private loadAllGuests(){
    this._guestService.getAllGuests().subscribe(response => {
      this.guests = response.data;
      if (response.data.length > 0) {
        this.selectedGuest = response.data[0];
      }
    }, error => {
      console.log(error);
    })
  }

  private loadAllRegistrations(){
    this._registrationService.getAllRegistrations().subscribe(response => {
      this.registrations = response.data;
      if (response.data.length > 0) {
        this.selectedRegistration = response.data[0];
      }
    }, error => {
      console.log(error);
    })
  }

  selectGuest(value: string) {
    for (const temp of this.guests) {
      if (value === temp.id) {
        this.selectedGuest = temp;
        return;
      }
    }
  }

  selectRegistration(value: string) {
    for (const temp of this.registrations) {
      if (value === temp.id) {
        this.selectedRegistration = temp;
        return;
      }
    }
  }

  addToCart(value: string) {
    const selectedQTY = Number(value);
    console.log(selectedQTY * 2500);
    const total = Number(selectedQTY * 2500);
    let temp = {
      id: this.selectedRegistration?.id,
      name: this.selectedRegistration?.name,
      nic: this.selectedRegistration?.nic,
      time: this.selectedRegistration?.time,
      total: total,
    }
    this.cart.push(temp);
    this.calculateTotalCost();
  }

  deleteFromCart(num: number) {
    this.cart.splice(num, 1);
    this.calculateTotalCost();
  }

  payment() {
    this._paymentService.saveRegistration(this.selectedGuest,this.cart,this.totalCost).subscribe(response=>{
      alert(response.message);
    }, error=>{
      console.log(error);
    })
  }

  private calculateTotalCost() {
    this.totalCost = 0.0;
    for (const temp of this.cart) {
      this.totalCost += temp.total;
    }
  }
}
