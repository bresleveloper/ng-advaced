import { Injectable } from '@angular/core';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSuperGuardService {

  //read here 
  //https://stackoverflow.com/questions/43487827/how-to-apply-canactivate-guard-on-all-the-routes

  isLoggedIn:boolean = false

  constructor(private router:Router) {
    console.log('LoginSuperGuardService start');
    
    this.router.events.subscribe(routerEvent =>{
      if (routerEvent instanceof NavigationEnd ) {
        console.log('routerEvent, isLoggedIn: ', this.isLoggedIn);
        if (this.isLoggedIn == false) {
          this.router.navigateByUrl('/login')
        }
      }
      //console.log('LoginSuperGuardService routerEvent', routerEvent);
    })
  }


}
