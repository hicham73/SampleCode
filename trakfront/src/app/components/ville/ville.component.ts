import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { GetVillesQuery } from '../../graphql/queries'



@Component({
  selector: 'app-ville',
  templateUrl: './ville.component.html',
  styleUrls: ['./ville.component.css']
})
export class VilleComponent implements OnInit {
  apollo: Apollo 

  constructor(apollo: Apollo) { 
    this.apollo = apollo ;
  }
  
  

  ngOnInit(): void {
    this.apollo.watchQuery( { query : GetVillesQuery } ).valueChanges.subscribe((data) => {
      //data['getVilles'];
      console.log(data) ;
    });
  }

}
