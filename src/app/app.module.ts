import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core/core.module';
import { AppComponent } from './app.component';
import { HeaderModule } from './header/header.module';
import { NavmenuModule } from './navmenu/navmenu.module';
import { FooterModule } from './footer/footer.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    CoreModule,
    AppRoutingModule,
    HeaderModule,
    NavmenuModule,
    FooterModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
