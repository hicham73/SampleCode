import { Component, OnInit } from '@angular/core';
// import { User } from '../../models/user'

@Component({
  selector: 'app-transporteur',
  templateUrl: './transporteur.component.html',
  styleUrls: ['./transporteur.component.css']
})
export class TransporteurComponent implements OnInit {

  // private user: User;
  // private users: User[];

  name = 'Angular';
  imageObject = [
    {
      image: '../../../assets/img/camion1.jpg',
      thumbImage: '../../../assets/img/camion1.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion2.jpg',
      thumbImage: '../../../assets/img/camion2.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion3.jpg',
      thumbImage: '../../../assets/img/camion3.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion4.jpg',
      thumbImage: '../../../assets/img/camion4.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion5.jpg',
      thumbImage: '../../../assets/img/camion5.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion6.jpg',
      thumbImage: '../../../assets/img/camion6.jpg',
      title: 'type camion'
    }, 
    {
      image: '../../../assets/img/camion7.jpg',
      thumbImage: '../../../assets/img/camion7.jpg',
      title: 'type camion'
    }, 
];

  constructor() { 
    // this.user = new User();
    // this.user.id = 0;
    // this.users = [];
    // this.users.push(this.user);

    
    
  }

  ngOnInit(): void {
  }

}
