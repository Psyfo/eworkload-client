import { Injectable } from '@angular/core';


@Injectable({
    providedIn: 'root'
})
export class WorkloadService {


    constructor() {}

    // Per User Bulk Workloads
    academicAdministrationWorkload(userId: string) {
        
    }
    communityInstructionWorkload(userId: string) {
        
    }
    executiveManagementWorkload(userId: string) {
        
    }
    formalInstructionWorkload(userId: string) {
        
    }
    personnelDevelopmentWorkload(userId: string) {
        
    }
    publicServiceWorkload(userId: string) {
       
    }
    researchWorkload(userId: string) {
        
    }
    supervisionWorkload(userId: string) {
        
    }
    teachingWorkload(userId: string) {
        // const formalInstructionWorkload = this.formalInstructionWorkload(
        //     userId
        // );
        // const supervisionWorkload = this.supervisionWorkload(userId);

        // const teachingWorkload = combineLatest(
        //     formalInstructionWorkload,
        //     supervisionWorkload
        // ).pipe(
        //     map(([fi, s]) => {
        //         const teachingWorkload = {
        //             formalInstructionWorkload:
        //                 fi.data.formalInstructionWorkload,
        //             supervisionWorkload: s.data.supervisionWorkload
        //         };

        //         return teachingWorkload;
        //     })
        // );

        // return teachingWorkload;
    }
    serviceWorkload(userId: string) {
        // const aaWorkload = this.academicAdministrationWorkload(userId);
        // const ciWorkload = this.communityInstructionWorkload(userId);
        // const emWorkload = this.executiveManagementWorkload(userId);
        // const pdWorkload = this.personnelDevelopmentWorkload(userId);
        // const psWorkload = this.publicServiceWorkload(userId);

        // const serviceWorkload = combineLatest(
        //     aaWorkload,
        //     ciWorkload,
        //     emWorkload,
        //     pdWorkload,
        //     psWorkload
        // ).pipe(
        //     map(([aa, ci, em, pd, ps]) => {
        //         const serviceWorkload = {
        //             academicAdministrationWorkload:
        //                 aa.data.academicAdministrationWorkload,
        //             communityInstructionWorkload:
        //                 ci.data.communityInstructionWorkload,
        //             executiveManagementWorkload:
        //                 em.data.executiveManagementWorkload,
        //             personnelDevelopmentWorkload:
        //                 pd.data.personnelDevelopmentWorkload,
        //             publicServiceWorkload: ps.data.publicServiceWorkload
        //         };

        //         return serviceWorkload;
        //     })
        // );

        // return serviceWorkload;
    }
    totalWorkload(userId: string) {
       
    }
    totalWorkloadsCombined(userId: string) {
        // const aaWorkload = this.academicAdministrationWorkload(userId);
        // const ciWorkload = this.communityInstructionWorkload(userId);
        // const emWorkload = this.executiveManagementWorkload(userId);
        // const fiWorkload = this.formalInstructionWorkload(userId);
        // const pdWorkload = this.personnelDevelopmentWorkload(userId);
        // const psWorkload = this.publicServiceWorkload(userId);
        // const rWorkload = this.researchWorkload(userId);
        // const sWorkload = this.supervisionWorkload(userId);

        // const totalWorkload = combineLatest(
        //     aaWorkload,
        //     ciWorkload,
        //     emWorkload,
        //     fiWorkload,
        //     pdWorkload,
        //     psWorkload,
        //     rWorkload,
        //     sWorkload
        // ).pipe(
        //     map(([aa, ci, em, fi, pd, ps, r, s]) => {
        //         const totalWorkload = {
        //             academicAdministrationWorkload:
        //                 aa.data.academicAdministrationWorkload,
        //             communityInstructionWorkload:
        //                 ci.data.communityInstructionWorkload,
        //             executiveManagementWorkload:
        //                 em.data.executiveManagementWorkload,
        //             formalInstructionWorkload:
        //                 fi.data.formalInstructionWorkload,
        //             personnelDevelopmentWorkload:
        //                 pd.data.personnelDevelopmentWorkload,
        //             publicServiceWorkload: ps.data.publicServiceWorkload,
        //             researchWorkload: r.data.researchWorkload,
        //             supervisionWorkload: s.data.supervisionWorkload
        //         };
        //         return totalWorkload;
        //     })
        // );
    }

    // General Data
    teachingHours(userId: string) {}
       
    researchHours(userId: string) {}
       
    serviceHours(userId: string) {
       
    }
    annualHours() {
       
    }
    totalHoursPerUser(userId: string) {
        
    }
    teachingHoursPerUser(userId: string) {
        
    }
    researchHoursPerUser(userId: string) {
       
    }
    serviceHoursPerUser(userId: string) {
       
    }
    workloadSummaries() {
       
    }
}
