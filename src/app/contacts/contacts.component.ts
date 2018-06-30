import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-c',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {
  
  pageContacts:any;
  constructor(public http:Http,public contactservice:ContactsService) { }

  ngOnInit() {
    this.contactservice.getContacts()
      .subscribe(data=>{
        this.pageContacts=data;
      }, err=>{
        console.log(err);
      })
  }
}
