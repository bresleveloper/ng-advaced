import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChcolateComponent } from './comps/routing/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/routing/ice-cream/ice-cream.component';

@NgModule({
  declarations: [
    AppComponent,
    ChcolateComponent,
    IceCreamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
