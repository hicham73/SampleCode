/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: createUser
// ====================================================

export interface createUser_createUser {
  id: number;
  nom: string | null;
}

export interface createUser {
  createUser: createUser_createUser;
}

export interface createUserVariables {
  userInput: UserInput;
}
