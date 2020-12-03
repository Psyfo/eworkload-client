import {gql} from 'apollo-angular';

import { Injectable } from '@angular/core';

export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: any }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date custom scalar type */
  Date: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};



export type Query = {
  __typename?: 'Query';
  login: AuthData;
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
  faculty?: Maybe<Faculty>;
  faculties?: Maybe<Array<Maybe<Faculty>>>;
  group?: Maybe<Group>;
  groups?: Maybe<Array<Maybe<Group>>>;
  groupsByModule?: Maybe<Array<Maybe<Group>>>;
  groupTotal?: Maybe<Scalars['Int']>;
  remainingStudents?: Maybe<Scalars['Int']>;
  groupExists?: Maybe<Scalars['Boolean']>;
  module?: Maybe<Module>;
  modules?: Maybe<Array<Maybe<Module>>>;
  modulesByDiscipline?: Maybe<Array<Maybe<Module>>>;
  modulesByModerator?: Maybe<Array<Maybe<Module>>>;
  modulesByStack?: Maybe<Array<Maybe<Module>>>;
  stackedWith?: Maybe<Array<Maybe<Module>>>;
  unstackedModules?: Maybe<Array<Maybe<Module>>>;
  modulesByDepartment?: Maybe<Array<Maybe<Module>>>;
  offeringType?: Maybe<OfferingType>;
  offeringTypes?: Maybe<Array<Maybe<OfferingType>>>;
  position?: Maybe<Position>;
  positions?: Maybe<Array<Maybe<Position>>>;
  qualification?: Maybe<Qualification>;
  qualifications?: Maybe<Array<Maybe<Qualification>>>;
  qualificationsByLevel?: Maybe<Array<Maybe<Qualification>>>;
  qualificationsUnenrolled?: Maybe<Array<Maybe<Qualification>>>;
  student?: Maybe<Student>;
  students?: Maybe<Array<Maybe<Student>>>;
  studentsUnassigned?: Maybe<Array<Maybe<Student>>>;
  files?: Maybe<Array<Maybe<File>>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  usersByPosition?: Maybe<Array<Maybe<User>>>;
  userExists?: Maybe<Scalars['Boolean']>;
  venue?: Maybe<Venue>;
  venues?: Maybe<Array<Maybe<Venue>>>;
  workFocus?: Maybe<WorkFocus>;
  workFocuses?: Maybe<Array<Maybe<WorkFocus>>>;
  teachingHours?: Maybe<Scalars['Float']>;
  researchHours?: Maybe<Scalars['Float']>;
  serviceHours?: Maybe<Scalars['Float']>;
  annualHours?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  teachingHoursPerUser?: Maybe<Scalars['Float']>;
  researchHoursPerUser?: Maybe<Scalars['Float']>;
  serviceHoursPerUser?: Maybe<Scalars['Float']>;
  workloadSummaries?: Maybe<Array<Maybe<WorkloadSummary>>>;
  academicAdministrationWorkload?: Maybe<AcademicAdministrationWorkload>;
  communityInstructionWorkload?: Maybe<CommunityInstructionWorkload>;
  executiveManagementWorkload?: Maybe<ExecutiveManagementWorkload>;
  formalInstructionWorkload?: Maybe<FormalInstructionWorkload>;
  personnelDevelopmentWorkload?: Maybe<PersonnelDevelopmentWorkload>;
  publicServiceWorkload?: Maybe<PublicServiceWorkload>;
  researchWorkload?: Maybe<ResearchWorkload>;
  supervisionWorkload?: Maybe<SupervisionWorkload>;
  totalWorkload?: Maybe<TotalWorkload>;
  academicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
  academicAdministrationActivities?: Maybe<Array<Maybe<AcademicAdministrationActivity>>>;
  academicAdministrationActivitiesByUser?: Maybe<Array<Maybe<AcademicAdministrationActivity>>>;
  activity?: Maybe<Activity>;
  activities?: Maybe<Array<Maybe<Activity>>>;
  activitiesByDuty?: Maybe<Array<Maybe<Activity>>>;
  activitiesByUser?: Maybe<Array<Maybe<Activity>>>;
  activitiesByUnapproved?: Maybe<Array<Maybe<Activity>>>;
  activitiesByApproved?: Maybe<Array<Maybe<Activity>>>;
  communityInstructionActivity?: Maybe<CommunityInstructionActivity>;
  communityInstructionActivities?: Maybe<Array<Maybe<CommunityInstructionActivity>>>;
  communityInstructionActivitiesByUser?: Maybe<Array<Maybe<CommunityInstructionActivity>>>;
  executiveManagementActivity?: Maybe<ExecutiveManagementActivity>;
  executiveManagementActivities?: Maybe<Array<Maybe<ExecutiveManagementActivity>>>;
  executiveManagementActivitiesByUser?: Maybe<Array<Maybe<ExecutiveManagementActivity>>>;
  formalInstructionActivity?: Maybe<FormalInstructionActivity>;
  formalInstructionActivities?: Maybe<Array<Maybe<FormalInstructionActivity>>>;
  formalInstructionActivitiesByUser?: Maybe<Array<Maybe<FormalInstructionActivity>>>;
  supervisionActivity?: Maybe<SupervisionActivity>;
  supervisionActivities?: Maybe<Array<Maybe<SupervisionActivity>>>;
  supervisionActivitiesByUser?: Maybe<Array<Maybe<SupervisionActivity>>>;
  personnelDevelopmentActivity?: Maybe<PersonnelDevelopmentActivity>;
  personnelDevelopmentActivities?: Maybe<Array<Maybe<PersonnelDevelopmentActivity>>>;
  personnelDevelopmentActivitiesByUser?: Maybe<Array<Maybe<PersonnelDevelopmentActivity>>>;
  publicServiceActivity?: Maybe<PublicServiceActivity>;
  publicServiceActivities?: Maybe<Array<Maybe<PublicServiceActivity>>>;
  publicServiceActivitiesByUser?: Maybe<Array<Maybe<PublicServiceActivity>>>;
  researchActivity?: Maybe<ResearchActivity>;
  researchActivities?: Maybe<Array<Maybe<ResearchActivity>>>;
  researchActivitiesByUser?: Maybe<Array<Maybe<ResearchActivity>>>;
};


export type QueryLoginArgs = {
  userId: Scalars['String'];
  password: Scalars['String'];
};


export type QueryBlockArgs = {
  blockId: Scalars['String'];
};


export type QueryDepartmentArgs = {
  departmentId: Scalars['String'];
};


export type QueryDisciplineArgs = {
  disciplineId: Scalars['String'];
};


export type QueryDutyArgs = {
  dutyId: Scalars['String'];
};


export type QueryEnrollmentArgs = {
  id: Scalars['String'];
};


export type QueryEnrollmentsByYearArgs = {
  enrollmentYear: Scalars['String'];
};


export type QueryEnrollmentsByQualificationArgs = {
  qualificationId: Scalars['String'];
};


export type QueryFacultyArgs = {
  facultyId: Scalars['String'];
};


export type QueryGroupArgs = {
  id: Scalars['String'];
};


export type QueryGroupsByModuleArgs = {
  moduleId: Scalars['String'];
};


export type QueryGroupTotalArgs = {
  moduleId: Scalars['String'];
};


export type QueryRemainingStudentsArgs = {
  moduleId: Scalars['String'];
};


export type QueryGroupExistsArgs = {
  groupId: Scalars['String'];
  moduleId: Scalars['String'];
};


export type QueryModuleArgs = {
  id: Scalars['String'];
};


export type QueryModulesByDisciplineArgs = {
  disciplineIds: Array<Scalars['String']>;
};


export type QueryModulesByModeratorArgs = {
  moderatorId: Scalars['String'];
};


export type QueryModulesByStackArgs = {
  stackId: Scalars['String'];
};


export type QueryStackedWithArgs = {
  id: Scalars['String'];
  stackId?: Maybe<Scalars['String']>;
};


export type QueryModulesByDepartmentArgs = {
  departmentId: Scalars['String'];
};


export type QueryOfferingTypeArgs = {
  offeringTypeId: Scalars['String'];
};


export type QueryPositionArgs = {
  positionId: Scalars['String'];
};


export type QueryQualificationArgs = {
  qualificationId: Scalars['String'];
};


export type QueryStudentArgs = {
  studentId: Scalars['String'];
};


export type QueryStudentsUnassignedArgs = {
  userId: Scalars['String'];
};


export type QueryUserArgs = {
  userId: Scalars['String'];
};


export type QueryUserExistsArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryVenueArgs = {
  venueId: Scalars['String'];
};


export type QueryWorkFocusArgs = {
  name: Scalars['String'];
};


export type QueryTeachingHoursArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryResearchHoursArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryServiceHoursArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryTotalHoursPerUserArgs = {
  userId: Scalars['String'];
};


export type QueryTeachingHoursPerUserArgs = {
  userId: Scalars['String'];
};


export type QueryResearchHoursPerUserArgs = {
  userId: Scalars['String'];
};


export type QueryServiceHoursPerUserArgs = {
  userId: Scalars['String'];
};


export type QueryAcademicAdministrationWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryCommunityInstructionWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryExecutiveManagementWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryFormalInstructionWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryPersonnelDevelopmentWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryPublicServiceWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryResearchWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QuerySupervisionWorkloadArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryTotalWorkloadArgs = {
  userId: Scalars['String'];
};


export type QueryAcademicAdministrationActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryAcademicAdministrationActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryActivitiesByDutyArgs = {
  dutyId: Scalars['String'];
};


export type QueryActivitiesByUserArgs = {
  userId: Scalars['String'];
};


export type QueryCommunityInstructionActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryCommunityInstructionActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryExecutiveManagementActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryExecutiveManagementActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryFormalInstructionActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryFormalInstructionActivitiesByUserArgs = {
  userId: Scalars['String'];
};


export type QuerySupervisionActivityArgs = {
  activityId: Scalars['String'];
};


export type QuerySupervisionActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryPersonnelDevelopmentActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryPersonnelDevelopmentActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryPublicServiceActivityArgs = {
  activityId?: Maybe<Scalars['String']>;
};


export type QueryPublicServiceActivitiesByUserArgs = {
  userId?: Maybe<Scalars['String']>;
};


export type QueryResearchActivityArgs = {
  activityId: Scalars['String'];
};


export type QueryResearchActivitiesByUserArgs = {
  userId: Scalars['String'];
};

export type AuthData = {
  __typename?: 'AuthData';
  userId: Scalars['String'];
  token: Scalars['String'];
  tokenExpiration: Scalars['Int'];
};

