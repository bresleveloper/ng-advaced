import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {
  constructor(
    public activatedRoute:ActivatedRoute,
    public router:Router
    ) { }

  ngOnInit() {
    console.log('activatedRoute', this.activatedRoute);
    console.log('router', this.router);
  }

}
