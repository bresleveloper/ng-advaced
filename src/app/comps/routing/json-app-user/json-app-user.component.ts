import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-json-app-user',
  templateUrl: './json-app-user.component.html',
  styleUrls: ['./json-app-user.component.css']
})
export class JsonAppUserComponent implements OnInit {
  constructor(
    public activatedRoute:ActivatedRoute,
    public router:Router,
    public http:HttpClient
    ) { }

  private api = 'https://jsonplaceholder.typicode.com/users/'
  public user:any

  ngOnInit() {
    console.log('activatedRoute', this.activatedRoute);
    console.log('router', this.router);
    
    this.activatedRoute.params.subscribe(prmz =>{
      console.log('JsonAppUserComponent ActivatedRoute params', prmz);
      let userid = prmz.moo

      this.http.get(this.api + userid)
        .subscribe(u =>{
          this.user = u
          //sendign user to bla bla
        })
    })
  }

}
