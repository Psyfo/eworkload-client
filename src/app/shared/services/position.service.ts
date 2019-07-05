import { Injectable } from '@angular/core';
import { AlertService } from './alert.service';
import { ErrorService } from './error.service';
import {
    PositionGQL,
    FacultiesGQL,
    EditPositionGQL,
    AddPositionGQL,
    DeletePositionGQL,
    PositionsGQL
} from '../generated/output';
import { map } from 'rxjs/operators';
import { PositionInput } from '../models';

@Injectable({
    providedIn: 'root'
})
export class PositionService {
    position: Position;
    positions: Position[];

    loading: boolean;
    errors: any;
    networkStatus: any;

    constructor(
        private alertService: AlertService,
        private positionGql: PositionGQL,
        private positionsGql: PositionsGQL,
        private editPositionGql: EditPositionGQL,
        private addPositionGql: AddPositionGQL,
        private deletePositionGql: DeletePositionGQL
    ) {}

    getPosition(positionId: string) {
        return this.positionGql
            .watch({ positionId: positionId })
            .valueChanges.pipe(
                map(result => {
                    this.loading = result.loading;
                    this.errors = result.errors;
                    this.networkStatus = result.networkStatus;
                    return result;
                })
            );
    }

    getPositions() {
        return this.positionsGql.watch().valueChanges.pipe(
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