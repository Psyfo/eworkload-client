import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    UserGQL,
    UsersGQL,
    AddUserGQL,
    EditUserGQL
} from '../generated/output';
import { User } from '../models';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    users: User[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
        private userGql: UserGQL,
        private usersGql: UsersGQL,
        private addUserGql: AddUserGQL,
        private editUserGql: EditUserGQL
    ) {}

    isAuthenticated(): boolean {
        const authData = JSON.parse(localStorage.getItem('authData'));
        return authData.isLoggedIn;
    }

    currentUserId(): Observable<string> {
        const authData = JSON.parse(localStorage.getItem('authData'));

        return of(authData.userId);
    }

    currentUserIdStatic() {
        const authData = JSON.parse(localStorage.getItem('authData'));

        return authData.userId;
    }

    getUser(userId: string) {
        return this.userGql.watch({ userId: userId }).valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    currentUser() {
        const authData = JSON.parse(localStorage.getItem('authData'));

        return this.userGql
            .watch({ userId: authData.userId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errorService.toConsole(result.errors);
                    return result;
                })
            );
    }

    getUsers() {
        return this.usersGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    addUser(user: User) {
        return this.addUserGql.mutate(user).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    editUser(user: User) {
        return this.editUserGql.mutate(user).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }
}
