import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HelpDeskRoutingModule } from './help-desk-routing.module';
import { HelpDeskComponent } from './help-desk.component';


@NgModule({
  declarations: [
    HelpDeskComponent
  ],
  imports: [
    CommonModule,
    HelpDeskRoutingModule
  ]
})
export class HelpDeskModule { }
