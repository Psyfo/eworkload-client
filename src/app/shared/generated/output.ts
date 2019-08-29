import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";
export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /** The `Upload` scalar type represents a file upload. */
    Upload: any;
};

export type AcademicAdministrationActivity = Activity & {
    __typename?: "AcademicAdministrationActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type AcademicAdministrationActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type AcademicAdministrationWorkloadPerActivity = {
    __typename?: "AcademicAdministrationWorkloadPerActivity";
    academicAdministrationTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    academicAdministrationPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    academicAdministrationPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
};

export type AcademicAdministrationWorkloadPerUser = {
    __typename?: "AcademicAdministrationWorkloadPerUser";
    academicAdministrationWorkloadData?: Maybe<
        Array<Maybe<AcademicAdministrationWorkloadPerActivity>>
    >;
    academicAdministrationGlobalTarrif?: Maybe<Scalars["Int"]>;
    academicAdministrationTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    academicAdministrationPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    academicAdministrationPercentageOfAnnualHoursPerUser?: Maybe<
        Scalars["Int"]
    >;
};

export type Activity = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
};

export type AuthData = {
    __typename?: "AuthData";
    userId: Scalars["String"];
    token: Scalars["String"];
    tokenExpiration: Scalars["Int"];
};

export type Block = {
    __typename?: "Block";
    blockId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type BlockInput = {
    blockId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}

export type CommunityInstructionActivity = Activity & {
    __typename?: "CommunityInstructionActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type CommunityInstructionActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type CommunityInstructionWorkloadPerActivity = {
    __typename?: "CommunityInstructionWorkloadPerActivity";
    communityInstructionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    communityInstructionPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    communityInstructionPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
};

export type CommunityInstructionWorkloadPerUser = {
    __typename?: "CommunityInstructionWorkloadPerUser";
    communityInstructionWorkloadData?: Maybe<
        Array<Maybe<CommunityInstructionWorkloadPerActivity>>
    >;
    communityInstructionGlobalTarrif?: Maybe<Scalars["Int"]>;
    communityInstructionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    communityInstructionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    communityInstructionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type Department = {
    __typename?: "Department";
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
    faculty?: Maybe<Faculty>;
};

export type DepartmentInput = {
    departmentId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    facultyId?: Maybe<Scalars["String"]>;
};

export type Discipline = {
    __typename?: "Discipline";
    disciplineId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type DisciplineInput = {
    disciplineId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type Duty = {
    __typename?: "Duty";
    dutyId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type DutyInput = {
    dutyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type Enrollment = {
    __typename?: "Enrollment";
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    qualification?: Maybe<Qualification>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type EnrollmentInput = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type Event = {
    __typename?: "Event";
    eventId: Scalars["String"];
    description: Scalars["String"];
};

export type Evidence = {
    __typename?: "Evidence";
    evidenceId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type EvidenceInput = {
    evidenceId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    url?: Maybe<Scalars["String"]>;
};

export type ExecutiveManagementActivity = Activity & {
    __typename?: "ExecutiveManagementActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type ExecutiveManagementActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type ExecutiveManagementWorkloadPerActivity = {
    __typename?: "ExecutiveManagementWorkloadPerActivity";
    executiveManagementTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
};

export type ExecutiveManagementWorkloadPerUser = {
    __typename?: "ExecutiveManagementWorkloadPerUser";
    executiveManagementWorkloadData?: Maybe<
        Array<Maybe<ExecutiveManagementWorkloadPerActivity>>
    >;
    executiveManagementGlobalTarrif?: Maybe<Scalars["Int"]>;
    executiveManagementTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type ExistData = {
    __typename?: "ExistData";
    exists?: Maybe<Scalars["Boolean"]>;
};

export type Faculty = {
    __typename?: "Faculty";
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type FacultyInput = {
    facultyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
};

export type File = {
    __typename?: "File";
    id: Scalars["ID"];
    path: Scalars["String"];
    filename: Scalars["String"];
    mimetype: Scalars["String"];
};

export type FormalInstructionActivity = Activity & {
    __typename?: "FormalInstructionActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    moduleId?: Maybe<Scalars["String"]>;
    module?: Maybe<Module>;
    blockId?: Maybe<Scalars["String"]>;
    block?: Maybe<Block>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    offeringType?: Maybe<OfferingType>;
    qualificationId?: Maybe<Scalars["String"]>;
    qualification?: Maybe<Qualification>;
};

export type FormalInstructionActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionWorkloadPerActivity = {
    __typename?: "FormalInstructionWorkloadPerActivity";
    formalInstructionActivity?: Maybe<FormalInstructionActivity>;
    formalInstructionStudentsEnrolled?: Maybe<Scalars["Int"]>;
    formalInstructionBaseContactHours?: Maybe<Scalars["Int"]>;
    formalInstructionCoordinationHours?: Maybe<Scalars["Int"]>;
    formalInstructionStudentSupportHours?: Maybe<Scalars["Int"]>;
    formalInstructionPreparationTimeHours?: Maybe<Scalars["Int"]>;
    formalInstructionAssessmentSettingHours?: Maybe<Scalars["Int"]>;
    formalInstructionExamMarkingHours?: Maybe<Scalars["Int"]>;
    formalInstructionCourseworkMarkingHours?: Maybe<Scalars["Int"]>;
    formalInstructionFeedbackHours?: Maybe<Scalars["Int"]>;
    formalInstructionFormativeAssessmentHours?: Maybe<Scalars["Int"]>;
    formalInstructionModerationHours?: Maybe<Scalars["Int"]>;
    formalInstructionOtherHoursPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
};

export type FormalInstructionWorkloadPerUser = {
    __typename?: "FormalInstructionWorkloadPerUser";
    formalInstructionWorkloadData?: Maybe<
        Array<Maybe<FormalInstructionWorkloadPerActivity>>
    >;
    formalInstructionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type Module = {
    __typename?: "Module";
    moduleId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    assessmentMethod?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    qualification?: Maybe<Qualification>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    offeringType?: Maybe<OfferingType>;
    disciplineId?: Maybe<Scalars["String"]>;
    discipline?: Maybe<Discipline>;
    venueId?: Maybe<Scalars["String"]>;
    venue?: Maybe<Venue>;
    blockId?: Maybe<Scalars["String"]>;
    block?: Maybe<Block>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    coordinatorId?: Maybe<Scalars["String"]>;
    coordinator?: Maybe<User>;
    moderatorId?: Maybe<Scalars["String"]>;
    moderator?: Maybe<User>;
    stackId?: Maybe<Scalars["String"]>;
    studyPeriod?: Maybe<Scalars["String"]>;
    groupSize?: Maybe<Scalars["Int"]>;
    lecturedBy?: Maybe<Scalars["String"]>;
    moderation?: Maybe<Scalars["String"]>;
};

export type ModuleInput = {
    moduleId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    assessmentMethod?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    venueId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    stackId?: Maybe<Scalars["String"]>;
    studyPeriod?: Maybe<Scalars["String"]>;
    groupSize?: Maybe<Scalars["Int"]>;
    lecturedBy?: Maybe<Scalars["String"]>;
    moderation?: Maybe<Scalars["String"]>;
};

export type Mutation = {
    __typename?: "Mutation";
    addBlock?: Maybe<Block>;
    editBlock?: Maybe<Block>;
    deleteBlock?: Maybe<Block>;
    addDepartment?: Maybe<Department>;
    editDepartment?: Maybe<Department>;
    deleteDepartment?: Maybe<Department>;
    addDiscipline?: Maybe<Discipline>;
    editDiscipline?: Maybe<Discipline>;
    deleteDiscipline?: Maybe<Discipline>;
    addDuty?: Maybe<Duty>;
    editDuty?: Maybe<Duty>;
    deleteDuty?: Maybe<Duty>;
    addEnrollment?: Maybe<Enrollment>;
    editEnrollment?: Maybe<Enrollment>;
    deleteEnrollment?: Maybe<Enrollment>;
    addEvent?: Maybe<Event>;
    editEvent?: Maybe<Event>;
    deleteEvent?: Maybe<Event>;
    addEvidence?: Maybe<Evidence>;
    editEvidence?: Maybe<Evidence>;
    deleteEvidence?: Maybe<Evidence>;
    addFaculty?: Maybe<Faculty>;
    editFaculty?: Maybe<Faculty>;
    deleteFaculty?: Maybe<Faculty>;
    addModule?: Maybe<Module>;
    addModules?: Maybe<Array<Maybe<Module>>>;
    editModule?: Maybe<Module>;
    deleteModule?: Maybe<Module>;
    assignUserToModule?: Maybe<Module>;
    unassignUserFromModule?: Maybe<Module>;
    assignCoordinatorToModule?: Maybe<Module>;
    unassignCoordinatorFromModule?: Maybe<Module>;
    assignModeratorToModule?: Maybe<Module>;
    unassignModeratorFromModule?: Maybe<Module>;
    unassignAllModules?: Maybe<Scalars["String"]>;
    addOfferingType?: Maybe<OfferingType>;
    editOfferingType?: Maybe<OfferingType>;
    deleteOfferingType?: Maybe<OfferingType>;
    addPosition?: Maybe<Position>;
    editPosition?: Maybe<Position>;
    deletePosition?: Maybe<Position>;
    addQualification?: Maybe<Qualification>;
    editQualification?: Maybe<Qualification>;
    deleteQualification?: Maybe<Qualification>;
    addStudent?: Maybe<Student>;
    editStudent?: Maybe<Student>;
    deleteStudent?: Maybe<Student>;
    addUser?: Maybe<User>;
    editUser?: Maybe<User>;
    deleteUser?: Maybe<User>;
    changePassword?: Maybe<User>;
    assignProfilePicture?: Maybe<User>;
    addVenue?: Maybe<Venue>;
    editVenue?: Maybe<Venue>;
    deleteVenue?: Maybe<Venue>;
    addWorkFocus?: Maybe<WorkFocus>;
    editWorkFocus?: Maybe<WorkFocus>;
    deleteWorkFocus?: Maybe<WorkFocus>;
    addAcademicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
    editAcademicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
    deleteAcademicAdministrationActivity?: Maybe<
        AcademicAdministrationActivity
    >;
    addCommunityInstructionActivity?: Maybe<CommunityInstructionActivity>;
    editCommunityInstructionActivity?: Maybe<CommunityInstructionActivity>;
    deleteCommunityInstructionActivity?: Maybe<CommunityInstructionActivity>;
    addExecutiveManagementActivity?: Maybe<ExecutiveManagementActivity>;
    editExecutiveManagementActivity?: Maybe<ExecutiveManagementActivity>;
    deleteExecutiveManagementActivity?: Maybe<ExecutiveManagementActivity>;
    addFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    editFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    deleteFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    addSupervisionActivity?: Maybe<SupervisionActivity>;
    editSupervisionActivity?: Maybe<SupervisionActivity>;
    deleteSupervisionActivity?: Maybe<SupervisionActivity>;
    addPersonnelDevelopmentActivity?: Maybe<PersonnelDevelopmentActivity>;
    editPersonnelDevelopmentActivity?: Maybe<PersonnelDevelopmentActivity>;
    deletePersonnelDevelopmentActivity?: Maybe<PersonnelDevelopmentActivity>;
    addPublicServiceActivity?: Maybe<PublicServiceActivity>;
    editPublicServiceActivity?: Maybe<PublicServiceActivity>;
    deletePublicServiceActivity?: Maybe<PublicServiceActivity>;
    addResearchActivity?: Maybe<ResearchActivity>;
    editResearchActivity?: Maybe<ResearchActivity>;
    deleteResearchActivity?: Maybe<ResearchActivity>;
    singleUpload: File;
    multipleUpload: Array<File>;
    uploadProfilePicture: File;
    uploadEvidence: File;
    uploadAcademicAdministrationEvidence: File;
    uploadResearchEvidence: File;
};

export type MutationAddBlockArgs = {
    block?: Maybe<BlockInput>;
};

export type MutationEditBlockArgs = {
    block?: Maybe<BlockInput>;
};

export type MutationDeleteBlockArgs = {
    block?: Maybe<BlockInput>;
};

export type MutationAddDepartmentArgs = {
    department?: Maybe<DepartmentInput>;
};

export type MutationEditDepartmentArgs = {
    department?: Maybe<DepartmentInput>;
};

export type MutationDeleteDepartmentArgs = {
    department?: Maybe<DepartmentInput>;
};

export type MutationAddDisciplineArgs = {
    discipline?: Maybe<DisciplineInput>;
};

export type MutationEditDisciplineArgs = {
    discipline?: Maybe<DisciplineInput>;
};

export type MutationDeleteDisciplineArgs = {
    discipline?: Maybe<DisciplineInput>;
};

export type MutationAddDutyArgs = {
    duty?: Maybe<DutyInput>;
};

export type MutationEditDutyArgs = {
    duty?: Maybe<DutyInput>;
};

export type MutationDeleteDutyArgs = {
    duty?: Maybe<DutyInput>;
};

export type MutationAddEnrollmentArgs = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type MutationEditEnrollmentArgs = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type MutationDeleteEnrollmentArgs = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type MutationAddEventArgs = {
    eventId: Scalars["String"];
    description: Scalars["String"];
};

export type MutationEditEventArgs = {
    eventId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteEventArgs = {
    eventId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationAddEvidenceArgs = {
    evidence?: Maybe<EvidenceInput>;
};

export type MutationEditEvidenceArgs = {
    evidence?: Maybe<EvidenceInput>;
};

export type MutationDeleteEvidenceArgs = {
    evidence?: Maybe<EvidenceInput>;
};

export type MutationAddFacultyArgs = {
    faculty?: Maybe<FacultyInput>;
};

export type MutationEditFacultyArgs = {
    faculty?: Maybe<FacultyInput>;
};

export type MutationDeleteFacultyArgs = {
    faculty?: Maybe<FacultyInput>;
};

export type MutationAddModuleArgs = {
    module?: Maybe<ModuleInput>;
};

export type MutationAddModulesArgs = {
    modules?: Maybe<Array<Maybe<ModuleInput>>>;
};

export type MutationEditModuleArgs = {
    module?: Maybe<ModuleInput>;
};

export type MutationDeleteModuleArgs = {
    module?: Maybe<ModuleInput>;
};

export type MutationAssignUserToModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
};

export type MutationUnassignUserFromModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type MutationAssignCoordinatorToModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
};

export type MutationUnassignCoordinatorFromModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type MutationAssignModeratorToModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
};

export type MutationUnassignModeratorFromModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type MutationAddOfferingTypeArgs = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type MutationEditOfferingTypeArgs = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type MutationDeleteOfferingTypeArgs = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type MutationAddPositionArgs = {
    position?: Maybe<PositionInput>;
};

export type MutationEditPositionArgs = {
    position?: Maybe<PositionInput>;
};

export type MutationDeletePositionArgs = {
    position?: Maybe<PositionInput>;
};

export type MutationAddQualificationArgs = {
    qualification?: Maybe<QualificationInput>;
};

export type MutationEditQualificationArgs = {
    qualification?: Maybe<QualificationInput>;
};

export type MutationDeleteQualificationArgs = {
    qualification?: Maybe<QualificationInput>;
};

export type MutationAddStudentArgs = {
    student?: Maybe<StudentInput>;
};

export type MutationEditStudentArgs = {
    student?: Maybe<StudentInput>;
};

export type MutationDeleteStudentArgs = {
    student?: Maybe<StudentInput>;
};

export type MutationAddUserArgs = {
    user?: Maybe<UserInput>;
};

export type MutationEditUserArgs = {
    user?: Maybe<UserInput>;
};

export type MutationDeleteUserArgs = {
    user?: Maybe<UserInput>;
};

export type MutationChangePasswordArgs = {
    userId?: Maybe<Scalars["String"]>;
    oldPassword?: Maybe<Scalars["String"]>;
    newPassword?: Maybe<Scalars["String"]>;
};

export type MutationAssignProfilePictureArgs = {
    userId?: Maybe<Scalars["String"]>;
    photoUrl?: Maybe<Scalars["String"]>;
};

export type MutationAddVenueArgs = {
    venue?: Maybe<VenueInput>;
};

export type MutationEditVenueArgs = {
    venue?: Maybe<VenueInput>;
};

export type MutationDeleteVenueArgs = {
    venue?: Maybe<VenueInput>;
};

export type MutationAddWorkFocusArgs = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type MutationEditWorkFocusArgs = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type MutationDeleteWorkFocusArgs = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type MutationAddAcademicAdministrationActivityArgs = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type MutationEditAcademicAdministrationActivityArgs = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type MutationDeleteAcademicAdministrationActivityArgs = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type MutationAddCommunityInstructionActivityArgs = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type MutationEditCommunityInstructionActivityArgs = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type MutationDeleteCommunityInstructionActivityArgs = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type MutationAddExecutiveManagementActivityArgs = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type MutationEditExecutiveManagementActivityArgs = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type MutationDeleteExecutiveManagementActivityArgs = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type MutationAddFormalInstructionActivityArgs = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type MutationEditFormalInstructionActivityArgs = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type MutationDeleteFormalInstructionActivityArgs = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type MutationAddSupervisionActivityArgs = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type MutationEditSupervisionActivityArgs = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type MutationDeleteSupervisionActivityArgs = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type MutationAddPersonnelDevelopmentActivityArgs = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type MutationEditPersonnelDevelopmentActivityArgs = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type MutationDeletePersonnelDevelopmentActivityArgs = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type MutationAddPublicServiceActivityArgs = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type MutationEditPublicServiceActivityArgs = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type MutationDeletePublicServiceActivityArgs = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type MutationAddResearchActivityArgs = {
    activity?: Maybe<ResearchActivityInput>;
};

export type MutationEditResearchActivityArgs = {
    activity?: Maybe<ResearchActivityInput>;
};

export type MutationDeleteResearchActivityArgs = {
    activity?: Maybe<ResearchActivityInput>;
};

export type MutationSingleUploadArgs = {
    file: Scalars["Upload"];
};

export type MutationMultipleUploadArgs = {
    files: Array<Scalars["Upload"]>;
};

export type MutationUploadProfilePictureArgs = {
    file: Scalars["Upload"];
    userId: Scalars["String"];
};

export type MutationUploadEvidenceArgs = {
    file: Scalars["Upload"];
    activityId: Scalars["String"];
};

export type MutationUploadAcademicAdministrationEvidenceArgs = {
    file: Scalars["Upload"];
    activityId: Scalars["String"];
};

export type MutationUploadResearchEvidenceArgs = {
    file: Scalars["Upload"];
    activityId: Scalars["String"];
};

export type OfferingType = {
    __typename?: "OfferingType";
    offeringTypeId: Scalars["String"];
    description: Scalars["String"];
};

export type OfferingTypeInput = {
    description?: Maybe<Scalars["String"]>;
};

export type PersonnelDevelopmentActivity = Activity & {
    __typename?: "PersonnelDevelopmentActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type PersonnelDevelopmentActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type PersonnelDevelopmentWorkloadPerActivity = {
    __typename?: "PersonnelDevelopmentWorkloadPerActivity";
    personnelDevelopmentTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    personnelDevelopmentPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    personnelDevelopmentPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
};

export type PersonnelDevelopmentWorkloadPerUser = {
    __typename?: "PersonnelDevelopmentWorkloadPerUser";
    personnelDevelopmentWorkloadData?: Maybe<
        Array<Maybe<PersonnelDevelopmentWorkloadPerActivity>>
    >;
    personnelDevelopmentGlobalTarrif?: Maybe<Scalars["Int"]>;
    personnelDevelopmentTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    personnelDevelopmentPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    personnelDevelopmentPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type Position = {
    __typename?: "Position";
    positionId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type PositionInput = {
    positionId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type PublicServiceActivity = Activity & {
    __typename?: "PublicServiceActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type PublicServiceActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type PublicServiceWorkloadPerActivity = {
    __typename?: "PublicServiceWorkloadPerActivity";
    publicServiceTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
};

export type PublicServiceWorkloadPerUser = {
    __typename?: "PublicServiceWorkloadPerUser";
    publicServiceWorkloadData?: Maybe<
        Array<Maybe<PublicServiceWorkloadPerActivity>>
    >;
    publicServiceGlobalTarrif?: Maybe<Scalars["Int"]>;
    publicServiceTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type Qualification = {
    __typename?: "Qualification";
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
    department?: Maybe<Department>;
};

export type QualificationInput = {
    qualificationId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
};

export type Query = {
    __typename?: "Query";
    activity?: Maybe<Activity>;
    activities?: Maybe<Array<Maybe<Activity>>>;
    activitiesByDuty?: Maybe<Array<Maybe<Activity>>>;
    activitiesByUser?: Maybe<Array<Maybe<Activity>>>;
    activitiesByUnapproved?: Maybe<Array<Maybe<Activity>>>;
    activitiesByApproved?: Maybe<Array<Maybe<Activity>>>;
    block?: Maybe<Block>;
    blocks?: Maybe<Array<Maybe<Block>>>;
    department?: Maybe<Department>;
    departments?: Maybe<Array<Maybe<Department>>>;
    discipline?: Maybe<Discipline>;
    disciplines?: Maybe<Array<Maybe<Discipline>>>;
    duty?: Maybe<Duty>;
    duties?: Maybe<Array<Maybe<Duty>>>;
    enrollment?: Maybe<Enrollment>;
    enrollments?: Maybe<Array<Maybe<Enrollment>>>;
    enrollmentsByYear?: Maybe<Array<Maybe<Enrollment>>>;
    enrollmentsByQualification?: Maybe<Array<Maybe<Enrollment>>>;
    event?: Maybe<Event>;
    events?: Maybe<Array<Maybe<Event>>>;
    evidence?: Maybe<Evidence>;
    evidences?: Maybe<Array<Maybe<Evidence>>>;
    faculty?: Maybe<Faculty>;
    faculties?: Maybe<Array<Maybe<Faculty>>>;
    module?: Maybe<Module>;
    modules?: Maybe<Array<Maybe<Module>>>;
    modulesByDiscipline?: Maybe<Array<Maybe<Module>>>;
    modulesByUnassigned?: Maybe<Array<Maybe<Module>>>;
    modulesByAssigned?: Maybe<Array<Maybe<Module>>>;
    modulesByUnassignedAndDiscipline?: Maybe<Array<Maybe<Module>>>;
    modulesByUser?: Maybe<Array<Maybe<Module>>>;
    modulesByModerator?: Maybe<Array<Maybe<Module>>>;
    modulesByCoordinator?: Maybe<Array<Maybe<Module>>>;
    modulesByStack?: Maybe<Array<Maybe<Module>>>;
    offeringType?: Maybe<OfferingType>;
    offeringTypes?: Maybe<Array<Maybe<OfferingType>>>;
    position?: Maybe<Position>;
    positions?: Maybe<Array<Maybe<Position>>>;
    qualification?: Maybe<Qualification>;
    qualifications?: Maybe<Array<Maybe<Qualification>>>;
    qualificationsNoEnrollment?: Maybe<Array<Maybe<Qualification>>>;
    student?: Maybe<Student>;
    students?: Maybe<Array<Maybe<Student>>>;
    user?: Maybe<User>;
    users?: Maybe<Array<Maybe<User>>>;
    login?: Maybe<AuthData>;
    userExists?: Maybe<ExistData>;
    venue?: Maybe<Venue>;
    venues?: Maybe<Array<Maybe<Venue>>>;
    workFocus?: Maybe<WorkFocus>;
    workFocuses?: Maybe<Array<Maybe<WorkFocus>>>;
    teachingHours?: Maybe<Scalars["Int"]>;
    researchHours?: Maybe<Scalars["Int"]>;
    serviceHours?: Maybe<Scalars["Int"]>;
    annualHours?: Maybe<Scalars["Int"]>;
    academicAdministrationWorkloadPerUser?: Maybe<
        AcademicAdministrationWorkloadPerUser
    >;
    communityInstructionWorkloadPerUser?: Maybe<
        CommunityInstructionWorkloadPerUser
    >;
    executiveManagementWorkloadPerUser?: Maybe<
        ExecutiveManagementWorkloadPerUser
    >;
    formalInstructionWorkloadPerUser?: Maybe<FormalInstructionWorkloadPerUser>;
    personnelDevelopmentWorkloadPerUser?: Maybe<
        PersonnelDevelopmentWorkloadPerUser
    >;
    publicServiceWorkloadPerUser?: Maybe<PublicServiceWorkloadPerUser>;
    researchWorkloadPerUser?: Maybe<ResearchWorkloadPerUser>;
    supervisionWorkloadPerUser?: Maybe<SupervisionWorkloadPerUser>;
    academicAdministrationWorkloadPerActivity?: Maybe<
        AcademicAdministrationWorkloadPerActivity
    >;
    communityInstructionWorkloadPerActivity?: Maybe<
        CommunityInstructionWorkloadPerActivity
    >;
    executiveManagementWorkloadPerActivity?: Maybe<
        ExecutiveManagementWorkloadPerActivity
    >;
    formalInstructionWorkloadPerActivity?: Maybe<
        FormalInstructionWorkloadPerActivity
    >;
    personnelDevelopmentWorkloadPerActivity?: Maybe<
        PersonnelDevelopmentWorkloadPerActivity
    >;
    publicServiceWorkloadPerActivity?: Maybe<PublicServiceWorkloadPerActivity>;
    researchWorkloadPerActivity?: Maybe<ResearchWorkloadPerActivity>;
    supervisionWorkloadPerActivity?: Maybe<SupervisionWorkloadPerActivity>;
    academicAdministrationGlobalTarrif?: Maybe<Scalars["Int"]>;
    academicAdministrationTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    academicAdministrationTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    academicAdministrationPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    academicAdministrationPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    academicAdministrationPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
    academicAdministrationPercentageOfAnnualHoursPerUser?: Maybe<
        Scalars["Int"]
    >;
    communityInstructionGlobalTarrif?: Maybe<Scalars["Int"]>;
    communityInstructionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    communityInstructionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    communityInstructionPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    communityInstructionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    communityInstructionPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
    communityInstructionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    executiveManagementGlobalTarrif?: Maybe<Scalars["Int"]>;
    executiveManagementTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    executiveManagementTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    executiveManagementPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
    executiveManagementPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    formalInstructionLectureWeeks?: Maybe<Scalars["Int"]>;
    formalInstructionStudentsEnrolled?: Maybe<Scalars["Int"]>;
    formalInstructionBaseContactHours?: Maybe<Scalars["Int"]>;
    formalInstructionCoordinationHours?: Maybe<Scalars["Int"]>;
    formalInstructionStudentSupportHours?: Maybe<Scalars["Int"]>;
    formalInstructionPreparationTimeHours?: Maybe<Scalars["Int"]>;
    formalInstructionAssessmentSettingHours?: Maybe<Scalars["Int"]>;
    formalInstructionExamMarkingHours?: Maybe<Scalars["Int"]>;
    formalInstructionCourseworkMarkingHours?: Maybe<Scalars["Int"]>;
    formalInstructionFeedbackHours?: Maybe<Scalars["Int"]>;
    formalInstructionFormativeAssessmentHours?: Maybe<Scalars["Int"]>;
    formalInstructionModerationHours?: Maybe<Scalars["Int"]>;
    formalInstructionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionOtherHoursPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    formalInstructionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    personnelDevelopmentGlobalTarrif?: Maybe<Scalars["Int"]>;
    personnelDevelopmentTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    personnelDevelopmentTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    personnelDevelopmentPercentageOfWorkFocusPerActivity?: Maybe<
        Scalars["Int"]
    >;
    personnelDevelopmentPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    personnelDevelopmentPercentageOfAnnualHoursPerActivity?: Maybe<
        Scalars["Int"]
    >;
    personnelDevelopmentPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    publicServiceGlobalTarrif?: Maybe<Scalars["Int"]>;
    publicServiceTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    publicServiceTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
    publicServicePercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    researchGlobalTarrif?: Maybe<Scalars["Int"]>;
    researchTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    researchTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    researchPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    researchPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    researchPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
    researchPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    supervisionGlobalTarrif?: Maybe<Scalars["Int"]>;
    supervisionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    supervisionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
    academicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
    academicAdministrationActivities?: Maybe<
        Array<Maybe<AcademicAdministrationActivity>>
    >;
    academicAdministrationActivitiesByUser?: Maybe<
        Array<Maybe<AcademicAdministrationActivity>>
    >;
    communityInstructionActivity?: Maybe<CommunityInstructionActivity>;
    communityInstructionActivities?: Maybe<
        Array<Maybe<CommunityInstructionActivity>>
    >;
    communityInstructionActivitiesByUser?: Maybe<
        Array<Maybe<CommunityInstructionActivity>>
    >;
    executiveManagementActivity?: Maybe<ExecutiveManagementActivity>;
    executiveManagementActivities?: Maybe<
        Array<Maybe<ExecutiveManagementActivity>>
    >;
    executiveManagementActivitiesByUser?: Maybe<
        Array<Maybe<ExecutiveManagementActivity>>
    >;
    formalInstructionActivity?: Maybe<FormalInstructionActivity>;
    formalInstructionActivities?: Maybe<
        Array<Maybe<FormalInstructionActivity>>
    >;
    formalInstructionActivitiesByUser?: Maybe<
        Array<Maybe<FormalInstructionActivity>>
    >;
    supervisionActivity?: Maybe<SupervisionActivity>;
    supervisionActivities?: Maybe<Array<Maybe<SupervisionActivity>>>;
    supervisionActivitiesByUser?: Maybe<Array<Maybe<SupervisionActivity>>>;
    personnelDevelopmentActivity?: Maybe<PersonnelDevelopmentActivity>;
    personnelDevelopmentActivities?: Maybe<
        Array<Maybe<PersonnelDevelopmentActivity>>
    >;
    personnelDevelopmentActivitiesByUser?: Maybe<
        Array<Maybe<PersonnelDevelopmentActivity>>
    >;
    publicServiceActivity?: Maybe<PublicServiceActivity>;
    publicServiceActivities?: Maybe<Array<Maybe<PublicServiceActivity>>>;
    publicServiceActivitiesByUser?: Maybe<Array<Maybe<PublicServiceActivity>>>;
    researchActivity?: Maybe<ResearchActivity>;
    researchActivities?: Maybe<Array<Maybe<ResearchActivity>>>;
    researchActivitiesByUser?: Maybe<Array<Maybe<ResearchActivity>>>;
    files?: Maybe<Array<Maybe<File>>>;
};

export type QueryActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryActivitiesByDutyArgs = {
    dutyId: Scalars["String"];
};

export type QueryActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type QueryBlockArgs = {
    blockId: Scalars["String"];
};

export type QueryDepartmentArgs = {
    departmentId: Scalars["String"];
};

export type QueryDisciplineArgs = {
    disciplineId: Scalars["String"];
};

export type QueryDutyArgs = {
    dutyId: Scalars["String"];
};

export type QueryEnrollmentArgs = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type QueryEnrollmentsByYearArgs = {
    enrollmentYear?: Maybe<Scalars["String"]>;
};

export type QueryEnrollmentsByQualificationArgs = {
    qualificationId?: Maybe<Scalars["String"]>;
};

export type QueryEventArgs = {
    eventId: Scalars["String"];
};

export type QueryEvidenceArgs = {
    evidenceId: Scalars["String"];
};

export type QueryFacultyArgs = {
    facultyId: Scalars["String"];
};

export type QueryModuleArgs = {
    moduleId: Scalars["String"];
    blockId: Scalars["String"];
    offeringTypeId: Scalars["String"];
    qualificationId: Scalars["String"];
};

export type QueryModulesByDisciplineArgs = {
    disciplineId: Scalars["String"];
};

export type QueryModulesByUnassignedAndDisciplineArgs = {
    disciplineId?: Maybe<Scalars["String"]>;
};

export type QueryModulesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryModulesByModeratorArgs = {
    moderatorId?: Maybe<Scalars["String"]>;
};

export type QueryModulesByCoordinatorArgs = {
    coordinatorId?: Maybe<Scalars["String"]>;
};

export type QueryModulesByStackArgs = {
    stackId?: Maybe<Scalars["String"]>;
};

export type QueryOfferingTypeArgs = {
    offeringTypeId: Scalars["String"];
};

export type QueryPositionArgs = {
    positionId: Scalars["String"];
};

export type QueryQualificationArgs = {
    qualificationId: Scalars["String"];
};

export type QueryStudentArgs = {
    studentId: Scalars["String"];
};

export type QueryUserArgs = {
    userId: Scalars["String"];
};

export type QueryLoginArgs = {
    userId: Scalars["String"];
    password: Scalars["String"];
};

export type QueryUserExistsArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryVenueArgs = {
    venueId: Scalars["String"];
};

export type QueryWorkFocusArgs = {
    name: Scalars["String"];
};

export type QueryTeachingHoursArgs = {
    userId: Scalars["String"];
};

export type QueryResearchHoursArgs = {
    userId: Scalars["String"];
};

export type QueryServiceHoursArgs = {
    userId: Scalars["String"];
};

export type QueryAcademicAdministrationWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryResearchWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionWorkloadPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryResearchWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionWorkloadPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionLectureWeeksArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionStudentsEnrolledArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionBaseContactHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionCoordinationHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionStudentSupportHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionPreparationTimeHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionAssessmentSettingHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionExamMarkingHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionCourseworkMarkingHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionFeedbackHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionFormativeAssessmentHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionModerationHoursArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionOtherHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServicePercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServicePercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServicePercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServicePercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryResearchTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryResearchTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryResearchPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryResearchPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryResearchPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryResearchPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionTotalHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionTotalHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionPercentageOfWorkFocusPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionPercentageOfWorkFocusPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionPercentageOfAnnualHoursPerActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QuerySupervisionPercentageOfAnnualHoursPerUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryAcademicAdministrationActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryAcademicAdministrationActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryCommunityInstructionActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryCommunityInstructionActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryExecutiveManagementActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryExecutiveManagementActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryFormalInstructionActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryFormalInstructionActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type QuerySupervisionActivityArgs = {
    activityId: Scalars["String"];
};

export type QuerySupervisionActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPersonnelDevelopmentActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryPersonnelDevelopmentActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
};

export type QueryPublicServiceActivitiesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryResearchActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryResearchActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type ResearchActivity = Activity & {
    __typename?: "ResearchActivity";
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    user?: Maybe<User>;
    dutyId?: Maybe<Scalars["String"]>;
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    output?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    details?: Maybe<Scalars["String"]>;
    dates?: Maybe<Array<Maybe<Scalars["String"]>>>;
    url?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Scalars["String"]>;
};

export type ResearchActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    output?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    details?: Maybe<Scalars["String"]>;
    dates?: Maybe<Array<Maybe<Scalars["String"]>>>;
    url?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type ResearchWorkloadPerActivity = {
    __typename?: "ResearchWorkloadPerActivity";
    researchTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    researchPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    researchPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
};

export type ResearchWorkloadPerUser = {
    __typename?: "ResearchWorkloadPerUser";
    researchWorkloadData?: Maybe<Array<Maybe<ResearchWorkloadPerActivity>>>;
    researchGlobalTarrif?: Maybe<Scalars["Int"]>;
    researchTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    researchPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    researchPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type Student = {
    __typename?: "Student";
    studentId?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
    graduationDate?: Maybe<Scalars["String"]>;
};

export type StudentInput = {
    studentId?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type SupervisionActivity = Activity & {
    __typename?: "SupervisionActivity";
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["String"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    supervisionRole: Scalars["String"];
    split?: Maybe<Scalars["Int"]>;
    studentId: Scalars["String"];
    student?: Maybe<Student>;
};

export type SupervisionActivityInput = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    supervisionRole?: Maybe<Scalars["String"]>;
    split?: Maybe<Scalars["Int"]>;
    studentId?: Maybe<Scalars["String"]>;
};

export type SupervisionWorkloadPerActivity = {
    __typename?: "SupervisionWorkloadPerActivity";
    supervisionTotalHoursPerActivity?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfWorkFocusPerActivity?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfAnnualHoursPerActivity?: Maybe<Scalars["Int"]>;
};

export type SupervisionWorkloadPerUser = {
    __typename?: "SupervisionWorkloadPerUser";
    supervisionWorkloadData?: Maybe<
        Array<Maybe<SupervisionWorkloadPerActivity>>
    >;
    supervisionGlobalTarrif?: Maybe<Scalars["Int"]>;
    supervisionTotalHoursPerUser?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfWorkFocusPerUser?: Maybe<Scalars["Int"]>;
    supervisionPercentageOfAnnualHoursPerUser?: Maybe<Scalars["Int"]>;
};

export type User = {
    __typename?: "User";
    userId?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    photoUrl?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    discipline?: Maybe<Discipline>;
    positionId?: Maybe<Scalars["String"]>;
    position?: Maybe<Position>;
    workFocusName?: Maybe<Scalars["String"]>;
    workFocus?: Maybe<WorkFocus>;
    gender?: Maybe<Scalars["String"]>;
    nationality?: Maybe<Scalars["String"]>;
};

export type UserInput = {
    userId?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    photoUrl?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    positionId?: Maybe<Scalars["String"]>;
    workFocusName?: Maybe<Scalars["String"]>;
    gender?: Maybe<Scalars["String"]>;
    nationality?: Maybe<Scalars["String"]>;
};

export type Venue = {
    __typename?: "Venue";
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
    type?: Maybe<Scalars["String"]>;
};

export type VenueInput = {
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
    type?: Maybe<Scalars["String"]>;
};

export type WorkFocus = {
    __typename?: "WorkFocus";
    name: Scalars["String"];
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};

export type WorkFocusInput = {
    name?: Maybe<Scalars["String"]>;
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};
export type AddAcademicAdministrationActivityMutationVariables = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type AddAcademicAdministrationActivityMutation = {
    __typename?: "Mutation";
} & {
    addAcademicAdministrationActivity: Maybe<
        { __typename?: "AcademicAdministrationActivity" } & Pick<
            AcademicAdministrationActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditAcademicAdministrationActivityMutationVariables = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type EditAcademicAdministrationActivityMutation = {
    __typename?: "Mutation";
} & {
    editAcademicAdministrationActivity: Maybe<
        { __typename?: "AcademicAdministrationActivity" } & Pick<
            AcademicAdministrationActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeleteAcademicAdministrationActivityMutationVariables = {
    activity?: Maybe<AcademicAdministrationActivityInput>;
};

export type DeleteAcademicAdministrationActivityMutation = {
    __typename?: "Mutation";
} & {
    deleteAcademicAdministrationActivity: Maybe<
        { __typename?: "AcademicAdministrationActivity" } & Pick<
            AcademicAdministrationActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type AcademicAdministrationActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type AcademicAdministrationActivityQuery = { __typename?: "Query" } & {
    academicAdministrationActivity: Maybe<
        { __typename?: "AcademicAdministrationActivity" } & Pick<
            AcademicAdministrationActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type AcademicAdministrationActivitiesQueryVariables = {};

export type AcademicAdministrationActivitiesQuery = { __typename?: "Query" } & {
    academicAdministrationActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "AcademicAdministrationActivity" } & Pick<
                    AcademicAdministrationActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AcademicAdministrationActivitiesByUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type AcademicAdministrationActivitiesByUserQuery = {
    __typename?: "Query";
} & {
    academicAdministrationActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "AcademicAdministrationActivity" } & Pick<
                    AcademicAdministrationActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type ActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type ActivityQuery = { __typename?: "Query" } & {
    activity: Maybe<
        {
            __typename?:
                | "FormalInstructionActivity"
                | "AcademicAdministrationActivity"
                | "CommunityInstructionActivity"
                | "ExecutiveManagementActivity"
                | "SupervisionActivity"
                | "PersonnelDevelopmentActivity"
                | "PublicServiceActivity"
                | "ResearchActivity";
        } & Pick<
            Activity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            } & (
                | ({ __typename?: "AcademicAdministrationActivity" } & Pick<
                      AcademicAdministrationActivity,
                      "title" | "description" | "evidence"
                  >)
                | ({ __typename?: "ExecutiveManagementActivity" } & Pick<
                      ExecutiveManagementActivity,
                      "title" | "description" | "evidence"
                  >)
                | ({ __typename?: "PersonnelDevelopmentActivity" } & Pick<
                      PersonnelDevelopmentActivity,
                      "title" | "description" | "evidence"
                  >)
                | ({ __typename?: "CommunityInstructionActivity" } & Pick<
                      CommunityInstructionActivity,
                      "title" | "description" | "evidence"
                  >)
                | ({ __typename?: "PublicServiceActivity" } & Pick<
                      PublicServiceActivity,
                      "title" | "description" | "evidence"
                  >)
                | ({ __typename?: "FormalInstructionActivity" } & Pick<
                      FormalInstructionActivity,
                      | "moduleId"
                      | "blockId"
                      | "offeringTypeId"
                      | "qualificationId"
                  > & {
                          module: Maybe<
                              { __typename?: "Module" } & Pick<
                                  Module,
                                  | "moduleId"
                                  | "name"
                                  | "type"
                                  | "assessmentMethod"
                                  | "nqfLevel"
                                  | "credits"
                                  | "qualificationId"
                                  | "offeringTypeId"
                                  | "disciplineId"
                                  | "venueId"
                                  | "blockId"
                                  | "coordinatorId"
                                  | "moderatorId"
                                  | "studyPeriod"
                                  | "groupSize"
                                  | "lecturedBy"
                                  | "moderation"
                              > & {
                                      qualification: Maybe<
                                          {
                                              __typename?: "Qualification";
                                          } & Pick<
                                              Qualification,
                                              "qualificationId" | "name"
                                          >
                                      >;
                                      offeringType: Maybe<
                                          {
                                              __typename?: "OfferingType";
                                          } & Pick<
                                              OfferingType,
                                              "offeringTypeId" | "description"
                                          >
                                      >;
                                      discipline: Maybe<
                                          { __typename?: "Discipline" } & Pick<
                                              Discipline,
                                              "disciplineId" | "name"
                                          >
                                      >;
                                      venue: Maybe<
                                          { __typename?: "Venue" } & Pick<
                                              Venue,
                                              "venueId" | "campus" | "capacity"
                                          >
                                      >;
                                      block: Maybe<
                                          { __typename?: "Block" } & Pick<
                                              Block,
                                              "blockId" | "name"
                                          >
                                      >;
                                      coordinator: Maybe<
                                          { __typename?: "User" } & Pick<
                                              User,
                                              | "userId"
                                              | "firstName"
                                              | "lastName"
                                          > & {
                                                  discipline: Maybe<
                                                      {
                                                          __typename?: "Discipline";
                                                      } & Pick<
                                                          Discipline,
                                                          | "disciplineId"
                                                          | "name"
                                                      >
                                                  >;
                                                  position: Maybe<
                                                      {
                                                          __typename?: "Position";
                                                      } & Pick<
                                                          Position,
                                                          "positionId" | "name"
                                                      >
                                                  >;
                                              }
                                      >;
                                      moderator: Maybe<
                                          { __typename?: "User" } & Pick<
                                              User,
                                              | "userId"
                                              | "firstName"
                                              | "lastName"
                                          > & {
                                                  discipline: Maybe<
                                                      {
                                                          __typename?: "Discipline";
                                                      } & Pick<
                                                          Discipline,
                                                          | "disciplineId"
                                                          | "name"
                                                      >
                                                  >;
                                                  position: Maybe<
                                                      {
                                                          __typename?: "Position";
                                                      } & Pick<
                                                          Position,
                                                          "positionId" | "name"
                                                      >
                                                  >;
                                              }
                                      >;
                                  }
                          >;
                          block: Maybe<
                              { __typename?: "Block" } & Pick<
                                  Block,
                                  "blockId" | "name"
                              >
                          >;
                          offeringType: Maybe<
                              { __typename?: "OfferingType" } & Pick<
                                  OfferingType,
                                  "offeringTypeId" | "description"
                              >
                          >;
                          qualification: Maybe<
                              { __typename?: "Qualification" } & Pick<
                                  Qualification,
                                  "qualificationId" | "name"
                              >
                          >;
                      })
                | ({ __typename?: "ResearchActivity" } & Pick<
                      ResearchActivity,
                      "output" | "title" | "details" | "evidence"
                  >)
                | ({ __typename?: "SupervisionActivity" } & Pick<
                      SupervisionActivity,
                      "supervisionRole" | "split" | "studentId"
                  > & {
                          student: Maybe<
                              { __typename?: "Student" } & Pick<
                                  Student,
                                  | "studentId"
                                  | "firstName"
                                  | "lastName"
                                  | "title"
                                  | "year"
                              >
                          >;
                      }))
    >;
};

export type ActivitiesByUnapprovedQueryVariables = {};

export type ActivitiesByUnapprovedQuery = { __typename?: "Query" } & {
    activitiesByUnapproved: Maybe<
        Array<
            Maybe<
                {
                    __typename?:
                        | "FormalInstructionActivity"
                        | "AcademicAdministrationActivity"
                        | "CommunityInstructionActivity"
                        | "ExecutiveManagementActivity"
                        | "SupervisionActivity"
                        | "PersonnelDevelopmentActivity"
                        | "PublicServiceActivity"
                        | "ResearchActivity";
                } & Pick<
                    Activity,
                    "activityId" | "userId" | "dutyId" | "approvalStatus"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    } & (
                        | ({
                              __typename?: "CommunityInstructionActivity";
                          } & Pick<
                              CommunityInstructionActivity,
                              "title" | "description" | "evidence"
                          >)
                        | ({ __typename?: "PublicServiceActivity" } & Pick<
                              PublicServiceActivity,
                              "title" | "description" | "evidence"
                          >)
                        | ({ __typename?: "FormalInstructionActivity" } & Pick<
                              FormalInstructionActivity,
                              | "activityId"
                              | "dutyId"
                              | "userId"
                              | "moduleId"
                              | "blockId"
                              | "offeringTypeId"
                              | "qualificationId"
                          > & {
                                  duty: Maybe<
                                      { __typename?: "Duty" } & Pick<
                                          Duty,
                                          "dutyId" | "name" | "description"
                                      >
                                  >;
                                  user: Maybe<
                                      { __typename?: "User" } & Pick<
                                          User,
                                          "userId" | "firstName" | "lastName"
                                      > & {
                                              discipline: Maybe<
                                                  {
                                                      __typename?: "Discipline";
                                                  } & Pick<
                                                      Discipline,
                                                      "disciplineId" | "name"
                                                  >
                                              >;
                                              position: Maybe<
                                                  {
                                                      __typename?: "Position";
                                                  } & Pick<
                                                      Position,
                                                      "positionId" | "name"
                                                  >
                                              >;
                                          }
                                  >;
                                  module: Maybe<
                                      { __typename?: "Module" } & Pick<
                                          Module,
                                          | "moduleId"
                                          | "name"
                                          | "type"
                                          | "assessmentMethod"
                                          | "nqfLevel"
                                          | "credits"
                                          | "qualificationId"
                                          | "offeringTypeId"
                                          | "disciplineId"
                                          | "venueId"
                                          | "blockId"
                                          | "coordinatorId"
                                          | "moderatorId"
                                          | "studyPeriod"
                                          | "groupSize"
                                          | "lecturedBy"
                                          | "moderation"
                                      > & {
                                              qualification: Maybe<
                                                  {
                                                      __typename?: "Qualification";
                                                  } & Pick<
                                                      Qualification,
                                                      "qualificationId" | "name"
                                                  >
                                              >;
                                              offeringType: Maybe<
                                                  {
                                                      __typename?: "OfferingType";
                                                  } & Pick<
                                                      OfferingType,
                                                      | "offeringTypeId"
                                                      | "description"
                                                  >
                                              >;
                                              discipline: Maybe<
                                                  {
                                                      __typename?: "Discipline";
                                                  } & Pick<
                                                      Discipline,
                                                      "disciplineId" | "name"
                                                  >
                                              >;
                                              venue: Maybe<
                                                  {
                                                      __typename?: "Venue";
                                                  } & Pick<
                                                      Venue,
                                                      | "venueId"
                                                      | "campus"
                                                      | "capacity"
                                                  >
                                              >;
                                              block: Maybe<
                                                  {
                                                      __typename?: "Block";
                                                  } & Pick<
                                                      Block,
                                                      "blockId" | "name"
                                                  >
                                              >;
                                              coordinator: Maybe<
                                                  {
                                                      __typename?: "User";
                                                  } & Pick<
                                                      User,
                                                      | "userId"
                                                      | "firstName"
                                                      | "lastName"
                                                  > & {
                                                          discipline: Maybe<
                                                              {
                                                                  __typename?: "Discipline";
                                                              } & Pick<
                                                                  Discipline,
                                                                  | "disciplineId"
                                                                  | "name"
                                                              >
                                                          >;
                                                          position: Maybe<
                                                              {
                                                                  __typename?: "Position";
                                                              } & Pick<
                                                                  Position,
                                                                  | "positionId"
                                                                  | "name"
                                                              >
                                                          >;
                                                      }
                                              >;
                                              moderator: Maybe<
                                                  {
                                                      __typename?: "User";
                                                  } & Pick<
                                                      User,
                                                      | "userId"
                                                      | "firstName"
                                                      | "lastName"
                                                  > & {
                                                          discipline: Maybe<
                                                              {
                                                                  __typename?: "Discipline";
                                                              } & Pick<
                                                                  Discipline,
                                                                  | "disciplineId"
                                                                  | "name"
                                                              >
                                                          >;
                                                          position: Maybe<
                                                              {
                                                                  __typename?: "Position";
                                                              } & Pick<
                                                                  Position,
                                                                  | "positionId"
                                                                  | "name"
                                                              >
                                                          >;
                                                      }
                                              >;
                                          }
                                  >;
                                  block: Maybe<
                                      { __typename?: "Block" } & Pick<
                                          Block,
                                          "blockId" | "name"
                                      >
                                  >;
                                  offeringType: Maybe<
                                      { __typename?: "OfferingType" } & Pick<
                                          OfferingType,
                                          "offeringTypeId" | "description"
                                      >
                                  >;
                                  qualification: Maybe<
                                      { __typename?: "Qualification" } & Pick<
                                          Qualification,
                                          "qualificationId" | "name"
                                      >
                                  >;
                              })
                        | ({ __typename?: "ResearchActivity" } & Pick<
                              ResearchActivity,
                              "output" | "title" | "details" | "evidence"
                          >)
                        | ({ __typename?: "SupervisionActivity" } & Pick<
                              SupervisionActivity,
                              "supervisionRole" | "studentId"
                          > & {
                                  student: Maybe<
                                      { __typename?: "Student" } & Pick<
                                          Student,
                                          | "studentId"
                                          | "firstName"
                                          | "lastName"
                                          | "title"
                                          | "year"
                                      >
                                  >;
                              }))
            >
        >
    >;
};

export type AddCommunityInstructionActivityMutationVariables = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type AddCommunityInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    addCommunityInstructionActivity: Maybe<
        { __typename?: "CommunityInstructionActivity" } & Pick<
            CommunityInstructionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditCommunityInstructionActivityMutationVariables = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type EditCommunityInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    editCommunityInstructionActivity: Maybe<
        { __typename?: "CommunityInstructionActivity" } & Pick<
            CommunityInstructionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeleteCommunityInstructionActivityMutationVariables = {
    activity?: Maybe<CommunityInstructionActivityInput>;
};

export type DeleteCommunityInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    deleteCommunityInstructionActivity: Maybe<
        { __typename?: "CommunityInstructionActivity" } & Pick<
            CommunityInstructionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type CommunityInstructionActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type CommunityInstructionActivityQuery = { __typename?: "Query" } & {
    communityInstructionActivity: Maybe<
        { __typename?: "CommunityInstructionActivity" } & Pick<
            CommunityInstructionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type CommunityInstructionActivitiesQueryVariables = {};

export type CommunityInstructionActivitiesQuery = { __typename?: "Query" } & {
    communityInstructionActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "CommunityInstructionActivity" } & Pick<
                    CommunityInstructionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type CommunityInstructionActivitiesByUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type CommunityInstructionActivitiesByUserQuery = {
    __typename?: "Query";
} & {
    communityInstructionActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "CommunityInstructionActivity" } & Pick<
                    CommunityInstructionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddExecutiveManagementActivityMutationVariables = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type AddExecutiveManagementActivityMutation = {
    __typename?: "Mutation";
} & {
    addExecutiveManagementActivity: Maybe<
        { __typename?: "ExecutiveManagementActivity" } & Pick<
            ExecutiveManagementActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditExecutiveManagementActivityMutationVariables = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type EditExecutiveManagementActivityMutation = {
    __typename?: "Mutation";
} & {
    editExecutiveManagementActivity: Maybe<
        { __typename?: "ExecutiveManagementActivity" } & Pick<
            ExecutiveManagementActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeleteExecutiveManagementActivityMutationVariables = {
    activity?: Maybe<ExecutiveManagementActivityInput>;
};

export type DeleteExecutiveManagementActivityMutation = {
    __typename?: "Mutation";
} & {
    deleteExecutiveManagementActivity: Maybe<
        { __typename?: "ExecutiveManagementActivity" } & Pick<
            ExecutiveManagementActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type ExecutiveManagementActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type ExecutiveManagementActivityQuery = { __typename?: "Query" } & {
    executiveManagementActivity: Maybe<
        { __typename?: "ExecutiveManagementActivity" } & Pick<
            ExecutiveManagementActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type ExecutiveManagementActivitiesQueryVariables = {};

export type ExecutiveManagementActivitiesQuery = { __typename?: "Query" } & {
    executiveManagementActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "ExecutiveManagementActivity" } & Pick<
                    ExecutiveManagementActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type ExecutiveManagementActivitiesByUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type ExecutiveManagementActivitiesByUserQuery = {
    __typename?: "Query";
} & {
    executiveManagementActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "ExecutiveManagementActivity" } & Pick<
                    ExecutiveManagementActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddFormalInstructionActivityMutationVariables = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type AddFormalInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    addFormalInstructionActivity: Maybe<
        { __typename?: "FormalInstructionActivity" } & Pick<
            FormalInstructionActivity,
            | "activityId"
            | "dutyId"
            | "userId"
            | "moduleId"
            | "blockId"
            | "offeringTypeId"
            | "qualificationId"
            | "createdAt"
            | "updatedAt"
        > & {
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name"
                                >
                            >;
                        }
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        | "moduleId"
                        | "name"
                        | "type"
                        | "assessmentMethod"
                        | "nqfLevel"
                        | "credits"
                        | "qualificationId"
                        | "offeringTypeId"
                        | "disciplineId"
                        | "venueId"
                        | "blockId"
                        | "coordinatorId"
                        | "moderatorId"
                        | "studyPeriod"
                        | "groupSize"
                        | "lecturedBy"
                        | "moderation"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    "qualificationId" | "name"
                                >
                            >;
                            offeringType: Maybe<
                                { __typename?: "OfferingType" } & Pick<
                                    OfferingType,
                                    "offeringTypeId" | "description"
                                >
                            >;
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            venue: Maybe<
                                { __typename?: "Venue" } & Pick<
                                    Venue,
                                    "venueId" | "campus" | "capacity"
                                >
                            >;
                            block: Maybe<
                                { __typename?: "Block" } & Pick<
                                    Block,
                                    "blockId" | "name"
                                >
                            >;
                            coordinator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                            moderator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type EditFormalInstructionActivityMutationVariables = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type EditFormalInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    editFormalInstructionActivity: Maybe<
        { __typename?: "FormalInstructionActivity" } & Pick<
            FormalInstructionActivity,
            | "activityId"
            | "dutyId"
            | "userId"
            | "moduleId"
            | "blockId"
            | "offeringTypeId"
            | "qualificationId"
            | "createdAt"
            | "updatedAt"
        > & {
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name"
                                >
                            >;
                        }
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        | "moduleId"
                        | "name"
                        | "type"
                        | "assessmentMethod"
                        | "nqfLevel"
                        | "credits"
                        | "qualificationId"
                        | "offeringTypeId"
                        | "disciplineId"
                        | "venueId"
                        | "blockId"
                        | "coordinatorId"
                        | "moderatorId"
                        | "studyPeriod"
                        | "groupSize"
                        | "lecturedBy"
                        | "moderation"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    "qualificationId" | "name"
                                >
                            >;
                            offeringType: Maybe<
                                { __typename?: "OfferingType" } & Pick<
                                    OfferingType,
                                    "offeringTypeId" | "description"
                                >
                            >;
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            venue: Maybe<
                                { __typename?: "Venue" } & Pick<
                                    Venue,
                                    "venueId" | "campus" | "capacity"
                                >
                            >;
                            block: Maybe<
                                { __typename?: "Block" } & Pick<
                                    Block,
                                    "blockId" | "name"
                                >
                            >;
                            coordinator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                            moderator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type DeleteFormalInstructionActivityMutationVariables = {
    activity?: Maybe<FormalInstructionActivityInput>;
};

export type DeleteFormalInstructionActivityMutation = {
    __typename?: "Mutation";
} & {
    deleteFormalInstructionActivity: Maybe<
        { __typename?: "FormalInstructionActivity" } & Pick<
            FormalInstructionActivity,
            | "activityId"
            | "dutyId"
            | "userId"
            | "moduleId"
            | "blockId"
            | "offeringTypeId"
            | "qualificationId"
            | "createdAt"
            | "updatedAt"
        > & {
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name"
                                >
                            >;
                        }
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        | "moduleId"
                        | "name"
                        | "type"
                        | "assessmentMethod"
                        | "nqfLevel"
                        | "credits"
                        | "qualificationId"
                        | "offeringTypeId"
                        | "disciplineId"
                        | "venueId"
                        | "blockId"
                        | "coordinatorId"
                        | "moderatorId"
                        | "studyPeriod"
                        | "groupSize"
                        | "lecturedBy"
                        | "moderation"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    "qualificationId" | "name"
                                >
                            >;
                            offeringType: Maybe<
                                { __typename?: "OfferingType" } & Pick<
                                    OfferingType,
                                    "offeringTypeId" | "description"
                                >
                            >;
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name"
                                >
                            >;
                            venue: Maybe<
                                { __typename?: "Venue" } & Pick<
                                    Venue,
                                    "venueId" | "campus" | "capacity"
                                >
                            >;
                            block: Maybe<
                                { __typename?: "Block" } & Pick<
                                    Block,
                                    "blockId" | "name"
                                >
                            >;
                            coordinator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                            moderator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    "userId" | "firstName" | "lastName"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                "disciplineId" | "name"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                "positionId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type AddSupervisionActivityMutationVariables = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type AddSupervisionActivityMutation = { __typename?: "Mutation" } & {
    addSupervisionActivity: Maybe<
        { __typename?: "SupervisionActivity" } & Pick<
            SupervisionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "supervisionRole"
            | "split"
            | "studentId"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                student: Maybe<
                    { __typename?: "Student" } & Pick<
                        Student,
                        | "studentId"
                        | "firstName"
                        | "lastName"
                        | "email"
                        | "title"
                        | "year"
                    >
                >;
            }
    >;
};

export type EditSupervisionActivityMutationVariables = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type EditSupervisionActivityMutation = { __typename?: "Mutation" } & {
    addSupervisionActivity: Maybe<
        { __typename?: "SupervisionActivity" } & Pick<
            SupervisionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "supervisionRole"
            | "createdAt"
            | "updatedAt"
            | "supervisionRole"
            | "split"
            | "studentId"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                student: Maybe<
                    { __typename?: "Student" } & Pick<
                        Student,
                        | "studentId"
                        | "firstName"
                        | "lastName"
                        | "email"
                        | "title"
                        | "year"
                    >
                >;
            }
    >;
};

export type DeleteSupervisionActivityMutationVariables = {
    activity?: Maybe<SupervisionActivityInput>;
};

export type DeleteSupervisionActivityMutation = { __typename?: "Mutation" } & {
    addSupervisionActivity: Maybe<
        { __typename?: "SupervisionActivity" } & Pick<
            SupervisionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "supervisionRole"
            | "split"
            | "studentId"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                student: Maybe<
                    { __typename?: "Student" } & Pick<
                        Student,
                        | "studentId"
                        | "firstName"
                        | "lastName"
                        | "email"
                        | "title"
                        | "year"
                    >
                >;
            }
    >;
};

export type FormalInstructionActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type FormalInstructionActivityQuery = { __typename?: "Query" } & {
    formalInstructionActivity: Maybe<
        { __typename?: "FormalInstructionActivity" } & Pick<
            FormalInstructionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "moduleId"
            | "blockId"
            | "offeringTypeId"
            | "qualificationId"
            | "createdAt"
            | "updatedAt"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        | "moduleId"
                        | "name"
                        | "type"
                        | "assessmentMethod"
                        | "nqfLevel"
                        | "credits"
                        | "qualificationId"
                        | "offeringTypeId"
                        | "disciplineId"
                        | "venueId"
                        | "blockId"
                        | "userId"
                        | "coordinatorId"
                        | "moderatorId"
                        | "stackId"
                        | "studyPeriod"
                        | "groupSize"
                        | "lecturedBy"
                        | "moderation"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    | "qualificationId"
                                    | "name"
                                    | "type"
                                    | "departmentId"
                                > & {
                                        department: Maybe<
                                            {
                                                __typename?: "Department";
                                            } & Pick<
                                                Department,
                                                | "departmentId"
                                                | "name"
                                                | "facultyId"
                                            > & {
                                                    faculty: Maybe<
                                                        {
                                                            __typename?: "Faculty";
                                                        } & Pick<
                                                            Faculty,
                                                            "facultyId" | "name"
                                                        >
                                                    >;
                                                }
                                        >;
                                    }
                            >;
                            offeringType: Maybe<
                                { __typename?: "OfferingType" } & Pick<
                                    OfferingType,
                                    "offeringTypeId" | "description"
                                >
                            >;
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            venue: Maybe<
                                { __typename?: "Venue" } & Pick<
                                    Venue,
                                    "venueId" | "campus" | "capacity" | "type"
                                >
                            >;
                            block: Maybe<
                                { __typename?: "Block" } & Pick<
                                    Block,
                                    "blockId" | "name" | "description"
                                >
                            >;
                            user: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    | "userId"
                                    | "email"
                                    | "firstName"
                                    | "lastName"
                                    | "photoUrl"
                                    | "disciplineId"
                                    | "positionId"
                                    | "workFocusName"
                                    | "gender"
                                    | "nationality"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                | "disciplineId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                | "positionId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        workFocus: Maybe<
                                            { __typename?: "WorkFocus" } & Pick<
                                                WorkFocus,
                                                | "name"
                                                | "teachingRatio"
                                                | "researchRatio"
                                                | "serviceRatio"
                                            >
                                        >;
                                    }
                            >;
                            coordinator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    | "userId"
                                    | "email"
                                    | "firstName"
                                    | "lastName"
                                    | "photoUrl"
                                    | "disciplineId"
                                    | "positionId"
                                    | "workFocusName"
                                    | "gender"
                                    | "nationality"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                | "disciplineId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                | "positionId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        workFocus: Maybe<
                                            { __typename?: "WorkFocus" } & Pick<
                                                WorkFocus,
                                                | "name"
                                                | "teachingRatio"
                                                | "researchRatio"
                                                | "serviceRatio"
                                            >
                                        >;
                                    }
                            >;
                            moderator: Maybe<
                                { __typename?: "User" } & Pick<
                                    User,
                                    | "userId"
                                    | "email"
                                    | "firstName"
                                    | "lastName"
                                    | "photoUrl"
                                    | "disciplineId"
                                    | "positionId"
                                    | "workFocusName"
                                    | "gender"
                                    | "nationality"
                                > & {
                                        discipline: Maybe<
                                            {
                                                __typename?: "Discipline";
                                            } & Pick<
                                                Discipline,
                                                | "disciplineId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        position: Maybe<
                                            { __typename?: "Position" } & Pick<
                                                Position,
                                                | "positionId"
                                                | "name"
                                                | "description"
                                            >
                                        >;
                                        workFocus: Maybe<
                                            { __typename?: "WorkFocus" } & Pick<
                                                WorkFocus,
                                                | "name"
                                                | "teachingRatio"
                                                | "researchRatio"
                                                | "serviceRatio"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<
                        Block,
                        "blockId" | "name" | "description"
                    >
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name" | "type" | "departmentId"
                    > & {
                            department: Maybe<
                                { __typename?: "Department" } & Pick<
                                    Department,
                                    "departmentId" | "name" | "facultyId"
                                > & {
                                        faculty: Maybe<
                                            { __typename?: "Faculty" } & Pick<
                                                Faculty,
                                                "facultyId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
            }
    >;
};

export type FormalInstructionActivitiesQueryVariables = {};

export type FormalInstructionActivitiesQuery = { __typename?: "Query" } & {
    formalInstructionActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "FormalInstructionActivity" } & Pick<
                    FormalInstructionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "moduleId"
                    | "blockId"
                    | "offeringTypeId"
                    | "qualificationId"
                    | "createdAt"
                    | "updatedAt"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                        module: Maybe<
                            { __typename?: "Module" } & Pick<
                                Module,
                                | "moduleId"
                                | "name"
                                | "type"
                                | "assessmentMethod"
                                | "nqfLevel"
                                | "credits"
                                | "qualificationId"
                                | "offeringTypeId"
                                | "disciplineId"
                                | "venueId"
                                | "blockId"
                                | "userId"
                                | "coordinatorId"
                                | "moderatorId"
                                | "stackId"
                                | "studyPeriod"
                                | "groupSize"
                                | "lecturedBy"
                                | "moderation"
                            > & {
                                    qualification: Maybe<
                                        { __typename?: "Qualification" } & Pick<
                                            Qualification,
                                            | "qualificationId"
                                            | "name"
                                            | "type"
                                            | "departmentId"
                                        > & {
                                                department: Maybe<
                                                    {
                                                        __typename?: "Department";
                                                    } & Pick<
                                                        Department,
                                                        | "departmentId"
                                                        | "name"
                                                        | "facultyId"
                                                    > & {
                                                            faculty: Maybe<
                                                                {
                                                                    __typename?: "Faculty";
                                                                } & Pick<
                                                                    Faculty,
                                                                    | "facultyId"
                                                                    | "name"
                                                                >
                                                            >;
                                                        }
                                                >;
                                            }
                                    >;
                                    offeringType: Maybe<
                                        { __typename?: "OfferingType" } & Pick<
                                            OfferingType,
                                            "offeringTypeId" | "description"
                                        >
                                    >;
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    venue: Maybe<
                                        { __typename?: "Venue" } & Pick<
                                            Venue,
                                            | "venueId"
                                            | "campus"
                                            | "capacity"
                                            | "type"
                                        >
                                    >;
                                    block: Maybe<
                                        { __typename?: "Block" } & Pick<
                                            Block,
                                            "blockId" | "name" | "description"
                                        >
                                    >;
                                    user: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                    coordinator: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                    moderator: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type FormalInstructionActivitiesByUserQueryVariables = {
    userId: Scalars["String"];
};

export type FormalInstructionActivitiesByUserQuery = {
    __typename?: "Query";
} & {
    formalInstructionActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "FormalInstructionActivity" } & Pick<
                    FormalInstructionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "moduleId"
                    | "blockId"
                    | "offeringTypeId"
                    | "qualificationId"
                    | "createdAt"
                    | "updatedAt"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                        module: Maybe<
                            { __typename?: "Module" } & Pick<
                                Module,
                                | "moduleId"
                                | "name"
                                | "type"
                                | "assessmentMethod"
                                | "nqfLevel"
                                | "credits"
                                | "qualificationId"
                                | "offeringTypeId"
                                | "disciplineId"
                                | "venueId"
                                | "blockId"
                                | "userId"
                                | "coordinatorId"
                                | "moderatorId"
                                | "stackId"
                                | "studyPeriod"
                                | "groupSize"
                                | "lecturedBy"
                                | "moderation"
                            > & {
                                    qualification: Maybe<
                                        { __typename?: "Qualification" } & Pick<
                                            Qualification,
                                            | "qualificationId"
                                            | "name"
                                            | "type"
                                            | "departmentId"
                                        > & {
                                                department: Maybe<
                                                    {
                                                        __typename?: "Department";
                                                    } & Pick<
                                                        Department,
                                                        | "departmentId"
                                                        | "name"
                                                        | "facultyId"
                                                    > & {
                                                            faculty: Maybe<
                                                                {
                                                                    __typename?: "Faculty";
                                                                } & Pick<
                                                                    Faculty,
                                                                    | "facultyId"
                                                                    | "name"
                                                                >
                                                            >;
                                                        }
                                                >;
                                            }
                                    >;
                                    offeringType: Maybe<
                                        { __typename?: "OfferingType" } & Pick<
                                            OfferingType,
                                            "offeringTypeId" | "description"
                                        >
                                    >;
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    venue: Maybe<
                                        { __typename?: "Venue" } & Pick<
                                            Venue,
                                            | "venueId"
                                            | "campus"
                                            | "capacity"
                                            | "type"
                                        >
                                    >;
                                    block: Maybe<
                                        { __typename?: "Block" } & Pick<
                                            Block,
                                            "blockId" | "name" | "description"
                                        >
                                    >;
                                    user: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                    coordinator: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                    moderator: Maybe<
                                        { __typename?: "User" } & Pick<
                                            User,
                                            | "userId"
                                            | "email"
                                            | "firstName"
                                            | "lastName"
                                            | "photoUrl"
                                            | "disciplineId"
                                            | "positionId"
                                            | "workFocusName"
                                            | "gender"
                                            | "nationality"
                                        > & {
                                                discipline: Maybe<
                                                    {
                                                        __typename?: "Discipline";
                                                    } & Pick<
                                                        Discipline,
                                                        | "disciplineId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                position: Maybe<
                                                    {
                                                        __typename?: "Position";
                                                    } & Pick<
                                                        Position,
                                                        | "positionId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                workFocus: Maybe<
                                                    {
                                                        __typename?: "WorkFocus";
                                                    } & Pick<
                                                        WorkFocus,
                                                        | "name"
                                                        | "teachingRatio"
                                                        | "researchRatio"
                                                        | "serviceRatio"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type SupervisionActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type SupervisionActivityQuery = { __typename?: "Query" } & {
    supervisionActivity: Maybe<
        { __typename?: "SupervisionActivity" } & Pick<
            SupervisionActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "supervisionRole"
            | "split"
            | "studentId"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
                student: Maybe<
                    { __typename?: "Student" } & Pick<
                        Student,
                        | "studentId"
                        | "firstName"
                        | "lastName"
                        | "email"
                        | "title"
                        | "year"
                    >
                >;
            }
    >;
};

export type SupervisionActivitiesQueryVariables = {};

export type SupervisionActivitiesQuery = { __typename?: "Query" } & {
    supervisionActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "SupervisionActivity" } & Pick<
                    SupervisionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "supervisionRole"
                    | "split"
                    | "studentId"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                        student: Maybe<
                            { __typename?: "Student" } & Pick<
                                Student,
                                | "studentId"
                                | "firstName"
                                | "lastName"
                                | "email"
                                | "title"
                                | "year"
                            >
                        >;
                    }
            >
        >
    >;
};

export type SupervisionActivitiesByUserQueryVariables = {
    userId: Scalars["String"];
};

export type SupervisionActivitiesByUserQuery = { __typename?: "Query" } & {
    supervisionActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "SupervisionActivity" } & Pick<
                    SupervisionActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "supervisionRole"
                    | "split"
                    | "studentId"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                        student: Maybe<
                            { __typename?: "Student" } & Pick<
                                Student,
                                | "studentId"
                                | "firstName"
                                | "lastName"
                                | "email"
                                | "title"
                                | "year"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddPersonnelDevelopmentActivityMutationVariables = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type AddPersonnelDevelopmentActivityMutation = {
    __typename?: "Mutation";
} & {
    addPersonnelDevelopmentActivity: Maybe<
        { __typename?: "PersonnelDevelopmentActivity" } & Pick<
            PersonnelDevelopmentActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditPersonnelDevelopmentActivityMutationVariables = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type EditPersonnelDevelopmentActivityMutation = {
    __typename?: "Mutation";
} & {
    editPersonnelDevelopmentActivity: Maybe<
        { __typename?: "PersonnelDevelopmentActivity" } & Pick<
            PersonnelDevelopmentActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeletePersonnelDevelopmentActivityMutationVariables = {
    activity?: Maybe<PersonnelDevelopmentActivityInput>;
};

export type DeletePersonnelDevelopmentActivityMutation = {
    __typename?: "Mutation";
} & {
    deletePersonnelDevelopmentActivity: Maybe<
        { __typename?: "PersonnelDevelopmentActivity" } & Pick<
            PersonnelDevelopmentActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type PersonnelDevelopmentActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type PersonnelDevelopmentActivityQuery = { __typename?: "Query" } & {
    personnelDevelopmentActivity: Maybe<
        { __typename?: "PersonnelDevelopmentActivity" } & Pick<
            PersonnelDevelopmentActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type PersonnelDevelopmentActivitiesQueryVariables = {};

export type PersonnelDevelopmentActivitiesQuery = { __typename?: "Query" } & {
    personnelDevelopmentActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "PersonnelDevelopmentActivity" } & Pick<
                    PersonnelDevelopmentActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type PersonnelDevelopmentActivitiesByUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type PersonnelDevelopmentActivitiesByUserQuery = {
    __typename?: "Query";
} & {
    personnelDevelopmentActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "PersonnelDevelopmentActivity" } & Pick<
                    PersonnelDevelopmentActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddPublicServiceActivityMutationVariables = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type AddPublicServiceActivityMutation = { __typename?: "Mutation" } & {
    addPublicServiceActivity: Maybe<
        { __typename?: "PublicServiceActivity" } & Pick<
            PublicServiceActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditPublicServiceActivityMutationVariables = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type EditPublicServiceActivityMutation = { __typename?: "Mutation" } & {
    editPublicServiceActivity: Maybe<
        { __typename?: "PublicServiceActivity" } & Pick<
            PublicServiceActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeletePublicServiceActivityMutationVariables = {
    activity?: Maybe<PublicServiceActivityInput>;
};

export type DeletePublicServiceActivityMutation = {
    __typename?: "Mutation";
} & {
    deletePublicServiceActivity: Maybe<
        { __typename?: "PublicServiceActivity" } & Pick<
            PublicServiceActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type PublicServiceActivityQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type PublicServiceActivityQuery = { __typename?: "Query" } & {
    publicServiceActivity: Maybe<
        { __typename?: "PublicServiceActivity" } & Pick<
            PublicServiceActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "title"
            | "description"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "email" | "firstName" | "lastName"
                    >
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type PublicServiceActivitiesQueryVariables = {};

export type PublicServiceActivitiesQuery = { __typename?: "Query" } & {
    publicServiceActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "PublicServiceActivity" } & Pick<
                    PublicServiceActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type PublicServiceActivitiesByUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type PublicServiceActivitiesByUserQuery = { __typename?: "Query" } & {
    publicServiceActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "PublicServiceActivity" } & Pick<
                    PublicServiceActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "title"
                    | "description"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "email" | "firstName" | "lastName"
                            >
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddResearchActivityMutationVariables = {
    activity?: Maybe<ResearchActivityInput>;
};

export type AddResearchActivityMutation = { __typename?: "Mutation" } & {
    addResearchActivity: Maybe<
        { __typename?: "ResearchActivity" } & Pick<
            ResearchActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "output"
            | "title"
            | "details"
            | "dates"
            | "url"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type EditResearchActivityMutationVariables = {
    activity?: Maybe<ResearchActivityInput>;
};

export type EditResearchActivityMutation = { __typename?: "Mutation" } & {
    editResearchActivity: Maybe<
        { __typename?: "ResearchActivity" } & Pick<
            ResearchActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "output"
            | "title"
            | "details"
            | "dates"
            | "url"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type DeleteResearchActivityMutationVariables = {
    activity?: Maybe<ResearchActivityInput>;
};

export type DeleteResearchActivityMutation = { __typename?: "Mutation" } & {
    deleteResearchActivity: Maybe<
        { __typename?: "ResearchActivity" } & Pick<
            ResearchActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "output"
            | "title"
            | "details"
            | "dates"
            | "url"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type ResearchActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type ResearchActivityQuery = { __typename?: "Query" } & {
    researchActivity: Maybe<
        { __typename?: "ResearchActivity" } & Pick<
            ResearchActivity,
            | "activityId"
            | "userId"
            | "dutyId"
            | "approvalStatus"
            | "createdAt"
            | "updatedAt"
            | "output"
            | "title"
            | "details"
            | "dates"
            | "url"
            | "evidence"
        > & {
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                duty: Maybe<
                    { __typename?: "Duty" } & Pick<
                        Duty,
                        "dutyId" | "name" | "description"
                    >
                >;
            }
    >;
};

export type ResearchActivitiesQueryVariables = {};

export type ResearchActivitiesQuery = { __typename?: "Query" } & {
    researchActivities: Maybe<
        Array<
            Maybe<
                { __typename?: "ResearchActivity" } & Pick<
                    ResearchActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "output"
                    | "title"
                    | "details"
                    | "dates"
                    | "url"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type ResearchActivitiesByUserQueryVariables = {
    userId: Scalars["String"];
};

export type ResearchActivitiesByUserQuery = { __typename?: "Query" } & {
    researchActivitiesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "ResearchActivity" } & Pick<
                    ResearchActivity,
                    | "activityId"
                    | "userId"
                    | "dutyId"
                    | "approvalStatus"
                    | "createdAt"
                    | "updatedAt"
                    | "output"
                    | "title"
                    | "details"
                    | "dates"
                    | "url"
                    | "evidence"
                > & {
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        duty: Maybe<
                            { __typename?: "Duty" } & Pick<
                                Duty,
                                "dutyId" | "name" | "description"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddBlockMutationVariables = {
    block?: Maybe<BlockInput>;
};

export type AddBlockMutation = { __typename?: "Mutation" } & {
    addBlock: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type EditBlockMutationVariables = {
    block?: Maybe<BlockInput>;
};

export type EditBlockMutation = { __typename?: "Mutation" } & {
    editBlock: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type DeleteBlockMutationVariables = {
    block?: Maybe<BlockInput>;
};

export type DeleteBlockMutation = { __typename?: "Mutation" } & {
    deleteBlock: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type BlockQueryVariables = {
    blockId: Scalars["String"];
};

export type BlockQuery = { __typename?: "Query" } & {
    block: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type BlocksQueryVariables = {};

export type BlocksQuery = { __typename?: "Query" } & {
    blocks: Maybe<
        Array<
            Maybe<
                { __typename?: "Block" } & Pick<
                    Block,
                    "blockId" | "name" | "description"
                >
            >
        >
    >;
};

export type AddDepartmentMutationVariables = {
    department?: Maybe<DepartmentInput>;
};

export type AddDepartmentMutation = { __typename?: "Mutation" } & {
    addDepartment: Maybe<
        { __typename?: "Department" } & Pick<
            Department,
            "departmentId" | "name" | "facultyId"
        > & {
                faculty: Maybe<
                    { __typename?: "Faculty" } & Pick<
                        Faculty,
                        "facultyId" | "name"
                    >
                >;
            }
    >;
};

export type EditDepartmentMutationVariables = {
    department?: Maybe<DepartmentInput>;
};

export type EditDepartmentMutation = { __typename?: "Mutation" } & {
    editDepartment: Maybe<
        { __typename?: "Department" } & Pick<
            Department,
            "departmentId" | "name" | "facultyId"
        > & {
                faculty: Maybe<
                    { __typename?: "Faculty" } & Pick<
                        Faculty,
                        "facultyId" | "name"
                    >
                >;
            }
    >;
};

export type DeleteDepartmentMutationVariables = {
    department?: Maybe<DepartmentInput>;
};

export type DeleteDepartmentMutation = { __typename?: "Mutation" } & {
    deleteDepartment: Maybe<
        { __typename?: "Department" } & Pick<
            Department,
            "departmentId" | "name" | "facultyId"
        > & {
                faculty: Maybe<
                    { __typename?: "Faculty" } & Pick<
                        Faculty,
                        "facultyId" | "name"
                    >
                >;
            }
    >;
};

export type DepartmentQueryVariables = {
    departmentId: Scalars["String"];
};

export type DepartmentQuery = { __typename?: "Query" } & {
    department: Maybe<
        { __typename?: "Department" } & Pick<
            Department,
            "departmentId" | "name"
        > & {
                faculty: Maybe<
                    { __typename?: "Faculty" } & Pick<
                        Faculty,
                        "facultyId" | "name"
                    >
                >;
            }
    >;
};

export type DepartmentsQueryVariables = {};

export type DepartmentsQuery = { __typename?: "Query" } & {
    departments: Maybe<
        Array<
            Maybe<
                { __typename?: "Department" } & Pick<
                    Department,
                    "departmentId" | "name"
                > & {
                        faculty: Maybe<
                            { __typename?: "Faculty" } & Pick<
                                Faculty,
                                "facultyId" | "name"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddDisciplineMutationVariables = {
    discipline?: Maybe<DisciplineInput>;
};

export type AddDisciplineMutation = { __typename?: "Mutation" } & {
    addDiscipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
    >;
};

export type EditDisciplineMutationVariables = {
    discipline?: Maybe<DisciplineInput>;
};

export type EditDisciplineMutation = { __typename?: "Mutation" } & {
    editDiscipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
    >;
};

export type DeleteDisciplineMutationVariables = {
    discipline?: Maybe<DisciplineInput>;
};

export type DeleteDisciplineMutation = { __typename?: "Mutation" } & {
    deleteDiscipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
    >;
};

export type DisciplineQueryVariables = {
    disciplineId: Scalars["String"];
};

export type DisciplineQuery = { __typename?: "Query" } & {
    discipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
    >;
};

export type DisciplinesQueryVariables = {};

export type DisciplinesQuery = { __typename?: "Query" } & {
    disciplines: Maybe<
        Array<
            Maybe<
                { __typename?: "Discipline" } & Pick<
                    Discipline,
                    "disciplineId" | "name" | "description"
                >
            >
        >
    >;
};

export type AddDutyMutationVariables = {
    duty?: Maybe<DutyInput>;
};

export type AddDutyMutation = { __typename?: "Mutation" } & {
    addDuty: Maybe<
        { __typename?: "Duty" } & Pick<Duty, "dutyId" | "name" | "description">
    >;
};

export type EditDutyMutationVariables = {
    duty?: Maybe<DutyInput>;
};

export type EditDutyMutation = { __typename?: "Mutation" } & {
    editDuty: Maybe<
        { __typename?: "Duty" } & Pick<Duty, "dutyId" | "name" | "description">
    >;
};

export type DeleteDutyMutationVariables = {
    duty?: Maybe<DutyInput>;
};

export type DeleteDutyMutation = { __typename?: "Mutation" } & {
    deleteDuty: Maybe<
        { __typename?: "Duty" } & Pick<Duty, "dutyId" | "name" | "description">
    >;
};

export type DutyQueryVariables = {
    dutyId: Scalars["String"];
};

export type DutyQuery = { __typename?: "Query" } & {
    duty: Maybe<
        { __typename?: "Duty" } & Pick<Duty, "dutyId" | "name" | "description">
    >;
};

export type DutiesQueryVariables = {};

export type DutiesQuery = { __typename?: "Query" } & {
    duties: Maybe<
        Array<
            Maybe<
                { __typename?: "Duty" } & Pick<
                    Duty,
                    "dutyId" | "name" | "description"
                >
            >
        >
    >;
};

export type AddEnrollmentMutationVariables = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type AddEnrollmentMutation = { __typename?: "Mutation" } & {
    addEnrollment: Maybe<
        { __typename?: "Enrollment" } & Pick<
            Enrollment,
            | "enrollmentYear"
            | "qualificationId"
            | "firstYearEstimated"
            | "secondYearEstimated"
            | "thirdYearEstimated"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type EditEnrollmentMutationVariables = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type EditEnrollmentMutation = { __typename?: "Mutation" } & {
    editEnrollment: Maybe<
        { __typename?: "Enrollment" } & Pick<
            Enrollment,
            | "enrollmentYear"
            | "qualificationId"
            | "firstYearEstimated"
            | "secondYearEstimated"
            | "thirdYearEstimated"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type DeleteEnrollmentMutationVariables = {
    enrollment?: Maybe<EnrollmentInput>;
};

export type DeleteEnrollmentMutation = { __typename?: "Mutation" } & {
    deleteEnrollment: Maybe<
        { __typename?: "Enrollment" } & Pick<
            Enrollment,
            | "enrollmentYear"
            | "qualificationId"
            | "firstYearEstimated"
            | "secondYearEstimated"
            | "thirdYearEstimated"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type EnrollmentQueryVariables = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
};

export type EnrollmentQuery = { __typename?: "Query" } & {
    enrollment: Maybe<
        { __typename?: "Enrollment" } & Pick<
            Enrollment,
            | "enrollmentYear"
            | "firstYearEstimated"
            | "secondYearEstimated"
            | "thirdYearEstimated"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name"
                    >
                >;
            }
    >;
};

export type EnrollmentsQueryVariables = {};

export type EnrollmentsQuery = { __typename?: "Query" } & {
    enrollments: Maybe<
        Array<
            Maybe<
                { __typename?: "Enrollment" } & Pick<
                    Enrollment,
                    | "enrollmentYear"
                    | "qualificationId"
                    | "firstYearEstimated"
                    | "secondYearEstimated"
                    | "thirdYearEstimated"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                "qualificationId" | "name"
                            >
                        >;
                    }
            >
        >
    >;
};

export type EnrollmentsByQualificationQueryVariables = {
    qualificationId?: Maybe<Scalars["String"]>;
};

export type EnrollmentsByQualificationQuery = { __typename?: "Query" } & {
    enrollmentsByQualification: Maybe<
        Array<
            Maybe<
                { __typename?: "Enrollment" } & Pick<
                    Enrollment,
                    | "enrollmentYear"
                    | "qualificationId"
                    | "firstYearEstimated"
                    | "secondYearEstimated"
                    | "thirdYearEstimated"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                "qualificationId" | "name"
                            >
                        >;
                    }
            >
        >
    >;
};

export type EnrollmentsByYearQueryVariables = {
    enrollmentYear?: Maybe<Scalars["String"]>;
};

export type EnrollmentsByYearQuery = { __typename?: "Query" } & {
    enrollmentsByYear: Maybe<
        Array<
            Maybe<
                { __typename?: "Enrollment" } & Pick<
                    Enrollment,
                    | "enrollmentYear"
                    | "qualificationId"
                    | "firstYearEstimated"
                    | "secondYearEstimated"
                    | "thirdYearEstimated"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                "qualificationId" | "name"
                            >
                        >;
                    }
            >
        >
    >;
};

export type EventQueryVariables = {
    eventId: Scalars["String"];
};

export type EventQuery = { __typename?: "Query" } & {
    event: Maybe<
        { __typename?: "Event" } & Pick<Event, "eventId" | "description">
    >;
};

export type EventsQueryVariables = {};

export type EventsQuery = { __typename?: "Query" } & {
    events: Maybe<
        Array<
            Maybe<
                { __typename?: "Event" } & Pick<
                    Event,
                    "eventId" | "description"
                >
            >
        >
    >;
};

export type AddFacultyMutationVariables = {
    faculty?: Maybe<FacultyInput>;
};

export type AddFacultyMutation = { __typename?: "Mutation" } & {
    addFaculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type EditFacultyMutationVariables = {
    faculty?: Maybe<FacultyInput>;
};

export type EditFacultyMutation = { __typename?: "Mutation" } & {
    addFaculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type DeleteFacultyMutationVariables = {
    faculty?: Maybe<FacultyInput>;
};

export type DeleteFacultyMutation = { __typename?: "Mutation" } & {
    deleteFaculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type FacultyQueryVariables = {
    facultyId: Scalars["String"];
};

export type FacultyQuery = { __typename?: "Query" } & {
    faculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type FacultiesQueryVariables = {};

export type FacultiesQuery = { __typename?: "Query" } & {
    faculties: Maybe<
        Array<
            Maybe<
                { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
            >
        >
    >;
};

export type AddModuleMutationVariables = {
    module?: Maybe<ModuleInput>;
};

export type AddModuleMutation = { __typename?: "Mutation" } & {
    addModule: Maybe<
        { __typename?: "Module" } & Pick<
            Module,
            | "moduleId"
            | "name"
            | "type"
            | "assessmentMethod"
            | "nqfLevel"
            | "credits"
            | "qualificationId"
            | "offeringTypeId"
            | "disciplineId"
            | "venueId"
            | "blockId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "stackId"
            | "studyPeriod"
            | "groupSize"
            | "lecturedBy"
            | "moderation"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name" | "type" | "departmentId"
                    > & {
                            department: Maybe<
                                { __typename?: "Department" } & Pick<
                                    Department,
                                    "departmentId" | "name" | "facultyId"
                                > & {
                                        faculty: Maybe<
                                            { __typename?: "Faculty" } & Pick<
                                                Faculty,
                                                "facultyId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                discipline: Maybe<
                    { __typename?: "Discipline" } & Pick<
                        Discipline,
                        "disciplineId" | "name" | "description"
                    >
                >;
                venue: Maybe<
                    { __typename?: "Venue" } & Pick<
                        Venue,
                        "venueId" | "campus" | "capacity" | "type"
                    >
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<
                        Block,
                        "blockId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type AddModulesMutationVariables = {
    modules?: Maybe<Array<Maybe<ModuleInput>>>;
};

export type AddModulesMutation = { __typename?: "Mutation" } & {
    addModules: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type EditModuleMutationVariables = {
    module?: Maybe<ModuleInput>;
};

export type EditModuleMutation = { __typename?: "Mutation" } & {
    editModule: Maybe<
        { __typename?: "Module" } & Pick<
            Module,
            | "moduleId"
            | "name"
            | "type"
            | "assessmentMethod"
            | "nqfLevel"
            | "credits"
            | "qualificationId"
            | "offeringTypeId"
            | "disciplineId"
            | "venueId"
            | "blockId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "stackId"
            | "studyPeriod"
            | "groupSize"
            | "lecturedBy"
            | "moderation"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name" | "type" | "departmentId"
                    > & {
                            department: Maybe<
                                { __typename?: "Department" } & Pick<
                                    Department,
                                    "departmentId" | "name" | "facultyId"
                                > & {
                                        faculty: Maybe<
                                            { __typename?: "Faculty" } & Pick<
                                                Faculty,
                                                "facultyId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                discipline: Maybe<
                    { __typename?: "Discipline" } & Pick<
                        Discipline,
                        "disciplineId" | "name" | "description"
                    >
                >;
                venue: Maybe<
                    { __typename?: "Venue" } & Pick<
                        Venue,
                        "venueId" | "campus" | "capacity" | "type"
                    >
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<
                        Block,
                        "blockId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type DeleteModuleMutationVariables = {
    module?: Maybe<ModuleInput>;
};

export type DeleteModuleMutation = { __typename?: "Mutation" } & {
    deleteModule: Maybe<
        { __typename?: "Module" } & Pick<
            Module,
            | "moduleId"
            | "name"
            | "type"
            | "assessmentMethod"
            | "nqfLevel"
            | "credits"
            | "qualificationId"
            | "offeringTypeId"
            | "disciplineId"
            | "venueId"
            | "blockId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "stackId"
            | "studyPeriod"
            | "groupSize"
            | "lecturedBy"
            | "moderation"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name" | "type" | "departmentId"
                    > & {
                            department: Maybe<
                                { __typename?: "Department" } & Pick<
                                    Department,
                                    "departmentId" | "name" | "facultyId"
                                > & {
                                        faculty: Maybe<
                                            { __typename?: "Faculty" } & Pick<
                                                Faculty,
                                                "facultyId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                discipline: Maybe<
                    { __typename?: "Discipline" } & Pick<
                        Discipline,
                        "disciplineId" | "name" | "description"
                    >
                >;
                venue: Maybe<
                    { __typename?: "Venue" } & Pick<
                        Venue,
                        "venueId" | "campus" | "capacity" | "type"
                    >
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<
                        Block,
                        "blockId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type ModuleQueryVariables = {
    moduleId: Scalars["String"];
    blockId: Scalars["String"];
    offeringTypeId: Scalars["String"];
    qualificationId: Scalars["String"];
};

export type ModuleQuery = { __typename?: "Query" } & {
    module: Maybe<
        { __typename?: "Module" } & Pick<
            Module,
            | "moduleId"
            | "name"
            | "type"
            | "assessmentMethod"
            | "nqfLevel"
            | "credits"
            | "qualificationId"
            | "offeringTypeId"
            | "disciplineId"
            | "venueId"
            | "blockId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "stackId"
            | "studyPeriod"
            | "groupSize"
            | "lecturedBy"
            | "moderation"
        > & {
                qualification: Maybe<
                    { __typename?: "Qualification" } & Pick<
                        Qualification,
                        "qualificationId" | "name" | "type" | "departmentId"
                    > & {
                            department: Maybe<
                                { __typename?: "Department" } & Pick<
                                    Department,
                                    "departmentId" | "name" | "facultyId"
                                > & {
                                        faculty: Maybe<
                                            { __typename?: "Faculty" } & Pick<
                                                Faculty,
                                                "facultyId" | "name"
                                            >
                                        >;
                                    }
                            >;
                        }
                >;
                offeringType: Maybe<
                    { __typename?: "OfferingType" } & Pick<
                        OfferingType,
                        "offeringTypeId" | "description"
                    >
                >;
                discipline: Maybe<
                    { __typename?: "Discipline" } & Pick<
                        Discipline,
                        "disciplineId" | "name" | "description"
                    >
                >;
                venue: Maybe<
                    { __typename?: "Venue" } & Pick<
                        Venue,
                        "venueId" | "campus" | "capacity" | "type"
                    >
                >;
                block: Maybe<
                    { __typename?: "Block" } & Pick<
                        Block,
                        "blockId" | "name" | "description"
                    >
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        | "userId"
                        | "email"
                        | "firstName"
                        | "lastName"
                        | "photoUrl"
                        | "disciplineId"
                        | "positionId"
                        | "workFocusName"
                        | "gender"
                        | "nationality"
                    > & {
                            discipline: Maybe<
                                { __typename?: "Discipline" } & Pick<
                                    Discipline,
                                    "disciplineId" | "name" | "description"
                                >
                            >;
                            position: Maybe<
                                { __typename?: "Position" } & Pick<
                                    Position,
                                    "positionId" | "name" | "description"
                                >
                            >;
                            workFocus: Maybe<
                                { __typename?: "WorkFocus" } & Pick<
                                    WorkFocus,
                                    | "name"
                                    | "teachingRatio"
                                    | "researchRatio"
                                    | "serviceRatio"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type ModulesQueryVariables = {};

export type ModulesQuery = { __typename?: "Query" } & {
    modules: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByDisciplineQueryVariables = {
    disciplineId: Scalars["String"];
};

export type ModulesByDisciplineQuery = { __typename?: "Query" } & {
    modulesByDiscipline: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByUnassignedQueryVariables = {};

export type ModulesByUnassignedQuery = { __typename?: "Query" } & {
    modulesByUnassigned: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByUnassignedAndDisciplineQueryVariables = {
    disciplineId?: Maybe<Scalars["String"]>;
};

export type ModulesByUnassignedAndDisciplineQuery = { __typename?: "Query" } & {
    modulesByUnassignedAndDiscipline: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByUserQueryVariables = {
    userId: Scalars["String"];
};

export type ModulesByUserQuery = { __typename?: "Query" } & {
    modulesByUser: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByModeratorQueryVariables = {
    moderatorId: Scalars["String"];
};

export type ModulesByModeratorQuery = { __typename?: "Query" } & {
    modulesByModerator: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByCoordinatorQueryVariables = {
    coordinatorId: Scalars["String"];
};

export type ModulesByCoordinatorQuery = { __typename?: "Query" } & {
    modulesByCoordinator: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type ModulesByStackQueryVariables = {
    stackId: Scalars["String"];
};

export type ModulesByStackQuery = { __typename?: "Query" } & {
    modulesByStack: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "credits"
                    | "qualificationId"
                    | "offeringTypeId"
                    | "disciplineId"
                    | "venueId"
                    | "blockId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "stackId"
                    | "studyPeriod"
                    | "groupSize"
                    | "lecturedBy"
                    | "moderation"
                > & {
                        qualification: Maybe<
                            { __typename?: "Qualification" } & Pick<
                                Qualification,
                                | "qualificationId"
                                | "name"
                                | "type"
                                | "departmentId"
                            > & {
                                    department: Maybe<
                                        { __typename?: "Department" } & Pick<
                                            Department,
                                            | "departmentId"
                                            | "name"
                                            | "facultyId"
                                        > & {
                                                faculty: Maybe<
                                                    {
                                                        __typename?: "Faculty";
                                                    } & Pick<
                                                        Faculty,
                                                        "facultyId" | "name"
                                                    >
                                                >;
                                            }
                                    >;
                                }
                        >;
                        offeringType: Maybe<
                            { __typename?: "OfferingType" } & Pick<
                                OfferingType,
                                "offeringTypeId" | "description"
                            >
                        >;
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        venue: Maybe<
                            { __typename?: "Venue" } & Pick<
                                Venue,
                                "venueId" | "campus" | "capacity" | "type"
                            >
                        >;
                        block: Maybe<
                            { __typename?: "Block" } & Pick<
                                Block,
                                "blockId" | "name" | "description"
                            >
                        >;
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                | "userId"
                                | "email"
                                | "firstName"
                                | "lastName"
                                | "photoUrl"
                                | "disciplineId"
                                | "positionId"
                                | "workFocusName"
                                | "gender"
                                | "nationality"
                            > & {
                                    discipline: Maybe<
                                        { __typename?: "Discipline" } & Pick<
                                            Discipline,
                                            | "disciplineId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    position: Maybe<
                                        { __typename?: "Position" } & Pick<
                                            Position,
                                            | "positionId"
                                            | "name"
                                            | "description"
                                        >
                                    >;
                                    workFocus: Maybe<
                                        { __typename?: "WorkFocus" } & Pick<
                                            WorkFocus,
                                            | "name"
                                            | "teachingRatio"
                                            | "researchRatio"
                                            | "serviceRatio"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type AddOfferingTypeMutationVariables = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type AddOfferingTypeMutation = { __typename?: "Mutation" } & {
    addOfferingType: Maybe<
        { __typename?: "OfferingType" } & Pick<
            OfferingType,
            "offeringTypeId" | "description"
        >
    >;
};

export type EditOfferingTypeMutationVariables = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type EditOfferingTypeMutation = { __typename?: "Mutation" } & {
    editOfferingType: Maybe<
        { __typename?: "OfferingType" } & Pick<
            OfferingType,
            "offeringTypeId" | "description"
        >
    >;
};

export type DeleteOfferingTypeMutationVariables = {
    offeringType?: Maybe<OfferingTypeInput>;
};

export type DeleteOfferingTypeMutation = { __typename?: "Mutation" } & {
    deleteOfferingType: Maybe<
        { __typename?: "OfferingType" } & Pick<
            OfferingType,
            "offeringTypeId" | "description"
        >
    >;
};

export type OfferingTypeQueryVariables = {
    offeringTypeId: Scalars["String"];
};

export type OfferingTypeQuery = { __typename?: "Query" } & {
    offeringType: Maybe<
        { __typename?: "OfferingType" } & Pick<
            OfferingType,
            "offeringTypeId" | "description"
        >
    >;
};

export type OfferingTypesQueryVariables = {};

export type OfferingTypesQuery = { __typename?: "Query" } & {
    offeringTypes: Maybe<
        Array<
            Maybe<
                { __typename?: "OfferingType" } & Pick<
                    OfferingType,
                    "offeringTypeId" | "description"
                >
            >
        >
    >;
};

export type AddPositionMutationVariables = {
    position?: Maybe<PositionInput>;
};

export type AddPositionMutation = { __typename?: "Mutation" } & {
    addPosition: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type EditPositionMutationVariables = {
    position?: Maybe<PositionInput>;
};

export type EditPositionMutation = { __typename?: "Mutation" } & {
    editPosition: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type DeletePositionMutationVariables = {
    position?: Maybe<PositionInput>;
};

export type DeletePositionMutation = { __typename?: "Mutation" } & {
    deletePosition: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type PositionQueryVariables = {
    positionId: Scalars["String"];
};

export type PositionQuery = { __typename?: "Query" } & {
    position: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type PositionsQueryVariables = {};

export type PositionsQuery = { __typename?: "Query" } & {
    positions: Maybe<
        Array<
            Maybe<
                { __typename?: "Position" } & Pick<
                    Position,
                    "positionId" | "name" | "description"
                >
            >
        >
    >;
};

export type AddQualificationMutationVariables = {
    qualification?: Maybe<QualificationInput>;
};

export type AddQualificationMutation = { __typename?: "Mutation" } & {
    addQualification: Maybe<
        { __typename?: "Qualification" } & Pick<
            Qualification,
            "qualificationId" | "name" | "type" | "departmentId"
        > & {
                department: Maybe<
                    { __typename?: "Department" } & Pick<
                        Department,
                        "departmentId" | "name"
                    > & {
                            faculty: Maybe<
                                { __typename?: "Faculty" } & Pick<
                                    Faculty,
                                    "facultyId" | "name"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type EditQualificationMutationVariables = {
    qualification?: Maybe<QualificationInput>;
};

export type EditQualificationMutation = { __typename?: "Mutation" } & {
    editQualification: Maybe<
        { __typename?: "Qualification" } & Pick<
            Qualification,
            "qualificationId" | "name" | "type" | "departmentId"
        > & {
                department: Maybe<
                    { __typename?: "Department" } & Pick<
                        Department,
                        "departmentId" | "name"
                    > & {
                            faculty: Maybe<
                                { __typename?: "Faculty" } & Pick<
                                    Faculty,
                                    "facultyId" | "name"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type DeleteQualificationMutationVariables = {
    qualification?: Maybe<QualificationInput>;
};

export type DeleteQualificationMutation = { __typename?: "Mutation" } & {
    deleteQualification: Maybe<
        { __typename?: "Qualification" } & Pick<
            Qualification,
            "qualificationId" | "name" | "type" | "departmentId"
        > & {
                department: Maybe<
                    { __typename?: "Department" } & Pick<
                        Department,
                        "departmentId" | "name"
                    > & {
                            faculty: Maybe<
                                { __typename?: "Faculty" } & Pick<
                                    Faculty,
                                    "facultyId" | "name"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type QualificationQueryVariables = {
    qualificationId: Scalars["String"];
};

export type QualificationQuery = { __typename?: "Query" } & {
    qualification: Maybe<
        { __typename?: "Qualification" } & Pick<
            Qualification,
            "qualificationId" | "name" | "type" | "departmentId"
        > & {
                department: Maybe<
                    { __typename?: "Department" } & Pick<
                        Department,
                        "departmentId" | "name"
                    > & {
                            faculty: Maybe<
                                { __typename?: "Faculty" } & Pick<
                                    Faculty,
                                    "facultyId" | "name"
                                >
                            >;
                        }
                >;
            }
    >;
};

export type QualificationsQueryVariables = {};

export type QualificationsQuery = { __typename?: "Query" } & {
    qualifications: Maybe<
        Array<
            Maybe<
                { __typename?: "Qualification" } & Pick<
                    Qualification,
                    "qualificationId" | "name" | "type" | "departmentId"
                > & {
                        department: Maybe<
                            { __typename?: "Department" } & Pick<
                                Department,
                                "departmentId" | "name"
                            > & {
                                    faculty: Maybe<
                                        { __typename?: "Faculty" } & Pick<
                                            Faculty,
                                            "facultyId" | "name"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type QualificationsNoEnrollmentQueryVariables = {};

export type QualificationsNoEnrollmentQuery = { __typename?: "Query" } & {
    qualificationsNoEnrollment: Maybe<
        Array<
            Maybe<
                { __typename?: "Qualification" } & Pick<
                    Qualification,
                    "qualificationId" | "name" | "type" | "departmentId"
                > & {
                        department: Maybe<
                            { __typename?: "Department" } & Pick<
                                Department,
                                "departmentId" | "name"
                            > & {
                                    faculty: Maybe<
                                        { __typename?: "Faculty" } & Pick<
                                            Faculty,
                                            "facultyId" | "name"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
    >;
};

export type AddStudentMutationVariables = {
    student?: Maybe<StudentInput>;
};

export type AddStudentMutation = { __typename?: "Mutation" } & {
    addStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            | "studentId"
            | "email"
            | "firstName"
            | "lastName"
            | "type"
            | "title"
            | "year"
        >
    >;
};

export type EditStudentMutationVariables = {
    student?: Maybe<StudentInput>;
};

export type EditStudentMutation = { __typename?: "Mutation" } & {
    editStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            | "studentId"
            | "email"
            | "firstName"
            | "lastName"
            | "type"
            | "title"
            | "year"
        >
    >;
};

export type DeleteStudentMutationVariables = {
    student?: Maybe<StudentInput>;
};

export type DeleteStudentMutation = { __typename?: "Mutation" } & {
    deleteStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            | "studentId"
            | "email"
            | "firstName"
            | "lastName"
            | "type"
            | "title"
            | "year"
        >
    >;
};

export type StudentQueryVariables = {
    studentId: Scalars["String"];
};

export type StudentQuery = { __typename?: "Query" } & {
    student: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            | "studentId"
            | "email"
            | "firstName"
            | "lastName"
            | "type"
            | "title"
            | "year"
        >
    >;
};

export type StudentsQueryVariables = {};

export type StudentsQuery = { __typename?: "Query" } & {
    students: Maybe<
        Array<
            Maybe<
                { __typename?: "Student" } & Pick<
                    Student,
                    | "studentId"
                    | "email"
                    | "firstName"
                    | "lastName"
                    | "type"
                    | "title"
                    | "year"
                >
            >
        >
    >;
};

export type UploadlProfilePictureMutationVariables = {
    file: Scalars["Upload"];
    userId: Scalars["String"];
};

export type UploadlProfilePictureMutation = { __typename?: "Mutation" } & {
    uploadProfilePicture: { __typename?: "File" } & Pick<
        File,
        "id" | "path" | "filename" | "mimetype"
    >;
};

export type UploadEvidenceMutationVariables = {
    file: Scalars["Upload"];
    activityId: Scalars["String"];
};

export type UploadEvidenceMutation = { __typename?: "Mutation" } & {
    uploadEvidence: { __typename?: "File" } & Pick<
        File,
        "id" | "path" | "filename" | "mimetype"
    >;
};

export type AddUserMutationVariables = {
    user?: Maybe<UserInput>;
};

export type AddUserMutation = { __typename?: "Mutation" } & {
    addUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "email"
            | "firstName"
            | "lastName"
            | "photoUrl"
            | "disciplineId"
            | "positionId"
            | "gender"
            | "workFocusName"
            | "nationality"
        >
    >;
};

export type EditUserMutationVariables = {
    user?: Maybe<UserInput>;
};

export type EditUserMutation = { __typename?: "Mutation" } & {
    editUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "email"
            | "firstName"
            | "lastName"
            | "photoUrl"
            | "disciplineId"
            | "positionId"
            | "workFocusName"
            | "gender"
            | "nationality"
        >
    >;
};

export type DeleteUserMutationVariables = {
    user?: Maybe<UserInput>;
};

export type DeleteUserMutation = { __typename?: "Mutation" } & {
    deleteUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "email"
            | "firstName"
            | "lastName"
            | "photoUrl"
            | "disciplineId"
            | "positionId"
            | "gender"
            | "workFocusName"
            | "nationality"
        >
    >;
};

export type ChangePasswordMutationVariables = {
    userId?: Maybe<Scalars["String"]>;
    oldPassword?: Maybe<Scalars["String"]>;
    newPassword?: Maybe<Scalars["String"]>;
};

export type ChangePasswordMutation = { __typename?: "Mutation" } & {
    changePassword: Maybe<{ __typename?: "User" } & Pick<User, "userId">>;
};

export type UserQueryVariables = {
    userId: Scalars["String"];
};

export type UserQuery = { __typename?: "Query" } & {
    user: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "email"
            | "firstName"
            | "lastName"
            | "photoUrl"
            | "workFocusName"
            | "gender"
            | "nationality"
        > & {
                discipline: Maybe<
                    { __typename?: "Discipline" } & Pick<
                        Discipline,
                        "disciplineId" | "name" | "description"
                    >
                >;
                position: Maybe<
                    { __typename?: "Position" } & Pick<
                        Position,
                        "positionId" | "name" | "description"
                    >
                >;
                workFocus: Maybe<
                    { __typename?: "WorkFocus" } & Pick<
                        WorkFocus,
                        | "name"
                        | "teachingRatio"
                        | "researchRatio"
                        | "serviceRatio"
                    >
                >;
            }
    >;
};

export type UsersQueryVariables = {};

export type UsersQuery = { __typename?: "Query" } & {
    users: Maybe<
        Array<
            Maybe<
                { __typename?: "User" } & Pick<
                    User,
                    | "userId"
                    | "email"
                    | "firstName"
                    | "lastName"
                    | "photoUrl"
                    | "disciplineId"
                    | "positionId"
                    | "workFocusName"
                    | "gender"
                    | "nationality"
                > & {
                        discipline: Maybe<
                            { __typename?: "Discipline" } & Pick<
                                Discipline,
                                "disciplineId" | "name" | "description"
                            >
                        >;
                        position: Maybe<
                            { __typename?: "Position" } & Pick<
                                Position,
                                "positionId" | "name" | "description"
                            >
                        >;
                        workFocus: Maybe<
                            { __typename?: "WorkFocus" } & Pick<
                                WorkFocus,
                                | "name"
                                | "teachingRatio"
                                | "researchRatio"
                                | "serviceRatio"
                            >
                        >;
                    }
            >
        >
    >;
};

export type AddVenueMutationVariables = {
    venue?: Maybe<VenueInput>;
};

export type AddVenueMutation = { __typename?: "Mutation" } & {
    addVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity" | "type"
        >
    >;
};

export type EditVenueMutationVariables = {
    venue?: Maybe<VenueInput>;
};

export type EditVenueMutation = { __typename?: "Mutation" } & {
    editVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity" | "type"
        >
    >;
};

export type DeleteVenueMutationVariables = {
    venue?: Maybe<VenueInput>;
};

export type DeleteVenueMutation = { __typename?: "Mutation" } & {
    deleteVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity" | "type"
        >
    >;
};

export type VenueQueryVariables = {
    venueId: Scalars["String"];
};

export type VenueQuery = { __typename?: "Query" } & {
    venue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity" | "type"
        >
    >;
};

export type VenuesQueryVariables = {};

export type VenuesQuery = { __typename?: "Query" } & {
    venues: Maybe<
        Array<
            Maybe<
                { __typename?: "Venue" } & Pick<
                    Venue,
                    "venueId" | "campus" | "capacity" | "type"
                >
            >
        >
    >;
};

export type AddWorkFocusMutationVariables = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type AddWorkFocusMutation = { __typename?: "Mutation" } & {
    addWorkFocus: Maybe<
        { __typename?: "WorkFocus" } & Pick<
            WorkFocus,
            "name" | "teachingRatio" | "researchRatio" | "serviceRatio"
        >
    >;
};

export type EditWorkFocusMutationVariables = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type EditWorkFocusMutation = { __typename?: "Mutation" } & {
    editWorkFocus: Maybe<
        { __typename?: "WorkFocus" } & Pick<
            WorkFocus,
            "name" | "teachingRatio" | "researchRatio" | "serviceRatio"
        >
    >;
};

export type DeleteWorkFocusMutationVariables = {
    workFocus?: Maybe<WorkFocusInput>;
};

export type DeleteWorkFocusMutation = { __typename?: "Mutation" } & {
    deleteWorkFocus: Maybe<
        { __typename?: "WorkFocus" } & Pick<
            WorkFocus,
            "name" | "teachingRatio" | "researchRatio" | "serviceRatio"
        >
    >;
};

export type WorkFocusQueryVariables = {
    name: Scalars["String"];
};

export type WorkFocusQuery = { __typename?: "Query" } & {
    workFocus: Maybe<
        { __typename?: "WorkFocus" } & Pick<
            WorkFocus,
            "name" | "teachingRatio" | "researchRatio" | "serviceRatio"
        >
    >;
};

export type WorkFocusesQueryVariables = {};

export type WorkFocusesQuery = { __typename?: "Query" } & {
    workFocuses: Maybe<
        Array<
            Maybe<
                { __typename?: "WorkFocus" } & Pick<
                    WorkFocus,
                    "name" | "teachingRatio" | "researchRatio" | "serviceRatio"
                >
            >
        >
    >;
};

export type TeachingHoursQueryVariables = {
    userId: Scalars["String"];
};

export type TeachingHoursQuery = { __typename?: "Query" } & Pick<
    Query,
    "teachingHours"
>;

export type ResearchHoursQueryVariables = {
    userId: Scalars["String"];
};

export type ResearchHoursQuery = { __typename?: "Query" } & Pick<
    Query,
    "researchHours"
>;

export type ServiceHoursQueryVariables = {
    userId: Scalars["String"];
};

export type ServiceHoursQuery = { __typename?: "Query" } & Pick<
    Query,
    "serviceHours"
>;

export type AnnualHoursQueryVariables = {};

export type AnnualHoursQuery = { __typename?: "Query" } & Pick<
    Query,
    "annualHours"
>;

export type AcademicAdministrationWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type AcademicAdministrationWorkloadPerUserQuery = {
    __typename?: "Query";
} & {
    academicAdministrationWorkloadPerUser: Maybe<
        { __typename?: "AcademicAdministrationWorkloadPerUser" } & Pick<
            AcademicAdministrationWorkloadPerUser,
            | "academicAdministrationGlobalTarrif"
            | "academicAdministrationTotalHoursPerUser"
            | "academicAdministrationPercentageOfWorkFocusPerUser"
            | "academicAdministrationPercentageOfAnnualHoursPerUser"
        > & {
                academicAdministrationWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "AcademicAdministrationWorkloadPerActivity";
                            } & Pick<
                                AcademicAdministrationWorkloadPerActivity,
                                | "academicAdministrationTotalHoursPerActivity"
                                | "academicAdministrationPercentageOfWorkFocusPerActivity"
                                | "academicAdministrationPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type CommunityInstructionWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type CommunityInstructionWorkloadPerUserQuery = {
    __typename?: "Query";
} & {
    communityInstructionWorkloadPerUser: Maybe<
        { __typename?: "CommunityInstructionWorkloadPerUser" } & Pick<
            CommunityInstructionWorkloadPerUser,
            | "communityInstructionGlobalTarrif"
            | "communityInstructionTotalHoursPerUser"
            | "communityInstructionPercentageOfWorkFocusPerUser"
            | "communityInstructionPercentageOfAnnualHoursPerUser"
        > & {
                communityInstructionWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "CommunityInstructionWorkloadPerActivity";
                            } & Pick<
                                CommunityInstructionWorkloadPerActivity,
                                | "communityInstructionTotalHoursPerActivity"
                                | "communityInstructionPercentageOfWorkFocusPerActivity"
                                | "communityInstructionPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type ExecutiveManagementWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type ExecutiveManagementWorkloadPerUserQuery = {
    __typename?: "Query";
} & {
    executiveManagementWorkloadPerUser: Maybe<
        { __typename?: "ExecutiveManagementWorkloadPerUser" } & Pick<
            ExecutiveManagementWorkloadPerUser,
            | "executiveManagementGlobalTarrif"
            | "executiveManagementTotalHoursPerUser"
            | "executiveManagementPercentageOfWorkFocusPerUser"
            | "executiveManagementPercentageOfAnnualHoursPerUser"
        > & {
                executiveManagementWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "ExecutiveManagementWorkloadPerActivity";
                            } & Pick<
                                ExecutiveManagementWorkloadPerActivity,
                                | "executiveManagementTotalHoursPerActivity"
                                | "executiveManagementPercentageOfWorkFocusPerActivity"
                                | "executiveManagementPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type FormalInstructionWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionWorkloadPerUserQuery = { __typename?: "Query" } & {
    formalInstructionWorkloadPerUser: Maybe<
        { __typename?: "FormalInstructionWorkloadPerUser" } & Pick<
            FormalInstructionWorkloadPerUser,
            | "formalInstructionTotalHoursPerUser"
            | "formalInstructionPercentageOfWorkFocusPerUser"
            | "formalInstructionPercentageOfAnnualHoursPerUser"
        > & {
                formalInstructionWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "FormalInstructionWorkloadPerActivity";
                            } & Pick<
                                FormalInstructionWorkloadPerActivity,
                                | "formalInstructionStudentsEnrolled"
                                | "formalInstructionBaseContactHours"
                                | "formalInstructionCoordinationHours"
                                | "formalInstructionStudentSupportHours"
                                | "formalInstructionPreparationTimeHours"
                                | "formalInstructionAssessmentSettingHours"
                                | "formalInstructionExamMarkingHours"
                                | "formalInstructionCourseworkMarkingHours"
                                | "formalInstructionFeedbackHours"
                                | "formalInstructionFormativeAssessmentHours"
                                | "formalInstructionModerationHours"
                                | "formalInstructionOtherHoursPerActivity"
                                | "formalInstructionTotalHoursPerActivity"
                                | "formalInstructionPercentageOfWorkFocusPerActivity"
                                | "formalInstructionPercentageOfAnnualHoursPerActivity"
                            > & {
                                    formalInstructionActivity: Maybe<
                                        {
                                            __typename?: "FormalInstructionActivity";
                                        } & Pick<
                                            FormalInstructionActivity,
                                            "activityId"
                                        > & {
                                                duty: Maybe<
                                                    {
                                                        __typename?: "Duty";
                                                    } & Pick<
                                                        Duty,
                                                        "dutyId" | "name"
                                                    >
                                                >;
                                                module: Maybe<
                                                    {
                                                        __typename?: "Module";
                                                    } & Pick<
                                                        Module,
                                                        | "moduleId"
                                                        | "name"
                                                        | "type"
                                                        | "assessmentMethod"
                                                        | "nqfLevel"
                                                        | "stackId"
                                                        | "qualificationId"
                                                        | "offeringTypeId"
                                                        | "disciplineId"
                                                        | "venueId"
                                                        | "blockId"
                                                        | "userId"
                                                        | "coordinatorId"
                                                        | "moderatorId"
                                                        | "credits"
                                                        | "groupSize"
                                                        | "lecturedBy"
                                                        | "moderation"
                                                    > & {
                                                            qualification: Maybe<
                                                                {
                                                                    __typename?: "Qualification";
                                                                } & Pick<
                                                                    Qualification,
                                                                    | "qualificationId"
                                                                    | "name"
                                                                >
                                                            >;
                                                            offeringType: Maybe<
                                                                {
                                                                    __typename?: "OfferingType";
                                                                } & Pick<
                                                                    OfferingType,
                                                                    | "offeringTypeId"
                                                                    | "description"
                                                                >
                                                            >;
                                                            discipline: Maybe<
                                                                {
                                                                    __typename?: "Discipline";
                                                                } & Pick<
                                                                    Discipline,
                                                                    | "disciplineId"
                                                                    | "name"
                                                                >
                                                            >;
                                                            venue: Maybe<
                                                                {
                                                                    __typename?: "Venue";
                                                                } & Pick<
                                                                    Venue,
                                                                    | "venueId"
                                                                    | "campus"
                                                                    | "capacity"
                                                                >
                                                            >;
                                                            block: Maybe<
                                                                {
                                                                    __typename?: "Block";
                                                                } & Pick<
                                                                    Block,
                                                                    | "blockId"
                                                                    | "name"
                                                                >
                                                            >;
                                                            user: Maybe<
                                                                {
                                                                    __typename?: "User";
                                                                } & Pick<
                                                                    User,
                                                                    | "userId"
                                                                    | "firstName"
                                                                    | "lastName"
                                                                    | "email"
                                                                >
                                                            >;
                                                            coordinator: Maybe<
                                                                {
                                                                    __typename?: "User";
                                                                } & Pick<
                                                                    User,
                                                                    | "userId"
                                                                    | "firstName"
                                                                    | "lastName"
                                                                    | "email"
                                                                >
                                                            >;
                                                            moderator: Maybe<
                                                                {
                                                                    __typename?: "User";
                                                                } & Pick<
                                                                    User,
                                                                    | "userId"
                                                                    | "firstName"
                                                                    | "lastName"
                                                                    | "email"
                                                                >
                                                            >;
                                                        }
                                                >;
                                                block: Maybe<
                                                    {
                                                        __typename?: "Block";
                                                    } & Pick<
                                                        Block,
                                                        | "blockId"
                                                        | "name"
                                                        | "description"
                                                    >
                                                >;
                                                offeringType: Maybe<
                                                    {
                                                        __typename?: "OfferingType";
                                                    } & Pick<
                                                        OfferingType,
                                                        | "offeringTypeId"
                                                        | "description"
                                                    >
                                                >;
                                                qualification: Maybe<
                                                    {
                                                        __typename?: "Qualification";
                                                    } & Pick<
                                                        Qualification,
                                                        | "qualificationId"
                                                        | "name"
                                                        | "type"
                                                        | "departmentId"
                                                    >
                                                >;
                                                user: Maybe<
                                                    {
                                                        __typename?: "User";
                                                    } & Pick<
                                                        User,
                                                        | "userId"
                                                        | "email"
                                                        | "firstName"
                                                        | "lastName"
                                                        | "photoUrl"
                                                        | "workFocusName"
                                                        | "gender"
                                                        | "nationality"
                                                    > & {
                                                            discipline: Maybe<
                                                                {
                                                                    __typename?: "Discipline";
                                                                } & Pick<
                                                                    Discipline,
                                                                    | "disciplineId"
                                                                    | "name"
                                                                    | "description"
                                                                >
                                                            >;
                                                            position: Maybe<
                                                                {
                                                                    __typename?: "Position";
                                                                } & Pick<
                                                                    Position,
                                                                    | "positionId"
                                                                    | "name"
                                                                    | "description"
                                                                >
                                                            >;
                                                            workFocus: Maybe<
                                                                {
                                                                    __typename?: "WorkFocus";
                                                                } & Pick<
                                                                    WorkFocus,
                                                                    | "name"
                                                                    | "teachingRatio"
                                                                    | "researchRatio"
                                                                    | "serviceRatio"
                                                                >
                                                            >;
                                                        }
                                                >;
                                            }
                                    >;
                                }
                        >
                    >
                >;
            }
    >;
};

export type FormalInstructionLectureWeeksQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionLectureWeeksQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionLectureWeeks">;

export type FormalInstructionStudentsEnrolledQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionStudentsEnrolledQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionStudentsEnrolled">;

export type FormalInstructionBaseContactHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionBaseContactHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionBaseContactHours">;

export type FormalInstructionCoordinationHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionCoordinationHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionCoordinationHours">;

export type FormalInstructionStudentSupportHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionStudentSupportHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionStudentSupportHours">;

export type FormalInstructionPreparationTimeHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionPreparationTimeHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionPreparationTimeHours">;

export type FormalInstructionAssessmentSettingHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionAssessmentSettingHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionAssessmentSettingHours">;

export type FormalInstructionExamMarkingHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionExamMarkingHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionExamMarkingHours">;

export type FormalInstructionCourseworkMarkingHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionCourseworkMarkingHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionCourseworkMarkingHours">;

export type FormalInstructionFeedbackHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionFeedbackHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionFeedbackHours">;

export type FormalInstructionFormativeAssessmentHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionFormativeAssessmentHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionFormativeAssessmentHours">;

export type FormalInstructionModerationHoursQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionModerationHoursQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionModerationHours">;

export type FormalInstructionTotalHoursPerActivityQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionTotalHoursPerActivityQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionTotalHoursPerActivity">;

export type FormalInstructionOtherHoursPerActivityQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionOtherHoursPerActivityQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionOtherHoursPerActivity">;

export type FormalInstructionTotalHoursPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionTotalHoursPerUserQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionTotalHoursPerUser">;

export type FormalInstructionPercentageOfWorkFocusPerActivityQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionPercentageOfWorkFocusPerActivityQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionPercentageOfWorkFocusPerActivity">;

export type FormalInstructionPercentageOfWorkFocusPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionPercentageOfWorkFocusPerUserQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionPercentageOfWorkFocusPerUser">;

export type FormalInstructionPercentageOfAnnualHoursPerActivityQueryVariables = {
    activityId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionPercentageOfAnnualHoursPerActivityQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionPercentageOfAnnualHoursPerActivity">;

export type FormalInstructionPercentageOfAnnualHoursPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type FormalInstructionPercentageOfAnnualHoursPerUserQuery = {
    __typename?: "Query";
} & Pick<Query, "formalInstructionPercentageOfAnnualHoursPerUser">;

export type PersonnelDevelopmentWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type PersonnelDevelopmentWorkloadPerUserQuery = {
    __typename?: "Query";
} & {
    personnelDevelopmentWorkloadPerUser: Maybe<
        { __typename?: "PersonnelDevelopmentWorkloadPerUser" } & Pick<
            PersonnelDevelopmentWorkloadPerUser,
            | "personnelDevelopmentGlobalTarrif"
            | "personnelDevelopmentTotalHoursPerUser"
            | "personnelDevelopmentPercentageOfWorkFocusPerUser"
            | "personnelDevelopmentPercentageOfAnnualHoursPerUser"
        > & {
                personnelDevelopmentWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "PersonnelDevelopmentWorkloadPerActivity";
                            } & Pick<
                                PersonnelDevelopmentWorkloadPerActivity,
                                | "personnelDevelopmentTotalHoursPerActivity"
                                | "personnelDevelopmentPercentageOfWorkFocusPerActivity"
                                | "personnelDevelopmentPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type PublicServiceWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type PublicServiceWorkloadPerUserQuery = { __typename?: "Query" } & {
    publicServiceWorkloadPerUser: Maybe<
        { __typename?: "PublicServiceWorkloadPerUser" } & Pick<
            PublicServiceWorkloadPerUser,
            | "publicServiceGlobalTarrif"
            | "publicServiceTotalHoursPerUser"
            | "publicServicePercentageOfWorkFocusPerUser"
            | "publicServicePercentageOfAnnualHoursPerUser"
        > & {
                publicServiceWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "PublicServiceWorkloadPerActivity";
                            } & Pick<
                                PublicServiceWorkloadPerActivity,
                                | "publicServiceTotalHoursPerActivity"
                                | "publicServicePercentageOfWorkFocusPerActivity"
                                | "publicServicePercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type ResearchWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type ResearchWorkloadPerUserQuery = { __typename?: "Query" } & {
    researchWorkloadPerUser: Maybe<
        { __typename?: "ResearchWorkloadPerUser" } & Pick<
            ResearchWorkloadPerUser,
            | "researchGlobalTarrif"
            | "researchTotalHoursPerUser"
            | "researchPercentageOfWorkFocusPerUser"
            | "researchPercentageOfAnnualHoursPerUser"
        > & {
                researchWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "ResearchWorkloadPerActivity";
                            } & Pick<
                                ResearchWorkloadPerActivity,
                                | "researchTotalHoursPerActivity"
                                | "researchPercentageOfWorkFocusPerActivity"
                                | "researchPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export type SupervisionWorkloadPerUserQueryVariables = {
    userId?: Maybe<Scalars["String"]>;
};

export type SupervisionWorkloadPerUserQuery = { __typename?: "Query" } & {
    supervisionWorkloadPerUser: Maybe<
        { __typename?: "SupervisionWorkloadPerUser" } & Pick<
            SupervisionWorkloadPerUser,
            | "supervisionGlobalTarrif"
            | "supervisionTotalHoursPerUser"
            | "supervisionPercentageOfWorkFocusPerUser"
            | "supervisionPercentageOfAnnualHoursPerUser"
        > & {
                supervisionWorkloadData: Maybe<
                    Array<
                        Maybe<
                            {
                                __typename?: "SupervisionWorkloadPerActivity";
                            } & Pick<
                                SupervisionWorkloadPerActivity,
                                | "supervisionTotalHoursPerActivity"
                                | "supervisionPercentageOfWorkFocusPerActivity"
                                | "supervisionPercentageOfAnnualHoursPerActivity"
                            >
                        >
                    >
                >;
            }
    >;
};

export const AddAcademicAdministrationActivityDocument = gql`
    mutation addAcademicAdministrationActivity(
        $activity: AcademicAdministrationActivityInput
    ) {
        addAcademicAdministrationActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddAcademicAdministrationActivityGQL extends Apollo.Mutation<
    AddAcademicAdministrationActivityMutation,
    AddAcademicAdministrationActivityMutationVariables
> {
    document = AddAcademicAdministrationActivityDocument;
}
export const EditAcademicAdministrationActivityDocument = gql`
    mutation editAcademicAdministrationActivity(
        $activity: AcademicAdministrationActivityInput
    ) {
        editAcademicAdministrationActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditAcademicAdministrationActivityGQL extends Apollo.Mutation<
    EditAcademicAdministrationActivityMutation,
    EditAcademicAdministrationActivityMutationVariables
> {
    document = EditAcademicAdministrationActivityDocument;
}
export const DeleteAcademicAdministrationActivityDocument = gql`
    mutation deleteAcademicAdministrationActivity(
        $activity: AcademicAdministrationActivityInput
    ) {
        deleteAcademicAdministrationActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteAcademicAdministrationActivityGQL extends Apollo.Mutation<
    DeleteAcademicAdministrationActivityMutation,
    DeleteAcademicAdministrationActivityMutationVariables
> {
    document = DeleteAcademicAdministrationActivityDocument;
}
export const AcademicAdministrationActivityDocument = gql`
    query academicAdministrationActivity($activityId: String!) {
        academicAdministrationActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AcademicAdministrationActivityGQL extends Apollo.Query<
    AcademicAdministrationActivityQuery,
    AcademicAdministrationActivityQueryVariables
> {
    document = AcademicAdministrationActivityDocument;
}
export const AcademicAdministrationActivitiesDocument = gql`
    query academicAdministrationActivities {
        academicAdministrationActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AcademicAdministrationActivitiesGQL extends Apollo.Query<
    AcademicAdministrationActivitiesQuery,
    AcademicAdministrationActivitiesQueryVariables
> {
    document = AcademicAdministrationActivitiesDocument;
}
export const AcademicAdministrationActivitiesByUserDocument = gql`
    query academicAdministrationActivitiesByUser($userId: String) {
        academicAdministrationActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AcademicAdministrationActivitiesByUserGQL extends Apollo.Query<
    AcademicAdministrationActivitiesByUserQuery,
    AcademicAdministrationActivitiesByUserQueryVariables
> {
    document = AcademicAdministrationActivitiesByUserDocument;
}
export const ActivityDocument = gql`
    query activity($activityId: String!) {
        activity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            ... on AcademicAdministrationActivity {
                title
                description
                evidence
            }
            ... on ExecutiveManagementActivity {
                title
                description
                evidence
            }
            ... on PersonnelDevelopmentActivity {
                title
                description
                evidence
            }
            ... on CommunityInstructionActivity {
                title
                description
                evidence
            }
            ... on PublicServiceActivity {
                title
                description
                evidence
            }
            ... on FormalInstructionActivity {
                moduleId
                module {
                    moduleId
                    name
                    type
                    assessmentMethod
                    nqfLevel
                    credits
                    qualificationId
                    qualification {
                        qualificationId
                        name
                    }
                    offeringTypeId
                    offeringType {
                        offeringTypeId
                        description
                    }
                    disciplineId
                    discipline {
                        disciplineId
                        name
                    }
                    venueId
                    venue {
                        venueId
                        campus
                        capacity
                    }
                    blockId
                    block {
                        blockId
                        name
                    }
                    coordinatorId
                    coordinator {
                        userId
                        firstName
                        lastName
                        discipline {
                            disciplineId
                            name
                        }
                        position {
                            positionId
                            name
                        }
                    }
                    moderatorId
                    moderator {
                        userId
                        firstName
                        lastName
                        discipline {
                            disciplineId
                            name
                        }
                        position {
                            positionId
                            name
                        }
                    }
                    studyPeriod
                    groupSize
                    lecturedBy
                    moderation
                }
                blockId
                block {
                    blockId
                    name
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                qualificationId
                qualification {
                    qualificationId
                    name
                }
            }
            ... on ResearchActivity {
                output
                title
                details
                evidence
            }
            ... on SupervisionActivity {
                supervisionRole
                split
                studentId
                student {
                    studentId
                    firstName
                    lastName
                    title
                    year
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ActivityGQL extends Apollo.Query<
    ActivityQuery,
    ActivityQueryVariables
> {
    document = ActivityDocument;
}
export const ActivitiesByUnapprovedDocument = gql`
    query activitiesByUnapproved {
        activitiesByUnapproved {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            ... on CommunityInstructionActivity {
                title
                description
                evidence
            }
            ... on PublicServiceActivity {
                title
                description
                evidence
            }
            ... on FormalInstructionActivity {
                activityId
                dutyId
                duty {
                    dutyId
                    name
                    description
                }
                userId
                user {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                moduleId
                module {
                    moduleId
                    name
                    type
                    assessmentMethod
                    nqfLevel
                    credits
                    qualificationId
                    qualification {
                        qualificationId
                        name
                    }
                    offeringTypeId
                    offeringType {
                        offeringTypeId
                        description
                    }
                    disciplineId
                    discipline {
                        disciplineId
                        name
                    }
                    venueId
                    venue {
                        venueId
                        campus
                        capacity
                    }
                    blockId
                    block {
                        blockId
                        name
                    }
                    coordinatorId
                    coordinator {
                        userId
                        firstName
                        lastName
                        discipline {
                            disciplineId
                            name
                        }
                        position {
                            positionId
                            name
                        }
                    }
                    moderatorId
                    moderator {
                        userId
                        firstName
                        lastName
                        discipline {
                            disciplineId
                            name
                        }
                        position {
                            positionId
                            name
                        }
                    }
                    studyPeriod
                    groupSize
                    lecturedBy
                    moderation
                }
                blockId
                block {
                    blockId
                    name
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                qualificationId
                qualification {
                    qualificationId
                    name
                }
            }
            ... on ResearchActivity {
                output
                title
                details
                evidence
            }
            ... on SupervisionActivity {
                supervisionRole
                studentId
                student {
                    studentId
                    firstName
                    lastName
                    title
                    year
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ActivitiesByUnapprovedGQL extends Apollo.Query<
    ActivitiesByUnapprovedQuery,
    ActivitiesByUnapprovedQueryVariables
> {
    document = ActivitiesByUnapprovedDocument;
}
export const AddCommunityInstructionActivityDocument = gql`
    mutation addCommunityInstructionActivity(
        $activity: CommunityInstructionActivityInput
    ) {
        addCommunityInstructionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddCommunityInstructionActivityGQL extends Apollo.Mutation<
    AddCommunityInstructionActivityMutation,
    AddCommunityInstructionActivityMutationVariables
> {
    document = AddCommunityInstructionActivityDocument;
}
export const EditCommunityInstructionActivityDocument = gql`
    mutation editCommunityInstructionActivity(
        $activity: CommunityInstructionActivityInput
    ) {
        editCommunityInstructionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditCommunityInstructionActivityGQL extends Apollo.Mutation<
    EditCommunityInstructionActivityMutation,
    EditCommunityInstructionActivityMutationVariables
> {
    document = EditCommunityInstructionActivityDocument;
}
export const DeleteCommunityInstructionActivityDocument = gql`
    mutation deleteCommunityInstructionActivity(
        $activity: CommunityInstructionActivityInput
    ) {
        deleteCommunityInstructionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteCommunityInstructionActivityGQL extends Apollo.Mutation<
    DeleteCommunityInstructionActivityMutation,
    DeleteCommunityInstructionActivityMutationVariables
> {
    document = DeleteCommunityInstructionActivityDocument;
}
export const CommunityInstructionActivityDocument = gql`
    query communityInstructionActivity($activityId: String!) {
        communityInstructionActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class CommunityInstructionActivityGQL extends Apollo.Query<
    CommunityInstructionActivityQuery,
    CommunityInstructionActivityQueryVariables
> {
    document = CommunityInstructionActivityDocument;
}
export const CommunityInstructionActivitiesDocument = gql`
    query communityInstructionActivities {
        communityInstructionActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class CommunityInstructionActivitiesGQL extends Apollo.Query<
    CommunityInstructionActivitiesQuery,
    CommunityInstructionActivitiesQueryVariables
> {
    document = CommunityInstructionActivitiesDocument;
}
export const CommunityInstructionActivitiesByUserDocument = gql`
    query communityInstructionActivitiesByUser($userId: String) {
        communityInstructionActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class CommunityInstructionActivitiesByUserGQL extends Apollo.Query<
    CommunityInstructionActivitiesByUserQuery,
    CommunityInstructionActivitiesByUserQueryVariables
> {
    document = CommunityInstructionActivitiesByUserDocument;
}
export const AddExecutiveManagementActivityDocument = gql`
    mutation addExecutiveManagementActivity(
        $activity: ExecutiveManagementActivityInput
    ) {
        addExecutiveManagementActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddExecutiveManagementActivityGQL extends Apollo.Mutation<
    AddExecutiveManagementActivityMutation,
    AddExecutiveManagementActivityMutationVariables
> {
    document = AddExecutiveManagementActivityDocument;
}
export const EditExecutiveManagementActivityDocument = gql`
    mutation editExecutiveManagementActivity(
        $activity: ExecutiveManagementActivityInput
    ) {
        editExecutiveManagementActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditExecutiveManagementActivityGQL extends Apollo.Mutation<
    EditExecutiveManagementActivityMutation,
    EditExecutiveManagementActivityMutationVariables
> {
    document = EditExecutiveManagementActivityDocument;
}
export const DeleteExecutiveManagementActivityDocument = gql`
    mutation deleteExecutiveManagementActivity(
        $activity: ExecutiveManagementActivityInput
    ) {
        deleteExecutiveManagementActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteExecutiveManagementActivityGQL extends Apollo.Mutation<
    DeleteExecutiveManagementActivityMutation,
    DeleteExecutiveManagementActivityMutationVariables
> {
    document = DeleteExecutiveManagementActivityDocument;
}
export const ExecutiveManagementActivityDocument = gql`
    query executiveManagementActivity($activityId: String!) {
        executiveManagementActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ExecutiveManagementActivityGQL extends Apollo.Query<
    ExecutiveManagementActivityQuery,
    ExecutiveManagementActivityQueryVariables
> {
    document = ExecutiveManagementActivityDocument;
}
export const ExecutiveManagementActivitiesDocument = gql`
    query executiveManagementActivities {
        executiveManagementActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ExecutiveManagementActivitiesGQL extends Apollo.Query<
    ExecutiveManagementActivitiesQuery,
    ExecutiveManagementActivitiesQueryVariables
> {
    document = ExecutiveManagementActivitiesDocument;
}
export const ExecutiveManagementActivitiesByUserDocument = gql`
    query executiveManagementActivitiesByUser($userId: String) {
        executiveManagementActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ExecutiveManagementActivitiesByUserGQL extends Apollo.Query<
    ExecutiveManagementActivitiesByUserQuery,
    ExecutiveManagementActivitiesByUserQueryVariables
> {
    document = ExecutiveManagementActivitiesByUserDocument;
}
export const AddFormalInstructionActivityDocument = gql`
    mutation addFormalInstructionActivity(
        $activity: FormalInstructionActivityInput
    ) {
        addFormalInstructionActivity(activity: $activity) {
            activityId
            dutyId
            duty {
                dutyId
                name
                description
            }
            userId
            user {
                userId
                firstName
                lastName
                discipline {
                    disciplineId
                    name
                }
                position {
                    positionId
                    name
                }
            }
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                }
                blockId
                block {
                    blockId
                    name
                }
                coordinatorId
                coordinator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                moderatorId
                moderator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddFormalInstructionActivityGQL extends Apollo.Mutation<
    AddFormalInstructionActivityMutation,
    AddFormalInstructionActivityMutationVariables
> {
    document = AddFormalInstructionActivityDocument;
}
export const EditFormalInstructionActivityDocument = gql`
    mutation editFormalInstructionActivity(
        $activity: FormalInstructionActivityInput
    ) {
        editFormalInstructionActivity(activity: $activity) {
            activityId
            dutyId
            duty {
                dutyId
                name
                description
            }
            userId
            user {
                userId
                firstName
                lastName
                discipline {
                    disciplineId
                    name
                }
                position {
                    positionId
                    name
                }
            }
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                }
                blockId
                block {
                    blockId
                    name
                }
                coordinatorId
                coordinator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                moderatorId
                moderator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditFormalInstructionActivityGQL extends Apollo.Mutation<
    EditFormalInstructionActivityMutation,
    EditFormalInstructionActivityMutationVariables
> {
    document = EditFormalInstructionActivityDocument;
}
export const DeleteFormalInstructionActivityDocument = gql`
    mutation deleteFormalInstructionActivity(
        $activity: FormalInstructionActivityInput
    ) {
        deleteFormalInstructionActivity(activity: $activity) {
            activityId
            dutyId
            duty {
                dutyId
                name
                description
            }
            userId
            user {
                userId
                firstName
                lastName
                discipline {
                    disciplineId
                    name
                }
                position {
                    positionId
                    name
                }
            }
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                }
                blockId
                block {
                    blockId
                    name
                }
                coordinatorId
                coordinator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                moderatorId
                moderator {
                    userId
                    firstName
                    lastName
                    discipline {
                        disciplineId
                        name
                    }
                    position {
                        positionId
                        name
                    }
                }
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteFormalInstructionActivityGQL extends Apollo.Mutation<
    DeleteFormalInstructionActivityMutation,
    DeleteFormalInstructionActivityMutationVariables
> {
    document = DeleteFormalInstructionActivityDocument;
}
export const AddSupervisionActivityDocument = gql`
    mutation addSupervisionActivity($activity: SupervisionActivityInput) {
        addSupervisionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddSupervisionActivityGQL extends Apollo.Mutation<
    AddSupervisionActivityMutation,
    AddSupervisionActivityMutationVariables
> {
    document = AddSupervisionActivityDocument;
}
export const EditSupervisionActivityDocument = gql`
    mutation editSupervisionActivity($activity: SupervisionActivityInput) {
        addSupervisionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            supervisionRole
            createdAt
            updatedAt
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditSupervisionActivityGQL extends Apollo.Mutation<
    EditSupervisionActivityMutation,
    EditSupervisionActivityMutationVariables
> {
    document = EditSupervisionActivityDocument;
}
export const DeleteSupervisionActivityDocument = gql`
    mutation deleteSupervisionActivity($activity: SupervisionActivityInput) {
        addSupervisionActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteSupervisionActivityGQL extends Apollo.Mutation<
    DeleteSupervisionActivityMutation,
    DeleteSupervisionActivityMutationVariables
> {
    document = DeleteSupervisionActivityDocument;
}
export const FormalInstructionActivityDocument = gql`
    query formalInstructionActivity($activityId: String!) {
        formalInstructionActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                    type
                    departmentId
                    department {
                        departmentId
                        name
                        facultyId
                        faculty {
                            facultyId
                            name
                        }
                    }
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                    type
                }
                blockId
                block {
                    blockId
                    name
                    description
                }
                userId
                user {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                coordinatorId
                coordinator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                moderatorId
                moderator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                stackId
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
                description
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionActivityGQL extends Apollo.Query<
    FormalInstructionActivityQuery,
    FormalInstructionActivityQueryVariables
> {
    document = FormalInstructionActivityDocument;
}
export const FormalInstructionActivitiesDocument = gql`
    query formalInstructionActivities {
        formalInstructionActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                    type
                    departmentId
                    department {
                        departmentId
                        name
                        facultyId
                        faculty {
                            facultyId
                            name
                        }
                    }
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                    type
                }
                blockId
                block {
                    blockId
                    name
                    description
                }
                userId
                user {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                coordinatorId
                coordinator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                moderatorId
                moderator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                stackId
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
                description
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionActivitiesGQL extends Apollo.Query<
    FormalInstructionActivitiesQuery,
    FormalInstructionActivitiesQueryVariables
> {
    document = FormalInstructionActivitiesDocument;
}
export const FormalInstructionActivitiesByUserDocument = gql`
    query formalInstructionActivitiesByUser($userId: String!) {
        formalInstructionActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            moduleId
            module {
                moduleId
                name
                type
                assessmentMethod
                nqfLevel
                credits
                qualificationId
                qualification {
                    qualificationId
                    name
                    type
                    departmentId
                    department {
                        departmentId
                        name
                        facultyId
                        faculty {
                            facultyId
                            name
                        }
                    }
                }
                offeringTypeId
                offeringType {
                    offeringTypeId
                    description
                }
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                venueId
                venue {
                    venueId
                    campus
                    capacity
                    type
                }
                blockId
                block {
                    blockId
                    name
                    description
                }
                userId
                user {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                coordinatorId
                coordinator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                moderatorId
                moderator {
                    userId
                    email
                    firstName
                    lastName
                    photoUrl
                    disciplineId
                    discipline {
                        disciplineId
                        name
                        description
                    }
                    positionId
                    position {
                        positionId
                        name
                        description
                    }
                    workFocusName
                    workFocus {
                        name
                        teachingRatio
                        researchRatio
                        serviceRatio
                    }
                    gender
                    nationality
                }
                stackId
                studyPeriod
                groupSize
                lecturedBy
                moderation
            }
            blockId
            block {
                blockId
                name
                description
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            createdAt
            updatedAt
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionActivitiesByUserGQL extends Apollo.Query<
    FormalInstructionActivitiesByUserQuery,
    FormalInstructionActivitiesByUserQueryVariables
> {
    document = FormalInstructionActivitiesByUserDocument;
}
export const SupervisionActivityDocument = gql`
    query supervisionActivity($activityId: String!) {
        supervisionActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class SupervisionActivityGQL extends Apollo.Query<
    SupervisionActivityQuery,
    SupervisionActivityQueryVariables
> {
    document = SupervisionActivityDocument;
}
export const SupervisionActivitiesDocument = gql`
    query supervisionActivities {
        supervisionActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class SupervisionActivitiesGQL extends Apollo.Query<
    SupervisionActivitiesQuery,
    SupervisionActivitiesQueryVariables
> {
    document = SupervisionActivitiesDocument;
}
export const SupervisionActivitiesByUserDocument = gql`
    query supervisionActivitiesByUser($userId: String!) {
        supervisionActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            supervisionRole
            split
            studentId
            student {
                studentId
                firstName
                lastName
                email
                title
                year
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class SupervisionActivitiesByUserGQL extends Apollo.Query<
    SupervisionActivitiesByUserQuery,
    SupervisionActivitiesByUserQueryVariables
> {
    document = SupervisionActivitiesByUserDocument;
}
export const AddPersonnelDevelopmentActivityDocument = gql`
    mutation addPersonnelDevelopmentActivity(
        $activity: PersonnelDevelopmentActivityInput
    ) {
        addPersonnelDevelopmentActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddPersonnelDevelopmentActivityGQL extends Apollo.Mutation<
    AddPersonnelDevelopmentActivityMutation,
    AddPersonnelDevelopmentActivityMutationVariables
> {
    document = AddPersonnelDevelopmentActivityDocument;
}
export const EditPersonnelDevelopmentActivityDocument = gql`
    mutation editPersonnelDevelopmentActivity(
        $activity: PersonnelDevelopmentActivityInput
    ) {
        editPersonnelDevelopmentActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditPersonnelDevelopmentActivityGQL extends Apollo.Mutation<
    EditPersonnelDevelopmentActivityMutation,
    EditPersonnelDevelopmentActivityMutationVariables
> {
    document = EditPersonnelDevelopmentActivityDocument;
}
export const DeletePersonnelDevelopmentActivityDocument = gql`
    mutation deletePersonnelDevelopmentActivity(
        $activity: PersonnelDevelopmentActivityInput
    ) {
        deletePersonnelDevelopmentActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeletePersonnelDevelopmentActivityGQL extends Apollo.Mutation<
    DeletePersonnelDevelopmentActivityMutation,
    DeletePersonnelDevelopmentActivityMutationVariables
> {
    document = DeletePersonnelDevelopmentActivityDocument;
}
export const PersonnelDevelopmentActivityDocument = gql`
    query personnelDevelopmentActivity($activityId: String!) {
        personnelDevelopmentActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PersonnelDevelopmentActivityGQL extends Apollo.Query<
    PersonnelDevelopmentActivityQuery,
    PersonnelDevelopmentActivityQueryVariables
> {
    document = PersonnelDevelopmentActivityDocument;
}
export const PersonnelDevelopmentActivitiesDocument = gql`
    query personnelDevelopmentActivities {
        personnelDevelopmentActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PersonnelDevelopmentActivitiesGQL extends Apollo.Query<
    PersonnelDevelopmentActivitiesQuery,
    PersonnelDevelopmentActivitiesQueryVariables
> {
    document = PersonnelDevelopmentActivitiesDocument;
}
export const PersonnelDevelopmentActivitiesByUserDocument = gql`
    query personnelDevelopmentActivitiesByUser($userId: String) {
        personnelDevelopmentActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PersonnelDevelopmentActivitiesByUserGQL extends Apollo.Query<
    PersonnelDevelopmentActivitiesByUserQuery,
    PersonnelDevelopmentActivitiesByUserQueryVariables
> {
    document = PersonnelDevelopmentActivitiesByUserDocument;
}
export const AddPublicServiceActivityDocument = gql`
    mutation addPublicServiceActivity($activity: PublicServiceActivityInput) {
        addPublicServiceActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddPublicServiceActivityGQL extends Apollo.Mutation<
    AddPublicServiceActivityMutation,
    AddPublicServiceActivityMutationVariables
> {
    document = AddPublicServiceActivityDocument;
}
export const EditPublicServiceActivityDocument = gql`
    mutation editPublicServiceActivity($activity: PublicServiceActivityInput) {
        editPublicServiceActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditPublicServiceActivityGQL extends Apollo.Mutation<
    EditPublicServiceActivityMutation,
    EditPublicServiceActivityMutationVariables
> {
    document = EditPublicServiceActivityDocument;
}
export const DeletePublicServiceActivityDocument = gql`
    mutation deletePublicServiceActivity(
        $activity: PublicServiceActivityInput
    ) {
        deletePublicServiceActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeletePublicServiceActivityGQL extends Apollo.Mutation<
    DeletePublicServiceActivityMutation,
    DeletePublicServiceActivityMutationVariables
> {
    document = DeletePublicServiceActivityDocument;
}
export const PublicServiceActivityDocument = gql`
    query publicServiceActivity($activityId: String) {
        publicServiceActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PublicServiceActivityGQL extends Apollo.Query<
    PublicServiceActivityQuery,
    PublicServiceActivityQueryVariables
> {
    document = PublicServiceActivityDocument;
}
export const PublicServiceActivitiesDocument = gql`
    query publicServiceActivities {
        publicServiceActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PublicServiceActivitiesGQL extends Apollo.Query<
    PublicServiceActivitiesQuery,
    PublicServiceActivitiesQueryVariables
> {
    document = PublicServiceActivitiesDocument;
}
export const PublicServiceActivitiesByUserDocument = gql`
    query publicServiceActivitiesByUser($userId: String) {
        publicServiceActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            title
            description
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PublicServiceActivitiesByUserGQL extends Apollo.Query<
    PublicServiceActivitiesByUserQuery,
    PublicServiceActivitiesByUserQueryVariables
> {
    document = PublicServiceActivitiesByUserDocument;
}
export const AddResearchActivityDocument = gql`
    mutation addResearchActivity($activity: ResearchActivityInput) {
        addResearchActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddResearchActivityGQL extends Apollo.Mutation<
    AddResearchActivityMutation,
    AddResearchActivityMutationVariables
> {
    document = AddResearchActivityDocument;
}
export const EditResearchActivityDocument = gql`
    mutation editResearchActivity($activity: ResearchActivityInput) {
        editResearchActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditResearchActivityGQL extends Apollo.Mutation<
    EditResearchActivityMutation,
    EditResearchActivityMutationVariables
> {
    document = EditResearchActivityDocument;
}
export const DeleteResearchActivityDocument = gql`
    mutation deleteResearchActivity($activity: ResearchActivityInput) {
        deleteResearchActivity(activity: $activity) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteResearchActivityGQL extends Apollo.Mutation<
    DeleteResearchActivityMutation,
    DeleteResearchActivityMutationVariables
> {
    document = DeleteResearchActivityDocument;
}
export const ResearchActivityDocument = gql`
    query researchActivity($activityId: String!) {
        researchActivity(activityId: $activityId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ResearchActivityGQL extends Apollo.Query<
    ResearchActivityQuery,
    ResearchActivityQueryVariables
> {
    document = ResearchActivityDocument;
}
export const ResearchActivitiesDocument = gql`
    query researchActivities {
        researchActivities {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ResearchActivitiesGQL extends Apollo.Query<
    ResearchActivitiesQuery,
    ResearchActivitiesQueryVariables
> {
    document = ResearchActivitiesDocument;
}
export const ResearchActivitiesByUserDocument = gql`
    query researchActivitiesByUser($userId: String!) {
        researchActivitiesByUser(userId: $userId) {
            activityId
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            createdAt
            updatedAt
            output
            title
            details
            dates
            url
            evidence
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ResearchActivitiesByUserGQL extends Apollo.Query<
    ResearchActivitiesByUserQuery,
    ResearchActivitiesByUserQueryVariables
> {
    document = ResearchActivitiesByUserDocument;
}
export const AddBlockDocument = gql`
    mutation addBlock($block: BlockInput) {
        addBlock(block: $block) {
            blockId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddBlockGQL extends Apollo.Mutation<
    AddBlockMutation,
    AddBlockMutationVariables
> {
    document = AddBlockDocument;
}
export const EditBlockDocument = gql`
    mutation editBlock($block: BlockInput) {
        editBlock(block: $block) {
            blockId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditBlockGQL extends Apollo.Mutation<
    EditBlockMutation,
    EditBlockMutationVariables
> {
    document = EditBlockDocument;
}
export const DeleteBlockDocument = gql`
    mutation deleteBlock($block: BlockInput) {
        deleteBlock(block: $block) {
            blockId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteBlockGQL extends Apollo.Mutation<
    DeleteBlockMutation,
    DeleteBlockMutationVariables
> {
    document = DeleteBlockDocument;
}
export const BlockDocument = gql`
    query block($blockId: String!) {
        block(blockId: $blockId) {
            blockId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class BlockGQL extends Apollo.Query<BlockQuery, BlockQueryVariables> {
    document = BlockDocument;
}
export const BlocksDocument = gql`
    query blocks {
        blocks {
            blockId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class BlocksGQL extends Apollo.Query<BlocksQuery, BlocksQueryVariables> {
    document = BlocksDocument;
}
export const AddDepartmentDocument = gql`
    mutation addDepartment($department: DepartmentInput) {
        addDepartment(department: $department) {
            departmentId
            name
            facultyId
            faculty {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddDepartmentGQL extends Apollo.Mutation<
    AddDepartmentMutation,
    AddDepartmentMutationVariables
> {
    document = AddDepartmentDocument;
}
export const EditDepartmentDocument = gql`
    mutation editDepartment($department: DepartmentInput) {
        editDepartment(department: $department) {
            departmentId
            name
            facultyId
            faculty {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditDepartmentGQL extends Apollo.Mutation<
    EditDepartmentMutation,
    EditDepartmentMutationVariables
> {
    document = EditDepartmentDocument;
}
export const DeleteDepartmentDocument = gql`
    mutation deleteDepartment($department: DepartmentInput) {
        deleteDepartment(department: $department) {
            departmentId
            name
            facultyId
            faculty {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteDepartmentGQL extends Apollo.Mutation<
    DeleteDepartmentMutation,
    DeleteDepartmentMutationVariables
> {
    document = DeleteDepartmentDocument;
}
export const DepartmentDocument = gql`
    query department($departmentId: String!) {
        department(departmentId: $departmentId) {
            departmentId
            name
            faculty {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DepartmentGQL extends Apollo.Query<
    DepartmentQuery,
    DepartmentQueryVariables
> {
    document = DepartmentDocument;
}
export const DepartmentsDocument = gql`
    query departments {
        departments {
            departmentId
            name
            faculty {
                facultyId
                name
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DepartmentsGQL extends Apollo.Query<
    DepartmentsQuery,
    DepartmentsQueryVariables
> {
    document = DepartmentsDocument;
}
export const AddDisciplineDocument = gql`
    mutation addDiscipline($discipline: DisciplineInput) {
        addDiscipline(discipline: $discipline) {
            disciplineId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddDisciplineGQL extends Apollo.Mutation<
    AddDisciplineMutation,
    AddDisciplineMutationVariables
> {
    document = AddDisciplineDocument;
}
export const EditDisciplineDocument = gql`
    mutation editDiscipline($discipline: DisciplineInput) {
        editDiscipline(discipline: $discipline) {
            disciplineId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditDisciplineGQL extends Apollo.Mutation<
    EditDisciplineMutation,
    EditDisciplineMutationVariables
> {
    document = EditDisciplineDocument;
}
export const DeleteDisciplineDocument = gql`
    mutation deleteDiscipline($discipline: DisciplineInput) {
        deleteDiscipline(discipline: $discipline) {
            disciplineId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteDisciplineGQL extends Apollo.Mutation<
    DeleteDisciplineMutation,
    DeleteDisciplineMutationVariables
> {
    document = DeleteDisciplineDocument;
}
export const DisciplineDocument = gql`
    query discipline($disciplineId: String!) {
        discipline(disciplineId: $disciplineId) {
            disciplineId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DisciplineGQL extends Apollo.Query<
    DisciplineQuery,
    DisciplineQueryVariables
> {
    document = DisciplineDocument;
}
export const DisciplinesDocument = gql`
    query disciplines {
        disciplines {
            disciplineId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DisciplinesGQL extends Apollo.Query<
    DisciplinesQuery,
    DisciplinesQueryVariables
> {
    document = DisciplinesDocument;
}
export const AddDutyDocument = gql`
    mutation addDuty($duty: DutyInput) {
        addDuty(duty: $duty) {
            dutyId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddDutyGQL extends Apollo.Mutation<
    AddDutyMutation,
    AddDutyMutationVariables
> {
    document = AddDutyDocument;
}
export const EditDutyDocument = gql`
    mutation editDuty($duty: DutyInput) {
        editDuty(duty: $duty) {
            dutyId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditDutyGQL extends Apollo.Mutation<
    EditDutyMutation,
    EditDutyMutationVariables
> {
    document = EditDutyDocument;
}
export const DeleteDutyDocument = gql`
    mutation deleteDuty($duty: DutyInput) {
        deleteDuty(duty: $duty) {
            dutyId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteDutyGQL extends Apollo.Mutation<
    DeleteDutyMutation,
    DeleteDutyMutationVariables
> {
    document = DeleteDutyDocument;
}
export const DutyDocument = gql`
    query duty($dutyId: String!) {
        duty(dutyId: $dutyId) {
            dutyId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DutyGQL extends Apollo.Query<DutyQuery, DutyQueryVariables> {
    document = DutyDocument;
}
export const DutiesDocument = gql`
    query duties {
        duties {
            dutyId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DutiesGQL extends Apollo.Query<DutiesQuery, DutiesQueryVariables> {
    document = DutiesDocument;
}
export const AddEnrollmentDocument = gql`
    mutation addEnrollment($enrollment: EnrollmentInput) {
        addEnrollment(enrollment: $enrollment) {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddEnrollmentGQL extends Apollo.Mutation<
    AddEnrollmentMutation,
    AddEnrollmentMutationVariables
> {
    document = AddEnrollmentDocument;
}
export const EditEnrollmentDocument = gql`
    mutation editEnrollment($enrollment: EnrollmentInput) {
        editEnrollment(enrollment: $enrollment) {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditEnrollmentGQL extends Apollo.Mutation<
    EditEnrollmentMutation,
    EditEnrollmentMutationVariables
> {
    document = EditEnrollmentDocument;
}
export const DeleteEnrollmentDocument = gql`
    mutation deleteEnrollment($enrollment: EnrollmentInput) {
        deleteEnrollment(enrollment: $enrollment) {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteEnrollmentGQL extends Apollo.Mutation<
    DeleteEnrollmentMutation,
    DeleteEnrollmentMutationVariables
> {
    document = DeleteEnrollmentDocument;
}
export const EnrollmentDocument = gql`
    query enrollment($enrollmentYear: String, $qualificationId: String) {
        enrollment(
            enrollmentYear: $enrollmentYear
            qualificationId: $qualificationId
        ) {
            enrollmentYear
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EnrollmentGQL extends Apollo.Query<
    EnrollmentQuery,
    EnrollmentQueryVariables
> {
    document = EnrollmentDocument;
}
export const EnrollmentsDocument = gql`
    query enrollments {
        enrollments {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EnrollmentsGQL extends Apollo.Query<
    EnrollmentsQuery,
    EnrollmentsQueryVariables
> {
    document = EnrollmentsDocument;
}
export const EnrollmentsByQualificationDocument = gql`
    query enrollmentsByQualification($qualificationId: String) {
        enrollmentsByQualification(qualificationId: $qualificationId) {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EnrollmentsByQualificationGQL extends Apollo.Query<
    EnrollmentsByQualificationQuery,
    EnrollmentsByQualificationQueryVariables
> {
    document = EnrollmentsByQualificationDocument;
}
export const EnrollmentsByYearDocument = gql`
    query enrollmentsByYear($enrollmentYear: String) {
        enrollmentsByYear(enrollmentYear: $enrollmentYear) {
            enrollmentYear
            qualificationId
            qualification {
                qualificationId
                name
            }
            firstYearEstimated
            secondYearEstimated
            thirdYearEstimated
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EnrollmentsByYearGQL extends Apollo.Query<
    EnrollmentsByYearQuery,
    EnrollmentsByYearQueryVariables
> {
    document = EnrollmentsByYearDocument;
}
export const EventDocument = gql`
    query event($eventId: String!) {
        event(eventId: $eventId) {
            eventId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EventGQL extends Apollo.Query<EventQuery, EventQueryVariables> {
    document = EventDocument;
}
export const EventsDocument = gql`
    query events {
        events {
            eventId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EventsGQL extends Apollo.Query<EventsQuery, EventsQueryVariables> {
    document = EventsDocument;
}
export const AddFacultyDocument = gql`
    mutation addFaculty($faculty: FacultyInput) {
        addFaculty(faculty: $faculty) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddFacultyGQL extends Apollo.Mutation<
    AddFacultyMutation,
    AddFacultyMutationVariables
> {
    document = AddFacultyDocument;
}
export const EditFacultyDocument = gql`
    mutation editFaculty($faculty: FacultyInput) {
        addFaculty(faculty: $faculty) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditFacultyGQL extends Apollo.Mutation<
    EditFacultyMutation,
    EditFacultyMutationVariables
> {
    document = EditFacultyDocument;
}
export const DeleteFacultyDocument = gql`
    mutation deleteFaculty($faculty: FacultyInput) {
        deleteFaculty(faculty: $faculty) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteFacultyGQL extends Apollo.Mutation<
    DeleteFacultyMutation,
    DeleteFacultyMutationVariables
> {
    document = DeleteFacultyDocument;
}
export const FacultyDocument = gql`
    query faculty($facultyId: String!) {
        faculty(facultyId: $facultyId) {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FacultyGQL extends Apollo.Query<
    FacultyQuery,
    FacultyQueryVariables
> {
    document = FacultyDocument;
}
export const FacultiesDocument = gql`
    query faculties {
        faculties {
            facultyId
            name
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FacultiesGQL extends Apollo.Query<
    FacultiesQuery,
    FacultiesQueryVariables
> {
    document = FacultiesDocument;
}
export const AddModuleDocument = gql`
    mutation addModule($module: ModuleInput) {
        addModule(module: $module) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddModuleGQL extends Apollo.Mutation<
    AddModuleMutation,
    AddModuleMutationVariables
> {
    document = AddModuleDocument;
}
export const AddModulesDocument = gql`
    mutation addModules($modules: [ModuleInput]) {
        addModules(modules: $modules) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddModulesGQL extends Apollo.Mutation<
    AddModulesMutation,
    AddModulesMutationVariables
> {
    document = AddModulesDocument;
}
export const EditModuleDocument = gql`
    mutation editModule($module: ModuleInput) {
        editModule(module: $module) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditModuleGQL extends Apollo.Mutation<
    EditModuleMutation,
    EditModuleMutationVariables
> {
    document = EditModuleDocument;
}
export const DeleteModuleDocument = gql`
    mutation deleteModule($module: ModuleInput) {
        deleteModule(module: $module) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteModuleGQL extends Apollo.Mutation<
    DeleteModuleMutation,
    DeleteModuleMutationVariables
> {
    document = DeleteModuleDocument;
}
export const ModuleDocument = gql`
    query module(
        $moduleId: String!
        $blockId: String!
        $offeringTypeId: String!
        $qualificationId: String!
    ) {
        module(
            moduleId: $moduleId
            blockId: $blockId
            offeringTypeId: $offeringTypeId
            qualificationId: $qualificationId
        ) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModuleGQL extends Apollo.Query<ModuleQuery, ModuleQueryVariables> {
    document = ModuleDocument;
}
export const ModulesDocument = gql`
    query modules {
        modules {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesGQL extends Apollo.Query<
    ModulesQuery,
    ModulesQueryVariables
> {
    document = ModulesDocument;
}
export const ModulesByDisciplineDocument = gql`
    query modulesByDiscipline($disciplineId: String!) {
        modulesByDiscipline(disciplineId: $disciplineId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByDisciplineGQL extends Apollo.Query<
    ModulesByDisciplineQuery,
    ModulesByDisciplineQueryVariables
> {
    document = ModulesByDisciplineDocument;
}
export const ModulesByUnassignedDocument = gql`
    query modulesByUnassigned {
        modulesByUnassigned {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByUnassignedGQL extends Apollo.Query<
    ModulesByUnassignedQuery,
    ModulesByUnassignedQueryVariables
> {
    document = ModulesByUnassignedDocument;
}
export const ModulesByUnassignedAndDisciplineDocument = gql`
    query modulesByUnassignedAndDiscipline($disciplineId: String) {
        modulesByUnassignedAndDiscipline(disciplineId: $disciplineId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByUnassignedAndDisciplineGQL extends Apollo.Query<
    ModulesByUnassignedAndDisciplineQuery,
    ModulesByUnassignedAndDisciplineQueryVariables
> {
    document = ModulesByUnassignedAndDisciplineDocument;
}
export const ModulesByUserDocument = gql`
    query modulesByUser($userId: String!) {
        modulesByUser(userId: $userId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByUserGQL extends Apollo.Query<
    ModulesByUserQuery,
    ModulesByUserQueryVariables
> {
    document = ModulesByUserDocument;
}
export const ModulesByModeratorDocument = gql`
    query modulesByModerator($moderatorId: String!) {
        modulesByModerator(moderatorId: $moderatorId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByModeratorGQL extends Apollo.Query<
    ModulesByModeratorQuery,
    ModulesByModeratorQueryVariables
> {
    document = ModulesByModeratorDocument;
}
export const ModulesByCoordinatorDocument = gql`
    query modulesByCoordinator($coordinatorId: String!) {
        modulesByCoordinator(coordinatorId: $coordinatorId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByCoordinatorGQL extends Apollo.Query<
    ModulesByCoordinatorQuery,
    ModulesByCoordinatorQueryVariables
> {
    document = ModulesByCoordinatorDocument;
}
export const ModulesByStackDocument = gql`
    query modulesByStack($stackId: String!) {
        modulesByStack(stackId: $stackId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            credits
            qualificationId
            qualification {
                qualificationId
                name
                type
                departmentId
                department {
                    departmentId
                    name
                    facultyId
                    faculty {
                        facultyId
                        name
                    }
                }
            }
            offeringTypeId
            offeringType {
                offeringTypeId
                description
            }
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            venueId
            venue {
                venueId
                campus
                capacity
                type
            }
            blockId
            block {
                blockId
                name
                description
            }
            userId
            user {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            coordinatorId
            coordinator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            moderatorId
            moderator {
                userId
                email
                firstName
                lastName
                photoUrl
                disciplineId
                discipline {
                    disciplineId
                    name
                    description
                }
                positionId
                position {
                    positionId
                    name
                    description
                }
                workFocusName
                workFocus {
                    name
                    teachingRatio
                    researchRatio
                    serviceRatio
                }
                gender
                nationality
            }
            stackId
            studyPeriod
            groupSize
            lecturedBy
            moderation
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModulesByStackGQL extends Apollo.Query<
    ModulesByStackQuery,
    ModulesByStackQueryVariables
> {
    document = ModulesByStackDocument;
}
export const AddOfferingTypeDocument = gql`
    mutation addOfferingType($offeringType: OfferingTypeInput) {
        addOfferingType(offeringType: $offeringType) {
            offeringTypeId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddOfferingTypeGQL extends Apollo.Mutation<
    AddOfferingTypeMutation,
    AddOfferingTypeMutationVariables
> {
    document = AddOfferingTypeDocument;
}
export const EditOfferingTypeDocument = gql`
    mutation editOfferingType($offeringType: OfferingTypeInput) {
        editOfferingType(offeringType: $offeringType) {
            offeringTypeId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditOfferingTypeGQL extends Apollo.Mutation<
    EditOfferingTypeMutation,
    EditOfferingTypeMutationVariables
> {
    document = EditOfferingTypeDocument;
}
export const DeleteOfferingTypeDocument = gql`
    mutation deleteOfferingType($offeringType: OfferingTypeInput) {
        deleteOfferingType(offeringType: $offeringType) {
            offeringTypeId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteOfferingTypeGQL extends Apollo.Mutation<
    DeleteOfferingTypeMutation,
    DeleteOfferingTypeMutationVariables
> {
    document = DeleteOfferingTypeDocument;
}
export const OfferingTypeDocument = gql`
    query offeringType($offeringTypeId: String!) {
        offeringType(offeringTypeId: $offeringTypeId) {
            offeringTypeId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class OfferingTypeGQL extends Apollo.Query<
    OfferingTypeQuery,
    OfferingTypeQueryVariables
> {
    document = OfferingTypeDocument;
}
export const OfferingTypesDocument = gql`
    query offeringTypes {
        offeringTypes {
            offeringTypeId
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class OfferingTypesGQL extends Apollo.Query<
    OfferingTypesQuery,
    OfferingTypesQueryVariables
> {
    document = OfferingTypesDocument;
}
export const AddPositionDocument = gql`
    mutation addPosition($position: PositionInput) {
        addPosition(position: $position) {
            positionId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddPositionGQL extends Apollo.Mutation<
    AddPositionMutation,
    AddPositionMutationVariables
> {
    document = AddPositionDocument;
}
export const EditPositionDocument = gql`
    mutation editPosition($position: PositionInput) {
        editPosition(position: $position) {
            positionId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditPositionGQL extends Apollo.Mutation<
    EditPositionMutation,
    EditPositionMutationVariables
> {
    document = EditPositionDocument;
}
export const DeletePositionDocument = gql`
    mutation deletePosition($position: PositionInput) {
        deletePosition(position: $position) {
            positionId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeletePositionGQL extends Apollo.Mutation<
    DeletePositionMutation,
    DeletePositionMutationVariables
> {
    document = DeletePositionDocument;
}
export const PositionDocument = gql`
    query position($positionId: String!) {
        position(positionId: $positionId) {
            positionId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PositionGQL extends Apollo.Query<
    PositionQuery,
    PositionQueryVariables
> {
    document = PositionDocument;
}
export const PositionsDocument = gql`
    query positions {
        positions {
            positionId
            name
            description
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PositionsGQL extends Apollo.Query<
    PositionsQuery,
    PositionsQueryVariables
> {
    document = PositionsDocument;
}
export const AddQualificationDocument = gql`
    mutation addQualification($qualification: QualificationInput) {
        addQualification(qualification: $qualification) {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddQualificationGQL extends Apollo.Mutation<
    AddQualificationMutation,
    AddQualificationMutationVariables
> {
    document = AddQualificationDocument;
}
export const EditQualificationDocument = gql`
    mutation editQualification($qualification: QualificationInput) {
        editQualification(qualification: $qualification) {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditQualificationGQL extends Apollo.Mutation<
    EditQualificationMutation,
    EditQualificationMutationVariables
> {
    document = EditQualificationDocument;
}
export const DeleteQualificationDocument = gql`
    mutation deleteQualification($qualification: QualificationInput) {
        deleteQualification(qualification: $qualification) {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteQualificationGQL extends Apollo.Mutation<
    DeleteQualificationMutation,
    DeleteQualificationMutationVariables
> {
    document = DeleteQualificationDocument;
}
export const QualificationDocument = gql`
    query qualification($qualificationId: String!) {
        qualification(qualificationId: $qualificationId) {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class QualificationGQL extends Apollo.Query<
    QualificationQuery,
    QualificationQueryVariables
> {
    document = QualificationDocument;
}
export const QualificationsDocument = gql`
    query qualifications {
        qualifications {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class QualificationsGQL extends Apollo.Query<
    QualificationsQuery,
    QualificationsQueryVariables
> {
    document = QualificationsDocument;
}
export const QualificationsNoEnrollmentDocument = gql`
    query qualificationsNoEnrollment {
        qualificationsNoEnrollment {
            qualificationId
            name
            type
            departmentId
            department {
                departmentId
                name
                faculty {
                    facultyId
                    name
                }
            }
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class QualificationsNoEnrollmentGQL extends Apollo.Query<
    QualificationsNoEnrollmentQuery,
    QualificationsNoEnrollmentQueryVariables
> {
    document = QualificationsNoEnrollmentDocument;
}
export const AddStudentDocument = gql`
    mutation addStudent($student: StudentInput) {
        addStudent(student: $student) {
            studentId
            email
            firstName
            lastName
            type
            title
            year
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddStudentGQL extends Apollo.Mutation<
    AddStudentMutation,
    AddStudentMutationVariables
> {
    document = AddStudentDocument;
}
export const EditStudentDocument = gql`
    mutation editStudent($student: StudentInput) {
        editStudent(student: $student) {
            studentId
            email
            firstName
            lastName
            type
            title
            year
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditStudentGQL extends Apollo.Mutation<
    EditStudentMutation,
    EditStudentMutationVariables
> {
    document = EditStudentDocument;
}
export const DeleteStudentDocument = gql`
    mutation deleteStudent($student: StudentInput) {
        deleteStudent(student: $student) {
            studentId
            email
            firstName
            lastName
            type
            title
            year
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteStudentGQL extends Apollo.Mutation<
    DeleteStudentMutation,
    DeleteStudentMutationVariables
> {
    document = DeleteStudentDocument;
}
export const StudentDocument = gql`
    query student($studentId: String!) {
        student(studentId: $studentId) {
            studentId
            email
            firstName
            lastName
            type
            title
            year
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class StudentGQL extends Apollo.Query<
    StudentQuery,
    StudentQueryVariables
> {
    document = StudentDocument;
}
export const StudentsDocument = gql`
    query students {
        students {
            studentId
            email
            firstName
            lastName
            type
            title
            year
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class StudentsGQL extends Apollo.Query<
    StudentsQuery,
    StudentsQueryVariables
> {
    document = StudentsDocument;
}
export const UploadlProfilePictureDocument = gql`
    mutation uploadlProfilePicture($file: Upload!, $userId: String!) {
        uploadProfilePicture(file: $file, userId: $userId) {
            id
            path
            filename
            mimetype
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class UploadlProfilePictureGQL extends Apollo.Mutation<
    UploadlProfilePictureMutation,
    UploadlProfilePictureMutationVariables
> {
    document = UploadlProfilePictureDocument;
}
export const UploadEvidenceDocument = gql`
    mutation uploadEvidence($file: Upload!, $activityId: String!) {
        uploadEvidence(file: $file, activityId: $activityId) {
            id
            path
            filename
            mimetype
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class UploadEvidenceGQL extends Apollo.Mutation<
    UploadEvidenceMutation,
    UploadEvidenceMutationVariables
> {
    document = UploadEvidenceDocument;
}
export const AddUserDocument = gql`
    mutation addUser($user: UserInput) {
        addUser(user: $user) {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineId
            positionId
            gender
            workFocusName
            nationality
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddUserGQL extends Apollo.Mutation<
    AddUserMutation,
    AddUserMutationVariables
> {
    document = AddUserDocument;
}
export const EditUserDocument = gql`
    mutation editUser($user: UserInput) {
        editUser(user: $user) {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineId
            positionId
            workFocusName
            gender
            nationality
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditUserGQL extends Apollo.Mutation<
    EditUserMutation,
    EditUserMutationVariables
> {
    document = EditUserDocument;
}
export const DeleteUserDocument = gql`
    mutation deleteUser($user: UserInput) {
        deleteUser(user: $user) {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineId
            positionId
            gender
            workFocusName
            nationality
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteUserGQL extends Apollo.Mutation<
    DeleteUserMutation,
    DeleteUserMutationVariables
> {
    document = DeleteUserDocument;
}
export const ChangePasswordDocument = gql`
    mutation changePassword(
        $userId: String
        $oldPassword: String
        $newPassword: String
    ) {
        changePassword(
            userId: $userId
            oldPassword: $oldPassword
            newPassword: $newPassword
        ) {
            userId
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ChangePasswordGQL extends Apollo.Mutation<
    ChangePasswordMutation,
    ChangePasswordMutationVariables
> {
    document = ChangePasswordDocument;
}
export const UserDocument = gql`
    query user($userId: String!) {
        user(userId: $userId) {
            userId
            email
            firstName
            lastName
            photoUrl
            discipline {
                disciplineId
                name
                description
            }
            position {
                positionId
                name
                description
            }
            workFocusName
            workFocus {
                name
                teachingRatio
                researchRatio
                serviceRatio
            }
            gender
            nationality
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class UserGQL extends Apollo.Query<UserQuery, UserQueryVariables> {
    document = UserDocument;
}
export const UsersDocument = gql`
    query users {
        users {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineId
            discipline {
                disciplineId
                name
                description
            }
            positionId
            position {
                positionId
                name
                description
            }
            workFocusName
            workFocus {
                name
                teachingRatio
                researchRatio
                serviceRatio
            }
            gender
            nationality
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
}
export const AddVenueDocument = gql`
    mutation addVenue($venue: VenueInput) {
        addVenue(venue: $venue) {
            venueId
            campus
            capacity
            type
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddVenueGQL extends Apollo.Mutation<
    AddVenueMutation,
    AddVenueMutationVariables
> {
    document = AddVenueDocument;
}
export const EditVenueDocument = gql`
    mutation editVenue($venue: VenueInput) {
        editVenue(venue: $venue) {
            venueId
            campus
            capacity
            type
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditVenueGQL extends Apollo.Mutation<
    EditVenueMutation,
    EditVenueMutationVariables
> {
    document = EditVenueDocument;
}
export const DeleteVenueDocument = gql`
    mutation deleteVenue($venue: VenueInput) {
        deleteVenue(venue: $venue) {
            venueId
            campus
            capacity
            type
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteVenueGQL extends Apollo.Mutation<
    DeleteVenueMutation,
    DeleteVenueMutationVariables
> {
    document = DeleteVenueDocument;
}
export const VenueDocument = gql`
    query venue($venueId: String!) {
        venue(venueId: $venueId) {
            venueId
            campus
            capacity
            type
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class VenueGQL extends Apollo.Query<VenueQuery, VenueQueryVariables> {
    document = VenueDocument;
}
export const VenuesDocument = gql`
    query venues {
        venues {
            venueId
            campus
            capacity
            type
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class VenuesGQL extends Apollo.Query<VenuesQuery, VenuesQueryVariables> {
    document = VenuesDocument;
}
export const AddWorkFocusDocument = gql`
    mutation addWorkFocus($workFocus: WorkFocusInput) {
        addWorkFocus(workFocus: $workFocus) {
            name
            teachingRatio
            researchRatio
            serviceRatio
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AddWorkFocusGQL extends Apollo.Mutation<
    AddWorkFocusMutation,
    AddWorkFocusMutationVariables
> {
    document = AddWorkFocusDocument;
}
export const EditWorkFocusDocument = gql`
    mutation editWorkFocus($workFocus: WorkFocusInput) {
        editWorkFocus(workFocus: $workFocus) {
            name
            teachingRatio
            researchRatio
            serviceRatio
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class EditWorkFocusGQL extends Apollo.Mutation<
    EditWorkFocusMutation,
    EditWorkFocusMutationVariables
> {
    document = EditWorkFocusDocument;
}
export const DeleteWorkFocusDocument = gql`
    mutation deleteWorkFocus($workFocus: WorkFocusInput) {
        deleteWorkFocus(workFocus: $workFocus) {
            name
            teachingRatio
            researchRatio
            serviceRatio
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class DeleteWorkFocusGQL extends Apollo.Mutation<
    DeleteWorkFocusMutation,
    DeleteWorkFocusMutationVariables
> {
    document = DeleteWorkFocusDocument;
}
export const WorkFocusDocument = gql`
    query workFocus($name: String!) {
        workFocus(name: $name) {
            name
            teachingRatio
            researchRatio
            serviceRatio
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class WorkFocusGQL extends Apollo.Query<
    WorkFocusQuery,
    WorkFocusQueryVariables
> {
    document = WorkFocusDocument;
}
export const WorkFocusesDocument = gql`
    query workFocuses {
        workFocuses {
            name
            teachingRatio
            researchRatio
            serviceRatio
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class WorkFocusesGQL extends Apollo.Query<
    WorkFocusesQuery,
    WorkFocusesQueryVariables
> {
    document = WorkFocusesDocument;
}
export const TeachingHoursDocument = gql`
    query teachingHours($userId: String!) {
        teachingHours(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class TeachingHoursGQL extends Apollo.Query<
    TeachingHoursQuery,
    TeachingHoursQueryVariables
> {
    document = TeachingHoursDocument;
}
export const ResearchHoursDocument = gql`
    query researchHours($userId: String!) {
        researchHours(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class ResearchHoursGQL extends Apollo.Query<
    ResearchHoursQuery,
    ResearchHoursQueryVariables
> {
    document = ResearchHoursDocument;
}
export const ServiceHoursDocument = gql`
    query serviceHours($userId: String!) {
        serviceHours(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class ServiceHoursGQL extends Apollo.Query<
    ServiceHoursQuery,
    ServiceHoursQueryVariables
> {
    document = ServiceHoursDocument;
}
export const AnnualHoursDocument = gql`
    query annualHours {
        annualHours
    }
`;

@Injectable({
    providedIn: "root"
})
export class AnnualHoursGQL extends Apollo.Query<
    AnnualHoursQuery,
    AnnualHoursQueryVariables
> {
    document = AnnualHoursDocument;
}
export const AcademicAdministrationWorkloadPerUserDocument = gql`
    query academicAdministrationWorkloadPerUser($userId: String) {
        academicAdministrationWorkloadPerUser(userId: $userId) {
            academicAdministrationWorkloadData {
                academicAdministrationTotalHoursPerActivity
                academicAdministrationPercentageOfWorkFocusPerActivity
                academicAdministrationPercentageOfAnnualHoursPerActivity
            }
            academicAdministrationGlobalTarrif
            academicAdministrationTotalHoursPerUser
            academicAdministrationPercentageOfWorkFocusPerUser
            academicAdministrationPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class AcademicAdministrationWorkloadPerUserGQL extends Apollo.Query<
    AcademicAdministrationWorkloadPerUserQuery,
    AcademicAdministrationWorkloadPerUserQueryVariables
> {
    document = AcademicAdministrationWorkloadPerUserDocument;
}
export const CommunityInstructionWorkloadPerUserDocument = gql`
    query communityInstructionWorkloadPerUser($userId: String) {
        communityInstructionWorkloadPerUser(userId: $userId) {
            communityInstructionWorkloadData {
                communityInstructionTotalHoursPerActivity
                communityInstructionPercentageOfWorkFocusPerActivity
                communityInstructionPercentageOfAnnualHoursPerActivity
            }
            communityInstructionGlobalTarrif
            communityInstructionTotalHoursPerUser
            communityInstructionPercentageOfWorkFocusPerUser
            communityInstructionPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class CommunityInstructionWorkloadPerUserGQL extends Apollo.Query<
    CommunityInstructionWorkloadPerUserQuery,
    CommunityInstructionWorkloadPerUserQueryVariables
> {
    document = CommunityInstructionWorkloadPerUserDocument;
}
export const ExecutiveManagementWorkloadPerUserDocument = gql`
    query executiveManagementWorkloadPerUser($userId: String) {
        executiveManagementWorkloadPerUser(userId: $userId) {
            executiveManagementWorkloadData {
                executiveManagementTotalHoursPerActivity
                executiveManagementPercentageOfWorkFocusPerActivity
                executiveManagementPercentageOfAnnualHoursPerActivity
            }
            executiveManagementGlobalTarrif
            executiveManagementTotalHoursPerUser
            executiveManagementPercentageOfWorkFocusPerUser
            executiveManagementPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ExecutiveManagementWorkloadPerUserGQL extends Apollo.Query<
    ExecutiveManagementWorkloadPerUserQuery,
    ExecutiveManagementWorkloadPerUserQueryVariables
> {
    document = ExecutiveManagementWorkloadPerUserDocument;
}
export const FormalInstructionWorkloadPerUserDocument = gql`
    query formalInstructionWorkloadPerUser($userId: String) {
        formalInstructionWorkloadPerUser(userId: $userId) {
            formalInstructionWorkloadData {
                formalInstructionActivity {
                    activityId
                    duty {
                        dutyId
                        name
                    }
                    module {
                        moduleId
                        name
                        type
                        assessmentMethod
                        nqfLevel
                        stackId
                        qualificationId
                        qualification {
                            qualificationId
                            name
                        }
                        offeringTypeId
                        offeringType {
                            offeringTypeId
                            description
                        }
                        disciplineId
                        discipline {
                            disciplineId
                            name
                        }
                        venueId
                        venue {
                            venueId
                            campus
                            capacity
                        }
                        blockId
                        block {
                            blockId
                            name
                        }
                        userId
                        user {
                            userId
                            firstName
                            lastName
                            email
                        }
                        coordinatorId
                        coordinator {
                            userId
                            firstName
                            lastName
                            email
                        }
                        moderatorId
                        moderator {
                            userId
                            firstName
                            lastName
                            email
                        }
                        credits
                        groupSize
                        lecturedBy
                        moderation
                    }
                    block {
                        blockId
                        name
                        description
                    }
                    offeringType {
                        offeringTypeId
                        description
                    }
                    qualification {
                        qualificationId
                        name
                        type
                        departmentId
                    }
                    user {
                        userId
                        email
                        firstName
                        lastName
                        photoUrl
                        discipline {
                            disciplineId
                            name
                            description
                        }
                        position {
                            positionId
                            name
                            description
                        }
                        workFocusName
                        workFocus {
                            name
                            teachingRatio
                            researchRatio
                            serviceRatio
                        }
                        gender
                        nationality
                    }
                }
                formalInstructionStudentsEnrolled
                formalInstructionBaseContactHours
                formalInstructionCoordinationHours
                formalInstructionStudentSupportHours
                formalInstructionPreparationTimeHours
                formalInstructionAssessmentSettingHours
                formalInstructionExamMarkingHours
                formalInstructionCourseworkMarkingHours
                formalInstructionFeedbackHours
                formalInstructionFormativeAssessmentHours
                formalInstructionModerationHours
                formalInstructionOtherHoursPerActivity
                formalInstructionTotalHoursPerActivity
                formalInstructionPercentageOfWorkFocusPerActivity
                formalInstructionPercentageOfAnnualHoursPerActivity
            }
            formalInstructionTotalHoursPerUser
            formalInstructionPercentageOfWorkFocusPerUser
            formalInstructionPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionWorkloadPerUserGQL extends Apollo.Query<
    FormalInstructionWorkloadPerUserQuery,
    FormalInstructionWorkloadPerUserQueryVariables
> {
    document = FormalInstructionWorkloadPerUserDocument;
}
export const FormalInstructionLectureWeeksDocument = gql`
    query formalInstructionLectureWeeks($activityId: String) {
        formalInstructionLectureWeeks(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionLectureWeeksGQL extends Apollo.Query<
    FormalInstructionLectureWeeksQuery,
    FormalInstructionLectureWeeksQueryVariables
> {
    document = FormalInstructionLectureWeeksDocument;
}
export const FormalInstructionStudentsEnrolledDocument = gql`
    query formalInstructionStudentsEnrolled($activityId: String) {
        formalInstructionStudentsEnrolled(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionStudentsEnrolledGQL extends Apollo.Query<
    FormalInstructionStudentsEnrolledQuery,
    FormalInstructionStudentsEnrolledQueryVariables
> {
    document = FormalInstructionStudentsEnrolledDocument;
}
export const FormalInstructionBaseContactHoursDocument = gql`
    query formalInstructionBaseContactHours($activityId: String) {
        formalInstructionBaseContactHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionBaseContactHoursGQL extends Apollo.Query<
    FormalInstructionBaseContactHoursQuery,
    FormalInstructionBaseContactHoursQueryVariables
> {
    document = FormalInstructionBaseContactHoursDocument;
}
export const FormalInstructionCoordinationHoursDocument = gql`
    query formalInstructionCoordinationHours($activityId: String) {
        formalInstructionCoordinationHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionCoordinationHoursGQL extends Apollo.Query<
    FormalInstructionCoordinationHoursQuery,
    FormalInstructionCoordinationHoursQueryVariables
> {
    document = FormalInstructionCoordinationHoursDocument;
}
export const FormalInstructionStudentSupportHoursDocument = gql`
    query formalInstructionStudentSupportHours($activityId: String) {
        formalInstructionStudentSupportHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionStudentSupportHoursGQL extends Apollo.Query<
    FormalInstructionStudentSupportHoursQuery,
    FormalInstructionStudentSupportHoursQueryVariables
> {
    document = FormalInstructionStudentSupportHoursDocument;
}
export const FormalInstructionPreparationTimeHoursDocument = gql`
    query formalInstructionPreparationTimeHours($activityId: String) {
        formalInstructionPreparationTimeHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionPreparationTimeHoursGQL extends Apollo.Query<
    FormalInstructionPreparationTimeHoursQuery,
    FormalInstructionPreparationTimeHoursQueryVariables
> {
    document = FormalInstructionPreparationTimeHoursDocument;
}
export const FormalInstructionAssessmentSettingHoursDocument = gql`
    query formalInstructionAssessmentSettingHours($activityId: String) {
        formalInstructionAssessmentSettingHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionAssessmentSettingHoursGQL extends Apollo.Query<
    FormalInstructionAssessmentSettingHoursQuery,
    FormalInstructionAssessmentSettingHoursQueryVariables
> {
    document = FormalInstructionAssessmentSettingHoursDocument;
}
export const FormalInstructionExamMarkingHoursDocument = gql`
    query formalInstructionExamMarkingHours($activityId: String) {
        formalInstructionExamMarkingHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionExamMarkingHoursGQL extends Apollo.Query<
    FormalInstructionExamMarkingHoursQuery,
    FormalInstructionExamMarkingHoursQueryVariables
> {
    document = FormalInstructionExamMarkingHoursDocument;
}
export const FormalInstructionCourseworkMarkingHoursDocument = gql`
    query formalInstructionCourseworkMarkingHours($activityId: String) {
        formalInstructionCourseworkMarkingHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionCourseworkMarkingHoursGQL extends Apollo.Query<
    FormalInstructionCourseworkMarkingHoursQuery,
    FormalInstructionCourseworkMarkingHoursQueryVariables
> {
    document = FormalInstructionCourseworkMarkingHoursDocument;
}
export const FormalInstructionFeedbackHoursDocument = gql`
    query formalInstructionFeedbackHours($activityId: String) {
        formalInstructionFeedbackHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionFeedbackHoursGQL extends Apollo.Query<
    FormalInstructionFeedbackHoursQuery,
    FormalInstructionFeedbackHoursQueryVariables
> {
    document = FormalInstructionFeedbackHoursDocument;
}
export const FormalInstructionFormativeAssessmentHoursDocument = gql`
    query formalInstructionFormativeAssessmentHours($activityId: String) {
        formalInstructionFormativeAssessmentHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionFormativeAssessmentHoursGQL extends Apollo.Query<
    FormalInstructionFormativeAssessmentHoursQuery,
    FormalInstructionFormativeAssessmentHoursQueryVariables
> {
    document = FormalInstructionFormativeAssessmentHoursDocument;
}
export const FormalInstructionModerationHoursDocument = gql`
    query formalInstructionModerationHours($activityId: String) {
        formalInstructionModerationHours(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionModerationHoursGQL extends Apollo.Query<
    FormalInstructionModerationHoursQuery,
    FormalInstructionModerationHoursQueryVariables
> {
    document = FormalInstructionModerationHoursDocument;
}
export const FormalInstructionTotalHoursPerActivityDocument = gql`
    query formalInstructionTotalHoursPerActivity($activityId: String) {
        formalInstructionTotalHoursPerActivity(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionTotalHoursPerActivityGQL extends Apollo.Query<
    FormalInstructionTotalHoursPerActivityQuery,
    FormalInstructionTotalHoursPerActivityQueryVariables
> {
    document = FormalInstructionTotalHoursPerActivityDocument;
}
export const FormalInstructionOtherHoursPerActivityDocument = gql`
    query formalInstructionOtherHoursPerActivity($activityId: String) {
        formalInstructionOtherHoursPerActivity(activityId: $activityId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionOtherHoursPerActivityGQL extends Apollo.Query<
    FormalInstructionOtherHoursPerActivityQuery,
    FormalInstructionOtherHoursPerActivityQueryVariables
> {
    document = FormalInstructionOtherHoursPerActivityDocument;
}
export const FormalInstructionTotalHoursPerUserDocument = gql`
    query formalInstructionTotalHoursPerUser($userId: String) {
        formalInstructionTotalHoursPerUser(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionTotalHoursPerUserGQL extends Apollo.Query<
    FormalInstructionTotalHoursPerUserQuery,
    FormalInstructionTotalHoursPerUserQueryVariables
> {
    document = FormalInstructionTotalHoursPerUserDocument;
}
export const FormalInstructionPercentageOfWorkFocusPerActivityDocument = gql`
    query formalInstructionPercentageOfWorkFocusPerActivity(
        $activityId: String
    ) {
        formalInstructionPercentageOfWorkFocusPerActivity(
            activityId: $activityId
        )
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionPercentageOfWorkFocusPerActivityGQL extends Apollo.Query<
    FormalInstructionPercentageOfWorkFocusPerActivityQuery,
    FormalInstructionPercentageOfWorkFocusPerActivityQueryVariables
> {
    document = FormalInstructionPercentageOfWorkFocusPerActivityDocument;
}
export const FormalInstructionPercentageOfWorkFocusPerUserDocument = gql`
    query formalInstructionPercentageOfWorkFocusPerUser($userId: String) {
        formalInstructionPercentageOfWorkFocusPerUser(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionPercentageOfWorkFocusPerUserGQL extends Apollo.Query<
    FormalInstructionPercentageOfWorkFocusPerUserQuery,
    FormalInstructionPercentageOfWorkFocusPerUserQueryVariables
> {
    document = FormalInstructionPercentageOfWorkFocusPerUserDocument;
}
export const FormalInstructionPercentageOfAnnualHoursPerActivityDocument = gql`
    query formalInstructionPercentageOfAnnualHoursPerActivity(
        $activityId: String
    ) {
        formalInstructionPercentageOfAnnualHoursPerActivity(
            activityId: $activityId
        )
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionPercentageOfAnnualHoursPerActivityGQL extends Apollo.Query<
    FormalInstructionPercentageOfAnnualHoursPerActivityQuery,
    FormalInstructionPercentageOfAnnualHoursPerActivityQueryVariables
> {
    document = FormalInstructionPercentageOfAnnualHoursPerActivityDocument;
}
export const FormalInstructionPercentageOfAnnualHoursPerUserDocument = gql`
    query formalInstructionPercentageOfAnnualHoursPerUser($userId: String) {
        formalInstructionPercentageOfAnnualHoursPerUser(userId: $userId)
    }
`;

@Injectable({
    providedIn: "root"
})
export class FormalInstructionPercentageOfAnnualHoursPerUserGQL extends Apollo.Query<
    FormalInstructionPercentageOfAnnualHoursPerUserQuery,
    FormalInstructionPercentageOfAnnualHoursPerUserQueryVariables
> {
    document = FormalInstructionPercentageOfAnnualHoursPerUserDocument;
}
export const PersonnelDevelopmentWorkloadPerUserDocument = gql`
    query personnelDevelopmentWorkloadPerUser($userId: String) {
        personnelDevelopmentWorkloadPerUser(userId: $userId) {
            personnelDevelopmentWorkloadData {
                personnelDevelopmentTotalHoursPerActivity
                personnelDevelopmentPercentageOfWorkFocusPerActivity
                personnelDevelopmentPercentageOfAnnualHoursPerActivity
            }
            personnelDevelopmentGlobalTarrif
            personnelDevelopmentTotalHoursPerUser
            personnelDevelopmentPercentageOfWorkFocusPerUser
            personnelDevelopmentPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PersonnelDevelopmentWorkloadPerUserGQL extends Apollo.Query<
    PersonnelDevelopmentWorkloadPerUserQuery,
    PersonnelDevelopmentWorkloadPerUserQueryVariables
> {
    document = PersonnelDevelopmentWorkloadPerUserDocument;
}
export const PublicServiceWorkloadPerUserDocument = gql`
    query publicServiceWorkloadPerUser($userId: String) {
        publicServiceWorkloadPerUser(userId: $userId) {
            publicServiceWorkloadData {
                publicServiceTotalHoursPerActivity
                publicServicePercentageOfWorkFocusPerActivity
                publicServicePercentageOfAnnualHoursPerActivity
            }
            publicServiceGlobalTarrif
            publicServiceTotalHoursPerUser
            publicServicePercentageOfWorkFocusPerUser
            publicServicePercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class PublicServiceWorkloadPerUserGQL extends Apollo.Query<
    PublicServiceWorkloadPerUserQuery,
    PublicServiceWorkloadPerUserQueryVariables
> {
    document = PublicServiceWorkloadPerUserDocument;
}
export const ResearchWorkloadPerUserDocument = gql`
    query researchWorkloadPerUser($userId: String) {
        researchWorkloadPerUser(userId: $userId) {
            researchWorkloadData {
                researchTotalHoursPerActivity
                researchPercentageOfWorkFocusPerActivity
                researchPercentageOfAnnualHoursPerActivity
            }
            researchGlobalTarrif
            researchTotalHoursPerUser
            researchPercentageOfWorkFocusPerUser
            researchPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ResearchWorkloadPerUserGQL extends Apollo.Query<
    ResearchWorkloadPerUserQuery,
    ResearchWorkloadPerUserQueryVariables
> {
    document = ResearchWorkloadPerUserDocument;
}
export const SupervisionWorkloadPerUserDocument = gql`
    query supervisionWorkloadPerUser($userId: String) {
        supervisionWorkloadPerUser(userId: $userId) {
            supervisionWorkloadData {
                supervisionTotalHoursPerActivity
                supervisionPercentageOfWorkFocusPerActivity
                supervisionPercentageOfAnnualHoursPerActivity
            }
            supervisionGlobalTarrif
            supervisionTotalHoursPerUser
            supervisionPercentageOfWorkFocusPerUser
            supervisionPercentageOfAnnualHoursPerUser
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class SupervisionWorkloadPerUserGQL extends Apollo.Query<
    SupervisionWorkloadPerUserQuery,
    SupervisionWorkloadPerUserQueryVariables
> {
    document = SupervisionWorkloadPerUserDocument;
}
