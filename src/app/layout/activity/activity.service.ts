import { map } from 'rxjs/operators';

import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class ActivityService {
 
    public outputTypes = [
        'Conference Proceedings',
        'Keynote Address',
        'Journal',
        'Books',
        'Chapter',
        'Patent'
    ];

    constructor(
       
    ) {}

    
}
