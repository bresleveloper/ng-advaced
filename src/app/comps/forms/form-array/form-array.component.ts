import { Component, OnInit } from '@angular/core';
import { Person } from '../forms-models/person';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-form-array',
  templateUrl: './form-array.component.html',
  styleUrls: ['./form-array.component.css']
})
export class FormArrayComponent implements OnInit {

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

    //let address = this.newStudentForm.controls.address as FormGroup
    //address.controls.city.setValue('')

    this.citiesByCountry = this.countriesAndCities
      .find(x => x.country == country).cities
  }

  //newStudentForm = new FormGroup({
  newStudentForm = this.fb.group({
    //firstName: new FormControl(''),
    firstName: [''],
    lastName: [''],
    year: [''],
    addressArr: this.fb.array([
      this.createAddress()
    ])
  });

  newStudentForm_onSubmit(){
    let newStudent:Person = this.newStudentForm.value
    console.log('newStudent value', newStudent);
  }

  createAddress(){
    let newAddrFb =  this.fb.group({
      country: [''],
      city: [''],
      street: [''],
      appartment: [''],
      houseNumber: [''],
    })

    this.LastAddressFormGroup = newAddrFb
    return newAddrFb
  }

  LastAddressFormGroup:FormGroup

  addAddress(){
    console.log('addAddress value', this.newStudentForm);
    let addresses = this.newStudentForm.get('addressArr') as FormArray;
    addresses.push(this.createAddress());
    console.log('addresses value', addresses)
    console.log('last address value', addresses.controls[addresses.length-1])

    //this.LastAddressFormGroup = addresses.length-1
    console.log('LastAddressFormGroup', this.LastAddressFormGroup)
  }

  get formAddressData() { return <FormArray>this.newStudentForm.get('addressArr'); }



}
