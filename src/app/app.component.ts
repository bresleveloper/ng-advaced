import { Component } from '@angular/core';
import { LoginSuperGuardService } from './services/guards/login-super-guard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-advanced';

  constructor(private login:LoginSuperGuardService){
    
  }
}
