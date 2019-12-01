import { Injectable } from '@angular/core';
import { ContactUs } from '../comps/forms/forms-models/contact-us';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  //get
  //post

  contactList:ContactUs[] = []

}
