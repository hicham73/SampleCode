/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { UserInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: updateUser
// ====================================================

export interface updateUser_updateUser {
  id: number;
  nom: string | null;
}

export interface updateUser {
  updateUser: updateUser_updateUser;
}

export interface updateUserVariables {
  userInput: UserInput;
}
