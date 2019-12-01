import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css']
})
export class SimpleComponent implements OnInit {

  name = new FormControl('');
  phone = new FormControl('');
  
  newLeads:{}[] = []

  constructor() { }

  ngOnInit() {
  }

  addLead(){
    this.newLeads.push({
      name:this.name.value, 
      phone:this.phone.value, 
    })
  }



  /******* */
  sheep = new FormControl('');
  DefaultSheepName(){
    this.sheep.setValue('moo')
  }

}
