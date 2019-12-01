import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Person } from '../forms-models/person';


@Component({
  selector: 'app-city-by-country',
  templateUrl: './city-by-country.component.html',
  styleUrls: ['./city-by-country.component.css']
})
export class CityByCountryComponent implements OnInit {

  constructor() { }

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
