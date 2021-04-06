import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavmenuRoutingModule } from './navmenu-routing.module';
import { NavmenuComponent } from './navmenu.component';


@NgModule({
  declarations: [
    NavmenuComponent,
  ],
  imports: [
    CommonModule,
    NavmenuRoutingModule
  ],
  exports: [
    NavmenuComponent,
  ]
})
export class NavmenuModule { }
