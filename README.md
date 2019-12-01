# NgAdvanced


in this project we will learn

* routing 
* router-guard 
* material module
* pipes
* directives
* forms / reactive forms
* rxjs
* debug angular


## more resources

* basic JS app, ajax - [travel](https://github.com/bresleveloper/db) 
* basic angular, comps, services - [zoo](https://github.com/bresleveloper/breslev-zoo), includes some problems solution, includes how to upload to GitHub Pages (GHP)
* css, css3, animations via js and css3 - [slider](https://github.com/bresleveloper/makeAslider)
* big real app without the topics above - [Jsonplaceholder-app](https://github.com/bresleveloper/Jsonplaceholder-app)

# how to

## routing

since angular 7 or 6, you just create a new project and say 'y' to routing

the results is a file names `app-routing.module.ts` near your `app.module.ts`

### default routing example
```const routes: Routes = [
  { path: 'crisis-center', component: CrisisListComponent },
  { path: 'hero/:id',      component: HeroDetailComponent },
  {
    path: 'heroes',
    component: HeroListComponent,
    data: { title: 'Heroes List' }
  },
  { path: '',redirectTo: '/heroes',pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent } //or
  { path: '**', redirectTo: '/heroes', pathMatch: 'full'},
];
```

see more in our `app-routing.module.ts`

### router guard

example and implementation in `services/guards/can-activate-ice-cream.service.ts`

#### login guard
my implementation in `services/guards/login-super-guard.service.ts`

## material module

a big pretty module with material design components, here are installation examples

* goto `https://material.angular.io/`
* click `get started`
* do install instructions `ng add @angular/material`
* choose a color theme (ng8+), y, y
* goto a component in the website, find example, click open in blitz
* copy-paste the file `material-module.ts` to a folder named `modules` (you need to create it)
* import in `app.module.ts` and use in `import`

usage: see `comps/mat` 


[schematics](https://material.angular.io/guide/schematics) examples: 
* `ng generate @angular/material:address-form comps/mat/sch-form`
* `ng generate @angular/material:dashboard comps/mat/sch-dashboard`


## pipes

`ng generate pipe ...`

see `comps/dir`

## directives
3 types of directives are:
* component directive
* structural directive
* attribute directive

`ng generate directive ...`

see `comps/dir`





## forms / reactive forms

#### each subject in its own route\component

* Form Control - `simple\simple`
* Form Group and saving - `group\form-group-contact-us`
* Nested - `nested\form-group-nested`
* Form Builder - `form-builder\form-builder`
* Validators - `Validators\Validators`
* Form Array - `form-array\form-array`

## rxjs

## debug angular





### my build

`ng build --prod --base-href "https://bresleveloper.github.io/ng-advaced/"`