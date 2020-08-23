import { Component, OnInit,NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular'
import { CreateEnchereGQL, CreateEnchereDocument } from '../../services/graphql.service'
import { GetEncheresDUnExpediteur, UpdateEnchereMutation, CreateEnchereMutation } from '../../graphql/queries'
import { Enchere } from '../../models/enchere';

import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';


@Component({
  selector: 'app-mesencheres',
  templateUrl: './mesencheres.component.html',
  styleUrls: ['./mesencheres.component.css']
})
export class MesencheresComponent implements OnInit {
  apollo: Apollo 
  //encheres:string[][] ; 
  encheres = [] ; 
  enchere: Enchere ; 
  //private data: Observable<any>;
  //private createEnchereGQL: CreateEnchereGQL;

  mesencheres$: Observable<any>;
  selectedId: number;  
  
  //constructor(private ngZone: NgZone, createEnchereGQL: CreateEnchereGQL, apollo: Apollo, private route: ActivatedRoute) { 
  constructor(apollo: Apollo, private route: ActivatedRoute) {     
    this.apollo = apollo ;
    //this.createEnchereGQL = createEnchereGQL;
  }
  
  ngOnInit(): void {
    this.enchere = new Enchere();
    this.apollo.watchQuery({query : GetEncheresDUnExpediteur}).valueChanges.subscribe(({data}) => {
      this.encheres = data['getEncheresDUnExpediteur']
      for(var i = 0;i<this.encheres.length;i++) {
        var longuedate = ""  + this.encheres[i]['debutpublication'] ;
        this.encheres[i]['debutpublication'] = longuedate.substring(0,10)
        longuedate = ""  + this.encheres[i]['finpublication'] ;
        this.encheres[i]['finpublication'] = longuedate.substring(0,10);
        this.encheres[i]['nombrepropositions'] = this.encheres[i]['propositions'].length;
        if(this.encheres[i]['propositions'].length>0) {
          console.log('il y a ' + this.encheres[i]['propositions'].length  + ' propositions pour l enchere ' + i )
        }

      }
      console.log(this.encheres);

    });
  }

  selectEnchere(uneenchere: Enchere) {
    this.enchere = uneenchere;
    console.log(`j ai pris une enchere. Sa marchandise => ${uneenchere.marchandise}`);
  }

  createEnchere() {
    console.log('je crée une nouvelle enchère...');

    delete this.enchere['__typename']; // avoid a problem, will find a better solution

    this.enchere.id = Number(this.enchere.id)
    this.enchere.prixunitaire = Number(this.enchere.prixunitaire)
    //this.enchere.expediteurid = 1

    this.apollo.mutate({
      mutation: CreateEnchereMutation,
      variables: { enchereInput: this.enchere}
    }).subscribe(enc => {
      console.log('j ai initié et reçu le retour d une nouvelle enchère');
    });

  }

  updateEnchere() {
    console.log('je rentre dans update...');

    if(!this.enchere) {
      alert(`Vous devez sélectionner lenchère à modifier`);
      return;
    }

    delete this.enchere['__typename']; // see create user

    this.apollo.mutate({
      mutation: UpdateEnchereMutation,
      variables: { enchereInput: this.enchere}
    }).subscribe(enc => {
      console.log(enc);
    });

  }

}
