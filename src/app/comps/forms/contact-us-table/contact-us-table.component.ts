import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-contact-us-table',
  templateUrl: './contact-us-table.component.html',
  styleUrls: ['./contact-us-table.component.css']
})
export class ContactUsTableComponent implements OnInit {

  constructor(public svc:ContactService) { }

  ngOnInit() {
  }

}
