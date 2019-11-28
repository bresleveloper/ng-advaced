import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from './module/mat.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChcolateComponent } from './comps/routing/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/routing/ice-cream/ice-cream.component';
import { JsonAppUserComponent } from './comps/routing/json-app-user/json-app-user.component';
import { DataTitleComponent } from './comps/routing/data-title/data-title.component';
import { LoginComponent } from './comps/routing/login/login.component';
import { PizzaMenuComponent } from './comps/routing/pizza-menu/pizza-menu.component';
import { PizzaMuzarellaComponent } from './comps/routing/pizza-muzarella/pizza-muzarella.component';
import { PizzaMushrommsComponent } from './comps/routing/pizza-mushromms/pizza-mushromms.component';
import { PizzaGreenComponent } from './comps/routing/pizza-green/pizza-green.component';
import { TestCompsComponent } from './comps/mat/test-comps/test-comps.component';
import { SchFormComponent } from './comps/mat/sch-form/sch-form.component';
import { SchDashboard2Component } from './comps/mat/sch-dashboard2/sch-dashboard2.component';
import { MyPipePipe } from './comps/dirs/my-pipe.pipe';
import { PipeExampleComponent } from './comps/dirs/pipe-example/pipe-example.component';
import { YearToAgePipe } from './comps/dirs/year-to-age.pipe';
import { HighlightDirective } from './comps/dirs/highlight.directive';


@NgModule({
  declarations: [
    AppComponent,
    ChcolateComponent,
    IceCreamComponent,
    JsonAppUserComponent,
    DataTitleComponent,
    LoginComponent,
    PizzaMenuComponent,
    PizzaMuzarellaComponent,
    PizzaMushrommsComponent,
    PizzaGreenComponent,
    TestCompsComponent,
    SchFormComponent,
    SchDashboard2Component,
    MyPipePipe,
    PipeExampleComponent,
    YearToAgePipe,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatModule,
    ReactiveFormsModule,
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
