import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashBoardRoutingModule } from './dash-board-routing.module';
import { DashBoardComponent } from './dash-board.component';
import { TopBarComponent } from './component/top-bar/top-bar.component';
import { FooterComponent } from './component/footer/footer.component';


@NgModule({
  declarations: [
    DashBoardComponent,
    TopBarComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    DashBoardRoutingModule
  ]
})
export class DashBoardModule { }
