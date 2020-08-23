import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-bar-chart',
  templateUrl: './chart-bar.component.html',
  styleUrls: ['./chart-bar.component.css']
})
export class MyBarChartComponent implements OnInit {

  public barChartOptions = {
    scaleShowVerticalLines : false,
    responsive: true
  };

  public barChartLabels = ['2006','2007','2008','2009','2010','2011'];

  public barChartType = 'bar';
  public barChartLegend = true;
  public barChartData = [
    {data: [65,59,78,65,99,11,22,66], label: 'Series A'},
    {data: [88,55,74,65,66,33,65,56], label: 'Series B'}
  ]
  

  constructor() { }

  ngOnInit(): void {
  }

}
