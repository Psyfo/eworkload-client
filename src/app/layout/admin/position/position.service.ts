import { map } from 'rxjs/operators';
import {
    AddPositionGQL,
    DeletePositionGQL,
    EditPositionGQL,
    PositionGQL,
    PositionInput,
    PositionsGQL
} from 'src/app/shared/generated';

import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class PositionService {
    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private positionGql: PositionGQL,
        private positionsGql: PositionsGQL,
        private editPositionGql: EditPositionGQL,
        private addPositionGql: AddPositionGQL,
        private deletePositionGql: DeletePositionGQL
    ) {}

    position(positionId: string) {
        return this.positionGql
            .watch(
                { positionId: positionId },
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

    positions() {
        return this.positionsGql
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

    addPosition(position: PositionInput) {
        return this.addPositionGql.mutate({ position: position }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    editPosition(position: PositionInput) {
        return this.editPositionGql.mutate({ position: position }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }

    deletePosition(position: PositionInput) {
        return this.deletePositionGql.mutate({ position: position }).pipe(
            map(result => {
                this.loading = result.loading;
                this.errors = result.errors;
                this.networkStatus = result.networkStatus;
                return result;
            })
        );
    }
}
