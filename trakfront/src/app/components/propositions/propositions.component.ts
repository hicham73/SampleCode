import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'

import { GetPropositionsDUneEnchere } from '../../graphql/queries';
import { Proposition } from '../../models/proposition';




@Component({
  selector: 'app-propositions',
  templateUrl: './propositions.component.html',
  styleUrls: ['./propositions.component.css']
})
export class PropositionsComponent implements OnInit {
  apollo: Apollo 
  propositions =[]
  proposition: Proposition




  constructor(apollo: Apollo) {
    this.apollo=apollo 

   }

  ngOnInit(): void {
    this.apollo.watchQuery({query : GetPropositionsDUneEnchere}).valueChanges.subscribe(({data}) => {
      this.propositions = data['getPropositionsDUneEnchere']
      var formatdatetime = ""
      for(var i = 0;i<this.propositions.length;i++) {
        formatdatetime = this.propositions[i]['date']
        this.propositions[i]['date'] = formatdatetime.substring(0,10) + ' ' +  formatdatetime.substring(11,19)
      }
    });
  }
}
