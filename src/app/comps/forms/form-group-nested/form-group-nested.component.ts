import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../forms-models/person';

@Component({
  selector: 'app-form-group-nested',
  templateUrl: './form-group-nested.component.html',
  styleUrls: ['./form-group-nested.component.css']
})
export class FormGroupNestedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  newStudentForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    year: new FormControl(''),
    address: new FormGroup({
      country: new FormControl(''),
      city: new FormControl(''),
      street: new FormControl(''),
      appartment: new FormControl(''),
      houseNumber: new FormControl('')
    })
  });

  newStudentForm_onSubmit(){
    let newStudent:Person = this.newStudentForm.value
    console.log('newStudent value', newStudent);
  }

}

