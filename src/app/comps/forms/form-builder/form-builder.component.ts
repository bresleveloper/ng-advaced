import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Person } from '../forms-models/person';

@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {

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

  //newStudentForm = new FormGroup({
  newStudentForm = this.fb.group({
    //firstName: new FormControl(''),
    firstName: [''],
    lastName: [''],
    year: [''],
    address: this.fb.group({
      country: [''],
      city: [''],
      street: [''],
      appartment: [''],
      houseNumber: [''],
    })
  });

  newStudentForm_onSubmit(){
    let newStudent:Person = this.newStudentForm.value
    console.log('newStudent value', newStudent);
  }
}
