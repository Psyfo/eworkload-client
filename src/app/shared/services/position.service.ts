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

@Injectable({
    providedIn: 'root'
})
export class PositionService {
    position: Position;
    positions: Position[];

    loading: boolean;
    errors: any;

    constructor(
        private alertService: AlertService,
        private errorService: ErrorService,
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
                    if (result.errors != undefined) {
                        this.errorService.toConsole(result.errors);

                        return;
                    }
                    return result;
                })
            );
    }

    getPositions() {
        return this.positionsGql.watch().valueChanges.pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                return result;
            })
        );
    }

    addPosition(position) {
        return this.addPositionGql.mutate(position).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Position added', 'success');
                return result;
            })
        );
    }

    editPosition(position) {
        return this.editPositionGql.mutate(position).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Position edited', 'success');
                return result;
            })
        );
    }

    deletePosition(position) {
        return this.deletePositionGql.mutate(position).pipe(
            map(result => {
                this.loading = result.loading;
                this.errorService.toConsole(result.errors);
                this.alertService.sendMessage('Position deleted', 'success');
                return result;
            })
        );
    }
}
