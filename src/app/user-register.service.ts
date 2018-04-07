import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { userDetails } from './user-details';

@Injectable()

export class registerService {
    constructor(private http: Http) { }
    registerUser(user: userDetails) {
        //console.log(user);
        return this.http.post('http://jsonplaceholder.typicode.com/users', user).map(
            (response) => response.json()
        );
    }
}


