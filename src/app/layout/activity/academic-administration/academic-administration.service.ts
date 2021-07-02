import { map } from 'rxjs/operators';


import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AcademicAdministrationService {

    public titles = [
        { label: 'Programme coordinator', value: '0' },
        {
            label: 'Year coordinator',
            value: '1'
        },
        { label: 'Timetabling', value: '2' },
        { label: 'Selection', value: '3' },
        { label: 'Test and Exams schedule', value: '4' },
        { label: 'Registration set up', value: '5' },
        { label: 'TLA Chairperson', value: '6' },
        { label: 'Quality rep', value: '7' },
        {
            label: 'Marketing/schools outreach',
            value: '8'
        },
        {
            label: 'Documentation/rules/handbook',
            value: '9'
        }
    ];

    constructor() {}

   
}
