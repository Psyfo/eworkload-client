import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';
import { User, UserGQL } from '../generated/output';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    constructor() {}

    isAuthenticated(): boolean {
        const authData = JSON.parse(localStorage.getItem('authData'));
        return authData.isLoggedIn;
    }

    currentUserId(): Observable<string> {
        const authData = JSON.parse(localStorage.getItem('authData'));

        return of(authData.userId);
    }
}
