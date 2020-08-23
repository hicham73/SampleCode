import { User } from '../models/user'
export class Api {
    private static url  = 'http://35.230.173.163:3001/graphql';

    static async fetchQL(query, vars): Promise<any> {

        var res = await fetch(this.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables: vars,
        })
        });

        let json = await res.json();
        let data = await json.data;

        return data;

    }

    // static async createUser(query, vars): Promise<any> {

    //     var res = await fetch(this.url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Accept': 'application/json',
    //     },
    //     body: JSON.stringify({
    //         query,
    //         variables: vars,
    //     })
    //     });

    //     let json = await res.json();
    //     let data = await json.data;

    //     return data;

    // }


    static async getTrak(id): Promise<any> {
        var query = `query getTrak($id: Int!) { getTrak(id: $id) {id, name} }`;
        let data = await this.fetchQL(query, {id: 1});
        return data;
    }

    static async createUser(user: User): Promise<any> {
        var query = `mutation createUser($userInput: UserInput!) { createUser(userInput: $userInput) {id, nom} }`;
        let data = await this.fetchQL(query, {userInput: user });
        return data.createUser;
    }

    static async getUsers(): Promise<any> {
        var query = `{
            getUsers {
                id
                nom
                prenom
            }
          }`;
          var res = await fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query
            })
            });
    
            let json = await res.json();
            let data = await json.data;

            console.log(data)
    
            return data.getUsers;

    
    }



  
}
