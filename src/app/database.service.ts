import { Injectable } from '@angular/core';

import { Http, Response, Headers } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class DatabaseService {

  constructor(private http:Http) { }

  getData() {
    return this.http.get('https://bougy-briois-angular2.firebaseio.com/title.json')
        .map((response:Response)=>response.json());
  }

  sendData(user:any) {
    const body=JSON.stringify(user);
    const headers=new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post('https://bougy-briois-angular2.firebaseio.com/contact.json',body,{headers:headers})
        .map((data:Response)=>data.json());
  }

  sendDataProduit(produits:any) {
    const body=JSON.stringify(produits);
    const headers=new Headers();
    headers.append('Content-Type','application.json');
    return this.http.post('https://bougy-briois-angular2.firebaseio.com/produits.json',body,{headers:headers})
        .map((data:Response)=>data.json());
  }

  getDataProduits() {
    return this.http.get('https://bougy-briois-angular2.firebaseio.com/produits.json')
        .map((response:Response)=>response.json());
  }

  getDataContacts() {
    return this.http.get('https://bougy-briois-angular2.firebaseio.com/contact.json')
        .map((response:Response)=>response.json());
  }

}