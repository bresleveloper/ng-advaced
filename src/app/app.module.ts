import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChcolateComponent } from './comps/routing/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/routing/ice-cream/ice-cream.component';
import { JsonAppUserComponent } from './comps/routing/json-app-user/json-app-user.component';
import { DataTitleComponent } from './comps/routing/data-title/data-title.component';

@NgModule({
  declarations: [
    AppComponent,
    ChcolateComponent,
    IceCreamComponent,
    JsonAppUserComponent,
    DataTitleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
