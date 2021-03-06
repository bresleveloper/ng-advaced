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
import { RouterDaddyComponent } from './comps/routing/router-daddy/router-daddy.component';
import { SimpleComponent } from './comps/forms/simple/simple.component';
import { FormsNaviComponent } from './comps/forms/forms-navi/forms-navi.component';
import { FormGroupContactUsComponent } from './comps/forms/form-group-contact-us/form-group-contact-us.component';
import { FormGroupNestedComponent } from './comps/forms/form-group-nested/form-group-nested.component';
import { CityByCountryComponent } from './comps/forms/city-by-country/city-by-country.component';
import { FormBuilderComponent } from './comps/forms/form-builder/form-builder.component';
import { ValidatorsComponent } from './comps/forms/validators/validators.component';
import { FormArrayComponent } from './comps/forms/form-array/form-array.component';
 
const routes: Routes = [

  { path: 'router-daddy', 
    component: RouterDaddyComponent,
    children:[
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
    ]
  },

  { path: 'mat-test', 
    component: TestCompsComponent, 
    children:[
      { path: 'mat-dashboard', component: SchDashboard2Component, },
      { path: 'mat-form', component: SchFormComponent, },
    ]
  },

  { path: 'pipe', component: PipeExampleComponent, },

  { path: 'forms', component:FormsNaviComponent,
    children:[
      { path: '', redirectTo: 'simple', pathMatch: 'full' },
      { path: 'simple', component: SimpleComponent, },
      { path: 'group', component: FormGroupContactUsComponent, },
      { path: 'nested', component: FormGroupNestedComponent, },
      { path: 'selects', component: CityByCountryComponent, },
      { path: 'form-builder', component: FormBuilderComponent, },
      { path: 'Validators', component: ValidatorsComponent, },
      { path: 'form-array', component: FormArrayComponent, },

      
    ]
  },


  //{ path: '', redirectTo: '/chocolate', pathMatch: 'full'},
  { path: '', redirectTo: '/forms/simple', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
  { path: '**', redirectTo: '/chocolate', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
