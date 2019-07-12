import { ChangePasswordGQL } from './../generated/output';
import gql from 'graphql-tag';
import { Apollo } from 'apollo-angular';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import {
    UserGQL,
    UsersGQL,
    AddUserGQL,
    EditUserGQL
} from '../generated/output';
import { User, UserInput } from '../models';
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
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private userGql: UserGQL,
        private usersGql: UsersGQL,
        private addUserGql: AddUserGQL,
        private editUserGql: EditUserGQL,
        private changePasswordGql: ChangePasswordGQL
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
        return this.userGql
            .watch(
                { userId: userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    currentUser() {
        const authData = JSON.parse(localStorage.getItem('authData'));

        return this.userGql
            .watch(
                { userId: authData.userId },
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getUsers() {
        return this.usersGql
            .watch(
                {},
                {
                    pollInterval: 2000
                }
            )
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    addUser(user: UserInput) {
        return this.addUserGql.mutate({ user: user }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editUser(user: UserInput) {
        return this.editUserGql.mutate({ user: user }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    changePassword(userId: string, oldPassword: string, newPassword: string) {
        return this.changePasswordGql
            .mutate({
                userId: userId,
                oldPassword: oldPassword,
                newPassword: newPassword
            })
            .pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }
}
