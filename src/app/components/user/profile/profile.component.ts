import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user.service.client';
import {User} from '../../../models/user.model.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  lat = -25.363;
  lng = 131.044;
  user;
  userId;
  address;
  constructor(private route: ActivatedRoute , private userService: UserService) { }

  ngOnInit() {
    this.user = new User('' , '' , '' , '' , '', '', '' );
    this.route.params.subscribe(params => { this.userId = params['userId']; });
    this.user = this.userService.findUserById(this.userId);
    this.populateCoordinates(this.user.address);
  }
  populateCoordinates(address: string) {
    this.userService.findLatLong(address)
      .subscribe(
        (data: any) => {
          this.lat = data.results[0].geometry.location.lat;
          this.lng = data.results[0].geometry.location.lng;
        },
        (error: any) => {

        }
      );
  }



}
