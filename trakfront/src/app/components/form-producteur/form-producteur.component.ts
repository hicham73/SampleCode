import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Trak } from '../../models/trak'
import { Api } from '../../util/api';
import { AppService } from '../../app.service'

@Component({
  selector: 'app-form-producteur',
  templateUrl: './form-producteur.component.html',
  styleUrls: ['./form-producteur.component.css'],

})
export class FormProducteurComponent implements OnInit {
  private trak: Trak;
  private traks: Trak[];
  private name: string = 'Nancy';
  constructor(private ngZone: NgZone, private appService: AppService) {
    
    this.trak = new Trak();
    this.trak.id = ++appService.count;
    console.log('trak.id: ' + this.trak.id);
    this.trak.name = 'hello world!'
    this.trak.description = 'I am here for the first time';

    this.traks = []; //new Array<Trak>(); 
    let t = new Trak();
    this.traks.push(t)
    this.traks.push(t)
    this.traks.push(t)
    this.traks.push(t)
    this.traks.push(t)
    this.traks[0].name = "weired init"

    // Api.getTrak(1).then(function(data) {

    //   this.ngZone.run(() => {
    //     this.trak.name = data.getTrak['name'];
    //     this.trak.description = data.getTrak['name'];
    //     this.trak.id = data['id'];
    //     console.log('this.trak.description : ' + this.trak.description )
    //     console.log('setName clicked: ' + JSON.stringify(data));
    //   })
    // }.bind(this));

  }

  ngOnInit(): void {

  }

  setName(): void {
    
  }

}
