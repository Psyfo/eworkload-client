import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { Subject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AlertService {
    private subject = new Subject<any>();

    constructor(private router: Router) {

    }

    sendMessage(message: string, messageParams: string) {
        this.subject.next({text: message, params: messageParams});
    }

    clearMessage() {
        this.subject.next();
    }


    getMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}
