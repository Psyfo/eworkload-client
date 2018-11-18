import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { Activity } from '../models';

@Injectable()
export class ActivityService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<Activity[]>(`${environment.apiUrl}/activities`);
    }

    getById(activityId: number) {
        return this.http.get(`${environment.apiUrl}/activities/` + activityId);
    }

    create(activity: Activity) {
        return this.http.post(`${environment.apiUrl}/activities/add`, activity);
    }

    update(activity: Activity) {
        return this.http.put(`${environment.apiUrl}/activities/` + activity.activityId, activity);
    }

    delete(activityId: string) {
        return this.http.delete(`${environment.apiUrl}/activities/` + activityId);
    }
}
