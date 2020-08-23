import gql from 'graphql-tag';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};




export type Expediteur = {
  __typename?: 'Expediteur';
  id: Scalars['Int'];
  prenom: Scalars['String'];
  nom: Scalars['String'];
  typecommerce: Scalars['Int'];
  nbrdepots: Scalars['Int'];
  milage?: Maybe<Scalars['DateTime']>;
  createdon?: Maybe<Scalars['DateTime']>;
  modifiedon?: Maybe<Scalars['DateTime']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  upNbrDepotsExpediteur: Expediteur;
  deleteUser: User;
  updateUser: User;
  createUser: User;

  updateEnchere: Enchere;

};








export type MutationUpNbrDepotsExpediteurArgs = {
  id: Scalars['Float'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int'];
};


export type MutationUpdateUserArgs = {
  userInput: UserInput;
};
export type MutationUpdateEnchereArgs = {
  enchereInput: EnchereInput;
};










export type MutationCreateUserArgs = {
  userInput: UserInput;
};

export type Producteur = {
  __typename?: 'Producteur';
  id: Scalars['Int'];
  prenom?: Maybe<Scalars['String']>;
  address1?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  getTrak: Trak;
  fetchTrakByName: Trak;
  fetchTraks: Array<Producteur>;
  getExpediteur: Expediteur;
  fetchExpediteurByName: Expediteur;
  fetchExpediteurs: Array<Expediteur>;
  getProducteur: Producteur;
  getUser: User;
  getUsers: Array<User>;
  fetchUserByName: User;
};


export type QueryGetTrakArgs = {
  id: Scalars['Int'];
};


export type QueryFetchTrakByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetExpediteurArgs = {
  id: Scalars['Int'];
};


export type QueryFetchExpediteurByNameArgs = {
  name: Scalars['String'];
};


export type QueryGetProducteurArgs = {
  id: Scalars['Int'];
};


export type QueryGetUserArgs = {
  id: Scalars['Int'];
};


export type QueryFetchUserByNameArgs = {
  prenom: Scalars['String'];
};





export type Trak = {
  __typename?: 'Trak';
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Float']>;
  model?: Maybe<Scalars['String']>;
  milage?: Maybe<Scalars['Float']>;
  isactive?: Maybe<Scalars['Boolean']>;
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  prenom?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  CreatedOn?: Maybe<Scalars['DateTime']>;
  ModifiedOn?: Maybe<Scalars['DateTime']>;
};

export type UserInput = {
  id: Scalars['Int'];
  username?: Maybe<Scalars['String']>;
  password: Scalars['String'];
  prenom?: Maybe<Scalars['String']>;
  nom?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type: Scalars['Int'];
  CreatedOn?: Maybe<Scalars['DateTime']>;
  ModifiedOn?: Maybe<Scalars['DateTime']>;
};

export type Enchere = {
  __typename?: 'Enchere';
  id: Scalars['Int'];
  marchandise: Scalars['String'];
  statut: Scalars['String'];
  villedepart: Scalars['String'];
  villearrivee: Scalars['String'];
  uniteprix: Scalars['String'];
  prixunitaire: Scalars['Int'];
  commentaire: Scalars['String'];
  volume: Scalars['String'];
  debutpublication: Scalars['DateTime'];
  finpublication: Scalars['DateTime'];
};

export type EnchereInput = {
  id: Scalars['Int'];
  marchandise: Scalars['String'];
  statut: Scalars['String'];
  villedepart: Scalars['String'];
  villearrivee: Scalars['String'];
  uniteprix: Scalars['String'];
  prixunitaire: Scalars['Int'];
  commentaire: Scalars['String'];
  volume: Scalars['String'];
  debutpublication: Scalars['DateTime'];
  finpublication: Scalars['DateTime'];
};







export type GetUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersQuery = (
  { __typename?: 'Query' }
  & { getUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'nom' | 'prenom' | 'email' | 'type'>
  )> }
);

export type CreateUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'nom'>
  ) }
);

export type CreateEnchereMutationVariables = Exact<{
  enchereInput: EnchereInput;
}>;


export type CreateEnchereMutation = (
  { __typename?: 'Mutation' }
  & { createEnchere: (
    { __typename?: 'Enchere' }
    & Pick<Enchere, 'id'>
  ) }
);












export type UpdateUserMutationVariables = Exact<{
  userInput: UserInput;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id' | 'nom'>
  ) }
);

export type UpdateEnchereMutationVariables = Exact<{
  userInput: EnchereInput;
}>;


export type UpdateEnchereMutation = (
  { __typename?: 'Mutation' }
  & { updateEnchere: (
    { __typename?: 'Enchere' }
    & Pick<Enchere, 'id'>
  ) }
);










export const GetUsersDocument = gql`
    query getUsers {
  getUsers {
    id
    nom
    prenom
    email
    type
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetUsersGQL extends Apollo.Query<GetUsersQuery, GetUsersQueryVariables> {
    document = GetUsersDocument;
    
  }
export const CreateUserDocument = gql`
    mutation createUser($userInput: UserInput!) {
  createUser(userInput: $userInput) {
    id
    nom
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateUserGQL extends Apollo.Mutation<CreateUserMutation, CreateUserMutationVariables> {
    document = CreateUserDocument;
    
  }




  export const CreateEnchereDocument = gql`
  mutation createEnchere($enchereInput: EnchereInput) {
    createUser(enchereInput: $enchereInput) {

      id
      statut
      villedepart
      villearrivee
      marchandise
      uniteprix
      prixunitaire
      debutpublication
      finpublication
      volume
      commentaire

    }
  }
  `;

@Injectable({
  providedIn: 'root'
})
export class CreateEnchereGQL extends Apollo.Mutation<CreateEnchereMutation, CreateEnchereMutationVariables> {
  document = CreateEnchereDocument;
  
}







export const UpdateUserDocument = gql`
    mutation updateUser($userInput: UserInput!) {
  updateUser(userInput: $userInput) {
    id
    nom
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateUserGQL extends Apollo.Mutation<UpdateUserMutation, UpdateUserMutationVariables> {
    document = UpdateUserDocument;
    
  }