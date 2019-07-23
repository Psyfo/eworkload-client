import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
    providedIn: 'root'
})
export class ValidationService {
    constructor() {}

    StaffNumberValidator(
        control: AbstractControl
    ): { [key: string]: boolean } | null {
        const regEx: RegExp = /[0-9]{8}\w/;
        const data = control.value;
        const test = regEx.test(data);

        if (test) {
            return { staffNumber: true };
        }
        return null;
    }
}
