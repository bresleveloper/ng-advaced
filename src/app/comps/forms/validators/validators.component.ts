import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Person } from '../forms-models/person';

@Component({
  selector: 'app-validators',
  templateUrl: './validators.component.html',
  styleUrls: ['./validators.component.css']
})
export class ValidatorsComponent implements OnInit {

  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  countriesAndCities = [
    { country: 'Israel', cities:[
      'Jerusalem', 'Petach Tikva', 'Zfat', 'Miron'
    ]},
    { country: 'USA', cities:[
      'Menheten', 'NY', 'Hollywood', 'LA'
    ]},
    { country: 'France', cities:[
      'Paris', 'Lion', 'Meresei', 'Niss'
    ]},
    { country: 'China', cities:[
      'ichi kidana', 'chun gan dun', 'changy', 'chan gi dang'
    ]},
  ]
  citiesByCountry=[]

  getCountries():string[]{
    return this.countriesAndCities.map(x =>x.country)
  }

  setCities(country:string):void{
    console.log('setCities', country);

    let address = this.newStudentForm.controls.address as FormGroup
    address.controls.city.setValue('')

    this.citiesByCountry = this.countriesAndCities
      .find(x => x.country == country).cities
  }

  newStudentForm = this.fb.group({
    firstName: ['', [ Validators.required ] ],
    lastName: ['', [ Validators.required ] ],
    year: ['', [ Validators.required, 
                Validators.min(1980), Validators.max(new Date().getFullYear()), ] ],
    address: this.fb.group({
      country: ['', [ Validators.required ] ],
      city: ['', [ Validators.required ] ],
      street: [''],
      appartment: [''],
      houseNumber: ['']
    })
  });


  newStudentForm_onSubmit(){
    let newStudent:Person = this.newStudentForm.value
    console.log('newStudent value', newStudent);
    console.log('newStudent form', this.newStudentForm);
  }
}
