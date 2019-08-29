import { ModuleService } from 'src/app/layout/admin/module/module.service';
import { AlertService } from 'src/app/shared/modules';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class HodService {
    constructor(
        private alertService: AlertService,
        private moduleService: ModuleService
    ) {}
}
