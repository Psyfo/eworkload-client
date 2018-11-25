import { Injectable } from '@angular/core';
import { LoopBackConfig, EvidenceApi } from '../../../../sdk';
import { environment } from '../../../environments/environment';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    constructor(
        private router: Router,
        private evidenceApi: EvidenceApi
    ) {
        LoopBackConfig.setBaseURL(environment.BASE_URL);
        LoopBackConfig.setApiVersion(environment.API_VERSION);
    }

}
