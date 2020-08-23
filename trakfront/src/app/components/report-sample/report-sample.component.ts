import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-report-sample',
  templateUrl: './report-sample.component.html',
  styleUrls: ['./report-sample.component.css']
})
export class ReportSampleComponent implements OnInit {


  public voyages = [
    {id: 1, origine: 'Rabat', destination: 'Casablanca', capacite:60, heure: '12:22', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Nadour', destination: 'Housima', capacite:75, heure: '15:10', status: 'En route', prix: '50 DHs'},
    {id: 1, origine: 'Khmissat', destination: 'Rabat', capacite:70, heure: '12:22', status: 'Arrivé', prix: '60 DHs'},
    {id: 1, origine: 'Azemour', destination: 'Tafilalt', capacite:210, heure: '12:22', status: 'En route', prix: '65 DHs'},
    {id: 1, origine: 'Marrakech', destination: 'Asfi', capacite:120, heure: '12:22', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Tanger', destination: 'Nadour', capacite:50, heure: '12:22', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Rabat', destination: 'Casablanca', capacite:60, heure: '12:22', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Rabat', destination: 'Casablanca', capacite:60, heure: '12:22', status: 'Arrivé', prix: '60 DHs'},
    {id: 1, origine: 'Nadour', destination: 'Housima', capacite:75, heure: '15:10', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Khmissat', destination: 'Rabat', capacite:70, heure: '12:22', status: 'Arrivé', prix: '90 DHs'},
    {id: 1, origine: 'Azemour', destination: 'Tafilalt', capacite:210, heure: '12:22', status: 'En route', prix: '50 DHs'},
    {id: 1, origine: 'Marrakech', destination: 'Asfi', capacite:120, heure: '12:22', status: 'En route', prix: '45 DHs'},
    {id: 1, origine: 'Tanger', destination: 'Nadour', capacite:50, heure: '12:22', status: 'En route', prix: '70 DHs'},
    {id: 1, origine: 'Rabat', destination: 'Casablanca', capacite:60, heure: '12:22', status: 'En route', prix: '70 DHs'},

  ]

  constructor() { }

  ngOnInit(): void {
  }

}
