import { Pipe, PipeTransform } from '@angular/core';
import { WorkloadService } from '../services';
import { BaseContactGQL } from '../generated/output';
import { map } from 'rxjs/operators';

@Pipe({
    name: 'baseContact'
})
export class BaseContactPipe implements PipeTransform {
    constructor(
        private workloadService: WorkloadService,
        private baseContactGql: BaseContactGQL
    ) {}

    transform(value: any, args?: any): any {
        return this.baseContactGql
            .fetch({ activityId: value })
            .pipe(map(result => <number>(<unknown>result.data.baseContact)));
    }
}
