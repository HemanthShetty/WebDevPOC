import { Injectable } from '@angular/core';
import { Http, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {User} from "../models/user.model.client";

// injecting service into module
@Injectable()

export class UserService {
  user: User = new User('', '', '', '', '', '', '' );

  constructor(private _http: Http) { }

  users = [
    {_id: '231', username: 'alice', password: 'alice', firstName : 'Alice', lastName : 'Wonder', address: '203 Hillside Street, Apartment 2, Boston,massachusetts' },
    {_id: '123', username: 'Hemanth', password: 'xx', firstName : 'Hemanth', lastName : 'Shetty', address: '203 Hillside Street, Apartment 2, Boston,massachusetts'}
  ];

  dropOffPoint= [
    {_id: '331', address: '63-83 Calumet St, Boston, MA 02120', city: 'Boston'}
  ];

  createUser(user: any) {
    user._id = 123;
    this.users.push(user);
    return user;
  }

  findUserById(userId: string) {
    console.log('Here');
    for (let x = 0; x < this.users.length; x++) {
      if (this.users[x]._id === userId) {  return this.users[x]; }
    }
  }

  findDropOffPoint(city: string) {

  }

  findLatLong(address: string) {
    return this._http.get('https://maps.googleapis.com/maps/api/geocode/json?address=' + address + '&key=' + 'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw')
      .map((res: Response) => {
          return res.json();
        }
      );
  }
}

