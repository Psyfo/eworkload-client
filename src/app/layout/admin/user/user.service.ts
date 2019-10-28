import { File, UsersByPositionGQL } from './../../../shared/generated/output';
import { SelectItem } from 'primeng/components/common/selectitem';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import {
    AddUserGQL,
    ChangePasswordGQL,
    DeleteUserGQL,
    EditUserGQL,
    User,
    UserGQL,
    UserInput,
    UsersGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    user: User;
    users: User[];
    public nationalities: SelectItem[] = [
        { label: 'Black', value: 'Black' },
        { label: 'Coloured', value: 'Coloured' },
        { label: 'Indian', value: 'Indian' },
        { label: 'White', value: 'White' }
    ];
    public genders: SelectItem[] = [
        { label: 'Male', value: 'Male' },
        { label: 'Female', value: 'Female' }
    ];
    public workFocuses: SelectItem[] = [
        { label: 'Teaching', value: 'Teaching' },
        { label: 'Research', value: 'Research' },
        { label: 'Balanced', value: 'Balanced' }
    ];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private http: HttpClient,
        private userGql: UserGQL,
        private usersGql: UsersGQL,
        private usersByPositionGql: UsersByPositionGQL,
        private addUserGql: AddUserGQL,
        private editUserGql: EditUserGQL,
        private deleteUserGql: DeleteUserGQL,
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

    usersByPosition() {
        return this.usersByPositionGql
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

    deleteUser(user: UserInput) {
        return this.deleteUserGql.mutate({ user: user }).pipe(
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

    getProfilePicture(imageUrl: string): Observable<Blob> {
        return this.http.get(imageUrl, { responseType: 'blob' });
    }
}
