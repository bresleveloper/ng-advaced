import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-data-title',
  templateUrl: './data-title.component.html',
  styleUrls: ['./data-title.component.css']
})
export class DataTitleComponent implements OnInit {

  shukiFromRoute:string
  cowSay:string
  constructor(
    public activatedRoute:ActivatedRoute,
    public router:Router
    ) { }

  ngOnInit() {
    //this.route.p
    console.log('activatedRoute', this.activatedRoute);
    console.log('router', this.router);

    this.activatedRoute.data.subscribe(data =>{
      console.log('this.activatedRoute.data', data);
      this.shukiFromRoute = data.shuki
      this.cowSay = data.cow
    })
  }

}
