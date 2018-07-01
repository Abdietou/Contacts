import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { Contact } from "../model/model.contact";

@Injectable()
export class ContactsService{
    constructor(public http:Http){

    }

    getContacts(motCle:string,page:number,size:number){
        return this.http.get("http://localhost:8080/chercherContacts?mc="+motCle+"&size="+size+"&page="+page)
            .map(resp=>resp.json());
    }

    saveContact(contact:Contact){
        return this.http.post("http://localhost:8080/contacts",contact)
            .map(resp=>resp.json());
    }
}