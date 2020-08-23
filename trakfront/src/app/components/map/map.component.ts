import { Component, OnInit } from '@angular/core';
// import { google } from "google-maps";

// declare var google : google;

@Component({
  selector: 'app-my-small-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MySmallMapComponent implements OnInit {

  lat = 30.573109;
  lng = -6.589843;

  public locations = [
    {lat: 33.573109, lng: -7.589843},
    {lat: 33.971588, lng: -6.849813},
    {lat: 30.427755, lng: -9.598107},
    {lat: 35.759464, lng: -5.833954},
    {lat: 31.629473, lng: -7.981084},
  ]


  
  constructor() { }

  ngOnInit(): void {

    for(var j = 1; j < 30; j++)
    {
      let rnd1 = Math.random();
      let rnd2 = Math.random();

        let lat1 = this.lat + 5 * (0.5 - rnd1);
        let lng1 = this.lng + 5 * (0.5 - rnd2);
        
        this.locations.push({lat: lat1, lng: lng1});

    }
  }

}
