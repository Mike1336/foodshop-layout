import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodmenuComponent } from './foodmenu.component';
import { CategoryContentComponent } from './category-content/components/category-content.component';
import { CategorySelectorComponent } from './category-selector/components/category-selector.component';


@NgModule({
  declarations: [
    FoodmenuComponent,
    CategoryContentComponent,
    CategorySelectorComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    FoodmenuComponent,
  ]
})
export class FoodmenuModule { }
