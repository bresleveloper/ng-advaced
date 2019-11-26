import { Injectable } from '@angular/core';
import {
  CanActivate, 
  CanActivateChild, 
  CanDeactivate,
  CanLoad
} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CanActivateIceCreamService implements CanActivate {
  
  canActivate() {
    let m = "you cant have ice cream if you dont eat ur vegtables"
    console.error(m);
    alert(m)
    //return true;
    return false;
  }

}
