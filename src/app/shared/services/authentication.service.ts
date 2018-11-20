import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {

    constructor(private http: HttpClient) { }

    login(username: string, password: string) {

        console.log(`Request posted to api at ${environment.BASE_URL}/${environment.API_VERSION}/Lecturers/login`);

        return this.http.post<any>(`${environment.BASE_URL}/${environment.API_VERSION}/Lecturers/login`, { username: username, password: password })
        .pipe(map(
            (res: Response) => {
                res.json();
            }
        ));
            // .pipe(map(response => {
            //     // login successful if there's a jwt token in the response
            //     if (response && response.id) {
            //         // store user details and jwt token in local storage to keep user logged in between page refreshes
            //         localStorage.setItem('currentUser', JSON.stringify(response.userId));
            //         localStorage.setItem('token', response.id);
            //     }

            //     return response;
            // }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}
