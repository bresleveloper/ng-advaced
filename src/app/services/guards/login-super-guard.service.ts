import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginSuperGuardService {

  //read here 
  //https://stackoverflow.com/questions/43487827/how-to-apply-canactivate-guard-on-all-the-routes

  constructor(private router:Router) {
    
  }
}
