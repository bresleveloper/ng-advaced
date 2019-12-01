import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-example',
  templateUrl: './pipe-example.component.html',
  styleUrls: ['./pipe-example.component.css']
})
export class PipeExampleComponent {

  constructor() { }
  search:string = ''

  ageByFn(birthYear) {
    let thisYear = new Date().getFullYear()
    return thisYear - birthYear
  }

  pupils = [
    { name : 'rabi israel besht', birthYear:1784},
    { name : 'rabi nachman me uman', birthYear:1884},
    { name : 'admor karlin aharon the great', birthYear:1854},
    { name : 'stam litvak', birthYear:2004},
    { name : 'ariel', birthYear:1984},
    { name : 'daniel', birthYear:1986},
    { name : 'karlin', birthYear:1986},
    { name : 'karlin2', birthYear:1982},
    { name : 'shuki', birthYear:1995},
    { name : 'moo the cow', birthYear:1975},
    { name : 'mee the sheep', birthYear:1985},
    { name : 'woof the dog', birthYear:1995},
  ]



  pupilsLocalFiltered:{}[] = this.pupils
  searchLocal(term:string):void{
    this.pupilsLocalFiltered = this.pupils.filter(
      item => item.name.includes(term)
    )
  }

}
