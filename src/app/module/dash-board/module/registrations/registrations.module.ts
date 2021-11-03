import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegistrationsRoutingModule } from './registrations-routing.module';
import { RegistrationsComponent } from './registrations.component';
import { SaveRegistrationComponent } from './component/save-registration/save-registration.component';
import { UpdateRegistrationComponent } from './component/update-registration/update-registration.component';
import { DeleteRegistrationComponent } from './component/delete-registration/delete-registration.component';
import { SearchRegistrationComponent } from './component/search-registration/search-registration.component';
import { GetAllRegistrationsComponent } from './component/get-all-registrations/get-all-registrations.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatButtonModule} from "@angular/material/button";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatPaginatorModule} from "@angular/material/paginator";


@NgModule({
  declarations: [
    RegistrationsComponent,
    SaveRegistrationComponent,
    UpdateRegistrationComponent,
    DeleteRegistrationComponent,
    SearchRegistrationComponent,
    GetAllRegistrationsComponent
  ],
  imports: [
    CommonModule,
    RegistrationsRoutingModule,
    MatTabsModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule
  ]
})
export class RegistrationsModule { }
