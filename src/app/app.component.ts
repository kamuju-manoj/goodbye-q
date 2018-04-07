import { Component, OnInit } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { registerService } from './user-register.service';
import { userDetails } from './user-details';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  userDetails: userDetails;
  constructor(private registerService: registerService) { }

    ngOnInit () {
          this.userDetails = new userDetails();
       }

       register() {
       // console.log(this.userDetails);
        this.registerService.registerUser(this.userDetails).subscribe(
          (data) => console.log(data)) ;
       }
}

// tslint:disable-next-line:class-name
