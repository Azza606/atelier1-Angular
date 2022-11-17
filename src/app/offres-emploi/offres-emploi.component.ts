import { Component, OnInit } from '@angular/core';
import { Emploi } from '../model/article';

@Component({
  selector: 'app-offres-emploi',
  templateUrl: './offres-emploi.component.html',
  styleUrls: ['./offres-emploi.component.css']
})
export class OffresEmploiComponent implements OnInit {
  listeEmploi: Emploi []=[
    {reference:"dkjfkdj",titre:"softwareEngeer",entreprise:"tekru",etat:true},
    {reference:"hgfhgc",titre:"teamLeader",entreprise:"neoxam",etat:false},
    {reference:"jhvkh",titre:"dfdhd",entreprise:"Actia",etat:true}]
    
    somme=0;
    search=0;
  constructor() { }

  ngOnInit(): void {
  }

  calculer( ){
   for(let i in this.listeEmploi){
    if(this.listeEmploi[i].etat===false){
     this.somme++;
    }
   }
   return this.somme;
  }

 /* searchEmploi(){
    for(let ind in this.listeEmploi){
      this.listeEmploi.indexOf(Emploi).
      
    }
    
  }*/
  
}
