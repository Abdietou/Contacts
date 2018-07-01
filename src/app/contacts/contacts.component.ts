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
  motCle:string="";
  page:number=0;
  size:number=5;
  constructor(public http:Http,public contactservice:ContactsService) { }

  ngOnInit() {
   
  }

  doSearch() {
    this.contactservice.getContacts(this.motCle,this.page,this.size)
    .subscribe(data=>{
      this.pageContacts=data;
    }, err=>{
      console.log(err);
    })
  }

  chercher() {
    this.doSearch();
  }

}
