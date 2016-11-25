import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../database.service';

@Component({
  selector: 'abbb-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
  providers:[DatabaseService]
})
export class ContactlistComponent implements OnInit {
  contacts:any[];
  constructor(private dbservice:DatabaseService){

  }

  ngOnInit(){
    this.dbservice.getDataContacts()
        .subscribe(

            data => {
              const array = [];
              for(let key in data){
                array.push(data[key]);
              }
              this.contacts=array;
            }
        );

  }

}
