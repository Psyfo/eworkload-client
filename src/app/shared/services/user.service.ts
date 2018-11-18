import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { User } from '../models';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`${environment.apiUrl}/users`);
    }

    getById(userId: number) {
        // return this.http.get(`${environment.apiUrl}/users/` + userId.toString());
        // return localStorage.getItem('currentUser');
    }

    register(user: User) {
        return this.http.post(`${environment.apiUrl}/signup`, user);
    }

    update(user: User) {
        return this.http.post(`${environment.apiUrl}/users/` + user.userId, user);
    }

    delete(userId: number) {
        return this.http.delete(`${environment.apiUrl}/users/` + userId);
    }
}
