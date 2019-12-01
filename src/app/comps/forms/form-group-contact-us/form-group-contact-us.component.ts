import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ContactUs } from '../forms-models/contact-us';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-form-group-contact-us',
  templateUrl: './form-group-contact-us.component.html',
  styleUrls: ['./form-group-contact-us.component.css']
})
export class FormGroupContactUsComponent implements OnInit {

  message:string = 'fill da formski'

  contactUsForm = new FormGroup({
    subject : new FormControl(''),
    content : new FormControl(''),
    name : new FormControl(''),
    email : new FormControl(''),
    phone : new FormControl(''),
    adrress : new FormControl(''),
    credit : new FormControl(''),
    gender : new FormControl(''),
    hasidut : new FormControl(''),
    age : new FormControl(''),
    whatsapp : new FormControl(''),
  })

  constructor(public contactUsService:ContactService) { }

  ngOnInit() {
  }

  contactUsForm_onSubmit(){
    let contactus:ContactUs = this.contactUsForm.value
    if (contactus.whatsapp) {
      this.message = 'we\'ll contact u via whatsapp'
    } else {
      this.message = 'we\'ll call u '
    }
    console.log('contactus value', contactus);

    this.contactUsService.contactList.push(contactus)
  }

}

