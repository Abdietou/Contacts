import { Injectable } from "@angular/core";
import { Http } from '@angular/http';

@Injectable()
export class ContactsService{
    constructor(public http:Http){

    }

    getContacts(){
        return this.http.get("http://localhost:8080/chercherContacts?mc=A&size=5&page=0")
            .map(resp=>resp.json());
    }
}