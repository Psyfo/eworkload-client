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
    commInstructionDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Evidence>;
};

export type Department = {
    departmentId: Scalars["String"];
    name: Scalars["String"];
    facultyId: Scalars["String"];
    faculty?: Maybe<Faculty>;
};

export type Discipline = {
    disciplineId?: Maybe<Scalars["String"]>;
    name: Scalars["String"];
    description: Scalars["String"];
};

export type Duty = {
    dutyId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
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

export type LectureActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    lectureStackId: Scalars["String"];
    lectureStack?: Maybe<LectureStack>;
};

export type LectureStack = {
    lectureStackId: Scalars["String"];
    disciplineId: Scalars["String"];
    discipline?: Maybe<Discipline>;
    modules?: Maybe<Array<Maybe<Scalars["String"]>>>;
    groups?: Maybe<Scalars["String"]>;
};

export type Module = {
    moduleId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
    nqfLevel: Scalars["String"];
    qualificationId: Scalars["String"];
    offeringTypeId: Scalars["String"];
    disciplineId: Scalars["String"];
    credits: Scalars["Int"];
    isMajor?: Maybe<Scalars["Boolean"]>;
    type: Scalars["String"];
    baseContact?: Maybe<Scalars["Int"]>;
    basePractical?: Maybe<Scalars["Int"]>;
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
    addLectureStack?: Maybe<LectureStack>;
    editLectureStack?: Maybe<LectureStack>;
    deleteLectureStack?: Maybe<LectureStack>;
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
    addLectureActivity?: Maybe<LectureActivity>;
    editLectureActivity?: Maybe<LectureActivity>;
    deleteLectureActivity?: Maybe<LectureActivity>;
    addResearchActivity?: Maybe<ResearchActivity>;
    editResearchActivity?: Maybe<ResearchActivity>;
    deleteResearchActivity?: Maybe<ResearchActivity>;
    addSupervisionActivity?: Maybe<SupervisionActivity>;
    editSupervisionActivity?: Maybe<SupervisionActivity>;
    deleteSupervisionActivity?: Maybe<SupervisionActivity>;
    addVenue?: Maybe<Venue>;
    editVenue?: Maybe<Venue>;
    deleteVenue?: Maybe<Venue>;
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
    password: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    photoUrl: Scalars["String"];
    disciplineId: Scalars["String"];
    positionId: Scalars["String"];
    gender: Scalars["String"];
    nationality: Scalars["String"];
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
    name: Scalars["String"];
    description: Scalars["String"];
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

export type MutationAddLectureStackArgs = {
    lectureStackId: Scalars["String"];
    disciplineId: Scalars["String"];
    modules?: Maybe<Array<Maybe<Scalars["String"]>>>;
    groups?: Maybe<Scalars["String"]>;
};

export type MutationEditLectureStackArgs = {
    lectureStackId: Scalars["String"];
    disciplineId: Scalars["String"];
    modules?: Maybe<Array<Maybe<Scalars["String"]>>>;
    groups?: Maybe<Scalars["String"]>;
};

export type MutationDeleteLectureStackArgs = {
    lectureStackId: Scalars["String"];
    disciplineId: Scalars["String"];
    modules?: Maybe<Array<Maybe<Scalars["String"]>>>;
    groups?: Maybe<Scalars["String"]>;
};

export type MutationAddModuleArgs = {
    moduleId: Scalars["String"];
    name: Scalars["String"];
    description: Scalars["String"];
    nqfLevel: Scalars["String"];
    qualificationId: Scalars["String"];
    offeringTypeId: Scalars["String"];
    disciplineId: Scalars["String"];
    credits: Scalars["Int"];
    isMajor?: Maybe<Scalars["Boolean"]>;
    type: Scalars["String"];
    baseContact?: Maybe<Scalars["Int"]>;
    basePractical?: Maybe<Scalars["Int"]>;
};

export type MutationEditModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    isMajor?: Maybe<Scalars["Boolean"]>;
    type?: Maybe<Scalars["String"]>;
    baseContact?: Maybe<Scalars["Int"]>;
    basePractical?: Maybe<Scalars["Int"]>;
};

