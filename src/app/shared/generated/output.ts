type Maybe<T> = T | null;
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

export type Activity = {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
};

export type AuthData = {
    userId: Scalars["String"];
    token: Scalars["String"];
    tokenExpiration: Scalars["Int"];
};

export type Block = {
    blockId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export enum CacheControlScope {
    Public = "PUBLIC",
    Private = "PRIVATE"
}

export type CommInstructionActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    commInstructionDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Evidence>;
    workload?: Maybe<Scalars["Int"]>;
};

export type Department = {
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
    faculty?: Maybe<Faculty>;
};

export type Discipline = {
    disciplineId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type Duty = {
    dutyId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type Enrollment = {
    enrollmentId: Scalars["String"];
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    qualification?: Maybe<Qualification>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type Event = {
    eventId: Scalars["String"];
    description: Scalars["String"];
};

export type Evidence = {
    evidenceId: Scalars["String"];
    name: Scalars["String"];
    item?: Maybe<Scalars["String"]>;
};

export type Faculty = {
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type FormalInstructionActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    coordinatorId?: Maybe<Scalars["String"]>;
    coordinator?: Maybe<User>;
    moderatorId?: Maybe<Scalars["String"]>;
    moderator?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    moduleId?: Maybe<Scalars["String"]>;
    module?: Maybe<Module>;
    workload?: Maybe<Scalars["Int"]>;
};

export type Module = {
    moduleId: Scalars["String"];
    name: Scalars["String"];
    type: Scalars["String"];
    assessmentMethod: Scalars["String"];
    nqfLevel: Scalars["String"];
    credits?: Maybe<Scalars["Int"]>;
    qualificationId: Scalars["String"];
    qualification?: Maybe<Qualification>;
    offeringTypeId: Scalars["String"];
    offeringType?: Maybe<OfferingType>;
    disciplineId: Scalars["String"];
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
};

export type Mutation = {
    addBlock?: Maybe<Block>;
    editBlock?: Maybe<Block>;
    deleteBlock?: Maybe<Block>;
    addUser?: Maybe<User>;
    editUser?: Maybe<User>;
    deleteUser?: Maybe<User>;
    addDepartment?: Maybe<Department>;
    editDepartment?: Maybe<Department>;
    deleteDepartment?: Maybe<Department>;
    addDiscipline?: Maybe<Discipline>;
    editDiscipline?: Maybe<Discipline>;
    deleteDiscipline?: Maybe<Discipline>;
    addDuty?: Maybe<Duty>;
    editDuty?: Maybe<Duty>;
    deleteDuty?: Maybe<Duty>;
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
    editModule?: Maybe<Module>;
    deleteModule?: Maybe<Module>;
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
    addCommInstructionActivity?: Maybe<CommInstructionActivity>;
    editCommInstructionActivity?: Maybe<CommInstructionActivity>;
    deleteCommInstructionActivity?: Maybe<CommInstructionActivity>;
    addPublicServiceActivity?: Maybe<PublicServiceActivity>;
    editPublicServiceActivity?: Maybe<PublicServiceActivity>;
    deletePublicServiceActivity?: Maybe<PublicServiceActivity>;
    addFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    editFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    deleteFormalInstructionActivity?: Maybe<FormalInstructionActivity>;
    addResearchActivity?: Maybe<ResearchActivity>;
    editResearchActivity?: Maybe<ResearchActivity>;
    deleteResearchActivity?: Maybe<ResearchActivity>;
    addSupervisionActivity?: Maybe<SupervisionActivity>;
    editSupervisionActivity?: Maybe<SupervisionActivity>;
    deleteSupervisionActivity?: Maybe<SupervisionActivity>;
    addVenue?: Maybe<Venue>;
    editVenue?: Maybe<Venue>;
    deleteVenue?: Maybe<Venue>;
    addEnrollment?: Maybe<Enrollment>;
    editEnrollment?: Maybe<Enrollment>;
    deleteEnrollment?: Maybe<Enrollment>;
    addWorkFocus?: Maybe<WorkFocus>;
    editWorkFocus?: Maybe<WorkFocus>;
    deleteWorkFocus?: Maybe<WorkFocus>;
};

export type MutationAddBlockArgs = {
    blockId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type MutationEditBlockArgs = {
    blockId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteBlockArgs = {
    blockId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationAddUserArgs = {
    userId: Scalars["String"];
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

export type MutationEditUserArgs = {
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

export type MutationDeleteUserArgs = {
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

export type MutationAddDepartmentArgs = {
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
};

export type MutationEditDepartmentArgs = {
    departmentId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    facultyId?: Maybe<Scalars["String"]>;
};

export type MutationDeleteDepartmentArgs = {
    departmentId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    facultyId?: Maybe<Scalars["String"]>;
};

export type MutationAddDisciplineArgs = {
    disciplineId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type MutationEditDisciplineArgs = {
    disciplineId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteDisciplineArgs = {
    disciplineId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationAddDutyArgs = {
    dutyId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationEditDutyArgs = {
    dutyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteDutyArgs = {
    dutyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
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
    name: Scalars["String"];
    item?: Maybe<Scalars["String"]>;
};

export type MutationEditEvidenceArgs = {
    evidenceId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    item?: Maybe<Scalars["String"]>;
};

export type MutationDeleteEvidenceArgs = {
    evidenceId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    item?: Maybe<Scalars["String"]>;
};

export type MutationAddFacultyArgs = {
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type MutationEditFacultyArgs = {
    facultyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
};

export type MutationDeleteFacultyArgs = {
    facultyId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
};

export type MutationAddModuleArgs = {
    moduleId: Scalars["String"];
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
};

export type MutationEditModuleArgs = {
    moduleId: Scalars["String"];
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
};

export type MutationDeleteModuleArgs = {
    moduleId: Scalars["String"];
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
};

export type MutationAddOfferingTypeArgs = {
    description: Scalars["String"];
};

export type MutationEditOfferingTypeArgs = {
    offeringTypeId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeleteOfferingTypeArgs = {
    offeringTypeId?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationAddPositionArgs = {
    name: Scalars["String"];
    description: Scalars["String"];
};

export type MutationEditPositionArgs = {
    positionId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationDeletePositionArgs = {
    positionId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type MutationAddQualificationArgs = {
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
};

export type MutationEditQualificationArgs = {
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
};

export type MutationDeleteQualificationArgs = {
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
};

export type MutationAddStudentArgs = {
    studentId: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type MutationEditStudentArgs = {
    studentId: Scalars["String"];
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type MutationDeleteStudentArgs = {
    studentId: Scalars["String"];
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type MutationAddCommInstructionActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["String"];
    commInstructionDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationEditCommInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    commInstructionDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteCommInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    commInstructionDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationAddPublicServiceActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["String"];
    publicServiceDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationEditPublicServiceActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    publicServiceDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationDeletePublicServiceActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    publicServiceDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationAddFormalInstructionActivityArgs = {
    userId: Scalars["String"];
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    dutyId: Scalars["String"];
    moduleId: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationEditFormalInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    moduleId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteFormalInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    moduleId?: Maybe<Scalars["String"]>;
};

export type MutationAddResearchActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt: Scalars["String"];
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationEditResearchActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteResearchActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    researchType?: Maybe<Scalars["String"]>;
    researchUrl?: Maybe<Scalars["String"]>;
};

export type MutationAddSupervisionActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    supervisionRole: Scalars["String"];
    studentId: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationEditSupervisionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    supervisionRole?: Maybe<Scalars["String"]>;
    studentId?: Maybe<Scalars["String"]>;
    workload?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteSupervisionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    supervisionRole?: Maybe<Scalars["String"]>;
    studentId?: Maybe<Scalars["String"]>;
};

export type MutationAddVenueArgs = {
    venueId: Scalars["String"];
    campus: Scalars["String"];
    capacity: Scalars["Int"];
};

export type MutationEditVenueArgs = {
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteVenueArgs = {
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
};

export type MutationAddEnrollmentArgs = {
    enrollmentId?: Maybe<Scalars["String"]>;
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type MutationEditEnrollmentArgs = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteEnrollmentArgs = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type MutationAddWorkFocusArgs = {
    name?: Maybe<Scalars["String"]>;
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};

export type MutationEditWorkFocusArgs = {
    name?: Maybe<Scalars["String"]>;
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteWorkFocusArgs = {
    name?: Maybe<Scalars["String"]>;
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};

export type OfferingType = {
    offeringTypeId: Scalars["String"];
    description: Scalars["String"];
};

export type Position = {
    positionId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type PublicServiceActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    publicServiceDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Evidence>;
    workload?: Maybe<Scalars["Int"]>;
};

export type Qualification = {
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
    department?: Maybe<Department>;
};

export type Query = {
    block?: Maybe<Block>;
    blocks?: Maybe<Array<Maybe<Block>>>;
    user?: Maybe<User>;
    users?: Maybe<Array<Maybe<User>>>;
    login?: Maybe<AuthData>;
    department?: Maybe<Department>;
    departments?: Maybe<Array<Maybe<Department>>>;
    discipline?: Maybe<Discipline>;
    disciplines?: Maybe<Array<Maybe<Discipline>>>;
    duty?: Maybe<Duty>;
    duties?: Maybe<Array<Maybe<Duty>>>;
    event?: Maybe<Event>;
    events?: Maybe<Array<Maybe<Event>>>;
    evidence?: Maybe<Evidence>;
    evidences?: Maybe<Array<Maybe<Evidence>>>;
    faculty?: Maybe<Faculty>;
    faculties?: Maybe<Array<Maybe<Faculty>>>;
    module?: Maybe<Module>;
    modules?: Maybe<Array<Maybe<Module>>>;
    modulesByDiscipline?: Maybe<Array<Maybe<Module>>>;
    unassignedModules?: Maybe<Array<Maybe<Module>>>;
    modulesByUser?: Maybe<Array<Maybe<Module>>>;
    stackedWith?: Maybe<Array<Maybe<Module>>>;
    offeringType?: Maybe<OfferingType>;
    offeringTypes?: Maybe<Array<Maybe<OfferingType>>>;
    position?: Maybe<Position>;
    positions?: Maybe<Array<Maybe<Position>>>;
    qualification?: Maybe<Qualification>;
    qualifications?: Maybe<Array<Maybe<Qualification>>>;
    student?: Maybe<Student>;
    students?: Maybe<Array<Maybe<Student>>>;
    activity?: Maybe<Activity>;
    activities?: Maybe<Array<Maybe<Activity>>>;
    activitiesByDuty?: Maybe<Array<Maybe<Activity>>>;
    activitiesByUser?: Maybe<Array<Maybe<Activity>>>;
    unapprovedActivities?: Maybe<Array<Maybe<Activity>>>;
    formalInstructionActivity?: Maybe<FormalInstructionActivity>;
    formalInstructionActivities?: Maybe<
        Array<Maybe<FormalInstructionActivity>>
    >;
    formalInstructionActivitiesByUser?: Maybe<
        Array<Maybe<FormalInstructionActivity>>
    >;
    researchActivity?: Maybe<ResearchActivity>;
    researchActivities?: Maybe<Array<Maybe<ResearchActivity>>>;
    researchActivitiesByUser?: Maybe<Array<Maybe<ResearchActivity>>>;
    supervisionActivity?: Maybe<SupervisionActivity>;
    supervisionActivities?: Maybe<Array<Maybe<SupervisionActivity>>>;
    venue?: Maybe<Venue>;
    venues?: Maybe<Array<Maybe<Venue>>>;
    enrollment?: Maybe<Enrollment>;
    enrollments?: Maybe<Array<Maybe<Enrollment>>>;
    enrollmentsByYear?: Maybe<Array<Maybe<Enrollment>>>;
    enrollmentsByQualification?: Maybe<Array<Maybe<Enrollment>>>;
    workFocus?: Maybe<WorkFocus>;
    workFocuses?: Maybe<Array<Maybe<WorkFocus>>>;
};

export type QueryBlockArgs = {
    blockId: Scalars["String"];
};

export type QueryUserArgs = {
    userId: Scalars["String"];
};

export type QueryLoginArgs = {
    userId: Scalars["String"];
    password: Scalars["String"];
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
};

export type QueryModulesByDisciplineArgs = {
    disciplineId: Scalars["String"];
};

export type QueryModulesByUserArgs = {
    userId?: Maybe<Scalars["String"]>;
};

export type QueryStackedWithArgs = {
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

export type QueryActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryActivitiesByDutyArgs = {
    dutyId: Scalars["String"];
};

export type QueryActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type QueryFormalInstructionActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryFormalInstructionActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type QueryResearchActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryResearchActivitiesByUserArgs = {
    userId: Scalars["String"];
};

export type QuerySupervisionActivityArgs = {
    activityId: Scalars["String"];
};

export type QueryVenueArgs = {
    venueId: Scalars["String"];
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

export type QueryWorkFocusArgs = {
    name: Scalars["String"];
};

export type ResearchActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
};

export type Student = {
    studentId: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    title: Scalars["String"];
    year: Scalars["String"];
};

export type SupervisionActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    createdAt?: Maybe<Scalars["String"]>;
    updatedAt?: Maybe<Scalars["String"]>;
    supervisionRole: Scalars["String"];
    studentId: Scalars["String"];
    student?: Maybe<Student>;
    workload?: Maybe<Scalars["Int"]>;
};

export type User = {
    userId: Scalars["String"];
    password?: Maybe<Scalars["String"]>;
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

export type Venue = {
    venueId: Scalars["String"];
    campus: Scalars["String"];
    capacity: Scalars["Int"];
};

export type WorkFocus = {
    name: Scalars["String"];
    teachingRatio?: Maybe<Scalars["Int"]>;
    researchRatio?: Maybe<Scalars["Int"]>;
    serviceRatio?: Maybe<Scalars["Int"]>;
};
export type ActivitiesQueryVariables = {};

export type ActivitiesQuery = { __typename?: "Query" } & {
    activities: Maybe<
        Array<
            Maybe<
                Pick<
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
                        | ({ __typename?: "CommInstructionActivity" } & Pick<
                              CommInstructionActivity,
                              "commInstructionDescription" | "evidenceId"
                          > & {
                                  evidence: Maybe<
                                      { __typename?: "Evidence" } & Pick<
                                          Evidence,
                                          "evidenceId" | "name" | "item"
                                      >
                                  >;
                              })
                        | ({ __typename?: "PublicServiceActivity" } & Pick<
                              PublicServiceActivity,
                              "publicServiceDescription" | "evidenceId"
                          > & {
                                  evidence: Maybe<
                                      { __typename?: "Evidence" } & Pick<
                                          Evidence,
                                          "evidenceId" | "name" | "item"
                                      >
                                  >;
                              })
                        | ({ __typename?: "FormalInstructionActivity" } & Pick<
                              FormalInstructionActivity,
                              "moduleId"
                          > & {
                                  module: Maybe<
                                      { __typename?: "Module" } & Pick<
                                          Module,
                                          | "moduleId"
                                          | "name"
                                          | "type"
                                          | "assessmentMethod"
                                          | "nqfLevel"
                                          | "studyPeriod"
                                          | "stackId"
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
                                          }
                                  >;
                              })
                        | ({ __typename?: "ResearchActivity" } & Pick<
                              ResearchActivity,
                              "researchType" | "researchUrl"
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

export type ActivityQueryVariables = {
    activityId: Scalars["String"];
};

export type ActivityQuery = { __typename?: "Query" } & {
    activity: Maybe<
        Pick<
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
                | ({ __typename?: "CommInstructionActivity" } & Pick<
                      CommInstructionActivity,
                      "commInstructionDescription" | "evidenceId"
                  > & {
                          evidence: Maybe<
                              { __typename?: "Evidence" } & Pick<
                                  Evidence,
                                  "evidenceId" | "name" | "item"
                              >
                          >;
                      })
                | ({ __typename?: "PublicServiceActivity" } & Pick<
                      PublicServiceActivity,
                      "publicServiceDescription" | "evidenceId"
                  > & {
                          evidence: Maybe<
                              { __typename?: "Evidence" } & Pick<
                                  Evidence,
                                  "evidenceId" | "name" | "item"
                              >
                          >;
                      })
                | ({ __typename?: "FormalInstructionActivity" } & Pick<
                      FormalInstructionActivity,
                      "moduleId"
                  > & {
                          module: Maybe<
                              { __typename?: "Module" } & Pick<
                                  Module,
                                  | "moduleId"
                                  | "name"
                                  | "type"
                                  | "assessmentMethod"
                                  | "nqfLevel"
                                  | "stackId"
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
                                      user: Maybe<
                                          { __typename?: "User" } & Pick<
                                              User,
                                              | "userId"
                                              | "firstName"
                                              | "lastName"
                                              | "email"
                                          >
                                      >;
                                  }
                          >;
                      })
                | ({ __typename?: "ResearchActivity" } & Pick<
                      ResearchActivity,
                      "researchType" | "researchUrl"
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
    >;
};

export type AddFormalInstructionActivityMutationVariables = {
    userId: Scalars["String"];
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    dutyId: Scalars["String"];
    moduleId: Scalars["String"];
    workload?: Maybe<Scalars["Int"]>;
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
            | "coordinatorId"
            | "moderatorId"
            | "moduleId"
            | "workload"
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
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    >
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        "moduleId" | "name" | "credits"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    "qualificationId" | "name"
                                >
                            >;
                        }
                >;
            }
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
                    | "dutyId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "moduleId"
                    | "workload"
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
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName"
                            >
                        >;
                        module: Maybe<
                            { __typename?: "Module" } & Pick<
                                Module,
                                "moduleId" | "name" | "credits"
                            > & {
                                    qualification: Maybe<
                                        { __typename?: "Qualification" } & Pick<
                                            Qualification,
                                            "qualificationId" | "name"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
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
                    | "dutyId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "moduleId"
                    | "workload"
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
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName"
                            >
                        >;
                        module: Maybe<
                            { __typename?: "Module" } & Pick<
                                Module,
                                "moduleId" | "name" | "credits"
                            > & {
                                    qualification: Maybe<
                                        { __typename?: "Qualification" } & Pick<
                                            Qualification,
                                            "qualificationId" | "name"
                                        >
                                    >;
                                }
                        >;
                    }
            >
        >
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
            | "dutyId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "moduleId"
            | "workload"
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
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName"
                    >
                >;
                module: Maybe<
                    { __typename?: "Module" } & Pick<
                        Module,
                        "moduleId" | "name" | "credits"
                    > & {
                            qualification: Maybe<
                                { __typename?: "Qualification" } & Pick<
                                    Qualification,
                                    "qualificationId" | "name"
                                >
                            >;
                        }
                >;
            }
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
                    | "researchType"
                    | "researchUrl"
                    | "workload"
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

export type AddBlockMutationVariables = {
    blockId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type AddBlockMutation = { __typename?: "Mutation" } & {
    addBlock: Maybe<
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

export type DeleteBlockMutationVariables = {
    blockId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type DeleteBlockMutation = { __typename?: "Mutation" } & {
    deleteBlock: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type EditBlockMutationVariables = {
    blockId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type EditBlockMutation = { __typename?: "Mutation" } & {
    editBlock: Maybe<
        { __typename?: "Block" } & Pick<
            Block,
            "blockId" | "name" | "description"
        >
    >;
};

export type AddDepartmentMutationVariables = {
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
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

export type EditDepartmentMutationVariables = {
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
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

export type AddDisciplineMutationVariables = {
    disciplineId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
};

export type AddDisciplineMutation = { __typename?: "Mutation" } & {
    addDiscipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
    >;
};

export type DeleteDisciplineMutationVariables = {
    disciplineId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
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

export type EditDisciplineMutationVariables = {
    disciplineId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type EditDisciplineMutation = { __typename?: "Mutation" } & {
    editDiscipline: Maybe<
        { __typename?: "Discipline" } & Pick<
            Discipline,
            "disciplineId" | "name" | "description"
        >
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

export type AddEnrollmentMutationVariables = {
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
};

export type AddEnrollmentMutation = { __typename?: "Mutation" } & {
    addEnrollment: Maybe<
        { __typename?: "Enrollment" } & Pick<
            Enrollment,
            | "enrollmentId"
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
    enrollmentYear?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    firstYearEstimated?: Maybe<Scalars["Int"]>;
    secondYearEstimated?: Maybe<Scalars["Int"]>;
    thirdYearEstimated?: Maybe<Scalars["Int"]>;
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
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type AddFacultyMutation = { __typename?: "Mutation" } & {
    addFaculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type DeleteFacultyMutationVariables = {
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type DeleteFacultyMutation = { __typename?: "Mutation" } & {
    deleteFaculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type EditFacultyMutationVariables = {
    facultyId: Scalars["String"];
    name: Scalars["String"];
};

export type EditFacultyMutation = { __typename?: "Mutation" } & {
    addFaculty: Maybe<
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

export type FacultyQueryVariables = {
    facultyId: Scalars["String"];
};

export type FacultyQuery = { __typename?: "Query" } & {
    faculty: Maybe<
        { __typename?: "Faculty" } & Pick<Faculty, "facultyId" | "name">
    >;
};

export type AddModuleMutationVariables = {
    moduleId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    assessmentMethod?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    venueId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    groupSize?: Maybe<Scalars["Int"]>;
    stackId?: Maybe<Scalars["String"]>;
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
            | "stackId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "credits"
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
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
            }
    >;
};

export type DeleteModuleMutationVariables = {
    moduleId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    assessmentMethod?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    venueId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    stackId?: Maybe<Scalars["String"]>;
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
            | "stackId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "groupSize"
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
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
            }
    >;
};

export type EditModuleMutationVariables = {
    moduleId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    assessmentMethod?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    venueId?: Maybe<Scalars["String"]>;
    blockId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    coordinatorId?: Maybe<Scalars["String"]>;
    moderatorId?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    groupSize?: Maybe<Scalars["Int"]>;
    stackId?: Maybe<Scalars["String"]>;
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
            | "stackId"
            | "userId"
            | "coordinatorId"
            | "moderatorId"
            | "credits"
            | "groupSize"
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
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
            }
    >;
};

export type ModuleQueryVariables = {
    moduleId: Scalars["String"];
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
                    { __typename?: "Block" } & Pick<Block, "blockId" | "name">
                >;
                user: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                coordinator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
                moderator: Maybe<
                    { __typename?: "User" } & Pick<
                        User,
                        "userId" | "firstName" | "lastName" | "email"
                    >
                >;
            }
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
                    | "stackId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "credits"
                    | "groupSize"
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
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                    }
            >
        >
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
                    | "stackId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "credits"
                    | "groupSize"
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
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                    }
            >
        >
    >;
};

export type StackedWithQueryVariables = {
    stackId: Scalars["String"];
};

export type StackedWithQuery = { __typename?: "Query" } & {
    stackedWith: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "stackId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "credits"
                    | "groupSize"
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
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                    }
            >
        >
    >;
};

export type UnassignedModulesQueryVariables = {};

export type UnassignedModulesQuery = { __typename?: "Query" } & {
    unassignedModules: Maybe<
        Array<
            Maybe<
                { __typename?: "Module" } & Pick<
                    Module,
                    | "moduleId"
                    | "name"
                    | "type"
                    | "assessmentMethod"
                    | "nqfLevel"
                    | "stackId"
                    | "userId"
                    | "coordinatorId"
                    | "moderatorId"
                    | "credits"
                    | "groupSize"
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
                        user: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        coordinator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                        moderator: Maybe<
                            { __typename?: "User" } & Pick<
                                User,
                                "userId" | "firstName" | "lastName" | "email"
                            >
                        >;
                    }
            >
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
    name: Scalars["String"];
    description: Scalars["String"];
};

export type AddPositionMutation = { __typename?: "Mutation" } & {
    addPosition: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type DeletePositionMutationVariables = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type DeletePositionMutation = { __typename?: "Mutation" } & {
    deletePosition: Maybe<
        { __typename?: "Position" } & Pick<
            Position,
            "positionId" | "name" | "description"
        >
    >;
};

export type EditPositionMutationVariables = {
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
};

export type EditPositionMutation = { __typename?: "Mutation" } & {
    editPosition: Maybe<
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
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
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

export type DeleteQualificationMutationVariables = {
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
};

export type DeleteQualificationMutation = { __typename?: "Mutation" } & {
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
    qualificationId: Scalars["String"];
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
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

export type AddStudentMutationVariables = {
    studentId: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    title: Scalars["String"];
    year: Scalars["String"];
};

export type AddStudentMutation = { __typename?: "Mutation" } & {
    addStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            "studentId" | "email" | "firstName" | "lastName" | "title" | "year"
        >
    >;
};

export type DeleteStudentMutationVariables = {
    studentId: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type DeleteStudentMutation = { __typename?: "Mutation" } & {
    deleteStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            "studentId" | "email" | "firstName" | "lastName" | "title" | "year"
        >
    >;
};

export type EditStudentMutationVariables = {
    studentId: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    title?: Maybe<Scalars["String"]>;
    year?: Maybe<Scalars["String"]>;
};

export type EditStudentMutation = { __typename?: "Mutation" } & {
    editStudent: Maybe<
        { __typename?: "Student" } & Pick<
            Student,
            "studentId" | "email" | "firstName" | "lastName" | "title" | "year"
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
            "studentId" | "email" | "firstName" | "lastName" | "title" | "year"
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
                    | "title"
                    | "year"
                >
            >
        >
    >;
};

export type AddUserMutationVariables = {
    userId: Scalars["String"];
    password?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    photoUrl?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    positionId?: Maybe<Scalars["String"]>;
    gender?: Maybe<Scalars["String"]>;
    workFocusName?: Maybe<Scalars["String"]>;
    nationality?: Maybe<Scalars["String"]>;
};

export type AddUserMutation = { __typename?: "Mutation" } & {
    addUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "password"
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

export type DeleteUserMutationVariables = {
    userId?: Maybe<Scalars["String"]>;
    password?: Maybe<Scalars["String"]>;
    email?: Maybe<Scalars["String"]>;
    firstName?: Maybe<Scalars["String"]>;
    lastName?: Maybe<Scalars["String"]>;
    photoUrl?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    positionId?: Maybe<Scalars["String"]>;
    gender?: Maybe<Scalars["String"]>;
    nationality?: Maybe<Scalars["String"]>;
};

export type DeleteUserMutation = { __typename?: "Mutation" } & {
    deleteUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "password"
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

export type EditUserMutation = { __typename?: "Mutation" } & {
    editUser: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "password"
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

export type UserQueryVariables = {
    userId: Scalars["String"];
};

export type UserQuery = { __typename?: "Query" } & {
    user: Maybe<
        { __typename?: "User" } & Pick<
            User,
            | "userId"
            | "password"
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
                    | "password"
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
    venueId: Scalars["String"];
    campus: Scalars["String"];
    capacity: Scalars["Int"];
};

export type AddVenueMutation = { __typename?: "Mutation" } & {
    addVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity"
        >
    >;
};

export type DeleteVenueMutationVariables = {
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
};

export type DeleteVenueMutation = { __typename?: "Mutation" } & {
    deleteVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity"
        >
    >;
};

export type EditVenueMutationVariables = {
    venueId?: Maybe<Scalars["String"]>;
    campus?: Maybe<Scalars["String"]>;
    capacity?: Maybe<Scalars["Int"]>;
};

export type EditVenueMutation = { __typename?: "Mutation" } & {
    editVenue: Maybe<
        { __typename?: "Venue" } & Pick<
            Venue,
            "venueId" | "campus" | "capacity"
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
            "venueId" | "campus" | "capacity"
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
                    "venueId" | "campus" | "capacity"
                >
            >
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

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

export const ActivitiesDocument = gql`
    query activities {
        activities {
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
            ... on CommInstructionActivity {
                commInstructionDescription
                evidenceId
                evidence {
                    evidenceId
                    name
                    item
                }
            }
            ... on PublicServiceActivity {
                publicServiceDescription
                evidenceId
                evidence {
                    evidenceId
                    name
                    item
                }
            }
            ... on FormalInstructionActivity {
                moduleId
                module {
                    moduleId
                    name
                    type
                    assessmentMethod
                    nqfLevel
                    studyPeriod
                    qualification {
                        qualificationId
                        name
                    }
                    offeringType {
                        offeringTypeId
                        description
                    }
                    discipline {
                        disciplineId
                        name
                    }
                    venue {
                        venueId
                        campus
                        capacity
                    }
                    block {
                        blockId
                        name
                    }
                    user {
                        userId
                        firstName
                        lastName
                        email
                    }
                    stackId
                }
            }
            ... on ResearchActivity {
                researchType
                researchUrl
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
export class ActivitiesGQL extends Apollo.Query<
    ActivitiesQuery,
    ActivitiesQueryVariables
> {
    document = ActivitiesDocument;
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
            ... on CommInstructionActivity {
                commInstructionDescription
                evidenceId
                evidence {
                    evidenceId
                    name
                    item
                }
            }
            ... on PublicServiceActivity {
                publicServiceDescription
                evidenceId
                evidence {
                    evidenceId
                    name
                    item
                }
            }
            ... on FormalInstructionActivity {
                moduleId
                module {
                    moduleId
                    name
                    type
                    assessmentMethod
                    nqfLevel
                    qualification {
                        qualificationId
                        name
                    }
                    offeringType {
                        offeringTypeId
                        description
                    }
                    discipline {
                        disciplineId
                        name
                    }
                    venue {
                        venueId
                        campus
                        capacity
                    }
                    block {
                        blockId
                        name
                    }
                    user {
                        userId
                        firstName
                        lastName
                        email
                    }
                    stackId
                }
            }
            ... on ResearchActivity {
                researchType
                researchUrl
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
export class ActivityGQL extends Apollo.Query<
    ActivityQuery,
    ActivityQueryVariables
> {
    document = ActivityDocument;
}
export const AddFormalInstructionActivityDocument = gql`
    mutation addFormalInstructionActivity(
        $userId: String!
        $coordinatorId: String
        $moderatorId: String
        $dutyId: String!
        $moduleId: String!
        $workload: Int
    ) {
        addFormalInstructionActivity(
            userId: $userId
            coordinatorId: $coordinatorId
            moderatorId: $moderatorId
            dutyId: $dutyId
            moduleId: $moduleId
            workload: $workload
        ) {
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
            }
            coordinatorId
            coordinator {
                userId
                firstName
                lastName
            }
            moderatorId
            moderator {
                userId
                firstName
                lastName
            }
            moduleId
            module {
                moduleId
                name
                qualification {
                    qualificationId
                    name
                }
                credits
            }
            workload
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
export const FormalInstructionActivitiesByUserDocument = gql`
    query formalInstructionActivitiesByUser($userId: String!) {
        formalInstructionActivitiesByUser(userId: $userId) {
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
            }
            coordinatorId
            coordinator {
                userId
                firstName
                lastName
            }
            moderatorId
            moderator {
                userId
                firstName
                lastName
            }
            moduleId
            module {
                moduleId
                name
                qualification {
                    qualificationId
                    name
                }
                credits
            }
            workload
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
export const FormalInstructionActivitiesDocument = gql`
    query formalInstructionActivities {
        formalInstructionActivities {
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
            }
            coordinatorId
            coordinator {
                userId
                firstName
                lastName
            }
            moderatorId
            moderator {
                userId
                firstName
                lastName
            }
            moduleId
            module {
                moduleId
                name
                qualification {
                    qualificationId
                    name
                }
                credits
            }
            workload
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
export const FormalInstructionActivityDocument = gql`
    query formalInstructionActivity($activityId: String!) {
        formalInstructionActivity(activityId: $activityId) {
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
            }
            coordinatorId
            coordinator {
                userId
                firstName
                lastName
            }
            moderatorId
            moderator {
                userId
                firstName
                lastName
            }
            moduleId
            module {
                moduleId
                name
                qualification {
                    qualificationId
                    name
                }
                credits
            }
            workload
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
            }
            dutyId
            duty {
                dutyId
                name
                description
            }
            approvalStatus
            researchType
            researchUrl
            workload
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
    mutation addBlock(
        $blockId: String!
        $name: String!
        $description: String!
    ) {
        addBlock(blockId: $blockId, name: $name, description: $description) {
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
export const DeleteBlockDocument = gql`
    mutation deleteBlock(
        $blockId: String
        $name: String
        $description: String
    ) {
        deleteBlock(blockId: $blockId, name: $name, description: $description) {
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
export const EditBlockDocument = gql`
    mutation editBlock($blockId: String, $name: String, $description: String) {
        editBlock(blockId: $blockId, name: $name, description: $description) {
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
export const AddDepartmentDocument = gql`
    mutation addDepartment(
        $departmentId: String!
        $name: String!
        $facultyId: String!
    ) {
        addDepartment(
            departmentId: $departmentId
            name: $name
            facultyId: $facultyId
        ) {
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
export const EditDepartmentDocument = gql`
    mutation editDepartment(
        $departmentId: String!
        $name: String!
        $facultyId: String!
    ) {
        editDepartment(
            departmentId: $departmentId
            name: $name
            facultyId: $facultyId
        ) {
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
export const AddDisciplineDocument = gql`
    mutation addDiscipline(
        $disciplineId: String!
        $name: String!
        $description: String!
    ) {
        addDiscipline(
            disciplineId: $disciplineId
            name: $name
            description: $description
        ) {
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
export const DeleteDisciplineDocument = gql`
    mutation deleteDiscipline(
        $disciplineId: String!
        $name: String
        $description: String
    ) {
        deleteDiscipline(
            disciplineId: $disciplineId
            name: $name
            description: $description
        ) {
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
export const EditDisciplineDocument = gql`
    mutation editDiscipline(
        $disciplineId: String!
        $name: String
        $description: String
    ) {
        editDiscipline(
            disciplineId: $disciplineId
            name: $name
            description: $description
        ) {
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
export const AddEnrollmentDocument = gql`
    mutation addEnrollment(
        $enrollmentYear: String
        $qualificationId: String
        $firstYearEstimated: Int
        $secondYearEstimated: Int
        $thirdYearEstimated: Int
    ) {
        addEnrollment(
            enrollmentYear: $enrollmentYear
            qualificationId: $qualificationId
            firstYearEstimated: $firstYearEstimated
            secondYearEstimated: $secondYearEstimated
            thirdYearEstimated: $thirdYearEstimated
        ) {
            enrollmentId
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
    mutation editEnrollment(
        $enrollmentYear: String
        $qualificationId: String
        $firstYearEstimated: Int
        $secondYearEstimated: Int
        $thirdYearEstimated: Int
    ) {
        editEnrollment(
            enrollmentYear: $enrollmentYear
            qualificationId: $qualificationId
            firstYearEstimated: $firstYearEstimated
            secondYearEstimated: $secondYearEstimated
            thirdYearEstimated: $thirdYearEstimated
        ) {
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
    mutation addFaculty($facultyId: String!, $name: String!) {
        addFaculty(facultyId: $facultyId, name: $name) {
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
export const DeleteFacultyDocument = gql`
    mutation deleteFaculty($facultyId: String!, $name: String!) {
        deleteFaculty(facultyId: $facultyId, name: $name) {
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
export const EditFacultyDocument = gql`
    mutation editFaculty($facultyId: String!, $name: String!) {
        addFaculty(facultyId: $facultyId, name: $name) {
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
export const AddModuleDocument = gql`
    mutation addModule(
        $moduleId: String!
        $name: String
        $type: String
        $assessmentMethod: String
        $nqfLevel: String
        $qualificationId: String
        $offeringTypeId: String
        $disciplineId: String
        $venueId: String
        $blockId: String
        $userId: String
        $coordinatorId: String
        $moderatorId: String
        $credits: Int
        $groupSize: Int
        $stackId: String
    ) {
        addModule(
            moduleId: $moduleId
            name: $name
            type: $type
            assessmentMethod: $assessmentMethod
            nqfLevel: $nqfLevel
            qualificationId: $qualificationId
            offeringTypeId: $offeringTypeId
            disciplineId: $disciplineId
            venueId: $venueId
            blockId: $blockId
            userId: $userId
            coordinatorId: $coordinatorId
            moderatorId: $moderatorId
            credits: $credits
            groupSize: $groupSize
            stackId: $stackId
        ) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
export const DeleteModuleDocument = gql`
    mutation deleteModule(
        $moduleId: String!
        $name: String
        $type: String
        $assessmentMethod: String
        $nqfLevel: String
        $qualificationId: String
        $offeringTypeId: String
        $disciplineId: String
        $venueId: String
        $blockId: String
        $userId: String
        $coordinatorId: String
        $moderatorId: String
        $credits: Int
        $stackId: String
    ) {
        deleteModule(
            moduleId: $moduleId
            name: $name
            type: $type
            assessmentMethod: $assessmentMethod
            nqfLevel: $nqfLevel
            qualificationId: $qualificationId
            offeringTypeId: $offeringTypeId
            disciplineId: $disciplineId
            venueId: $venueId
            blockId: $blockId
            userId: $userId
            coordinatorId: $coordinatorId
            moderatorId: $moderatorId
            credits: $credits
            stackId: $stackId
        ) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
            groupSize
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
export const EditModuleDocument = gql`
    mutation editModule(
        $moduleId: String!
        $name: String
        $type: String
        $assessmentMethod: String
        $nqfLevel: String
        $qualificationId: String
        $offeringTypeId: String
        $disciplineId: String
        $venueId: String
        $blockId: String
        $userId: String
        $coordinatorId: String
        $moderatorId: String
        $credits: Int
        $groupSize: Int
        $stackId: String
    ) {
        editModule(
            moduleId: $moduleId
            name: $name
            type: $type
            assessmentMethod: $assessmentMethod
            nqfLevel: $nqfLevel
            qualificationId: $qualificationId
            offeringTypeId: $offeringTypeId
            disciplineId: $disciplineId
            venueId: $venueId
            blockId: $blockId
            userId: $userId
            coordinatorId: $coordinatorId
            moderatorId: $moderatorId
            credits: $credits
            groupSize: $groupSize
            stackId: $stackId
        ) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
export const ModuleDocument = gql`
    query module($moduleId: String!) {
        module(moduleId: $moduleId) {
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
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class ModuleGQL extends Apollo.Query<ModuleQuery, ModuleQueryVariables> {
    document = ModuleDocument;
}
export const ModulesByDisciplineDocument = gql`
    query modulesByDiscipline($disciplineId: String!) {
        modulesByDiscipline(disciplineId: $disciplineId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
export const ModulesDocument = gql`
    query modules {
        modules {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
export const StackedWithDocument = gql`
    query stackedWith($stackId: String!) {
        stackedWith(stackId: $stackId) {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class StackedWithGQL extends Apollo.Query<
    StackedWithQuery,
    StackedWithQueryVariables
> {
    document = StackedWithDocument;
}
export const UnassignedModulesDocument = gql`
    query unassignedModules {
        unassignedModules {
            moduleId
            name
            type
            assessmentMethod
            nqfLevel
            stackId
            qualification {
                qualificationId
                name
            }
            offeringType {
                offeringTypeId
                description
            }
            discipline {
                disciplineId
                name
            }
            venue {
                venueId
                campus
                capacity
            }
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
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class UnassignedModulesGQL extends Apollo.Query<
    UnassignedModulesQuery,
    UnassignedModulesQueryVariables
> {
    document = UnassignedModulesDocument;
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
    mutation addPosition($name: String!, $description: String!) {
        addPosition(name: $name, description: $description) {
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
export const DeletePositionDocument = gql`
    mutation deletePosition($name: String, $description: String) {
        deletePosition(name: $name, description: $description) {
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
export const EditPositionDocument = gql`
    mutation editPosition($name: String, $description: String) {
        editPosition(name: $name, description: $description) {
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
    mutation addQualification(
        $qualificationId: String!
        $name: String
        $type: String
        $departmentId: String
    ) {
        addQualification(
            qualificationId: $qualificationId
            name: $name
            type: $type
            departmentId: $departmentId
        ) {
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
export const DeleteQualificationDocument = gql`
    mutation deleteQualification(
        $qualificationId: String!
        $name: String
        $type: String
        $departmentId: String
    ) {
        addQualification(
            qualificationId: $qualificationId
            name: $name
            type: $type
            departmentId: $departmentId
        ) {
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
export const EditQualificationDocument = gql`
    mutation editQualification(
        $qualificationId: String!
        $name: String
        $type: String
        $departmentId: String
    ) {
        editQualification(
            qualificationId: $qualificationId
            name: $name
            type: $type
            departmentId: $departmentId
        ) {
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
export const AddStudentDocument = gql`
    mutation addStudent(
        $studentId: String!
        $email: String!
        $firstName: String!
        $lastName: String!
        $title: String!
        $year: String!
    ) {
        addStudent(
            studentId: $studentId
            email: $email
            firstName: $firstName
            lastName: $lastName
            title: $title
            year: $title
        ) {
            studentId
            email
            firstName
            lastName
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
export const DeleteStudentDocument = gql`
    mutation deleteStudent(
        $studentId: String!
        $email: String!
        $firstName: String!
        $lastName: String!
        $title: String
        $year: String
    ) {
        deleteStudent(
            studentId: $studentId
            email: $email
            firstName: $firstName
            lastName: $lastName
            title: $title
            year: $title
        ) {
            studentId
            email
            firstName
            lastName
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
export const EditStudentDocument = gql`
    mutation editStudent(
        $studentId: String!
        $email: String!
        $firstName: String!
        $lastName: String!
        $title: String
        $year: String
    ) {
        editStudent(
            studentId: $studentId
            email: $email
            firstName: $firstName
            lastName: $lastName
            title: $title
            year: $title
        ) {
            studentId
            email
            firstName
            lastName
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
export const StudentDocument = gql`
    query student($studentId: String!) {
        student(studentId: $studentId) {
            studentId
            email
            firstName
            lastName
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
export const AddUserDocument = gql`
    mutation addUser(
        $userId: String!
        $password: String
        $email: String
        $firstName: String
        $lastName: String
        $photoUrl: String
        $disciplineId: String
        $positionId: String
        $gender: String
        $workFocusName: String
        $nationality: String
    ) {
        addUser(
            userId: $userId
            password: $password
            email: $email
            firstName: $firstName
            lastName: $lastName
            photoUrl: $photoUrl
            disciplineId: $disciplineId
            positionId: $positionId
            gender: $gender
            workFocusName: $workFocusName
            nationality: $nationality
        ) {
            userId
            password
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
export const DeleteUserDocument = gql`
    mutation deleteUser(
        $userId: String
        $password: String
        $email: String
        $firstName: String
        $lastName: String
        $photoUrl: String
        $disciplineId: String
        $positionId: String
        $gender: String
        $nationality: String
    ) {
        deleteUser(
            userId: $userId
            password: $password
            email: $email
            firstName: $firstName
            lastName: $lastName
            photoUrl: $photoUrl
            disciplineId: $disciplineId
            positionId: $positionId
            gender: $gender
            nationality: $nationality
        ) {
            userId
            password
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
export const EditUserDocument = gql`
    mutation editUser(
        $userId: String
        $password: String
        $email: String
        $firstName: String
        $lastName: String
        $photoUrl: String
        $disciplineId: String
        $positionId: String
        $workFocusName: String
        $gender: String
        $nationality: String
    ) {
        editUser(
            userId: $userId
            password: $password
            email: $email
            firstName: $firstName
            lastName: $lastName
            photoUrl: $photoUrl
            disciplineId: $disciplineId
            positionId: $positionId
            workFocusName: $workFocusName
            gender: $gender
            nationality: $nationality
        ) {
            userId
            password
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
export const UserDocument = gql`
    query user($userId: String!) {
        user(userId: $userId) {
            userId
            password
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
            password
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
    mutation addVenue($venueId: String!, $campus: String!, $capacity: Int!) {
        addVenue(venueId: $venueId, campus: $campus, capacity: $capacity) {
            venueId
            campus
            capacity
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
export const DeleteVenueDocument = gql`
    mutation deleteVenue($venueId: String, $campus: String, $capacity: Int) {
        deleteVenue(venueId: $venueId, campus: $campus, capacity: $capacity) {
            venueId
            campus
            capacity
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
export const EditVenueDocument = gql`
    mutation editVenue($venueId: String, $campus: String, $capacity: Int) {
        editVenue(venueId: $venueId, campus: $campus, capacity: $capacity) {
            venueId
            campus
            capacity
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
export const VenueDocument = gql`
    query venue($venueId: String!) {
        venue(venueId: $venueId) {
            venueId
            campus
            capacity
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
        }
    }
`;

@Injectable({
    providedIn: "root"
})
export class VenuesGQL extends Apollo.Query<VenuesQuery, VenuesQueryVariables> {
    document = VenuesDocument;
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