export type Block = {
  __typename?: 'Block';
  blockId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Department = {
  __typename?: 'Department';
  departmentId: Scalars['String'];
  name: Scalars['String'];
  facultyId: Scalars['String'];
  faculty?: Maybe<Faculty>;
  hodId?: Maybe<Scalars['String']>;
};

export type Faculty = {
  __typename?: 'Faculty';
  facultyId: Scalars['String'];
  name: Scalars['String'];
};

export type Discipline = {
  __typename?: 'Discipline';
  disciplineId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Duty = {
  __typename?: 'Duty';
  dutyId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type Enrollment = {
  __typename?: 'Enrollment';
  id?: Maybe<Scalars['String']>;
  enrollmentYear?: Maybe<Scalars['String']>;
  qualificationId?: Maybe<Scalars['String']>;
  qualification?: Maybe<Qualification>;
  firstYearEstimated?: Maybe<Scalars['Int']>;
  secondYearEstimated?: Maybe<Scalars['Int']>;
  thirdYearEstimated?: Maybe<Scalars['Int']>;
};

export type Qualification = {
  __typename?: 'Qualification';
  qualificationId: Scalars['String'];
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
  department?: Maybe<Department>;
};

export type Group = {
  __typename?: 'Group';
  id?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['String']>;
  module?: Maybe<Module>;
  studentsEnrolled?: Maybe<Scalars['Int']>;
  modularity?: Maybe<Scalars['Int']>;
};

export type Module = {
  __typename?: 'Module';
  id?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  assessmentMethod?: Maybe<Scalars['String']>;
  nqfLevel?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
  qualificationId?: Maybe<Scalars['String']>;
  qualification?: Maybe<Qualification>;
  offeringTypeId?: Maybe<Scalars['String']>;
  offeringType?: Maybe<OfferingType>;
  disciplineId?: Maybe<Scalars['String']>;
  discipline?: Maybe<Discipline>;
  venueId?: Maybe<Scalars['String']>;
  venue?: Maybe<Venue>;
  blockId?: Maybe<Scalars['String']>;
  block?: Maybe<Block>;
  stackId?: Maybe<Scalars['String']>;
  studyPeriod?: Maybe<Scalars['String']>;
  lecturedBy?: Maybe<Scalars['String']>;
  studentsEnrolled?: Maybe<Scalars['Int']>;
  moderation?: Maybe<Scalars['String']>;
};

export type OfferingType = {
  __typename?: 'OfferingType';
  offeringTypeId: Scalars['String'];
  description: Scalars['String'];
};

export type Venue = {
  __typename?: 'Venue';
  venueId?: Maybe<Scalars['String']>;
  campus?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Position = {
  __typename?: 'Position';
  positionId: Scalars['String'];
  name: Scalars['String'];
  description: Scalars['String'];
};

export type Student = {
  __typename?: 'Student';
  studentId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  graduationDate?: Maybe<Scalars['String']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['ID'];
  path: Scalars['String'];
  filename: Scalars['String'];
  mimetype: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  userId?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  disciplineIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  disciplines?: Maybe<Array<Maybe<Discipline>>>;
  positionId?: Maybe<Scalars['String']>;
  position?: Maybe<Position>;
  departmentId?: Maybe<Scalars['String']>;
  department?: Maybe<Department>;
  workFocusName?: Maybe<Scalars['String']>;
  workFocus?: Maybe<WorkFocus>;
  gender?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
};

export type WorkFocus = {
  __typename?: 'WorkFocus';
  name: Scalars['String'];
  teachingRatio?: Maybe<Scalars['Float']>;
  researchRatio?: Maybe<Scalars['Float']>;
  serviceRatio?: Maybe<Scalars['Float']>;
};

export type WorkloadSummary = {
  __typename?: 'WorkloadSummary';
  user?: Maybe<User>;
  teachingHours?: Maybe<Scalars['Float']>;
  teachingHoursPerUser?: Maybe<Scalars['Float']>;
  teachingDifference?: Maybe<Scalars['Float']>;
  researchHours?: Maybe<Scalars['Float']>;
  researchHoursPerUser?: Maybe<Scalars['Float']>;
  researchDifference?: Maybe<Scalars['Float']>;
  serviceHours?: Maybe<Scalars['Float']>;
  serviceHoursPerUser?: Maybe<Scalars['Float']>;
  serviceDifference?: Maybe<Scalars['Float']>;
};

export type AcademicAdministrationWorkload = {
  __typename?: 'AcademicAdministrationWorkload';
  academicAdministrationWorkloads?: Maybe<Array<Maybe<AcademicAdministrationWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type AcademicAdministrationWorkloadPerActivity = {
  __typename?: 'AcademicAdministrationWorkloadPerActivity';
  activity?: Maybe<AcademicAdministrationActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type AcademicAdministrationActivity = Activity & {
  __typename?: 'AcademicAdministrationActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  qualificationId?: Maybe<Scalars['String']>;
  qualification?: Maybe<Qualification>;
  description?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};

export type Activity = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type CommunityInstructionWorkload = {
  __typename?: 'CommunityInstructionWorkload';
  communityInstructionWorkloads?: Maybe<Array<Maybe<CommunityInstructionWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type CommunityInstructionWorkloadPerActivity = {
  __typename?: 'CommunityInstructionWorkloadPerActivity';
  activity?: Maybe<CommunityInstructionActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type CommunityInstructionActivity = Activity & {
  __typename?: 'CommunityInstructionActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};

export type ExecutiveManagementWorkload = {
  __typename?: 'ExecutiveManagementWorkload';
  executiveManagementWorkloads?: Maybe<Array<Maybe<ExecutiveManagementWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type ExecutiveManagementWorkloadPerActivity = {
  __typename?: 'ExecutiveManagementWorkloadPerActivity';
  activity?: Maybe<ExecutiveManagementActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type ExecutiveManagementActivity = Activity & {
  __typename?: 'ExecutiveManagementActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};

export type FormalInstructionWorkload = {
  __typename?: 'FormalInstructionWorkload';
  formalInstructionWorkloads?: Maybe<Array<Maybe<FormalInstructionWorkloadPerActivity>>>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type FormalInstructionWorkloadPerActivity = {
  __typename?: 'FormalInstructionWorkloadPerActivity';
  activity?: Maybe<FormalInstructionActivity>;
  module?: Maybe<Module>;
  block?: Maybe<Block>;
  offeringType?: Maybe<OfferingType>;
  qualification?: Maybe<Qualification>;
  studentsEnrolled?: Maybe<Scalars['Float']>;
  baseContactHours?: Maybe<Scalars['Float']>;
  coordinationHours?: Maybe<Scalars['Float']>;
  studentSupportHours?: Maybe<Scalars['Float']>;
  preparationTimeHours?: Maybe<Scalars['Float']>;
  assessmentSettingHours?: Maybe<Scalars['Float']>;
  examMarkingHours?: Maybe<Scalars['Float']>;
  courseworkMarkingHours?: Maybe<Scalars['Float']>;
  feedbackHours?: Maybe<Scalars['Float']>;
  formativeAssessmentHours?: Maybe<Scalars['Float']>;
  moderationHours?: Maybe<Scalars['Float']>;
  otherHoursPerActivity?: Maybe<Scalars['Float']>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type FormalInstructionActivity = Activity & {
  __typename?: 'FormalInstructionActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  group?: Maybe<Group>;
  isCoordinator?: Maybe<Scalars['Boolean']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type PersonnelDevelopmentWorkload = {
  __typename?: 'PersonnelDevelopmentWorkload';
  personnelDevelopmentWorkloads?: Maybe<Array<Maybe<PersonnelDevelopmentWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type PersonnelDevelopmentWorkloadPerActivity = {
  __typename?: 'PersonnelDevelopmentWorkloadPerActivity';
  activity?: Maybe<PersonnelDevelopmentActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type PersonnelDevelopmentActivity = Activity & {
  __typename?: 'PersonnelDevelopmentActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Array<Maybe<Scalars['Date']>>>;
  duration?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};


export type PublicServiceWorkload = {
  __typename?: 'PublicServiceWorkload';
  publicServiceWorkloads?: Maybe<Array<Maybe<PublicServiceWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type PublicServiceWorkloadPerActivity = {
  __typename?: 'PublicServiceWorkloadPerActivity';
  activity?: Maybe<PublicServiceActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type PublicServiceActivity = Activity & {
  __typename?: 'PublicServiceActivity';
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  user?: Maybe<User>;
  dutyId?: Maybe<Scalars['String']>;
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};

export type ResearchWorkload = {
  __typename?: 'ResearchWorkload';
  researchWorkloads?: Maybe<Array<Maybe<ResearchWorkloadPerActivity>>>;
  globalTarrif?: Maybe<Scalars['Float']>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type ResearchWorkloadPerActivity = {
  __typename?: 'ResearchWorkloadPerActivity';
  activity?: Maybe<ResearchActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type ResearchActivity = Activity & {
  __typename?: 'ResearchActivity';
  activityId: Scalars['String'];
  userId: Scalars['String'];
  user?: Maybe<User>;
  dutyId: Scalars['String'];
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['Date']>>>;
  conferenceActivities?: Maybe<Array<Maybe<Scalars['String']>>>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  evidence?: Maybe<Scalars['String']>;
};

export type SupervisionWorkload = {
  __typename?: 'SupervisionWorkload';
  supervisionWorkloads?: Maybe<Array<Maybe<SupervisionWorkloadPerActivity>>>;
  totalHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerUser?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerUser?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerUser?: Maybe<Scalars['Float']>;
};

export type SupervisionWorkloadPerActivity = {
  __typename?: 'SupervisionWorkloadPerActivity';
  activity?: Maybe<SupervisionActivity>;
  totalHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfWorkFocusPerActivity?: Maybe<Scalars['Float']>;
  percentageOfAnnualHoursPerActivity?: Maybe<Scalars['Float']>;
  percentageOfTotalHoursPerActivity?: Maybe<Scalars['Float']>;
};

export type SupervisionActivity = Activity & {
  __typename?: 'SupervisionActivity';
  activityId: Scalars['String'];
  userId: Scalars['String'];
  user?: Maybe<User>;
  dutyId: Scalars['String'];
  duty?: Maybe<Duty>;
  approvalStatus?: Maybe<Scalars['String']>;
  supervisionRole: Scalars['String'];
  split?: Maybe<Scalars['Int']>;
  studentId: Scalars['String'];
  student?: Maybe<Student>;
  year?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['String']>;
};

export type TotalWorkload = {
  __typename?: 'TotalWorkload';
  academicAdministrationWorkload?: Maybe<AcademicAdministrationWorkload>;
  communityInstructionWorkload?: Maybe<CommunityInstructionWorkload>;
  executiveManagementWorkload?: Maybe<ExecutiveManagementWorkload>;
  formalInstructionWorkload?: Maybe<FormalInstructionWorkload>;
  personnelDevelopmentWorkload?: Maybe<PersonnelDevelopmentWorkload>;
  publicServiceWorkload?: Maybe<PublicServiceWorkload>;
  researchWorkload?: Maybe<ResearchWorkload>;
  supervisionWorkload?: Maybe<SupervisionWorkload>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: Scalars['String'];
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
  addFaculty?: Maybe<Faculty>;
  editFaculty?: Maybe<Faculty>;
  deleteFaculty?: Maybe<Faculty>;
  createGroup?: Maybe<Group>;
  updateGroup?: Maybe<Group>;
  deleteGroup?: Maybe<Group>;
  addModule?: Maybe<Module>;
  addModules?: Maybe<Array<Maybe<Module>>>;
  editModule?: Maybe<Module>;
  deleteModule?: Maybe<Module>;
  unassignAllModules?: Maybe<Scalars['String']>;
  stackModules?: Maybe<Array<Maybe<Module>>>;
  addModuleToStack?: Maybe<Module>;
  unstackModule?: Maybe<Module>;
  resetStacks: Scalars['String'];
  resetEnrollments: Scalars['String'];
  defaultGroupsAllModules: Scalars['String'];
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
  singleUpload: File;
  multipleUpload: Array<File>;
  uploadProfilePicture?: Maybe<Location>;
  uploadAcademicAdministrationEvidenceAWS?: Maybe<Location>;
  uploadResearchEvidenceAWS?: Maybe<Location>;
  addUser?: Maybe<User>;
  editUser?: Maybe<User>;
  deleteUser?: Maybe<User>;
  assignProfilePicture?: Maybe<User>;
  resetModuleDepartments?: Maybe<Scalars['String']>;
  addVenue?: Maybe<Venue>;
  editVenue?: Maybe<Venue>;
  deleteVenue?: Maybe<Venue>;
  addWorkFocus?: Maybe<WorkFocus>;
  editWorkFocus?: Maybe<WorkFocus>;
  deleteWorkFocus?: Maybe<WorkFocus>;
  initializeWorkloads?: Maybe<Scalars['String']>;
  updateWorkloads?: Maybe<Scalars['String']>;
  deleteWorkloads?: Maybe<Scalars['String']>;
  addAcademicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
  editAcademicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
  deleteAcademicAdministrationActivity?: Maybe<AcademicAdministrationActivity>;
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
};


export type MutationChangePasswordArgs = {
  userId: Scalars['String'];
  password: Scalars['String'];
  newPassword: Scalars['String'];
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
  enrollment: EnrollmentInput;
};


export type MutationEditEnrollmentArgs = {
  enrollment: EnrollmentInput;
};


export type MutationDeleteEnrollmentArgs = {
  enrollment: EnrollmentInput;
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


export type MutationCreateGroupArgs = {
  group: GroupInput;
};


export type MutationUpdateGroupArgs = {
  group: GroupInput;
};


export type MutationDeleteGroupArgs = {
  group: GroupInput;
};


export type MutationAddModuleArgs = {
  module: ModuleInput;
};


export type MutationAddModulesArgs = {
  modules: Array<ModuleInput>;
};


export type MutationEditModuleArgs = {
  module: ModuleInput;
};


export type MutationDeleteModuleArgs = {
  module: ModuleInput;
};


export type MutationStackModulesArgs = {
  ids: Array<Scalars['String']>;
};


export type MutationAddModuleToStackArgs = {
  id: Scalars['String'];
  stackId?: Maybe<Scalars['String']>;
};


export type MutationUnstackModuleArgs = {
  id: Scalars['String'];
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


export type MutationSingleUploadArgs = {
  file: Scalars['Upload'];
};


export type MutationMultipleUploadArgs = {
  files: Array<Scalars['Upload']>;
};


export type MutationUploadProfilePictureArgs = {
  file: Scalars['Upload'];
  userId: Scalars['String'];
};


export type MutationUploadAcademicAdministrationEvidenceAwsArgs = {
  file: Scalars['Upload'];
  userId: Scalars['String'];
  activityId: Scalars['String'];
};


export type MutationUploadResearchEvidenceAwsArgs = {
  file: Scalars['Upload'];
  userId: Scalars['String'];
  activityId: Scalars['String'];
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


export type MutationAssignProfilePictureArgs = {
  userId?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
};


export type MutationResetModuleDepartmentsArgs = {
  departmentId: Scalars['String'];
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


export type MutationInitializeWorkloadsArgs = {
  userId: Scalars['String'];
};


export type MutationUpdateWorkloadsArgs = {
  userId: Scalars['String'];
};


export type MutationDeleteWorkloadsArgs = {
  userId: Scalars['String'];
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

export type BlockInput = {
  blockId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DepartmentInput = {
  departmentId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  facultyId?: Maybe<Scalars['String']>;
  hodId?: Maybe<Scalars['String']>;
};

export type DisciplineInput = {
  disciplineId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type DutyInput = {
  dutyId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type EnrollmentInput = {
  id?: Maybe<Scalars['String']>;
  enrollmentYear?: Maybe<Scalars['String']>;
  qualificationId?: Maybe<Scalars['String']>;
  firstYearEstimated?: Maybe<Scalars['Int']>;
  secondYearEstimated?: Maybe<Scalars['Int']>;
  thirdYearEstimated?: Maybe<Scalars['Int']>;
};

export type FacultyInput = {
  facultyId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
};

export type GroupInput = {
  id?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['String']>;
  studentsEnrolled?: Maybe<Scalars['Int']>;
  modularity?: Maybe<Scalars['Int']>;
};

export type ModuleInput = {
  id?: Maybe<Scalars['String']>;
  moduleId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  assessmentMethod?: Maybe<Scalars['String']>;
  nqfLevel?: Maybe<Scalars['String']>;
  credits?: Maybe<Scalars['Int']>;
  qualificationId?: Maybe<Scalars['String']>;
  offeringTypeId?: Maybe<Scalars['String']>;
  disciplineId?: Maybe<Scalars['String']>;
  venueId?: Maybe<Scalars['String']>;
  blockId?: Maybe<Scalars['String']>;
  stackId?: Maybe<Scalars['String']>;
  studyPeriod?: Maybe<Scalars['String']>;
  lecturedBy?: Maybe<Scalars['String']>;
  studentsEnrolled?: Maybe<Scalars['Int']>;
  moderation?: Maybe<Scalars['String']>;
};

export type OfferingTypeInput = {
  description?: Maybe<Scalars['String']>;
};

export type PositionInput = {
  positionId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type QualificationInput = {
  qualificationId?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
};

export type StudentInput = {
  studentId?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};


export type Location = {
  __typename?: 'Location';
  location?: Maybe<Scalars['String']>;
};

export type UserInput = {
  userId?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  photoUrl?: Maybe<Scalars['String']>;
  disciplineIds?: Maybe<Array<Maybe<Scalars['String']>>>;
  positionId?: Maybe<Scalars['String']>;
  departmentId?: Maybe<Scalars['String']>;
  workFocusName?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  nationality?: Maybe<Scalars['String']>;
};

export type VenueInput = {
  venueId?: Maybe<Scalars['String']>;
  campus?: Maybe<Scalars['String']>;
  capacity?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type WorkFocusInput = {
  name?: Maybe<Scalars['String']>;
  teachingRatio?: Maybe<Scalars['Float']>;
  researchRatio?: Maybe<Scalars['Float']>;
  serviceRatio?: Maybe<Scalars['Float']>;
};

export type AcademicAdministrationActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  qualificationId?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type CommunityInstructionActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ExecutiveManagementActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type FormalInstructionActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  isCoordinator?: Maybe<Scalars['Boolean']>;
};

export type SupervisionActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  supervisionRole?: Maybe<Scalars['String']>;
  split?: Maybe<Scalars['Int']>;
  studentId?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['String']>;
};

export type PersonnelDevelopmentActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  date?: Maybe<Array<Maybe<Scalars['Date']>>>;
  duration?: Maybe<Scalars['String']>;
};

export type PublicServiceActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
};

export type ResearchActivityInput = {
  activityId?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
  dutyId?: Maybe<Scalars['String']>;
  output?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  details?: Maybe<Scalars['String']>;
  dates?: Maybe<Array<Maybe<Scalars['Date']>>>;
  conferenceActivities?: Maybe<Array<Maybe<Scalars['String']>>>;
  authors?: Maybe<Array<Maybe<Scalars['String']>>>;
  url?: Maybe<Scalars['String']>;
  evidenceId?: Maybe<Scalars['String']>;
};

export type Evidence = {
  __typename?: 'Evidence';
  activityId: Scalars['String'];
  location: Scalars['String'];
};

export enum CacheControlScope {
  Public = 'PUBLIC',
  Private = 'PRIVATE'
}

export type AddAcademicAdministrationActivityMutationVariables = Exact<{
  activity?: Maybe<AcademicAdministrationActivityInput>;
}>;


export type AddAcademicAdministrationActivityMutation = (
  { __typename?: 'Mutation' }
  & { addAcademicAdministrationActivity?: Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type EditAcademicAdministrationActivityMutationVariables = Exact<{
  activity?: Maybe<AcademicAdministrationActivityInput>;
}>;


export type EditAcademicAdministrationActivityMutation = (
  { __typename?: 'Mutation' }
  & { editAcademicAdministrationActivity?: Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type DeleteAcademicAdministrationActivityMutationVariables = Exact<{
  activity?: Maybe<AcademicAdministrationActivityInput>;
}>;


export type DeleteAcademicAdministrationActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteAcademicAdministrationActivity?: Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type AcademicAdministrationActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type AcademicAdministrationActivityQuery = (
  { __typename?: 'Query' }
  & { academicAdministrationActivity?: Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )> }
);

export type AcademicAdministrationActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type AcademicAdministrationActivitiesQuery = (
  { __typename?: 'Query' }
  & { academicAdministrationActivities?: Maybe<Array<Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )>>> }
);

export type AcademicAdministrationActivitiesByUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type AcademicAdministrationActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { academicAdministrationActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'qualificationId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )> }
  )>>> }
);

export type ActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type ActivityQuery = (
  { __typename?: 'Query' }
  & { activity?: Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'groupId' | 'isCoordinator' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'title' | 'date' | 'duration' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'output' | 'title' | 'details' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'supervisionRole' | 'split' | 'studentId' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt'>
    & { student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'title'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type ActivitiesByUnapprovedQueryVariables = Exact<{ [key: string]: never; }>;


export type ActivitiesByUnapprovedQuery = (
  { __typename?: 'Query' }
  & { activitiesByUnapproved?: Maybe<Array<Maybe<(
    { __typename?: 'AcademicAdministrationActivity' }
    & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'groupId' | 'isCoordinator' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'title' | 'description' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'output' | 'title' | 'details' | 'evidence' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  ) | (
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'supervisionRole' | 'studentId' | 'activityId' | 'userId' | 'dutyId' | 'approvalStatus'>
    & { student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'title'>
    )>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddCommunityInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<CommunityInstructionActivityInput>;
}>;


export type AddCommunityInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { addCommunityInstructionActivity?: Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type EditCommunityInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<CommunityInstructionActivityInput>;
}>;


export type EditCommunityInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { editCommunityInstructionActivity?: Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeleteCommunityInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<CommunityInstructionActivityInput>;
}>;


export type DeleteCommunityInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteCommunityInstructionActivity?: Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type CommunityInstructionActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type CommunityInstructionActivityQuery = (
  { __typename?: 'Query' }
  & { communityInstructionActivity?: Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type CommunityInstructionActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type CommunityInstructionActivitiesQuery = (
  { __typename?: 'Query' }
  & { communityInstructionActivities?: Maybe<Array<Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type CommunityInstructionActivitiesByUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type CommunityInstructionActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { communityInstructionActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'CommunityInstructionActivity' }
    & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddExecutiveManagementActivityMutationVariables = Exact<{
  activity?: Maybe<ExecutiveManagementActivityInput>;
}>;


export type AddExecutiveManagementActivityMutation = (
  { __typename?: 'Mutation' }
  & { addExecutiveManagementActivity?: Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type EditExecutiveManagementActivityMutationVariables = Exact<{
  activity?: Maybe<ExecutiveManagementActivityInput>;
}>;


export type EditExecutiveManagementActivityMutation = (
  { __typename?: 'Mutation' }
  & { editExecutiveManagementActivity?: Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeleteExecutiveManagementActivityMutationVariables = Exact<{
  activity?: Maybe<ExecutiveManagementActivityInput>;
}>;


export type DeleteExecutiveManagementActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteExecutiveManagementActivity?: Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type ExecutiveManagementActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type ExecutiveManagementActivityQuery = (
  { __typename?: 'Query' }
  & { executiveManagementActivity?: Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type ExecutiveManagementActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ExecutiveManagementActivitiesQuery = (
  { __typename?: 'Query' }
  & { executiveManagementActivities?: Maybe<Array<Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ExecutiveManagementActivitiesByUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type ExecutiveManagementActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { executiveManagementActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'ExecutiveManagementActivity' }
    & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddFormalInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<FormalInstructionActivityInput>;
}>;


export type AddFormalInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { addFormalInstructionActivity?: Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )> }
);

export type EditFormalInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<FormalInstructionActivityInput>;
}>;


export type EditFormalInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { editFormalInstructionActivity?: Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )> }
);

export type DeleteFormalInstructionActivityMutationVariables = Exact<{
  activity?: Maybe<FormalInstructionActivityInput>;
}>;


export type DeleteFormalInstructionActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteFormalInstructionActivity?: Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )> }
);

export type AddSupervisionActivityMutationVariables = Exact<{
  activity?: Maybe<SupervisionActivityInput>;
}>;


export type AddSupervisionActivityMutation = (
  { __typename?: 'Mutation' }
  & { addSupervisionActivity?: Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )> }
);

export type EditSupervisionActivityMutationVariables = Exact<{
  activity?: Maybe<SupervisionActivityInput>;
}>;


export type EditSupervisionActivityMutation = (
  { __typename?: 'Mutation' }
  & { editSupervisionActivity?: Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )> }
);

export type DeleteSupervisionActivityMutationVariables = Exact<{
  activity?: Maybe<SupervisionActivityInput>;
}>;


export type DeleteSupervisionActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteSupervisionActivity?: Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )> }
);

export type FormalInstructionActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type FormalInstructionActivityQuery = (
  { __typename?: 'Query' }
  & { formalInstructionActivity?: Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )> }
);

export type FormalInstructionActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FormalInstructionActivitiesQuery = (
  { __typename?: 'Query' }
  & { formalInstructionActivities?: Maybe<Array<Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )>>> }
);

export type FormalInstructionActivitiesByUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FormalInstructionActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { formalInstructionActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'FormalInstructionActivity' }
    & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, group?: Maybe<(
      { __typename?: 'Group' }
      & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
      & { module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )> }
  )>>> }
);

export type SupervisionActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type SupervisionActivityQuery = (
  { __typename?: 'Query' }
  & { supervisionActivity?: Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )> }
);

export type SupervisionActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type SupervisionActivitiesQuery = (
  { __typename?: 'Query' }
  & { supervisionActivities?: Maybe<Array<Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )>>> }
);

export type SupervisionActivitiesByUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type SupervisionActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { supervisionActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'SupervisionActivity' }
    & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'year' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )>, student?: Maybe<(
      { __typename?: 'Student' }
      & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
    )> }
  )>>> }
);

export type AddPersonnelDevelopmentActivityMutationVariables = Exact<{
  activity?: Maybe<PersonnelDevelopmentActivityInput>;
}>;


export type AddPersonnelDevelopmentActivityMutation = (
  { __typename?: 'Mutation' }
  & { addPersonnelDevelopmentActivity?: Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type EditPersonnelDevelopmentActivityMutationVariables = Exact<{
  activity?: Maybe<PersonnelDevelopmentActivityInput>;
}>;


export type EditPersonnelDevelopmentActivityMutation = (
  { __typename?: 'Mutation' }
  & { editPersonnelDevelopmentActivity?: Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeletePersonnelDevelopmentActivityMutationVariables = Exact<{
  activity?: Maybe<PersonnelDevelopmentActivityInput>;
}>;


export type DeletePersonnelDevelopmentActivityMutation = (
  { __typename?: 'Mutation' }
  & { deletePersonnelDevelopmentActivity?: Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type PersonnelDevelopmentActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type PersonnelDevelopmentActivityQuery = (
  { __typename?: 'Query' }
  & { personnelDevelopmentActivity?: Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type PersonnelDevelopmentActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PersonnelDevelopmentActivitiesQuery = (
  { __typename?: 'Query' }
  & { personnelDevelopmentActivities?: Maybe<Array<Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type PersonnelDevelopmentActivitiesByUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type PersonnelDevelopmentActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { personnelDevelopmentActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'PersonnelDevelopmentActivity' }
    & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddPublicServiceActivityMutationVariables = Exact<{
  activity?: Maybe<PublicServiceActivityInput>;
}>;


export type AddPublicServiceActivityMutation = (
  { __typename?: 'Mutation' }
  & { addPublicServiceActivity?: Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type EditPublicServiceActivityMutationVariables = Exact<{
  activity?: Maybe<PublicServiceActivityInput>;
}>;


export type EditPublicServiceActivityMutation = (
  { __typename?: 'Mutation' }
  & { editPublicServiceActivity?: Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeletePublicServiceActivityMutationVariables = Exact<{
  activity?: Maybe<PublicServiceActivityInput>;
}>;


export type DeletePublicServiceActivityMutation = (
  { __typename?: 'Mutation' }
  & { deletePublicServiceActivity?: Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type PublicServiceActivityQueryVariables = Exact<{
  activityId?: Maybe<Scalars['String']>;
}>;


export type PublicServiceActivityQuery = (
  { __typename?: 'Query' }
  & { publicServiceActivity?: Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type PublicServiceActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type PublicServiceActivitiesQuery = (
  { __typename?: 'Query' }
  & { publicServiceActivities?: Maybe<Array<Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type PublicServiceActivitiesByUserQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type PublicServiceActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { publicServiceActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'PublicServiceActivity' }
    & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName'>
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddResearchActivityMutationVariables = Exact<{
  activity?: Maybe<ResearchActivityInput>;
}>;


export type AddResearchActivityMutation = (
  { __typename?: 'Mutation' }
  & { addResearchActivity?: Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type EditResearchActivityMutationVariables = Exact<{
  activity?: Maybe<ResearchActivityInput>;
}>;


export type EditResearchActivityMutation = (
  { __typename?: 'Mutation' }
  & { editResearchActivity?: Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeleteResearchActivityMutationVariables = Exact<{
  activity?: Maybe<ResearchActivityInput>;
}>;


export type DeleteResearchActivityMutation = (
  { __typename?: 'Mutation' }
  & { deleteResearchActivity?: Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type ResearchActivityQueryVariables = Exact<{
  activityId: Scalars['String'];
}>;


export type ResearchActivityQuery = (
  { __typename?: 'Query' }
  & { researchActivity?: Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'conferenceActivities' | 'authors' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )> }
);

export type ResearchActivitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type ResearchActivitiesQuery = (
  { __typename?: 'Query' }
  & { researchActivities?: Maybe<Array<Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'conferenceActivities' | 'authors' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ResearchActivitiesByUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResearchActivitiesByUserQuery = (
  { __typename?: 'Query' }
  & { researchActivitiesByUser?: Maybe<Array<Maybe<(
    { __typename?: 'ResearchActivity' }
    & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'conferenceActivities' | 'authors' | 'url' | 'evidence'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )>, duty?: Maybe<(
      { __typename?: 'Duty' }
      & Pick<Duty, 'dutyId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ChangePasswordMutationVariables = Exact<{
  userId: Scalars['String'];
  password: Scalars['String'];
  newPassword: Scalars['String'];
}>;


export type ChangePasswordMutation = (
  { __typename?: 'Mutation' }
  & Pick<Mutation, 'changePassword'>
);

export type LoginQueryVariables = Exact<{
  userId: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginQuery = (
  { __typename?: 'Query' }
  & { login: (
    { __typename?: 'AuthData' }
    & Pick<AuthData, 'userId' | 'token' | 'tokenExpiration'>
  ) }
);

export type AddBlockMutationVariables = Exact<{
  block?: Maybe<BlockInput>;
}>;


export type AddBlockMutation = (
  { __typename?: 'Mutation' }
  & { addBlock?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'blockId' | 'name' | 'description'>
  )> }
);

export type EditBlockMutationVariables = Exact<{
  block?: Maybe<BlockInput>;
}>;


export type EditBlockMutation = (
  { __typename?: 'Mutation' }
  & { editBlock?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'blockId' | 'name' | 'description'>
  )> }
);

export type DeleteBlockMutationVariables = Exact<{
  block?: Maybe<BlockInput>;
}>;


export type DeleteBlockMutation = (
  { __typename?: 'Mutation' }
  & { deleteBlock?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'blockId' | 'name' | 'description'>
  )> }
);

export type BlockQueryVariables = Exact<{
  blockId: Scalars['String'];
}>;


export type BlockQuery = (
  { __typename?: 'Query' }
  & { block?: Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'blockId' | 'name' | 'description'>
  )> }
);

export type BlocksQueryVariables = Exact<{ [key: string]: never; }>;


export type BlocksQuery = (
  { __typename?: 'Query' }
  & { blocks?: Maybe<Array<Maybe<(
    { __typename?: 'Block' }
    & Pick<Block, 'blockId' | 'name' | 'description'>
  )>>> }
);

export type AddDepartmentMutationVariables = Exact<{
  department?: Maybe<DepartmentInput>;
}>;


export type AddDepartmentMutation = (
  { __typename?: 'Mutation' }
  & { addDepartment?: Maybe<(
    { __typename?: 'Department' }
    & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
    & { faculty?: Maybe<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'facultyId' | 'name'>
    )> }
  )> }
);

export type EditDepartmentMutationVariables = Exact<{
  department?: Maybe<DepartmentInput>;
}>;


export type EditDepartmentMutation = (
  { __typename?: 'Mutation' }
  & { editDepartment?: Maybe<(
    { __typename?: 'Department' }
    & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
    & { faculty?: Maybe<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'facultyId' | 'name'>
    )> }
  )> }
);

export type DeleteDepartmentMutationVariables = Exact<{
  department?: Maybe<DepartmentInput>;
}>;


export type DeleteDepartmentMutation = (
  { __typename?: 'Mutation' }
  & { deleteDepartment?: Maybe<(
    { __typename?: 'Department' }
    & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
    & { faculty?: Maybe<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'facultyId' | 'name'>
    )> }
  )> }
);

export type DepartmentQueryVariables = Exact<{
  departmentId: Scalars['String'];
}>;


export type DepartmentQuery = (
  { __typename?: 'Query' }
  & { department?: Maybe<(
    { __typename?: 'Department' }
    & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
    & { faculty?: Maybe<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'facultyId' | 'name'>
    )> }
  )> }
);

export type DepartmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type DepartmentsQuery = (
  { __typename?: 'Query' }
  & { departments?: Maybe<Array<Maybe<(
    { __typename?: 'Department' }
    & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
    & { faculty?: Maybe<(
      { __typename?: 'Faculty' }
      & Pick<Faculty, 'facultyId' | 'name'>
    )> }
  )>>> }
);

export type AddDisciplineMutationVariables = Exact<{
  discipline?: Maybe<DisciplineInput>;
}>;


export type AddDisciplineMutation = (
  { __typename?: 'Mutation' }
  & { addDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
  )> }
);

export type EditDisciplineMutationVariables = Exact<{
  discipline?: Maybe<DisciplineInput>;
}>;


export type EditDisciplineMutation = (
  { __typename?: 'Mutation' }
  & { editDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
  )> }
);

export type DeleteDisciplineMutationVariables = Exact<{
  discipline?: Maybe<DisciplineInput>;
}>;


export type DeleteDisciplineMutation = (
  { __typename?: 'Mutation' }
  & { deleteDiscipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
  )> }
);

export type DisciplineQueryVariables = Exact<{
  disciplineId: Scalars['String'];
}>;


export type DisciplineQuery = (
  { __typename?: 'Query' }
  & { discipline?: Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
  )> }
);

export type DisciplinesQueryVariables = Exact<{ [key: string]: never; }>;


export type DisciplinesQuery = (
  { __typename?: 'Query' }
  & { disciplines?: Maybe<Array<Maybe<(
    { __typename?: 'Discipline' }
    & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
  )>>> }
);

export type AddDutyMutationVariables = Exact<{
  duty?: Maybe<DutyInput>;
}>;


export type AddDutyMutation = (
  { __typename?: 'Mutation' }
  & { addDuty?: Maybe<(
    { __typename?: 'Duty' }
    & Pick<Duty, 'dutyId' | 'name' | 'description'>
  )> }
);

export type EditDutyMutationVariables = Exact<{
  duty?: Maybe<DutyInput>;
}>;


export type EditDutyMutation = (
  { __typename?: 'Mutation' }
  & { editDuty?: Maybe<(
    { __typename?: 'Duty' }
    & Pick<Duty, 'dutyId' | 'name' | 'description'>
  )> }
);

export type DeleteDutyMutationVariables = Exact<{
  duty?: Maybe<DutyInput>;
}>;


export type DeleteDutyMutation = (
  { __typename?: 'Mutation' }
  & { deleteDuty?: Maybe<(
    { __typename?: 'Duty' }
    & Pick<Duty, 'dutyId' | 'name' | 'description'>
  )> }
);

export type DutyQueryVariables = Exact<{
  dutyId: Scalars['String'];
}>;


export type DutyQuery = (
  { __typename?: 'Query' }
  & { duty?: Maybe<(
    { __typename?: 'Duty' }
    & Pick<Duty, 'dutyId' | 'name' | 'description'>
  )> }
);

export type DutiesQueryVariables = Exact<{ [key: string]: never; }>;


export type DutiesQuery = (
  { __typename?: 'Query' }
  & { duties?: Maybe<Array<Maybe<(
    { __typename?: 'Duty' }
    & Pick<Duty, 'dutyId' | 'name' | 'description'>
  )>>> }
);

export type AddEnrollmentMutationVariables = Exact<{
  enrollment: EnrollmentInput;
}>;


export type AddEnrollmentMutation = (
  { __typename?: 'Mutation' }
  & { addEnrollment?: Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )> }
);

export type EditEnrollmentMutationVariables = Exact<{
  enrollment: EnrollmentInput;
}>;


export type EditEnrollmentMutation = (
  { __typename?: 'Mutation' }
  & { editEnrollment?: Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )> }
);

export type DeleteEnrollmentMutationVariables = Exact<{
  enrollment: EnrollmentInput;
}>;


export type DeleteEnrollmentMutation = (
  { __typename?: 'Mutation' }
  & { deleteEnrollment?: Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )> }
);

export type EnrollmentQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type EnrollmentQuery = (
  { __typename?: 'Query' }
  & { enrollment?: Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )> }
);

export type EnrollmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type EnrollmentsQuery = (
  { __typename?: 'Query' }
  & { enrollments?: Maybe<Array<Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )>>> }
);

export type EnrollmentsByQualificationQueryVariables = Exact<{
  qualificationId: Scalars['String'];
}>;


export type EnrollmentsByQualificationQuery = (
  { __typename?: 'Query' }
  & { enrollmentsByQualification?: Maybe<Array<Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )>>> }
);

export type EnrollmentsByYearQueryVariables = Exact<{
  enrollmentYear: Scalars['String'];
}>;


export type EnrollmentsByYearQuery = (
  { __typename?: 'Query' }
  & { enrollmentsByYear?: Maybe<Array<Maybe<(
    { __typename?: 'Enrollment' }
    & Pick<Enrollment, 'enrollmentYear' | 'qualificationId' | 'firstYearEstimated' | 'secondYearEstimated' | 'thirdYearEstimated'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name'>
    )> }
  )>>> }
);

export type AddFacultyMutationVariables = Exact<{
  faculty?: Maybe<FacultyInput>;
}>;


export type AddFacultyMutation = (
  { __typename?: 'Mutation' }
  & { addFaculty?: Maybe<(
    { __typename?: 'Faculty' }
    & Pick<Faculty, 'facultyId' | 'name'>
  )> }
);

export type EditFacultyMutationVariables = Exact<{
  faculty?: Maybe<FacultyInput>;
}>;


export type EditFacultyMutation = (
  { __typename?: 'Mutation' }
  & { addFaculty?: Maybe<(
    { __typename?: 'Faculty' }
    & Pick<Faculty, 'facultyId' | 'name'>
  )> }
);

export type DeleteFacultyMutationVariables = Exact<{
  faculty?: Maybe<FacultyInput>;
}>;


export type DeleteFacultyMutation = (
  { __typename?: 'Mutation' }
  & { deleteFaculty?: Maybe<(
    { __typename?: 'Faculty' }
    & Pick<Faculty, 'facultyId' | 'name'>
  )> }
);

export type FacultyQueryVariables = Exact<{
  facultyId: Scalars['String'];
}>;


export type FacultyQuery = (
  { __typename?: 'Query' }
  & { faculty?: Maybe<(
    { __typename?: 'Faculty' }
    & Pick<Faculty, 'facultyId' | 'name'>
  )> }
);

export type FacultiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FacultiesQuery = (
  { __typename?: 'Query' }
  & { faculties?: Maybe<Array<Maybe<(
    { __typename?: 'Faculty' }
    & Pick<Faculty, 'facultyId' | 'name'>
  )>>> }
);

export type CreateGroupMutationVariables = Exact<{
  group: GroupInput;
}>;


export type CreateGroupMutation = (
  { __typename?: 'Mutation' }
  & { createGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type UpdateGroupMutationVariables = Exact<{
  group: GroupInput;
}>;


export type UpdateGroupMutation = (
  { __typename?: 'Mutation' }
  & { updateGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type DeleteGroupMutationVariables = Exact<{
  group: GroupInput;
}>;


export type DeleteGroupMutation = (
  { __typename?: 'Mutation' }
  & { deleteGroup?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type GroupQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GroupQuery = (
  { __typename?: 'Query' }
  & { group?: Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )> }
);

export type GroupsQueryVariables = Exact<{ [key: string]: never; }>;


export type GroupsQuery = (
  { __typename?: 'Query' }
  & { groups?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )>>> }
);

export type GroupsByModuleQueryVariables = Exact<{
  moduleId: Scalars['String'];
}>;


export type GroupsByModuleQuery = (
  { __typename?: 'Query' }
  & { groupsByModule?: Maybe<Array<Maybe<(
    { __typename?: 'Group' }
    & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
    & { module?: Maybe<(
      { __typename?: 'Module' }
      & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
      & { qualification?: Maybe<(
        { __typename?: 'Qualification' }
        & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
        & { department?: Maybe<(
          { __typename?: 'Department' }
          & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          & { faculty?: Maybe<(
            { __typename?: 'Faculty' }
            & Pick<Faculty, 'facultyId' | 'name'>
          )> }
        )> }
      )>, offeringType?: Maybe<(
        { __typename?: 'OfferingType' }
        & Pick<OfferingType, 'offeringTypeId' | 'description'>
      )>, discipline?: Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>, venue?: Maybe<(
        { __typename?: 'Venue' }
        & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
      )>, block?: Maybe<(
        { __typename?: 'Block' }
        & Pick<Block, 'blockId' | 'name' | 'description'>
      )> }
    )> }
  )>>> }
);

export type GroupTotalQueryVariables = Exact<{
  moduleId: Scalars['String'];
}>;


export type GroupTotalQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'groupTotal'>
);

export type RemainingStudentsQueryVariables = Exact<{
  moduleId: Scalars['String'];
}>;


export type RemainingStudentsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'remainingStudents'>
);

export type GroupExistsQueryVariables = Exact<{
  groupId: Scalars['String'];
  moduleId: Scalars['String'];
}>;


export type GroupExistsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'groupExists'>
);

export type AddModuleMutationVariables = Exact<{
  module: ModuleInput;
}>;


export type AddModuleMutation = (
  { __typename?: 'Mutation' }
  & { addModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type AddModulesMutationVariables = Exact<{
  modules: Array<ModuleInput>;
}>;


export type AddModulesMutation = (
  { __typename?: 'Mutation' }
  & { addModules?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type EditModuleMutationVariables = Exact<{
  module: ModuleInput;
}>;


export type EditModuleMutation = (
  { __typename?: 'Mutation' }
  & { editModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type DeleteModuleMutationVariables = Exact<{
  module: ModuleInput;
}>;


export type DeleteModuleMutation = (
  { __typename?: 'Mutation' }
  & { deleteModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type StackModulesMutationVariables = Exact<{
  ids: Array<Scalars['String']>;
}>;


export type StackModulesMutation = (
  { __typename?: 'Mutation' }
  & { stackModules?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddModuleToStackMutationVariables = Exact<{
  id: Scalars['String'];
  stackId?: Maybe<Scalars['String']>;
}>;


export type AddModuleToStackMutation = (
  { __typename?: 'Mutation' }
  & { addModuleToStack?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type UnstackModuleMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type UnstackModuleMutation = (
  { __typename?: 'Mutation' }
  & { unstackModule?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type ModuleQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type ModuleQuery = (
  { __typename?: 'Query' }
  & { module?: Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )> }
);

export type ModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type ModulesQuery = (
  { __typename?: 'Query' }
  & { modules?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ModulesByDisciplineQueryVariables = Exact<{
  disciplineIds: Array<Scalars['String']>;
}>;


export type ModulesByDisciplineQuery = (
  { __typename?: 'Query' }
  & { modulesByDiscipline?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ModulesByStackQueryVariables = Exact<{
  stackId: Scalars['String'];
}>;


export type ModulesByStackQuery = (
  { __typename?: 'Query' }
  & { modulesByStack?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type ModulesByDepartmentQueryVariables = Exact<{
  departmentId: Scalars['String'];
}>;


export type ModulesByDepartmentQuery = (
  { __typename?: 'Query' }
  & { modulesByDepartment?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type StackedWithQueryVariables = Exact<{
  id: Scalars['String'];
  stackId?: Maybe<Scalars['String']>;
}>;


export type StackedWithQuery = (
  { __typename?: 'Query' }
  & { stackedWith?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type UnstackedModulesQueryVariables = Exact<{ [key: string]: never; }>;


export type UnstackedModulesQuery = (
  { __typename?: 'Query' }
  & { unstackedModules?: Maybe<Array<Maybe<(
    { __typename?: 'Module' }
    & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
    & { qualification?: Maybe<(
      { __typename?: 'Qualification' }
      & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
      & { department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )> }
    )>, offeringType?: Maybe<(
      { __typename?: 'OfferingType' }
      & Pick<OfferingType, 'offeringTypeId' | 'description'>
    )>, discipline?: Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>, venue?: Maybe<(
      { __typename?: 'Venue' }
      & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
    )>, block?: Maybe<(
      { __typename?: 'Block' }
      & Pick<Block, 'blockId' | 'name' | 'description'>
    )> }
  )>>> }
);

export type AddOfferingTypeMutationVariables = Exact<{
  offeringType?: Maybe<OfferingTypeInput>;
}>;


export type AddOfferingTypeMutation = (
  { __typename?: 'Mutation' }
  & { addOfferingType?: Maybe<(
    { __typename?: 'OfferingType' }
    & Pick<OfferingType, 'offeringTypeId' | 'description'>
  )> }
);

export type EditOfferingTypeMutationVariables = Exact<{
  offeringType?: Maybe<OfferingTypeInput>;
}>;


export type EditOfferingTypeMutation = (
  { __typename?: 'Mutation' }
  & { editOfferingType?: Maybe<(
    { __typename?: 'OfferingType' }
    & Pick<OfferingType, 'offeringTypeId' | 'description'>
  )> }
);

export type DeleteOfferingTypeMutationVariables = Exact<{
  offeringType?: Maybe<OfferingTypeInput>;
}>;


export type DeleteOfferingTypeMutation = (
  { __typename?: 'Mutation' }
  & { deleteOfferingType?: Maybe<(
    { __typename?: 'OfferingType' }
    & Pick<OfferingType, 'offeringTypeId' | 'description'>
  )> }
);

export type OfferingTypeQueryVariables = Exact<{
  offeringTypeId: Scalars['String'];
}>;


export type OfferingTypeQuery = (
  { __typename?: 'Query' }
  & { offeringType?: Maybe<(
    { __typename?: 'OfferingType' }
    & Pick<OfferingType, 'offeringTypeId' | 'description'>
  )> }
);

export type OfferingTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type OfferingTypesQuery = (
  { __typename?: 'Query' }
  & { offeringTypes?: Maybe<Array<Maybe<(
    { __typename?: 'OfferingType' }
    & Pick<OfferingType, 'offeringTypeId' | 'description'>
  )>>> }
);

export type AddPositionMutationVariables = Exact<{
  position?: Maybe<PositionInput>;
}>;


export type AddPositionMutation = (
  { __typename?: 'Mutation' }
  & { addPosition?: Maybe<(
    { __typename?: 'Position' }
    & Pick<Position, 'positionId' | 'name' | 'description'>
  )> }
);

export type EditPositionMutationVariables = Exact<{
  position?: Maybe<PositionInput>;
}>;


export type EditPositionMutation = (
  { __typename?: 'Mutation' }
  & { editPosition?: Maybe<(
    { __typename?: 'Position' }
    & Pick<Position, 'positionId' | 'name' | 'description'>
  )> }
);

export type DeletePositionMutationVariables = Exact<{
  position?: Maybe<PositionInput>;
}>;


export type DeletePositionMutation = (
  { __typename?: 'Mutation' }
  & { deletePosition?: Maybe<(
    { __typename?: 'Position' }
    & Pick<Position, 'positionId' | 'name' | 'description'>
  )> }
);

export type PositionQueryVariables = Exact<{
  positionId: Scalars['String'];
}>;


export type PositionQuery = (
  { __typename?: 'Query' }
  & { position?: Maybe<(
    { __typename?: 'Position' }
    & Pick<Position, 'positionId' | 'name' | 'description'>
  )> }
);

export type PositionsQueryVariables = Exact<{ [key: string]: never; }>;


export type PositionsQuery = (
  { __typename?: 'Query' }
  & { positions?: Maybe<Array<Maybe<(
    { __typename?: 'Position' }
    & Pick<Position, 'positionId' | 'name' | 'description'>
  )>>> }
);

export type AddQualificationMutationVariables = Exact<{
  qualification?: Maybe<QualificationInput>;
}>;


export type AddQualificationMutation = (
  { __typename?: 'Mutation' }
  & { addQualification?: Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )> }
);

export type EditQualificationMutationVariables = Exact<{
  qualification?: Maybe<QualificationInput>;
}>;


export type EditQualificationMutation = (
  { __typename?: 'Mutation' }
  & { editQualification?: Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )> }
);

export type DeleteQualificationMutationVariables = Exact<{
  qualification?: Maybe<QualificationInput>;
}>;


export type DeleteQualificationMutation = (
  { __typename?: 'Mutation' }
  & { deleteQualification?: Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )> }
);

export type QualificationQueryVariables = Exact<{
  qualificationId: Scalars['String'];
}>;


export type QualificationQuery = (
  { __typename?: 'Query' }
  & { qualification?: Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )> }
);

export type QualificationsQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationsQuery = (
  { __typename?: 'Query' }
  & { qualifications?: Maybe<Array<Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )>>> }
);

export type QualificationsPostgraduateQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationsPostgraduateQuery = (
  { __typename?: 'Query' }
  & { qualifications?: Maybe<Array<Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )>>> }
);

export type QualificationsUnenrolledQueryVariables = Exact<{ [key: string]: never; }>;


export type QualificationsUnenrolledQuery = (
  { __typename?: 'Query' }
  & { qualificationsUnenrolled?: Maybe<Array<Maybe<(
    { __typename?: 'Qualification' }
    & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
    & { department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )> }
  )>>> }
);

export type AddStudentMutationVariables = Exact<{
  student?: Maybe<StudentInput>;
}>;


export type AddStudentMutation = (
  { __typename?: 'Mutation' }
  & { addStudent?: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )> }
);

export type EditStudentMutationVariables = Exact<{
  student?: Maybe<StudentInput>;
}>;


export type EditStudentMutation = (
  { __typename?: 'Mutation' }
  & { editStudent?: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )> }
);

export type DeleteStudentMutationVariables = Exact<{
  student?: Maybe<StudentInput>;
}>;


export type DeleteStudentMutation = (
  { __typename?: 'Mutation' }
  & { deleteStudent?: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )> }
);

export type StudentQueryVariables = Exact<{
  studentId: Scalars['String'];
}>;


export type StudentQuery = (
  { __typename?: 'Query' }
  & { student?: Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )> }
);

export type StudentsQueryVariables = Exact<{ [key: string]: never; }>;


export type StudentsQuery = (
  { __typename?: 'Query' }
  & { students?: Maybe<Array<Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )>>> }
);

export type StudentsUnassignedQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type StudentsUnassignedQuery = (
  { __typename?: 'Query' }
  & { studentsUnassigned?: Maybe<Array<Maybe<(
    { __typename?: 'Student' }
    & Pick<Student, 'studentId' | 'email' | 'firstName' | 'lastName' | 'type' | 'title'>
  )>>> }
);

export type UploadlProfilePictureMutationVariables = Exact<{
  file: Scalars['Upload'];
  userId: Scalars['String'];
}>;


export type UploadlProfilePictureMutation = (
  { __typename?: 'Mutation' }
  & { uploadProfilePicture?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'location'>
  )> }
);

export type UploadAcademicAdministrationEvidenceAwsMutationVariables = Exact<{
  file: Scalars['Upload'];
  userId: Scalars['String'];
  activityId: Scalars['String'];
}>;


export type UploadAcademicAdministrationEvidenceAwsMutation = (
  { __typename?: 'Mutation' }
  & { uploadAcademicAdministrationEvidenceAWS?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'location'>
  )> }
);

export type UploadResearchEvidenceAwsMutationVariables = Exact<{
  file: Scalars['Upload'];
  userId: Scalars['String'];
  activityId: Scalars['String'];
}>;


export type UploadResearchEvidenceAwsMutation = (
  { __typename?: 'Mutation' }
  & { uploadResearchEvidenceAWS?: Maybe<(
    { __typename?: 'Location' }
    & Pick<Location, 'location'>
  )> }
);

export type AddUserMutationVariables = Exact<{
  user?: Maybe<UserInput>;
}>;


export type AddUserMutation = (
  { __typename?: 'Mutation' }
  & { addUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )> }
);

export type EditUserMutationVariables = Exact<{
  user?: Maybe<UserInput>;
}>;


export type EditUserMutation = (
  { __typename?: 'Mutation' }
  & { editUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )> }
);

export type DeleteUserMutationVariables = Exact<{
  user?: Maybe<UserInput>;
}>;


export type DeleteUserMutation = (
  { __typename?: 'Mutation' }
  & { deleteUser?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )> }
);

export type UserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserQuery = (
  { __typename?: 'Query' }
  & { user?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )> }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )>>> }
);

export type UsersByPositionQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersByPositionQuery = (
  { __typename?: 'Query' }
  & { usersByPosition?: Maybe<Array<Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
    & { disciplines?: Maybe<Array<Maybe<(
      { __typename?: 'Discipline' }
      & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
    )>>>, position?: Maybe<(
      { __typename?: 'Position' }
      & Pick<Position, 'positionId' | 'name' | 'description'>
    )>, department?: Maybe<(
      { __typename?: 'Department' }
      & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
      & { faculty?: Maybe<(
        { __typename?: 'Faculty' }
        & Pick<Faculty, 'facultyId' | 'name'>
      )> }
    )>, workFocus?: Maybe<(
      { __typename?: 'WorkFocus' }
      & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
    )> }
  )>>> }
);

export type UserExistsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type UserExistsQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'userExists'>
);

export type AddVenueMutationVariables = Exact<{
  venue?: Maybe<VenueInput>;
}>;


export type AddVenueMutation = (
  { __typename?: 'Mutation' }
  & { addVenue?: Maybe<(
    { __typename?: 'Venue' }
    & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
  )> }
);

export type EditVenueMutationVariables = Exact<{
  venue?: Maybe<VenueInput>;
}>;


export type EditVenueMutation = (
  { __typename?: 'Mutation' }
  & { editVenue?: Maybe<(
    { __typename?: 'Venue' }
    & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
  )> }
);

export type DeleteVenueMutationVariables = Exact<{
  venue?: Maybe<VenueInput>;
}>;


export type DeleteVenueMutation = (
  { __typename?: 'Mutation' }
  & { deleteVenue?: Maybe<(
    { __typename?: 'Venue' }
    & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
  )> }
);

export type VenueQueryVariables = Exact<{
  venueId: Scalars['String'];
}>;


export type VenueQuery = (
  { __typename?: 'Query' }
  & { venue?: Maybe<(
    { __typename?: 'Venue' }
    & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
  )> }
);

export type VenuesQueryVariables = Exact<{ [key: string]: never; }>;


export type VenuesQuery = (
  { __typename?: 'Query' }
  & { venues?: Maybe<Array<Maybe<(
    { __typename?: 'Venue' }
    & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
  )>>> }
);

export type AddWorkFocusMutationVariables = Exact<{
  workFocus?: Maybe<WorkFocusInput>;
}>;


export type AddWorkFocusMutation = (
  { __typename?: 'Mutation' }
  & { addWorkFocus?: Maybe<(
    { __typename?: 'WorkFocus' }
    & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
  )> }
);

export type EditWorkFocusMutationVariables = Exact<{
  workFocus?: Maybe<WorkFocusInput>;
}>;


export type EditWorkFocusMutation = (
  { __typename?: 'Mutation' }
  & { editWorkFocus?: Maybe<(
    { __typename?: 'WorkFocus' }
    & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
  )> }
);

export type DeleteWorkFocusMutationVariables = Exact<{
  workFocus?: Maybe<WorkFocusInput>;
}>;


export type DeleteWorkFocusMutation = (
  { __typename?: 'Mutation' }
  & { deleteWorkFocus?: Maybe<(
    { __typename?: 'WorkFocus' }
    & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
  )> }
);

export type WorkFocusQueryVariables = Exact<{
  name: Scalars['String'];
}>;


export type WorkFocusQuery = (
  { __typename?: 'Query' }
  & { workFocus?: Maybe<(
    { __typename?: 'WorkFocus' }
    & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
  )> }
);

export type WorkFocusesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkFocusesQuery = (
  { __typename?: 'Query' }
  & { workFocuses?: Maybe<Array<Maybe<(
    { __typename?: 'WorkFocus' }
    & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
  )>>> }
);

export type TeachingHoursQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type TeachingHoursQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'teachingHours'>
);

export type ResearchHoursQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResearchHoursQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'researchHours'>
);

export type ServiceHoursQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ServiceHoursQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'serviceHours'>
);

export type AnnualHoursQueryVariables = Exact<{ [key: string]: never; }>;


export type AnnualHoursQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'annualHours'>
);

export type AcademicAdministrationWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type AcademicAdministrationWorkloadQuery = (
  { __typename?: 'Query' }
  & { academicAdministrationWorkload?: Maybe<(
    { __typename?: 'AcademicAdministrationWorkload' }
    & Pick<AcademicAdministrationWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { academicAdministrationWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'AcademicAdministrationWorkloadPerActivity' }
      & Pick<AcademicAdministrationWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'AcademicAdministrationActivity' }
        & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type CommunityInstructionWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type CommunityInstructionWorkloadQuery = (
  { __typename?: 'Query' }
  & { communityInstructionWorkload?: Maybe<(
    { __typename?: 'CommunityInstructionWorkload' }
    & Pick<CommunityInstructionWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { communityInstructionWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'CommunityInstructionWorkloadPerActivity' }
      & Pick<CommunityInstructionWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'CommunityInstructionActivity' }
        & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type ExecutiveManagementWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type ExecutiveManagementWorkloadQuery = (
  { __typename?: 'Query' }
  & { executiveManagementWorkload?: Maybe<(
    { __typename?: 'ExecutiveManagementWorkload' }
    & Pick<ExecutiveManagementWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { executiveManagementWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'ExecutiveManagementWorkloadPerActivity' }
      & Pick<ExecutiveManagementWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'ExecutiveManagementActivity' }
        & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type FormalInstructionWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type FormalInstructionWorkloadQuery = (
  { __typename?: 'Query' }
  & { formalInstructionWorkload?: Maybe<(
    { __typename?: 'FormalInstructionWorkload' }
    & Pick<FormalInstructionWorkload, 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { formalInstructionWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'FormalInstructionWorkloadPerActivity' }
      & Pick<FormalInstructionWorkloadPerActivity, 'studentsEnrolled' | 'baseContactHours' | 'coordinationHours' | 'studentSupportHours' | 'preparationTimeHours' | 'assessmentSettingHours' | 'examMarkingHours' | 'courseworkMarkingHours' | 'feedbackHours' | 'formativeAssessmentHours' | 'moderationHours' | 'otherHoursPerActivity' | 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'FormalInstructionActivity' }
        & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )>, group?: Maybe<(
          { __typename?: 'Group' }
          & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
          & { module?: Maybe<(
            { __typename?: 'Module' }
            & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
            & { qualification?: Maybe<(
              { __typename?: 'Qualification' }
              & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
              & { department?: Maybe<(
                { __typename?: 'Department' }
                & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
                & { faculty?: Maybe<(
                  { __typename?: 'Faculty' }
                  & Pick<Faculty, 'facultyId' | 'name'>
                )> }
              )> }
            )>, offeringType?: Maybe<(
              { __typename?: 'OfferingType' }
              & Pick<OfferingType, 'offeringTypeId' | 'description'>
            )>, discipline?: Maybe<(
              { __typename?: 'Discipline' }
              & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
            )>, venue?: Maybe<(
              { __typename?: 'Venue' }
              & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
            )>, block?: Maybe<(
              { __typename?: 'Block' }
              & Pick<Block, 'blockId' | 'name' | 'description'>
            )> }
          )> }
        )> }
      )>, module?: Maybe<(
        { __typename?: 'Module' }
        & Pick<Module, 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
        & { qualification?: Maybe<(
          { __typename?: 'Qualification' }
          & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
          & { department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
          )> }
        )>, offeringType?: Maybe<(
          { __typename?: 'OfferingType' }
          & Pick<OfferingType, 'offeringTypeId' | 'description'>
        )>, discipline?: Maybe<(
          { __typename?: 'Discipline' }
          & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
        )>, venue?: Maybe<(
          { __typename?: 'Venue' }
          & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
        )>, block?: Maybe<(
          { __typename?: 'Block' }
          & Pick<Block, 'blockId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type PersonnelDevelopmentWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type PersonnelDevelopmentWorkloadQuery = (
  { __typename?: 'Query' }
  & { personnelDevelopmentWorkload?: Maybe<(
    { __typename?: 'PersonnelDevelopmentWorkload' }
    & Pick<PersonnelDevelopmentWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { personnelDevelopmentWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'PersonnelDevelopmentWorkloadPerActivity' }
      & Pick<PersonnelDevelopmentWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'PersonnelDevelopmentActivity' }
        & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type PublicServiceWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type PublicServiceWorkloadQuery = (
  { __typename?: 'Query' }
  & { publicServiceWorkload?: Maybe<(
    { __typename?: 'PublicServiceWorkload' }
    & Pick<PublicServiceWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { publicServiceWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'PublicServiceWorkloadPerActivity' }
      & Pick<PublicServiceWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'PublicServiceActivity' }
        & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type ResearchWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type ResearchWorkloadQuery = (
  { __typename?: 'Query' }
  & { researchWorkload?: Maybe<(
    { __typename?: 'ResearchWorkload' }
    & Pick<ResearchWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { researchWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'ResearchWorkloadPerActivity' }
      & Pick<ResearchWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'ResearchActivity' }
        & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'url' | 'evidence'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
            & { faculty?: Maybe<(
              { __typename?: 'Faculty' }
              & Pick<Faculty, 'facultyId' | 'name'>
            )> }
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )> }
      )> }
    )>>> }
  )> }
);

export type SupervisionWorkloadQueryVariables = Exact<{
  userId?: Maybe<Scalars['String']>;
}>;


export type SupervisionWorkloadQuery = (
  { __typename?: 'Query' }
  & { supervisionWorkload?: Maybe<(
    { __typename?: 'SupervisionWorkload' }
    & Pick<SupervisionWorkload, 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
    & { supervisionWorkloads?: Maybe<Array<Maybe<(
      { __typename?: 'SupervisionWorkloadPerActivity' }
      & Pick<SupervisionWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
      & { activity?: Maybe<(
        { __typename?: 'SupervisionActivity' }
        & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId'>
        & { user?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
          & { disciplines?: Maybe<Array<Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>>>, position?: Maybe<(
            { __typename?: 'Position' }
            & Pick<Position, 'positionId' | 'name' | 'description'>
          )>, department?: Maybe<(
            { __typename?: 'Department' }
            & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
          )>, workFocus?: Maybe<(
            { __typename?: 'WorkFocus' }
            & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
          )> }
        )>, duty?: Maybe<(
          { __typename?: 'Duty' }
          & Pick<Duty, 'dutyId' | 'name' | 'description'>
        )>, student?: Maybe<(
          { __typename?: 'Student' }
          & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
        )> }
      )> }
    )>>> }
  )> }
);

export type TotalHoursPerUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type TotalHoursPerUserQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'totalHoursPerUser'>
);

export type TeachingHoursPerUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type TeachingHoursPerUserQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'teachingHoursPerUser'>
);

export type ResearchHoursPerUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ResearchHoursPerUserQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'researchHoursPerUser'>
);

export type ServiceHoursPerUserQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type ServiceHoursPerUserQuery = (
  { __typename?: 'Query' }
  & Pick<Query, 'serviceHoursPerUser'>
);

export type TotalWorkloadQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type TotalWorkloadQuery = (
  { __typename?: 'Query' }
  & { totalWorkload?: Maybe<(
    { __typename?: 'TotalWorkload' }
    & { academicAdministrationWorkload?: Maybe<(
      { __typename?: 'AcademicAdministrationWorkload' }
      & Pick<AcademicAdministrationWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { academicAdministrationWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'AcademicAdministrationWorkloadPerActivity' }
        & Pick<AcademicAdministrationWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'AcademicAdministrationActivity' }
          & Pick<AcademicAdministrationActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'qualificationId' | 'description' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )>, qualification?: Maybe<(
            { __typename?: 'Qualification' }
            & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
            & { department?: Maybe<(
              { __typename?: 'Department' }
              & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
              & { faculty?: Maybe<(
                { __typename?: 'Faculty' }
                & Pick<Faculty, 'facultyId' | 'name'>
              )> }
            )> }
          )> }
        )> }
      )>>> }
    )>, communityInstructionWorkload?: Maybe<(
      { __typename?: 'CommunityInstructionWorkload' }
      & Pick<CommunityInstructionWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { communityInstructionWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'CommunityInstructionWorkloadPerActivity' }
        & Pick<CommunityInstructionWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'CommunityInstructionActivity' }
          & Pick<CommunityInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, executiveManagementWorkload?: Maybe<(
      { __typename?: 'ExecutiveManagementWorkload' }
      & Pick<ExecutiveManagementWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { executiveManagementWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'ExecutiveManagementWorkloadPerActivity' }
        & Pick<ExecutiveManagementWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'ExecutiveManagementActivity' }
          & Pick<ExecutiveManagementActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, formalInstructionWorkload?: Maybe<(
      { __typename?: 'FormalInstructionWorkload' }
      & Pick<FormalInstructionWorkload, 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { formalInstructionWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'FormalInstructionWorkloadPerActivity' }
        & Pick<FormalInstructionWorkloadPerActivity, 'studentsEnrolled' | 'baseContactHours' | 'coordinationHours' | 'studentSupportHours' | 'preparationTimeHours' | 'assessmentSettingHours' | 'examMarkingHours' | 'courseworkMarkingHours' | 'feedbackHours' | 'formativeAssessmentHours' | 'moderationHours' | 'otherHoursPerActivity' | 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'FormalInstructionActivity' }
          & Pick<FormalInstructionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'groupId' | 'isCoordinator'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
            & { disciplines?: Maybe<Array<Maybe<(
              { __typename?: 'Discipline' }
              & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
            )>>>, position?: Maybe<(
              { __typename?: 'Position' }
              & Pick<Position, 'positionId' | 'name' | 'description'>
            )>, department?: Maybe<(
              { __typename?: 'Department' }
              & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
              & { faculty?: Maybe<(
                { __typename?: 'Faculty' }
                & Pick<Faculty, 'facultyId' | 'name'>
              )> }
            )>, workFocus?: Maybe<(
              { __typename?: 'WorkFocus' }
              & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
            )> }
          )>, duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )>, group?: Maybe<(
            { __typename?: 'Group' }
            & Pick<Group, 'id' | 'groupId' | 'moduleId' | 'studentsEnrolled' | 'modularity'>
            & { module?: Maybe<(
              { __typename?: 'Module' }
              & Pick<Module, 'id' | 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
              & { qualification?: Maybe<(
                { __typename?: 'Qualification' }
                & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
                & { department?: Maybe<(
                  { __typename?: 'Department' }
                  & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
                  & { faculty?: Maybe<(
                    { __typename?: 'Faculty' }
                    & Pick<Faculty, 'facultyId' | 'name'>
                  )> }
                )> }
              )>, offeringType?: Maybe<(
                { __typename?: 'OfferingType' }
                & Pick<OfferingType, 'offeringTypeId' | 'description'>
              )>, discipline?: Maybe<(
                { __typename?: 'Discipline' }
                & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
              )>, venue?: Maybe<(
                { __typename?: 'Venue' }
                & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
              )>, block?: Maybe<(
                { __typename?: 'Block' }
                & Pick<Block, 'blockId' | 'name' | 'description'>
              )> }
            )> }
          )> }
        )>, module?: Maybe<(
          { __typename?: 'Module' }
          & Pick<Module, 'moduleId' | 'name' | 'type' | 'assessmentMethod' | 'nqfLevel' | 'credits' | 'qualificationId' | 'offeringTypeId' | 'disciplineId' | 'venueId' | 'blockId' | 'stackId' | 'studyPeriod' | 'lecturedBy' | 'studentsEnrolled' | 'moderation'>
          & { qualification?: Maybe<(
            { __typename?: 'Qualification' }
            & Pick<Qualification, 'qualificationId' | 'name' | 'type' | 'departmentId'>
            & { department?: Maybe<(
              { __typename?: 'Department' }
              & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
            )> }
          )>, offeringType?: Maybe<(
            { __typename?: 'OfferingType' }
            & Pick<OfferingType, 'offeringTypeId' | 'description'>
          )>, discipline?: Maybe<(
            { __typename?: 'Discipline' }
            & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
          )>, venue?: Maybe<(
            { __typename?: 'Venue' }
            & Pick<Venue, 'venueId' | 'campus' | 'capacity' | 'type'>
          )>, block?: Maybe<(
            { __typename?: 'Block' }
            & Pick<Block, 'blockId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, personnelDevelopmentWorkload?: Maybe<(
      { __typename?: 'PersonnelDevelopmentWorkload' }
      & Pick<PersonnelDevelopmentWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { personnelDevelopmentWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'PersonnelDevelopmentWorkloadPerActivity' }
        & Pick<PersonnelDevelopmentWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'PersonnelDevelopmentActivity' }
          & Pick<PersonnelDevelopmentActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'date' | 'duration' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, publicServiceWorkload?: Maybe<(
      { __typename?: 'PublicServiceWorkload' }
      & Pick<PublicServiceWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { publicServiceWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'PublicServiceWorkloadPerActivity' }
        & Pick<PublicServiceWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'PublicServiceActivity' }
          & Pick<PublicServiceActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'title' | 'description' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, researchWorkload?: Maybe<(
      { __typename?: 'ResearchWorkload' }
      & Pick<ResearchWorkload, 'globalTarrif' | 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { researchWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'ResearchWorkloadPerActivity' }
        & Pick<ResearchWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'ResearchActivity' }
          & Pick<ResearchActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'output' | 'title' | 'details' | 'dates' | 'conferenceActivities' | 'authors' | 'url' | 'evidence'>
          & { duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )> }
        )> }
      )>>> }
    )>, supervisionWorkload?: Maybe<(
      { __typename?: 'SupervisionWorkload' }
      & Pick<SupervisionWorkload, 'totalHoursPerUser' | 'percentageOfWorkFocusPerUser' | 'percentageOfAnnualHoursPerUser' | 'percentageOfTotalHoursPerUser'>
      & { supervisionWorkloads?: Maybe<Array<Maybe<(
        { __typename?: 'SupervisionWorkloadPerActivity' }
        & Pick<SupervisionWorkloadPerActivity, 'totalHoursPerActivity' | 'percentageOfWorkFocusPerActivity' | 'percentageOfAnnualHoursPerActivity' | 'percentageOfTotalHoursPerActivity'>
        & { activity?: Maybe<(
          { __typename?: 'SupervisionActivity' }
          & Pick<SupervisionActivity, 'activityId' | 'userId' | 'dutyId' | 'approvalStatus' | 'createdAt' | 'updatedAt' | 'supervisionRole' | 'split' | 'studentId' | 'year'>
          & { user?: Maybe<(
            { __typename?: 'User' }
            & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
            & { disciplines?: Maybe<Array<Maybe<(
              { __typename?: 'Discipline' }
              & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
            )>>>, position?: Maybe<(
              { __typename?: 'Position' }
              & Pick<Position, 'positionId' | 'name' | 'description'>
            )>, department?: Maybe<(
              { __typename?: 'Department' }
              & Pick<Department, 'departmentId' | 'name' | 'facultyId' | 'hodId'>
              & { faculty?: Maybe<(
                { __typename?: 'Faculty' }
                & Pick<Faculty, 'facultyId' | 'name'>
              )> }
            )>, workFocus?: Maybe<(
              { __typename?: 'WorkFocus' }
              & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
            )> }
          )>, duty?: Maybe<(
            { __typename?: 'Duty' }
            & Pick<Duty, 'dutyId' | 'name' | 'description'>
          )>, student?: Maybe<(
            { __typename?: 'Student' }
            & Pick<Student, 'studentId' | 'firstName' | 'lastName' | 'email' | 'type' | 'title' | 'graduationDate'>
          )> }
        )> }
      )>>> }
    )> }
  )> }
);

export type WorkloadSummariesQueryVariables = Exact<{ [key: string]: never; }>;


export type WorkloadSummariesQuery = (
  { __typename?: 'Query' }
  & { workloadSummaries?: Maybe<Array<Maybe<(
    { __typename?: 'WorkloadSummary' }
    & Pick<WorkloadSummary, 'teachingHours' | 'teachingHoursPerUser' | 'teachingDifference' | 'researchHours' | 'researchHoursPerUser' | 'researchDifference' | 'serviceHours' | 'serviceHoursPerUser' | 'serviceDifference'>
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'userId' | 'email' | 'firstName' | 'lastName' | 'photoUrl' | 'disciplineIds' | 'positionId' | 'departmentId' | 'workFocusName' | 'gender' | 'nationality'>
      & { disciplines?: Maybe<Array<Maybe<(
        { __typename?: 'Discipline' }
        & Pick<Discipline, 'disciplineId' | 'name' | 'description'>
      )>>>, position?: Maybe<(
        { __typename?: 'Position' }
        & Pick<Position, 'positionId' | 'name' | 'description'>
      )>, department?: Maybe<(
        { __typename?: 'Department' }
        & Pick<Department, 'departmentId' | 'name' | 'facultyId'>
        & { faculty?: Maybe<(
          { __typename?: 'Faculty' }
          & Pick<Faculty, 'facultyId' | 'name'>
        )> }
      )>, workFocus?: Maybe<(
        { __typename?: 'WorkFocus' }
        & Pick<WorkFocus, 'name' | 'teachingRatio' | 'researchRatio' | 'serviceRatio'>
      )> }
    )> }
  )>>> }
);

export const AddAcademicAdministrationActivityDocument = gql`
    mutation addAcademicAdministrationActivity($activity: AcademicAdministrationActivityInput) {
  addAcademicAdministrationActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AddAcademicAdministrationActivityGQL extends Apollo.Mutation<AddAcademicAdministrationActivityMutation, AddAcademicAdministrationActivityMutationVariables> {
    document = AddAcademicAdministrationActivityDocument;
    
  }
export const EditAcademicAdministrationActivityDocument = gql`
    mutation editAcademicAdministrationActivity($activity: AcademicAdministrationActivityInput) {
  editAcademicAdministrationActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class EditAcademicAdministrationActivityGQL extends Apollo.Mutation<EditAcademicAdministrationActivityMutation, EditAcademicAdministrationActivityMutationVariables> {
    document = EditAcademicAdministrationActivityDocument;
    
  }
export const DeleteAcademicAdministrationActivityDocument = gql`
    mutation deleteAcademicAdministrationActivity($activity: AcademicAdministrationActivityInput) {
  deleteAcademicAdministrationActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class DeleteAcademicAdministrationActivityGQL extends Apollo.Mutation<DeleteAcademicAdministrationActivityMutation, DeleteAcademicAdministrationActivityMutationVariables> {
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
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AcademicAdministrationActivityGQL extends Apollo.Query<AcademicAdministrationActivityQuery, AcademicAdministrationActivityQueryVariables> {
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
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AcademicAdministrationActivitiesGQL extends Apollo.Query<AcademicAdministrationActivitiesQuery, AcademicAdministrationActivitiesQueryVariables> {
    document = AcademicAdministrationActivitiesDocument;
    
  }
export const AcademicAdministrationActivitiesByUserDocument = gql`
    query academicAdministrationActivitiesByUser($userId: String!) {
  academicAdministrationActivitiesByUser(userId: $userId) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AcademicAdministrationActivitiesByUserGQL extends Apollo.Query<AcademicAdministrationActivitiesByUserQuery, AcademicAdministrationActivitiesByUserQueryVariables> {
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
      date
      duration
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
      groupId
      group {
        id
        groupId
        moduleId
        module {
          id
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
              hodId
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
          stackId
          studyPeriod
          lecturedBy
          studentsEnrolled
          moderation
        }
        studentsEnrolled
        modularity
      }
      isCoordinator
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
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivityGQL extends Apollo.Query<ActivityQuery, ActivityQueryVariables> {
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
      groupId
      group {
        id
        groupId
        moduleId
        module {
          id
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
              hodId
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
          stackId
          studyPeriod
          lecturedBy
          studentsEnrolled
          moderation
        }
        studentsEnrolled
        modularity
      }
      isCoordinator
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
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ActivitiesByUnapprovedGQL extends Apollo.Query<ActivitiesByUnapprovedQuery, ActivitiesByUnapprovedQueryVariables> {
    document = ActivitiesByUnapprovedDocument;
    
  }
export const AddCommunityInstructionActivityDocument = gql`
    mutation addCommunityInstructionActivity($activity: CommunityInstructionActivityInput) {
  addCommunityInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AddCommunityInstructionActivityGQL extends Apollo.Mutation<AddCommunityInstructionActivityMutation, AddCommunityInstructionActivityMutationVariables> {
    document = AddCommunityInstructionActivityDocument;
    
  }
export const EditCommunityInstructionActivityDocument = gql`
    mutation editCommunityInstructionActivity($activity: CommunityInstructionActivityInput) {
  editCommunityInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class EditCommunityInstructionActivityGQL extends Apollo.Mutation<EditCommunityInstructionActivityMutation, EditCommunityInstructionActivityMutationVariables> {
    document = EditCommunityInstructionActivityDocument;
    
  }
export const DeleteCommunityInstructionActivityDocument = gql`
    mutation deleteCommunityInstructionActivity($activity: CommunityInstructionActivityInput) {
  deleteCommunityInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class DeleteCommunityInstructionActivityGQL extends Apollo.Mutation<DeleteCommunityInstructionActivityMutation, DeleteCommunityInstructionActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class CommunityInstructionActivityGQL extends Apollo.Query<CommunityInstructionActivityQuery, CommunityInstructionActivityQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class CommunityInstructionActivitiesGQL extends Apollo.Query<CommunityInstructionActivitiesQuery, CommunityInstructionActivitiesQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class CommunityInstructionActivitiesByUserGQL extends Apollo.Query<CommunityInstructionActivitiesByUserQuery, CommunityInstructionActivitiesByUserQueryVariables> {
    document = CommunityInstructionActivitiesByUserDocument;
    
  }
export const AddExecutiveManagementActivityDocument = gql`
    mutation addExecutiveManagementActivity($activity: ExecutiveManagementActivityInput) {
  addExecutiveManagementActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AddExecutiveManagementActivityGQL extends Apollo.Mutation<AddExecutiveManagementActivityMutation, AddExecutiveManagementActivityMutationVariables> {
    document = AddExecutiveManagementActivityDocument;
    
  }
export const EditExecutiveManagementActivityDocument = gql`
    mutation editExecutiveManagementActivity($activity: ExecutiveManagementActivityInput) {
  editExecutiveManagementActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class EditExecutiveManagementActivityGQL extends Apollo.Mutation<EditExecutiveManagementActivityMutation, EditExecutiveManagementActivityMutationVariables> {
    document = EditExecutiveManagementActivityDocument;
    
  }
export const DeleteExecutiveManagementActivityDocument = gql`
    mutation deleteExecutiveManagementActivity($activity: ExecutiveManagementActivityInput) {
  deleteExecutiveManagementActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class DeleteExecutiveManagementActivityGQL extends Apollo.Mutation<DeleteExecutiveManagementActivityMutation, DeleteExecutiveManagementActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class ExecutiveManagementActivityGQL extends Apollo.Query<ExecutiveManagementActivityQuery, ExecutiveManagementActivityQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class ExecutiveManagementActivitiesGQL extends Apollo.Query<ExecutiveManagementActivitiesQuery, ExecutiveManagementActivitiesQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class ExecutiveManagementActivitiesByUserGQL extends Apollo.Query<ExecutiveManagementActivitiesByUserQuery, ExecutiveManagementActivitiesByUserQueryVariables> {
    document = ExecutiveManagementActivitiesByUserDocument;
    
  }
export const AddFormalInstructionActivityDocument = gql`
    mutation addFormalInstructionActivity($activity: FormalInstructionActivityInput) {
  addFormalInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddFormalInstructionActivityGQL extends Apollo.Mutation<AddFormalInstructionActivityMutation, AddFormalInstructionActivityMutationVariables> {
    document = AddFormalInstructionActivityDocument;
    
  }
export const EditFormalInstructionActivityDocument = gql`
    mutation editFormalInstructionActivity($activity: FormalInstructionActivityInput) {
  editFormalInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditFormalInstructionActivityGQL extends Apollo.Mutation<EditFormalInstructionActivityMutation, EditFormalInstructionActivityMutationVariables> {
    document = EditFormalInstructionActivityDocument;
    
  }
export const DeleteFormalInstructionActivityDocument = gql`
    mutation deleteFormalInstructionActivity($activity: FormalInstructionActivityInput) {
  deleteFormalInstructionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteFormalInstructionActivityGQL extends Apollo.Mutation<DeleteFormalInstructionActivityMutation, DeleteFormalInstructionActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddSupervisionActivityGQL extends Apollo.Mutation<AddSupervisionActivityMutation, AddSupervisionActivityMutationVariables> {
    document = AddSupervisionActivityDocument;
    
  }
export const EditSupervisionActivityDocument = gql`
    mutation editSupervisionActivity($activity: SupervisionActivityInput) {
  editSupervisionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditSupervisionActivityGQL extends Apollo.Mutation<EditSupervisionActivityMutation, EditSupervisionActivityMutationVariables> {
    document = EditSupervisionActivityDocument;
    
  }
export const DeleteSupervisionActivityDocument = gql`
    mutation deleteSupervisionActivity($activity: SupervisionActivityInput) {
  deleteSupervisionActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteSupervisionActivityGQL extends Apollo.Mutation<DeleteSupervisionActivityMutation, DeleteSupervisionActivityMutationVariables> {
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
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FormalInstructionActivityGQL extends Apollo.Query<FormalInstructionActivityQuery, FormalInstructionActivityQueryVariables> {
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
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FormalInstructionActivitiesGQL extends Apollo.Query<FormalInstructionActivitiesQuery, FormalInstructionActivitiesQueryVariables> {
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
      disciplineIds
      disciplines {
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
      departmentId
      department {
        departmentId
        name
        facultyId
        faculty {
          facultyId
          name
        }
        hodId
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
    groupId
    group {
      id
      groupId
      moduleId
      module {
        id
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      modularity
    }
    isCoordinator
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FormalInstructionActivitiesByUserGQL extends Apollo.Query<FormalInstructionActivitiesByUserQuery, FormalInstructionActivitiesByUserQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SupervisionActivityGQL extends Apollo.Query<SupervisionActivityQuery, SupervisionActivityQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SupervisionActivitiesGQL extends Apollo.Query<SupervisionActivitiesQuery, SupervisionActivitiesQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    year
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
      type
      title
      graduationDate
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SupervisionActivitiesByUserGQL extends Apollo.Query<SupervisionActivitiesByUserQuery, SupervisionActivitiesByUserQueryVariables> {
    document = SupervisionActivitiesByUserDocument;
    
  }
export const AddPersonnelDevelopmentActivityDocument = gql`
    mutation addPersonnelDevelopmentActivity($activity: PersonnelDevelopmentActivityInput) {
  addPersonnelDevelopmentActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddPersonnelDevelopmentActivityGQL extends Apollo.Mutation<AddPersonnelDevelopmentActivityMutation, AddPersonnelDevelopmentActivityMutationVariables> {
    document = AddPersonnelDevelopmentActivityDocument;
    
  }
export const EditPersonnelDevelopmentActivityDocument = gql`
    mutation editPersonnelDevelopmentActivity($activity: PersonnelDevelopmentActivityInput) {
  editPersonnelDevelopmentActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditPersonnelDevelopmentActivityGQL extends Apollo.Mutation<EditPersonnelDevelopmentActivityMutation, EditPersonnelDevelopmentActivityMutationVariables> {
    document = EditPersonnelDevelopmentActivityDocument;
    
  }
export const DeletePersonnelDevelopmentActivityDocument = gql`
    mutation deletePersonnelDevelopmentActivity($activity: PersonnelDevelopmentActivityInput) {
  deletePersonnelDevelopmentActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeletePersonnelDevelopmentActivityGQL extends Apollo.Mutation<DeletePersonnelDevelopmentActivityMutation, DeletePersonnelDevelopmentActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelDevelopmentActivityGQL extends Apollo.Query<PersonnelDevelopmentActivityQuery, PersonnelDevelopmentActivityQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelDevelopmentActivitiesGQL extends Apollo.Query<PersonnelDevelopmentActivitiesQuery, PersonnelDevelopmentActivitiesQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    date
    duration
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelDevelopmentActivitiesByUserGQL extends Apollo.Query<PersonnelDevelopmentActivitiesByUserQuery, PersonnelDevelopmentActivitiesByUserQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AddPublicServiceActivityGQL extends Apollo.Mutation<AddPublicServiceActivityMutation, AddPublicServiceActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class EditPublicServiceActivityGQL extends Apollo.Mutation<EditPublicServiceActivityMutation, EditPublicServiceActivityMutationVariables> {
    document = EditPublicServiceActivityDocument;
    
  }
export const DeletePublicServiceActivityDocument = gql`
    mutation deletePublicServiceActivity($activity: PublicServiceActivityInput) {
  deletePublicServiceActivity(activity: $activity) {
    activityId
    userId
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class DeletePublicServiceActivityGQL extends Apollo.Mutation<DeletePublicServiceActivityMutation, DeletePublicServiceActivityMutationVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class PublicServiceActivityGQL extends Apollo.Query<PublicServiceActivityQuery, PublicServiceActivityQueryVariables> {
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
      photoUrl
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class PublicServiceActivitiesGQL extends Apollo.Query<PublicServiceActivitiesQuery, PublicServiceActivitiesQueryVariables> {
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
    providedIn: 'root'
  })
  export class PublicServiceActivitiesByUserGQL extends Apollo.Query<PublicServiceActivitiesByUserQuery, PublicServiceActivitiesByUserQueryVariables> {
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
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class AddResearchActivityGQL extends Apollo.Mutation<AddResearchActivityMutation, AddResearchActivityMutationVariables> {
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
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class EditResearchActivityGQL extends Apollo.Mutation<EditResearchActivityMutation, EditResearchActivityMutationVariables> {
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
      disciplineIds
      disciplines {
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
    providedIn: 'root'
  })
  export class DeleteResearchActivityGQL extends Apollo.Mutation<DeleteResearchActivityMutation, DeleteResearchActivityMutationVariables> {
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
      disciplineIds
      disciplines {
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
    conferenceActivities
    authors
    url
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchActivityGQL extends Apollo.Query<ResearchActivityQuery, ResearchActivityQueryVariables> {
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
      disciplineIds
      disciplines {
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
    conferenceActivities
    authors
    url
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchActivitiesGQL extends Apollo.Query<ResearchActivitiesQuery, ResearchActivitiesQueryVariables> {
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
      disciplineIds
      disciplines {
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
    conferenceActivities
    authors
    url
    evidence
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchActivitiesByUserGQL extends Apollo.Query<ResearchActivitiesByUserQuery, ResearchActivitiesByUserQueryVariables> {
    document = ResearchActivitiesByUserDocument;
    
  }
export const ChangePasswordDocument = gql`
    mutation changePassword($userId: String!, $password: String!, $newPassword: String!) {
  changePassword(userId: $userId, password: $password, newPassword: $newPassword)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ChangePasswordGQL extends Apollo.Mutation<ChangePasswordMutation, ChangePasswordMutationVariables> {
    document = ChangePasswordDocument;
    
  }
export const LoginDocument = gql`
    query login($userId: String!, $password: String!) {
  login(userId: $userId, password: $password) {
    userId
    token
    tokenExpiration
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class LoginGQL extends Apollo.Query<LoginQuery, LoginQueryVariables> {
    document = LoginDocument;
    
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
    providedIn: 'root'
  })
  export class AddBlockGQL extends Apollo.Mutation<AddBlockMutation, AddBlockMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditBlockGQL extends Apollo.Mutation<EditBlockMutation, EditBlockMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteBlockGQL extends Apollo.Mutation<DeleteBlockMutation, DeleteBlockMutationVariables> {
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
    providedIn: 'root'
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
    providedIn: 'root'
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
    providedIn: 'root'
  })
  export class AddDepartmentGQL extends Apollo.Mutation<AddDepartmentMutation, AddDepartmentMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditDepartmentGQL extends Apollo.Mutation<EditDepartmentMutation, EditDepartmentMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteDepartmentGQL extends Apollo.Mutation<DeleteDepartmentMutation, DeleteDepartmentMutationVariables> {
    document = DeleteDepartmentDocument;
    
  }
export const DepartmentDocument = gql`
    query department($departmentId: String!) {
  department(departmentId: $departmentId) {
    departmentId
    name
    facultyId
    faculty {
      facultyId
      name
    }
    hodId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DepartmentGQL extends Apollo.Query<DepartmentQuery, DepartmentQueryVariables> {
    document = DepartmentDocument;
    
  }
export const DepartmentsDocument = gql`
    query departments {
  departments {
    departmentId
    name
    facultyId
    faculty {
      facultyId
      name
    }
    hodId
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DepartmentsGQL extends Apollo.Query<DepartmentsQuery, DepartmentsQueryVariables> {
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
    providedIn: 'root'
  })
  export class AddDisciplineGQL extends Apollo.Mutation<AddDisciplineMutation, AddDisciplineMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditDisciplineGQL extends Apollo.Mutation<EditDisciplineMutation, EditDisciplineMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteDisciplineGQL extends Apollo.Mutation<DeleteDisciplineMutation, DeleteDisciplineMutationVariables> {
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
    providedIn: 'root'
  })
  export class DisciplineGQL extends Apollo.Query<DisciplineQuery, DisciplineQueryVariables> {
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
    providedIn: 'root'
  })
  export class DisciplinesGQL extends Apollo.Query<DisciplinesQuery, DisciplinesQueryVariables> {
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
    providedIn: 'root'
  })
  export class AddDutyGQL extends Apollo.Mutation<AddDutyMutation, AddDutyMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditDutyGQL extends Apollo.Mutation<EditDutyMutation, EditDutyMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteDutyGQL extends Apollo.Mutation<DeleteDutyMutation, DeleteDutyMutationVariables> {
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
    providedIn: 'root'
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
    providedIn: 'root'
  })
  export class DutiesGQL extends Apollo.Query<DutiesQuery, DutiesQueryVariables> {
    document = DutiesDocument;
    
  }
export const AddEnrollmentDocument = gql`
    mutation addEnrollment($enrollment: EnrollmentInput!) {
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
    providedIn: 'root'
  })
  export class AddEnrollmentGQL extends Apollo.Mutation<AddEnrollmentMutation, AddEnrollmentMutationVariables> {
    document = AddEnrollmentDocument;
    
  }
export const EditEnrollmentDocument = gql`
    mutation editEnrollment($enrollment: EnrollmentInput!) {
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
    providedIn: 'root'
  })
  export class EditEnrollmentGQL extends Apollo.Mutation<EditEnrollmentMutation, EditEnrollmentMutationVariables> {
    document = EditEnrollmentDocument;
    
  }
export const DeleteEnrollmentDocument = gql`
    mutation deleteEnrollment($enrollment: EnrollmentInput!) {
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
    providedIn: 'root'
  })
  export class DeleteEnrollmentGQL extends Apollo.Mutation<DeleteEnrollmentMutation, DeleteEnrollmentMutationVariables> {
    document = DeleteEnrollmentDocument;
    
  }
export const EnrollmentDocument = gql`
    query enrollment($id: String!) {
  enrollment(id: $id) {
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
    providedIn: 'root'
  })
  export class EnrollmentGQL extends Apollo.Query<EnrollmentQuery, EnrollmentQueryVariables> {
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
    providedIn: 'root'
  })
  export class EnrollmentsGQL extends Apollo.Query<EnrollmentsQuery, EnrollmentsQueryVariables> {
    document = EnrollmentsDocument;
    
  }
export const EnrollmentsByQualificationDocument = gql`
    query enrollmentsByQualification($qualificationId: String!) {
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
    providedIn: 'root'
  })
  export class EnrollmentsByQualificationGQL extends Apollo.Query<EnrollmentsByQualificationQuery, EnrollmentsByQualificationQueryVariables> {
    document = EnrollmentsByQualificationDocument;
    
  }
export const EnrollmentsByYearDocument = gql`
    query enrollmentsByYear($enrollmentYear: String!) {
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
    providedIn: 'root'
  })
  export class EnrollmentsByYearGQL extends Apollo.Query<EnrollmentsByYearQuery, EnrollmentsByYearQueryVariables> {
    document = EnrollmentsByYearDocument;
    
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
    providedIn: 'root'
  })
  export class AddFacultyGQL extends Apollo.Mutation<AddFacultyMutation, AddFacultyMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditFacultyGQL extends Apollo.Mutation<EditFacultyMutation, EditFacultyMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteFacultyGQL extends Apollo.Mutation<DeleteFacultyMutation, DeleteFacultyMutationVariables> {
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
    providedIn: 'root'
  })
  export class FacultyGQL extends Apollo.Query<FacultyQuery, FacultyQueryVariables> {
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
    providedIn: 'root'
  })
  export class FacultiesGQL extends Apollo.Query<FacultiesQuery, FacultiesQueryVariables> {
    document = FacultiesDocument;
    
  }
export const CreateGroupDocument = gql`
    mutation createGroup($group: GroupInput!) {
  createGroup(group: $group) {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CreateGroupGQL extends Apollo.Mutation<CreateGroupMutation, CreateGroupMutationVariables> {
    document = CreateGroupDocument;
    
  }
export const UpdateGroupDocument = gql`
    mutation updateGroup($group: GroupInput!) {
  updateGroup(group: $group) {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpdateGroupGQL extends Apollo.Mutation<UpdateGroupMutation, UpdateGroupMutationVariables> {
    document = UpdateGroupDocument;
    
  }
export const DeleteGroupDocument = gql`
    mutation deleteGroup($group: GroupInput!) {
  deleteGroup(group: $group) {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteGroupGQL extends Apollo.Mutation<DeleteGroupMutation, DeleteGroupMutationVariables> {
    document = DeleteGroupDocument;
    
  }
export const GroupDocument = gql`
    query group($id: String!) {
  group(id: $id) {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GroupGQL extends Apollo.Query<GroupQuery, GroupQueryVariables> {
    document = GroupDocument;
    
  }
export const GroupsDocument = gql`
    query groups {
  groups {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GroupsGQL extends Apollo.Query<GroupsQuery, GroupsQueryVariables> {
    document = GroupsDocument;
    
  }
export const GroupsByModuleDocument = gql`
    query groupsByModule($moduleId: String!) {
  groupsByModule(moduleId: $moduleId) {
    id
    groupId
    moduleId
    module {
      id
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
          hodId
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
      stackId
      studyPeriod
      lecturedBy
      studentsEnrolled
      moderation
    }
    studentsEnrolled
    modularity
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GroupsByModuleGQL extends Apollo.Query<GroupsByModuleQuery, GroupsByModuleQueryVariables> {
    document = GroupsByModuleDocument;
    
  }
export const GroupTotalDocument = gql`
    query groupTotal($moduleId: String!) {
  groupTotal(moduleId: $moduleId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GroupTotalGQL extends Apollo.Query<GroupTotalQuery, GroupTotalQueryVariables> {
    document = GroupTotalDocument;
    
  }
export const RemainingStudentsDocument = gql`
    query remainingStudents($moduleId: String!) {
  remainingStudents(moduleId: $moduleId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class RemainingStudentsGQL extends Apollo.Query<RemainingStudentsQuery, RemainingStudentsQueryVariables> {
    document = RemainingStudentsDocument;
    
  }
export const GroupExistsDocument = gql`
    query groupExists($groupId: String!, $moduleId: String!) {
  groupExists(groupId: $groupId, moduleId: $moduleId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GroupExistsGQL extends Apollo.Query<GroupExistsQuery, GroupExistsQueryVariables> {
    document = GroupExistsDocument;
    
  }
export const AddModuleDocument = gql`
    mutation addModule($module: ModuleInput!) {
  addModule(module: $module) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddModuleGQL extends Apollo.Mutation<AddModuleMutation, AddModuleMutationVariables> {
    document = AddModuleDocument;
    
  }
export const AddModulesDocument = gql`
    mutation addModules($modules: [ModuleInput!]!) {
  addModules(modules: $modules) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddModulesGQL extends Apollo.Mutation<AddModulesMutation, AddModulesMutationVariables> {
    document = AddModulesDocument;
    
  }
export const EditModuleDocument = gql`
    mutation editModule($module: ModuleInput!) {
  editModule(module: $module) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditModuleGQL extends Apollo.Mutation<EditModuleMutation, EditModuleMutationVariables> {
    document = EditModuleDocument;
    
  }
export const DeleteModuleDocument = gql`
    mutation deleteModule($module: ModuleInput!) {
  deleteModule(module: $module) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteModuleGQL extends Apollo.Mutation<DeleteModuleMutation, DeleteModuleMutationVariables> {
    document = DeleteModuleDocument;
    
  }
export const StackModulesDocument = gql`
    mutation stackModules($ids: [String!]!) {
  stackModules(ids: $ids) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StackModulesGQL extends Apollo.Mutation<StackModulesMutation, StackModulesMutationVariables> {
    document = StackModulesDocument;
    
  }
export const AddModuleToStackDocument = gql`
    mutation addModuleToStack($id: String!, $stackId: String) {
  addModuleToStack(id: $id, stackId: $stackId) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddModuleToStackGQL extends Apollo.Mutation<AddModuleToStackMutation, AddModuleToStackMutationVariables> {
    document = AddModuleToStackDocument;
    
  }
export const UnstackModuleDocument = gql`
    mutation unstackModule($id: String!) {
  unstackModule(id: $id) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnstackModuleGQL extends Apollo.Mutation<UnstackModuleMutation, UnstackModuleMutationVariables> {
    document = UnstackModuleDocument;
    
  }
export const ModuleDocument = gql`
    query module($id: String!) {
  module(id: $id) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModuleGQL extends Apollo.Query<ModuleQuery, ModuleQueryVariables> {
    document = ModuleDocument;
    
  }
export const ModulesDocument = gql`
    query modules {
  modules {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModulesGQL extends Apollo.Query<ModulesQuery, ModulesQueryVariables> {
    document = ModulesDocument;
    
  }
export const ModulesByDisciplineDocument = gql`
    query modulesByDiscipline($disciplineIds: [String!]!) {
  modulesByDiscipline(disciplineIds: $disciplineIds) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModulesByDisciplineGQL extends Apollo.Query<ModulesByDisciplineQuery, ModulesByDisciplineQueryVariables> {
    document = ModulesByDisciplineDocument;
    
  }
export const ModulesByStackDocument = gql`
    query modulesByStack($stackId: String!) {
  modulesByStack(stackId: $stackId) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModulesByStackGQL extends Apollo.Query<ModulesByStackQuery, ModulesByStackQueryVariables> {
    document = ModulesByStackDocument;
    
  }
export const ModulesByDepartmentDocument = gql`
    query modulesByDepartment($departmentId: String!) {
  modulesByDepartment(departmentId: $departmentId) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ModulesByDepartmentGQL extends Apollo.Query<ModulesByDepartmentQuery, ModulesByDepartmentQueryVariables> {
    document = ModulesByDepartmentDocument;
    
  }
export const StackedWithDocument = gql`
    query stackedWith($id: String!, $stackId: String) {
  stackedWith(id: $id, stackId: $stackId) {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StackedWithGQL extends Apollo.Query<StackedWithQuery, StackedWithQueryVariables> {
    document = StackedWithDocument;
    
  }
export const UnstackedModulesDocument = gql`
    query unstackedModules {
  unstackedModules {
    id
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
        hodId
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
    stackId
    studyPeriod
    lecturedBy
    studentsEnrolled
    moderation
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UnstackedModulesGQL extends Apollo.Query<UnstackedModulesQuery, UnstackedModulesQueryVariables> {
    document = UnstackedModulesDocument;
    
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
    providedIn: 'root'
  })
  export class AddOfferingTypeGQL extends Apollo.Mutation<AddOfferingTypeMutation, AddOfferingTypeMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditOfferingTypeGQL extends Apollo.Mutation<EditOfferingTypeMutation, EditOfferingTypeMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteOfferingTypeGQL extends Apollo.Mutation<DeleteOfferingTypeMutation, DeleteOfferingTypeMutationVariables> {
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
    providedIn: 'root'
  })
  export class OfferingTypeGQL extends Apollo.Query<OfferingTypeQuery, OfferingTypeQueryVariables> {
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
    providedIn: 'root'
  })
  export class OfferingTypesGQL extends Apollo.Query<OfferingTypesQuery, OfferingTypesQueryVariables> {
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
    providedIn: 'root'
  })
  export class AddPositionGQL extends Apollo.Mutation<AddPositionMutation, AddPositionMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditPositionGQL extends Apollo.Mutation<EditPositionMutation, EditPositionMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeletePositionGQL extends Apollo.Mutation<DeletePositionMutation, DeletePositionMutationVariables> {
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
    providedIn: 'root'
  })
  export class PositionGQL extends Apollo.Query<PositionQuery, PositionQueryVariables> {
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
    providedIn: 'root'
  })
  export class PositionsGQL extends Apollo.Query<PositionsQuery, PositionsQueryVariables> {
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
      facultyId
      faculty {
        facultyId
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddQualificationGQL extends Apollo.Mutation<AddQualificationMutation, AddQualificationMutationVariables> {
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
      facultyId
      faculty {
        facultyId
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditQualificationGQL extends Apollo.Mutation<EditQualificationMutation, EditQualificationMutationVariables> {
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
      facultyId
      faculty {
        facultyId
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteQualificationGQL extends Apollo.Mutation<DeleteQualificationMutation, DeleteQualificationMutationVariables> {
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
      facultyId
      faculty {
        facultyId
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QualificationGQL extends Apollo.Query<QualificationQuery, QualificationQueryVariables> {
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
      facultyId
      faculty {
        facultyId
        name
      }
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QualificationsGQL extends Apollo.Query<QualificationsQuery, QualificationsQueryVariables> {
    document = QualificationsDocument;
    
  }
export const QualificationsPostgraduateDocument = gql`
    query qualificationsPostgraduate {
  qualifications {
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
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QualificationsPostgraduateGQL extends Apollo.Query<QualificationsPostgraduateQuery, QualificationsPostgraduateQueryVariables> {
    document = QualificationsPostgraduateDocument;
    
  }
export const QualificationsUnenrolledDocument = gql`
    query qualificationsUnenrolled {
  qualificationsUnenrolled {
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
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class QualificationsUnenrolledGQL extends Apollo.Query<QualificationsUnenrolledQuery, QualificationsUnenrolledQueryVariables> {
    document = QualificationsUnenrolledDocument;
    
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AddStudentGQL extends Apollo.Mutation<AddStudentMutation, AddStudentMutationVariables> {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class EditStudentGQL extends Apollo.Mutation<EditStudentMutation, EditStudentMutationVariables> {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class DeleteStudentGQL extends Apollo.Mutation<DeleteStudentMutation, DeleteStudentMutationVariables> {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StudentGQL extends Apollo.Query<StudentQuery, StudentQueryVariables> {
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
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StudentsGQL extends Apollo.Query<StudentsQuery, StudentsQueryVariables> {
    document = StudentsDocument;
    
  }
export const StudentsUnassignedDocument = gql`
    query studentsUnassigned($userId: String!) {
  studentsUnassigned(userId: $userId) {
    studentId
    email
    firstName
    lastName
    type
    title
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class StudentsUnassignedGQL extends Apollo.Query<StudentsUnassignedQuery, StudentsUnassignedQueryVariables> {
    document = StudentsUnassignedDocument;
    
  }
export const UploadlProfilePictureDocument = gql`
    mutation uploadlProfilePicture($file: Upload!, $userId: String!) {
  uploadProfilePicture(file: $file, userId: $userId) {
    location
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadlProfilePictureGQL extends Apollo.Mutation<UploadlProfilePictureMutation, UploadlProfilePictureMutationVariables> {
    document = UploadlProfilePictureDocument;
    
  }
export const UploadAcademicAdministrationEvidenceAwsDocument = gql`
    mutation uploadAcademicAdministrationEvidenceAWS($file: Upload!, $userId: String!, $activityId: String!) {
  uploadAcademicAdministrationEvidenceAWS(file: $file, userId: $userId, activityId: $activityId) {
    location
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadAcademicAdministrationEvidenceAwsGQL extends Apollo.Mutation<UploadAcademicAdministrationEvidenceAwsMutation, UploadAcademicAdministrationEvidenceAwsMutationVariables> {
    document = UploadAcademicAdministrationEvidenceAwsDocument;
    
  }
export const UploadResearchEvidenceAwsDocument = gql`
    mutation uploadResearchEvidenceAWS($file: Upload!, $userId: String!, $activityId: String!) {
  uploadResearchEvidenceAWS(file: $file, userId: $userId, activityId: $activityId) {
    location
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UploadResearchEvidenceAwsGQL extends Apollo.Mutation<UploadResearchEvidenceAwsMutation, UploadResearchEvidenceAwsMutationVariables> {
    document = UploadResearchEvidenceAwsDocument;
    
  }
export const AddUserDocument = gql`
    mutation addUser($user: UserInput) {
  addUser(user: $user) {
    userId
    email
    firstName
    lastName
    photoUrl
    disciplineIds
    disciplines {
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
    providedIn: 'root'
  })
  export class AddUserGQL extends Apollo.Mutation<AddUserMutation, AddUserMutationVariables> {
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
    disciplineIds
    disciplines {
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
    providedIn: 'root'
  })
  export class EditUserGQL extends Apollo.Mutation<EditUserMutation, EditUserMutationVariables> {
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
    disciplineIds
    disciplines {
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
    providedIn: 'root'
  })
  export class DeleteUserGQL extends Apollo.Mutation<DeleteUserMutation, DeleteUserMutationVariables> {
    document = DeleteUserDocument;
    
  }
export const UserDocument = gql`
    query user($userId: String!) {
  user(userId: $userId) {
    userId
    email
    firstName
    lastName
    photoUrl
    disciplineIds
    disciplines {
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
    providedIn: 'root'
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
    disciplineIds
    disciplines {
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
    providedIn: 'root'
  })
  export class UsersGQL extends Apollo.Query<UsersQuery, UsersQueryVariables> {
    document = UsersDocument;
    
  }
export const UsersByPositionDocument = gql`
    query usersByPosition {
  usersByPosition {
    userId
    email
    firstName
    lastName
    photoUrl
    disciplineIds
    disciplines {
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
    providedIn: 'root'
  })
  export class UsersByPositionGQL extends Apollo.Query<UsersByPositionQuery, UsersByPositionQueryVariables> {
    document = UsersByPositionDocument;
    
  }
export const UserExistsDocument = gql`
    query userExists($userId: String!) {
  userExists(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UserExistsGQL extends Apollo.Query<UserExistsQuery, UserExistsQueryVariables> {
    document = UserExistsDocument;
    
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
    providedIn: 'root'
  })
  export class AddVenueGQL extends Apollo.Mutation<AddVenueMutation, AddVenueMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditVenueGQL extends Apollo.Mutation<EditVenueMutation, EditVenueMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteVenueGQL extends Apollo.Mutation<DeleteVenueMutation, DeleteVenueMutationVariables> {
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
    providedIn: 'root'
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
    providedIn: 'root'
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
    providedIn: 'root'
  })
  export class AddWorkFocusGQL extends Apollo.Mutation<AddWorkFocusMutation, AddWorkFocusMutationVariables> {
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
    providedIn: 'root'
  })
  export class EditWorkFocusGQL extends Apollo.Mutation<EditWorkFocusMutation, EditWorkFocusMutationVariables> {
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
    providedIn: 'root'
  })
  export class DeleteWorkFocusGQL extends Apollo.Mutation<DeleteWorkFocusMutation, DeleteWorkFocusMutationVariables> {
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
    providedIn: 'root'
  })
  export class WorkFocusGQL extends Apollo.Query<WorkFocusQuery, WorkFocusQueryVariables> {
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
    providedIn: 'root'
  })
  export class WorkFocusesGQL extends Apollo.Query<WorkFocusesQuery, WorkFocusesQueryVariables> {
    document = WorkFocusesDocument;
    
  }
export const TeachingHoursDocument = gql`
    query teachingHours($userId: String!) {
  teachingHours(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TeachingHoursGQL extends Apollo.Query<TeachingHoursQuery, TeachingHoursQueryVariables> {
    document = TeachingHoursDocument;
    
  }
export const ResearchHoursDocument = gql`
    query researchHours($userId: String!) {
  researchHours(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchHoursGQL extends Apollo.Query<ResearchHoursQuery, ResearchHoursQueryVariables> {
    document = ResearchHoursDocument;
    
  }
export const ServiceHoursDocument = gql`
    query serviceHours($userId: String!) {
  serviceHours(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceHoursGQL extends Apollo.Query<ServiceHoursQuery, ServiceHoursQueryVariables> {
    document = ServiceHoursDocument;
    
  }
export const AnnualHoursDocument = gql`
    query annualHours {
  annualHours
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AnnualHoursGQL extends Apollo.Query<AnnualHoursQuery, AnnualHoursQueryVariables> {
    document = AnnualHoursDocument;
    
  }
export const AcademicAdministrationWorkloadDocument = gql`
    query academicAdministrationWorkload($userId: String) {
  academicAdministrationWorkload(userId: $userId) {
    academicAdministrationWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class AcademicAdministrationWorkloadGQL extends Apollo.Query<AcademicAdministrationWorkloadQuery, AcademicAdministrationWorkloadQueryVariables> {
    document = AcademicAdministrationWorkloadDocument;
    
  }
export const CommunityInstructionWorkloadDocument = gql`
    query communityInstructionWorkload($userId: String) {
  communityInstructionWorkload(userId: $userId) {
    communityInstructionWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class CommunityInstructionWorkloadGQL extends Apollo.Query<CommunityInstructionWorkloadQuery, CommunityInstructionWorkloadQueryVariables> {
    document = CommunityInstructionWorkloadDocument;
    
  }
export const ExecutiveManagementWorkloadDocument = gql`
    query executiveManagementWorkload($userId: String) {
  executiveManagementWorkload(userId: $userId) {
    executiveManagementWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ExecutiveManagementWorkloadGQL extends Apollo.Query<ExecutiveManagementWorkloadQuery, ExecutiveManagementWorkloadQueryVariables> {
    document = ExecutiveManagementWorkloadDocument;
    
  }
export const FormalInstructionWorkloadDocument = gql`
    query formalInstructionWorkload($userId: String) {
  formalInstructionWorkload(userId: $userId) {
    formalInstructionWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
          departmentId
          department {
            departmentId
            name
            facultyId
            faculty {
              facultyId
              name
            }
            hodId
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
        groupId
        group {
          id
          groupId
          moduleId
          module {
            id
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
                hodId
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
            stackId
            studyPeriod
            lecturedBy
            studentsEnrolled
            moderation
          }
          studentsEnrolled
          modularity
        }
        isCoordinator
      }
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
            hodId
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
        stackId
        studyPeriod
        lecturedBy
        studentsEnrolled
        moderation
      }
      studentsEnrolled
      baseContactHours
      coordinationHours
      studentSupportHours
      preparationTimeHours
      assessmentSettingHours
      examMarkingHours
      courseworkMarkingHours
      feedbackHours
      formativeAssessmentHours
      moderationHours
      otherHoursPerActivity
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class FormalInstructionWorkloadGQL extends Apollo.Query<FormalInstructionWorkloadQuery, FormalInstructionWorkloadQueryVariables> {
    document = FormalInstructionWorkloadDocument;
    
  }
export const PersonnelDevelopmentWorkloadDocument = gql`
    query personnelDevelopmentWorkload($userId: String) {
  personnelDevelopmentWorkload(userId: $userId) {
    personnelDevelopmentWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
        date
        duration
        evidence
      }
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PersonnelDevelopmentWorkloadGQL extends Apollo.Query<PersonnelDevelopmentWorkloadQuery, PersonnelDevelopmentWorkloadQueryVariables> {
    document = PersonnelDevelopmentWorkloadDocument;
    
  }
export const PublicServiceWorkloadDocument = gql`
    query publicServiceWorkload($userId: String) {
  publicServiceWorkload(userId: $userId) {
    publicServiceWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class PublicServiceWorkloadGQL extends Apollo.Query<PublicServiceWorkloadQuery, PublicServiceWorkloadQueryVariables> {
    document = PublicServiceWorkloadDocument;
    
  }
export const ResearchWorkloadDocument = gql`
    query researchWorkload($userId: String) {
  researchWorkload(userId: $userId) {
    researchWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    globalTarrif
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchWorkloadGQL extends Apollo.Query<ResearchWorkloadQuery, ResearchWorkloadQueryVariables> {
    document = ResearchWorkloadDocument;
    
  }
export const SupervisionWorkloadDocument = gql`
    query supervisionWorkload($userId: String) {
  supervisionWorkload(userId: $userId) {
    supervisionWorkloads {
      activity {
        activityId
        userId
        user {
          userId
          email
          firstName
          lastName
          photoUrl
          disciplineIds
          disciplines {
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
          departmentId
          department {
            departmentId
            name
            facultyId
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
        supervisionRole
        split
        studentId
        student {
          studentId
          firstName
          lastName
          email
          type
          title
          graduationDate
        }
      }
      totalHoursPerActivity
      percentageOfWorkFocusPerActivity
      percentageOfAnnualHoursPerActivity
      percentageOfTotalHoursPerActivity
    }
    totalHoursPerUser
    percentageOfWorkFocusPerUser
    percentageOfAnnualHoursPerUser
    percentageOfTotalHoursPerUser
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class SupervisionWorkloadGQL extends Apollo.Query<SupervisionWorkloadQuery, SupervisionWorkloadQueryVariables> {
    document = SupervisionWorkloadDocument;
    
  }
export const TotalHoursPerUserDocument = gql`
    query totalHoursPerUser($userId: String!) {
  totalHoursPerUser(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TotalHoursPerUserGQL extends Apollo.Query<TotalHoursPerUserQuery, TotalHoursPerUserQueryVariables> {
    document = TotalHoursPerUserDocument;
    
  }
export const TeachingHoursPerUserDocument = gql`
    query teachingHoursPerUser($userId: String!) {
  teachingHoursPerUser(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TeachingHoursPerUserGQL extends Apollo.Query<TeachingHoursPerUserQuery, TeachingHoursPerUserQueryVariables> {
    document = TeachingHoursPerUserDocument;
    
  }
export const ResearchHoursPerUserDocument = gql`
    query researchHoursPerUser($userId: String!) {
  researchHoursPerUser(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ResearchHoursPerUserGQL extends Apollo.Query<ResearchHoursPerUserQuery, ResearchHoursPerUserQueryVariables> {
    document = ResearchHoursPerUserDocument;
    
  }
export const ServiceHoursPerUserDocument = gql`
    query serviceHoursPerUser($userId: String!) {
  serviceHoursPerUser(userId: $userId)
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class ServiceHoursPerUserGQL extends Apollo.Query<ServiceHoursPerUserQuery, ServiceHoursPerUserQueryVariables> {
    document = ServiceHoursPerUserDocument;
    
  }
export const TotalWorkloadDocument = gql`
    query totalWorkload($userId: String!) {
  totalWorkload(userId: $userId) {
    academicAdministrationWorkload {
      academicAdministrationWorkloads {
        activity {
          activityId
          userId
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
              hodId
            }
          }
          description
          evidence
        }
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    communityInstructionWorkload {
      communityInstructionWorkloads {
        activity {
          activityId
          userId
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
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    executiveManagementWorkload {
      executiveManagementWorkloads {
        activity {
          activityId
          userId
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
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    formalInstructionWorkload {
      formalInstructionWorkloads {
        activity {
          activityId
          userId
          user {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineIds
            disciplines {
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
            departmentId
            department {
              departmentId
              name
              facultyId
              faculty {
                facultyId
                name
              }
              hodId
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
          groupId
          group {
            id
            groupId
            moduleId
            module {
              id
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
                  hodId
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
              stackId
              studyPeriod
              lecturedBy
              studentsEnrolled
              moderation
            }
            studentsEnrolled
            modularity
          }
          isCoordinator
        }
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
              hodId
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
          stackId
          studyPeriod
          lecturedBy
          studentsEnrolled
          moderation
        }
        studentsEnrolled
        baseContactHours
        coordinationHours
        studentSupportHours
        preparationTimeHours
        assessmentSettingHours
        examMarkingHours
        courseworkMarkingHours
        feedbackHours
        formativeAssessmentHours
        moderationHours
        otherHoursPerActivity
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    personnelDevelopmentWorkload {
      personnelDevelopmentWorkloads {
        activity {
          activityId
          userId
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
          date
          duration
          evidence
        }
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    publicServiceWorkload {
      publicServiceWorkloads {
        activity {
          activityId
          userId
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
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    researchWorkload {
      researchWorkloads {
        activity {
          activityId
          userId
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
          conferenceActivities
          authors
          url
          evidence
        }
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      globalTarrif
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
    supervisionWorkload {
      supervisionWorkloads {
        activity {
          activityId
          userId
          user {
            userId
            email
            firstName
            lastName
            photoUrl
            disciplineIds
            disciplines {
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
            departmentId
            department {
              departmentId
              name
              facultyId
              faculty {
                facultyId
                name
              }
              hodId
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
          supervisionRole
          split
          studentId
          student {
            studentId
            firstName
            lastName
            email
            type
            title
            graduationDate
          }
          year
        }
        totalHoursPerActivity
        percentageOfWorkFocusPerActivity
        percentageOfAnnualHoursPerActivity
        percentageOfTotalHoursPerActivity
      }
      totalHoursPerUser
      percentageOfWorkFocusPerUser
      percentageOfAnnualHoursPerUser
      percentageOfTotalHoursPerUser
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class TotalWorkloadGQL extends Apollo.Query<TotalWorkloadQuery, TotalWorkloadQueryVariables> {
    document = TotalWorkloadDocument;
    
  }
export const WorkloadSummariesDocument = gql`
    query workloadSummaries {
  workloadSummaries {
    user {
      userId
      email
      firstName
      lastName
      photoUrl
      disciplineIds
      disciplines {
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
    teachingHours
    teachingHoursPerUser
    teachingDifference
    researchHours
    researchHoursPerUser
    researchDifference
    serviceHours
    serviceHoursPerUser
    serviceDifference
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class WorkloadSummariesGQL extends Apollo.Query<WorkloadSummariesQuery, WorkloadSummariesQueryVariables> {
    document = WorkloadSummariesDocument;
    
  }