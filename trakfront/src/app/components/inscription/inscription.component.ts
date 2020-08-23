import { Component, OnInit, NgZone } from '@angular/core';
import { User } from '../../models/user';
import { Apollo } from 'apollo-angular'
import { GetUsersGQL, CreateUserGQL, CreateUserDocument } from '../../services/graphql.service'
import { GetUsersQuery, CreateUserQuery, UpdateUserQuery, DeleteUserQuery } from '../../graphql/queries'
import { Observable } from 'rxjs'
import { Trak } from '../../models/trak'

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {

  public users = [];
  private user: User;
  private loading = false;
  private createUserGQL: CreateUserGQL;
  private apollo: Apollo;
  private data: Observable<any>;
  private traks: Trak[];




  
  constructor(private ngZone: NgZone, private readonly getUsersGQL: GetUsersGQL, createUserGQL: CreateUserGQL, apollo: Apollo) {
    this.createUserGQL = createUserGQL;
    this.apollo = apollo;

  }

  selectUser(user: User) {
    this.user = user;
    console.log('user selected');
  }

  createUser() {
    console.log('creating user...');

    delete this.user['__typename']; // avoid a problem, will find a better solution

    this.apollo.mutate({
      mutation: CreateUserQuery,
      variables: { userInput: this.user}
    }).subscribe(a => {
      console.log('user created');
    });

  } 

  updateUser() {

    if(!this.user) {
      alert('select user');
      return;
    }

    delete this.user['__typename']; // see create user

    this.apollo.mutate({
      mutation: UpdateUserQuery,
      variables: { userInput: this.user}
    }).subscribe(u => {
      console.log(u);
    });

  }

  deleteUser() {
    let id = this.user.id;
    if(!this.user.id) {
      alert('select user');
      return;
    }

    this.apollo.mutate({
      mutation: DeleteUserQuery,
      variables: { id: this.user.id}
    }).subscribe(u => {
      let idx = this.users.findIndex(x => x.id == id);
      this.users.splice(idx+1,1);
      if(this.users.length > 0)
        this.user = this.users[0];

      console.log(u);
    });

  }


  ngOnInit(): void {
    this.user = new User();
    this.apollo.watchQuery({query: GetUsersQuery}).valueChanges.subscribe( ({data}) => {
      this.users = data['getUsers'];
    })
  }

}