export type MutationDeleteModuleArgs = {
    moduleId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    description?: Maybe<Scalars["String"]>;
    nqfLevel?: Maybe<Scalars["String"]>;
    qualificationId?: Maybe<Scalars["String"]>;
    offeringTypeId?: Maybe<Scalars["String"]>;
    disciplineId?: Maybe<Scalars["String"]>;
    credits?: Maybe<Scalars["Int"]>;
    isMajor?: Maybe<Scalars["Boolean"]>;
    type?: Maybe<Scalars["String"]>;
    baseContact?: Maybe<Scalars["Int"]>;
    basePractical?: Maybe<Scalars["Int"]>;
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
    name: Scalars["String"];
    type: Scalars["String"];
    saqaId: Scalars["String"];
    departmentId: Scalars["String"];
    heqsfLevel?: Maybe<Scalars["String"]>;
    purpose?: Maybe<Scalars["String"]>;
    exitLevelOutcomes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    graduateAttributes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MutationEditQualificationArgs = {
    qualificationId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    saqaId?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
    heqsfLevel?: Maybe<Scalars["String"]>;
    purpose?: Maybe<Scalars["String"]>;
    exitLevelOutcomes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    graduateAttributes?: Maybe<Array<Maybe<Scalars["String"]>>>;
};

export type MutationDeleteQualificationArgs = {
    qualificationId?: Maybe<Scalars["String"]>;
    name?: Maybe<Scalars["String"]>;
    type?: Maybe<Scalars["String"]>;
    saqaId?: Maybe<Scalars["String"]>;
    departmentId?: Maybe<Scalars["String"]>;
    heqsfLevel?: Maybe<Scalars["String"]>;
    purpose?: Maybe<Scalars["String"]>;
    exitLevelOutcomes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    graduateAttributes?: Maybe<Array<Maybe<Scalars["String"]>>>;
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
    approvalStatus: Scalars["Boolean"];
    commInstructionDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationEditCommInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    commInstructionDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationDeleteCommInstructionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    commInstructionDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationAddPublicServiceActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus: Scalars["Boolean"];
    publicServiceDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationEditPublicServiceActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    publicServiceDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationDeletePublicServiceActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    publicServiceDescription?: Maybe<Scalars["String"]>;
    evidenceId?: Maybe<Scalars["String"]>;
};

export type MutationAddLectureActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    lectureStackId: Scalars["String"];
};

export type MutationEditLectureActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    lectureStackId?: Maybe<Scalars["String"]>;
};

export type MutationDeleteLectureActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    lectureStackId?: Maybe<Scalars["String"]>;
};

export type MutationAddResearchActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus: Scalars["Boolean"];
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
};

export type MutationEditResearchActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
};

export type MutationDeleteResearchActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    researchType?: Maybe<Scalars["String"]>;
    researchUrl?: Maybe<Scalars["String"]>;
};

export type MutationAddSupervisionActivityArgs = {
    userId: Scalars["String"];
    dutyId: Scalars["String"];
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    supervisionRole: Scalars["String"];
    studentId: Scalars["String"];
};

export type MutationEditSupervisionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    supervisionRole?: Maybe<Scalars["String"]>;
    studentId?: Maybe<Scalars["String"]>;
};

export type MutationDeleteSupervisionActivityArgs = {
    activityId?: Maybe<Scalars["String"]>;
    userId?: Maybe<Scalars["String"]>;
    dutyId?: Maybe<Scalars["String"]>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
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
    publicServiceDescription: Scalars["String"];
    evidenceId?: Maybe<Scalars["String"]>;
    evidence?: Maybe<Evidence>;
};

export type Qualification = {
    qualificationId: Scalars["String"];
    name: Scalars["String"];
    type: Scalars["String"];
    saqaId: Scalars["String"];
    departmentId: Scalars["String"];
    department?: Maybe<Department>;
    heqsfLevel?: Maybe<Scalars["String"]>;
    purpose?: Maybe<Scalars["String"]>;
    exitLevelOutcomes?: Maybe<Array<Maybe<Scalars["String"]>>>;
    graduateAttributes?: Maybe<Array<Maybe<Scalars["String"]>>>;
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
    lectureStack?: Maybe<LectureStack>;
    lectureStacks?: Maybe<Array<Maybe<LectureStack>>>;
    module?: Maybe<Module>;
    modules?: Maybe<Array<Maybe<Module>>>;
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
    venue?: Maybe<Venue>;
    venues?: Maybe<Array<Maybe<Venue>>>;
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

export type QueryLectureStackArgs = {
    lectureStackId: Scalars["String"];
};

export type QueryModuleArgs = {
    moduleId: Scalars["String"];
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

export type QueryVenueArgs = {
    venueId: Scalars["String"];
};

export type ResearchActivity = Activity & {
    activityId: Scalars["String"];
    userId: Scalars["String"];
    user?: Maybe<User>;
    dutyId: Scalars["String"];
    duty?: Maybe<Duty>;
    approvalStatus?: Maybe<Scalars["Boolean"]>;
    researchType: Scalars["String"];
    researchUrl: Scalars["String"];
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
    supervisionRole: Scalars["String"];
    studentId: Scalars["String"];
    student?: Maybe<Student>;
};

export type User = {
    userId: Scalars["String"];
    password: Scalars["String"];
    email: Scalars["String"];
    firstName: Scalars["String"];
    lastName: Scalars["String"];
    photoUrl: Scalars["String"];
    disciplineId: Scalars["String"];
    discipline?: Maybe<Discipline>;
    positionId: Scalars["String"];
    position?: Maybe<Position>;
    gender: Scalars["String"];
    nationality: Scalars["String"];
};

export type Venue = {
    venueId: Scalars["String"];
    campus: Scalars["String"];
    capacity: Scalars["Int"];
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
                    }
            >
        >
    >;
};

import gql from "graphql-tag";
import { Injectable } from "@angular/core";
import * as Apollo from "apollo-angular";

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
