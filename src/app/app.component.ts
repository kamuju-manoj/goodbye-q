import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userDetails: userDetails;
  constructor() { }

    ngOnInit () {
          this.userDetails = new userDetails();
       }
}

// tslint:disable-next-line:class-name
export class userDetails {
  fname: string;
  lname: string;
  dob: string;
  gender: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  zipcode: string;
}
