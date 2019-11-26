import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



  /*{ path: 'crisis-center', component: CrisisListComponent },
  { path: '',redirectTo: '/heroes',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }*/


import { ChcolateComponent } from './comps/routing/chcolate/chcolate.component';
import { IceCreamComponent } from './comps/routing/ice-cream/ice-cream.component';

const routes: Routes = [
  { path: 'chocolate', component: ChcolateComponent },
  { path: 'ice-cream', component: IceCreamComponent },


  { path: '', redirectTo: '/chocolate', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/chocolate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
