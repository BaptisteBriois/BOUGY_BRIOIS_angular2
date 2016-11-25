import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../database.service';

@Component({
  selector: 'abbb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  providers:[DatabaseService]
})
export class ContactComponent implements OnInit {
  items:any[];
  constructor(private dbservice:DatabaseService){

  }

  ngOnInit(){
    this.dbservice.getData()
        .subscribe(
            (data:any) => console.log(data)
        );
  }

  onSubmit(nom:string,prenom:string,mail:string){
    this.dbservice.sendData({nom:nom,prenom:prenom,mail:mail})
        .subscribe(
            (data:any) => console.log(data)
        );
  }

  /*onGetdata(){
    this.dbservice.getMydata()
        .subscribe(

            data => {
              const array = [];
              for(let key in data){
                array.push(data[key]);
              }
              this.items=array;
            }
        );
  }*/

}
