import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './../database.service';

@Component({
  selector: 'abbb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[DatabaseService]
})
export class HomeComponent implements OnInit {

  produits:any[];
  constructor(private dbservice:DatabaseService){

  }

  ngOnInit(){
    this.dbservice.getDataProduits()
        .subscribe(

            data => {
              const array = [];
              for(let key in data){
                array.push(data[key]);
              }
              this.produits=array;
            }
        );

  }

  onSubmitProduits(produit:string,lien:string,description:string){
    this.dbservice.sendDataProduit({produit:produit,lien:lien,description:description})
        .subscribe(
            (data:any) => console.log(data)
        );
  }

  /*onGetdataProduits(){
    this.dbservice.getDataProduits()
        .subscribe(

            data => {
              const array = [];
              for(let key in data){
                array.push(data[key]);
              }
              this.produits=array;
            }
        );
  }*/
}
