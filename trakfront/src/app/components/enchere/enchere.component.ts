import { Component, OnInit } from '@angular/core';
import { Apollo } from 'apollo-angular'
import { getExpediteursEncheres } from '../../graphql/queries'
import { GetEncheresEtLeursExpediteursQuery } from '../../graphql/queries'



@Component({
  selector: 'app-enchere',
  templateUrl: './enchere.component.html',
  styleUrls: ['./enchere.component.css']
})
export class EnchereComponent implements OnInit {
  apollo: Apollo 
  encheresavecexpediteurs:string[][] ; 
  expediteursetencheres = [];
  
  constructor(apollo: Apollo) { 
    this.apollo = apollo ;
  }

  
  ngOnInit(): void {
    //this.apollo.watchQuery({query : GetEncheresEtLeursExpediteursQuery}).valueChanges.subscribe(({data}) => {
    //this.apollo.watchQuery({query : getExpediteursEncheres}).valueChanges.subscribe(({data}) => {
      this.apollo.watchQuery({query : getExpediteursEncheres}).valueChanges.subscribe(({data}) => {

        //this.expediteursetencheres = data['getExpediteurs'];
      //this.expediteursetencheres = data['getExpediteursEncheres'];
      this.expediteursetencheres = data['getExpediteursEncheres']

      //console.log ('data')
      //console.log(data) 
      //console.log('array avec les données')
      //console.log(this.expediteursetencheres)
      //console.log ('array Length')
      //console.log(this.expediteursetencheres.length)
      //console.log ('Nom0')
      //console.log(this.expediteursetencheres['nom'])

      if(this.expediteursetencheres.length) {

        this.encheresavecexpediteurs  = [];
        var j=0;
        for(var i = 0;i<this.expediteursetencheres.length;i++) { 
          for(var k = 0;k<this.expediteursetencheres[i]['encheres'].length;k++) {
              this.encheresavecexpediteurs[j] = []
              this.encheresavecexpediteurs[j]['nom'] = this.expediteursetencheres[i]['nom'] ;
              this.encheresavecexpediteurs[j]['cin'] = this.expediteursetencheres[i]['cin'] ;
    
              this.encheresavecexpediteurs[j]['villedepart'] =  this.expediteursetencheres[i]['encheres'][k]['villedepart'] ;
              this.encheresavecexpediteurs[j]['villearrivee'] =  this.expediteursetencheres[i]['encheres'][k]['villearrivee'] ;
              this.encheresavecexpediteurs[j]['marchandise'] =   this.expediteursetencheres[i]['encheres'][k]['marchandise'] ;
              this.encheresavecexpediteurs[j]['statut'] =   this.expediteursetencheres[i]['encheres'][k]['statut'] ;
              this.encheresavecexpediteurs[j]['uniteprix'] =  this.expediteursetencheres[i]['encheres'][k]['uniteprix'] ;
              this.encheresavecexpediteurs[j]['prixunitaire'] =  this.expediteursetencheres[i]['encheres'][k]['prixunitaire'] ;
              j++;
            }
  
          //}
  
        }    
  

      } else {

        
        this.encheresavecexpediteurs  = [];
        var j=0;

        for(var k = 0;k<this.expediteursetencheres['encheres'].length;k++) {
            this.encheresavecexpediteurs[j] = []
            this.encheresavecexpediteurs[j]['nom'] = this.expediteursetencheres['nom'] ;
            this.encheresavecexpediteurs[j]['cin'] = this.expediteursetencheres['cin'] ;
  
            this.encheresavecexpediteurs[j]['villedepart'] =  this.expediteursetencheres['encheres'][k]['villedepart'] ;
            this.encheresavecexpediteurs[j]['villearrivee'] =  this.expediteursetencheres['encheres'][k]['villearrivee'] ;
            this.encheresavecexpediteurs[j]['marchandise'] =   this.expediteursetencheres['encheres'][k]['marchandise'] ;
            this.encheresavecexpediteurs[j]['statut'] =   this.expediteursetencheres['encheres'][k]['statut'] ;
            this.encheresavecexpediteurs[j]['uniteprix'] =  this.expediteursetencheres['encheres'][k]['uniteprix'] ;
            this.encheresavecexpediteurs[j]['prixunitaire'] =  this.expediteursetencheres['encheres'][k]['prixunitaire'] ;
            j++;
          }
 
          
      }

     
    });

  }

}
