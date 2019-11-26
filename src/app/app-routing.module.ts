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
  //child route!!
  //uppercase

  { path: '', redirectTo: '/chocolate', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/chocolate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
