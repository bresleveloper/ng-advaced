import { Component, OnInit } from '@angular/core';
import { LoginSuperGuardService } from 'src/app/services/guards/login-super-guard.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginSvc:LoginSuperGuardService,
    private router:Router) { }

  ngOnInit() {
    
  }

  login(){
    //ajasx and subscirbe
    this.loginSvc.isLoggedIn = true
    this.router.navigateByUrl('')
  }

}
