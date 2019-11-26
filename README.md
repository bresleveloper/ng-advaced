# NgAdvanced


in this project we will learn

* routing 
* router-guard 
* material module
* directives
* pipes
* forms / reactive forms
* rxjs


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

### router guard


## material module

a big pretty module with material design components, here are installation examples
