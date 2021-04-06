import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { OverviewModule } from './overview/overview.module';
import { FoodmenuModule } from './foodmenu/foodmenu.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    OverviewModule,
    FoodmenuModule,
  ],
})
export class DashboardModule {}
