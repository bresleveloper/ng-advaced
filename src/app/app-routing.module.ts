import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



  /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: '',redirectTo: '/heroes',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }*/


import { ChcolateComponent } from './comps/routing/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/routing/ice-cream/ice-cream.component';
import { JsonAppUserComponent } from './comps/routing/json-app-user/json-app-user.component';
import { DataTitleComponent } from './comps/routing/data-title/data-title.component';
import { CanActivateIceCreamService } from './services/guards/can-activate-ice-cream.service';
import { LoginComponent } from './comps/routing/login/login.component';
import { PizzaMenuComponent } from './comps/routing/pizza-menu/pizza-menu.component';
import { PizzaMuzarellaComponent } from './comps/routing/pizza-muzarella/pizza-muzarella.component';
import { PizzaMushrommsComponent } from './comps/routing/pizza-mushromms/pizza-mushromms.component';
import { PizzaGreenComponent } from './comps/routing/pizza-green/pizza-green.component';
import { TestCompsComponent } from './comps/mat/test-comps/test-comps.component';
import { SchFormComponent } from './comps/mat/sch-form/sch-form.component';
import { SchDashboard2Component } from './comps/mat/sch-dashboard2/sch-dashboard2.component';
import { PipeExampleComponent } from './comps/dirs/pipe-example/pipe-example.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'chocolate', component: ChcolateComponent },
  { 
    path: 'ice-cream', 
    component: IceCreamComponent,
    canActivate: [CanActivateIceCreamService] 
  },

  { path: 'user/:moo', component: JsonAppUserComponent },
  { 
    path: 'data-title', 
    component: DataTitleComponent,
    data: { shuki: 'Heroes List 2', cow:'moo' } 
  },

  { path: 'pizza', component: PizzaMenuComponent,
    children: [
      { path: '', redirectTo: 'muzzarela', pathMatch: 'full' },
      { path: 'muzzarela', component: PizzaMuzarellaComponent },
      { path: 'shrooms', component: PizzaMushrommsComponent },
      { path: 'da-good-stuf', component: PizzaGreenComponent }
    ]
  },


  { path: 'mat-test', component: TestCompsComponent, },
  { path: 'mat-dashboard', component: SchDashboard2Component, },
  { path: 'mat-form', component: SchFormComponent, },

  { path: 'pipe', component: PipeExampleComponent, },


  //{ path: '', redirectTo: '/chocolate', pathMatch: 'full'},
  { path: '', redirectTo: '/pipe', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/chocolate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
