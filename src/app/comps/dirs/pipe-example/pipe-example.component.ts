import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  constructor() { }

  ageByFn(birthYear) {
    let thisYear = new Date().getFullYear()
    return thisYear - birthYear
  }

  pupils = [
    { name : 'ariel', birthYear:1984},
    { name : 'daniel', birthYear:1986},
    { name : 'karlin', birthYear:1986},
    { name : 'karlin2', birthYear:1982},
    { name : 'natan', birthYear:1995},
  ]

}
