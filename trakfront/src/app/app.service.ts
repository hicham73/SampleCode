import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  public count = 1;

  constructor() { 
    this.count = 2;
  }
}
