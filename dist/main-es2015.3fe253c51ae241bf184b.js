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
    `;let l=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=a}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const u=r.a`
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
    `;let c=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=u}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const d=r.a`
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
    `;let h=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=d}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const p=r.a`
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
    `;let f=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=p}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const m=r.a`
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
    `;let g=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=m}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const y=r.a`
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
    `;let v=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=y}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const _=r.a`
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
    `;let b=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=_}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const w=r.a`
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
    `;let I=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=w}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const k=r.a`
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
    `;let S=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=k}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const C=r.a`
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
    `;let M=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=C}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const D=r.a`
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
    `;let x=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=D}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const T=r.a`
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
    `;let E=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=T}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const L=r.a`
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
    `;let O=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=L}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const R=r.a`
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
    `;let j=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=R}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `;const A=r.a`
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
    `;let P=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=A}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const F=r.a`
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
    `;let N=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=F}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Y=r.a`
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
    `;let H=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Y}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const V=r.a`
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
    `;let B=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=V}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const z=r.a`
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
    `;let U=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=z}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const q=r.a`
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
    `;let W=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=q}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const $=r.a`
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
    `;let G=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=$}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const K=r.a`
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
    `;let Q=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=K}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const J=r.a`
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
    `;let Z=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=J}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const X=r.a`
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
    `;let ee=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=X}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const te=r.a`
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
    `;let ne=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=te}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ie=r.a`
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
    `;let re=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=ie}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const oe=r.a`
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
    `;let se=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=oe}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ae=r.a`
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
    `;let le=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ae}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ue=r.a`
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
    `;let ce=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ue}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const de=r.a`
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
    `;let he=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=de}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const pe=r.a`
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
    `;let fe=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=pe}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const me=r.a`
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
    `;let ge=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=me}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `,r.a`
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
    `;const ye=r.a`
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
    `;let ve=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ye}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const _e=r.a`
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
    `;let be=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=_e}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const we=r.a`
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
    `;let Ie=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=we}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ke=r.a`
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
    `;let Se=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=ke}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ce=r.a`
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
    `;let Me=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ce}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const De=r.a`
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
    `;let xe=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=De}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Te=r.a`
    mutation changePassword($userId: String!, $password: String!, $newPassword: String!) {
  changePassword(userId: $userId, password: $password, newPassword: $newPassword)
}
    `;let Ee=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Te}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Le=r.a`
    query login($userId: String!, $password: String!) {
  login(userId: $userId, password: $password) {
    userId
    token
    tokenExpiration
  }
}
    `;let Oe=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Le}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Re=r.a`
    mutation addBlock($block: BlockInput) {
  addBlock(block: $block) {
    blockId
    name
    description
  }
}
    `;let je=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Re}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ae=r.a`
    mutation editBlock($block: BlockInput) {
  editBlock(block: $block) {
    blockId
    name
    description
  }
}
    `;let Pe=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Ae}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Fe=r.a`
    mutation deleteBlock($block: BlockInput) {
  deleteBlock(block: $block) {
    blockId
    name
    description
  }
}
    `;let Ne=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Fe}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ye=r.a`
    query block($blockId: String!) {
  block(blockId: $blockId) {
    blockId
    name
    description
  }
}
    `;let He=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ye}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ve=r.a`
    query blocks {
  blocks {
    blockId
    name
    description
  }
}
    `;let Be=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ve}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ze=r.a`
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
    `;let Ue=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ze}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const qe=r.a`
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
    `;let We=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=qe}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const $e=r.a`
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
    `;let Ge=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=$e}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ke=r.a`
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
    `;let Qe=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ke}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Je=r.a`
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
    `;let Ze=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Je}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Xe=r.a`
    mutation addDiscipline($discipline: DisciplineInput) {
  addDiscipline(discipline: $discipline) {
    disciplineId
    name
    description
  }
}
    `;let et=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Xe}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const tt=r.a`
    mutation editDiscipline($discipline: DisciplineInput) {
  editDiscipline(discipline: $discipline) {
    disciplineId
    name
    description
  }
}
    `;let nt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=tt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const it=r.a`
    mutation deleteDiscipline($discipline: DisciplineInput) {
  deleteDiscipline(discipline: $discipline) {
    disciplineId
    name
    description
  }
}
    `;let rt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=it}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ot=r.a`
    query discipline($disciplineId: String!) {
  discipline(disciplineId: $disciplineId) {
    disciplineId
    name
    description
  }
}
    `;let st=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=ot}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const at=r.a`
    query disciplines {
  disciplines {
    disciplineId
    name
    description
  }
}
    `;let lt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=at}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ut=r.a`
    mutation addDuty($duty: DutyInput) {
  addDuty(duty: $duty) {
    dutyId
    name
    description
  }
}
    `;let ct=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ut}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const dt=r.a`
    mutation editDuty($duty: DutyInput) {
  editDuty(duty: $duty) {
    dutyId
    name
    description
  }
}
    `;let ht=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=dt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const pt=r.a`
    mutation deleteDuty($duty: DutyInput) {
  deleteDuty(duty: $duty) {
    dutyId
    name
    description
  }
}
    `;let ft=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=pt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const mt=r.a`
    query duty($dutyId: String!) {
  duty(dutyId: $dutyId) {
    dutyId
    name
    description
  }
}
    `;let gt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=mt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const yt=r.a`
    query duties {
  duties {
    dutyId
    name
    description
  }
}
    `;let vt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=yt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const _t=r.a`
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
    `;let bt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=_t}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const wt=r.a`
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
    `;let It=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=wt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const kt=r.a`
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
    `;let St=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=kt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ct=r.a`
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
    `;let Mt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ct}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Dt=r.a`
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
    `;let xt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Dt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Tt=r.a`
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
    `;let Et=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Tt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Lt=r.a`
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
    `;let Ot=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Lt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Rt=r.a`
    mutation addFaculty($faculty: FacultyInput) {
  addFaculty(faculty: $faculty) {
    facultyId
    name
  }
}
    `;let jt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Rt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const At=r.a`
    mutation editFaculty($faculty: FacultyInput) {
  addFaculty(faculty: $faculty) {
    facultyId
    name
  }
}
    `;let Pt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=At}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ft=r.a`
    mutation deleteFaculty($faculty: FacultyInput) {
  deleteFaculty(faculty: $faculty) {
    facultyId
    name
  }
}
    `;let Nt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Ft}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Yt=r.a`
    query faculty($facultyId: String!) {
  faculty(facultyId: $facultyId) {
    facultyId
    name
  }
}
    `;let Ht=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Yt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Vt=r.a`
    query faculties {
  faculties {
    facultyId
    name
  }
}
    `;let Bt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Vt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const zt=r.a`
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
    `;let Ut=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=zt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const qt=r.a`
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
    `;let Wt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=qt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const $t=r.a`
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
    `;let Gt=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=$t}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Kt=r.a`
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
    `;let Qt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Kt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Jt=r.a`
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
    `;let Zt=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Jt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Xt=r.a`
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
    `;let en=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Xt}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const tn=r.a`
    query groupTotal($moduleId: String!) {
  groupTotal(moduleId: $moduleId)
}
    `;let nn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=tn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const rn=r.a`
    query remainingStudents($moduleId: String!) {
  remainingStudents(moduleId: $moduleId)
}
    `;let on=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=rn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const sn=r.a`
    query groupExists($groupId: String!, $moduleId: String!) {
  groupExists(groupId: $groupId, moduleId: $moduleId)
}
    `;let an=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=sn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ln=r.a`
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
    `;let un=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ln}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const cn=r.a`
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
    `;let dn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=cn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const hn=r.a`
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
    `;let pn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=hn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const fn=r.a`
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
    `;let mn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=fn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const gn=r.a`
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
    `;let yn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=gn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const vn=r.a`
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
    `;let _n=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=vn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
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
    `;const bn=r.a`
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
    `;let wn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=bn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const In=r.a`
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
    `;let kn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=In}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Sn=r.a`
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
    `;let Cn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Sn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Mn=r.a`
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
    `;let Dn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Mn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
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
    `;const xn=r.a`
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
    `;let Tn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=xn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const En=r.a`
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
    `;let Ln=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=En}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const On=r.a`
    mutation addOfferingType($offeringType: OfferingTypeInput) {
  addOfferingType(offeringType: $offeringType) {
    offeringTypeId
    description
  }
}
    `;let Rn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=On}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const jn=r.a`
    mutation editOfferingType($offeringType: OfferingTypeInput) {
  editOfferingType(offeringType: $offeringType) {
    offeringTypeId
    description
  }
}
    `;let An=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=jn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Pn=r.a`
    mutation deleteOfferingType($offeringType: OfferingTypeInput) {
  deleteOfferingType(offeringType: $offeringType) {
    offeringTypeId
    description
  }
}
    `;let Fn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Pn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Nn=r.a`
    query offeringType($offeringTypeId: String!) {
  offeringType(offeringTypeId: $offeringTypeId) {
    offeringTypeId
    description
  }
}
    `;let Yn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Nn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Hn=r.a`
    query offeringTypes {
  offeringTypes {
    offeringTypeId
    description
  }
}
    `;let Vn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Hn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Bn=r.a`
    mutation addPosition($position: PositionInput) {
  addPosition(position: $position) {
    positionId
    name
    description
  }
}
    `;let zn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Bn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Un=r.a`
    mutation editPosition($position: PositionInput) {
  editPosition(position: $position) {
    positionId
    name
    description
  }
}
    `;let qn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Un}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Wn=r.a`
    mutation deletePosition($position: PositionInput) {
  deletePosition(position: $position) {
    positionId
    name
    description
  }
}
    `;let $n=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Wn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Gn=r.a`
    query position($positionId: String!) {
  position(positionId: $positionId) {
    positionId
    name
    description
  }
}
    `;let Kn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Gn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Qn=r.a`
    query positions {
  positions {
    positionId
    name
    description
  }
}
    `;let Jn=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Qn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Zn=r.a`
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
    `;let Xn=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Zn}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ei=r.a`
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
    `;let ti=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ei}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ni=r.a`
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
    `;let ii=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ni}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ri=r.a`
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
    `;let oi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=ri}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const si=r.a`
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
    `;let ai=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=si}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const li=r.a`
    query qualificationsPostgraduate {
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
    `;let ui=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=li}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ci=r.a`
    query qualificationsUnenrolled {
  qualificationsUnenrolled {
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
    `;let di=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=ci}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const hi=r.a`
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
    `;let pi=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=hi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const fi=r.a`
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
    `;let mi=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=fi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const gi=r.a`
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
    `;let yi=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=gi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const vi=r.a`
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
    `;let _i=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=vi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const bi=r.a`
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
    `;let wi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=bi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ii=r.a`
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
    `;let ki=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ii}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Si=r.a`
    mutation uploadlProfilePicture($file: Upload!, $userId: String!) {
  uploadProfilePicture(file: $file, userId: $userId) {
    location
  }
}
    `;let Ci=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Si}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Mi=r.a`
    mutation uploadAcademicAdministrationEvidenceAWS($file: Upload!, $userId: String!, $activityId: String!) {
  uploadAcademicAdministrationEvidenceAWS(file: $file, userId: $userId, activityId: $activityId) {
    location
  }
}
    `;let Di=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Mi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const xi=r.a`
    mutation uploadResearchEvidenceAWS($file: Upload!, $userId: String!, $activityId: String!) {
  uploadResearchEvidenceAWS(file: $file, userId: $userId, activityId: $activityId) {
    location
  }
}
    `;let Ti=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=xi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ei=r.a`
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
    `;let Li=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Ei}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Oi=r.a`
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
    `;let Ri=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Oi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const ji=r.a`
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
    `;let Ai=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=ji}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Pi=r.a`
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
    `;let Fi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Pi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ni=r.a`
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
    `;let Yi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ni}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Hi=r.a`
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
    `;let Vi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Hi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
    query userExists($userId: String!) {
  userExists(userId: $userId)
}
    `;const Bi=r.a`
    mutation addVenue($venue: VenueInput) {
  addVenue(venue: $venue) {
    venueId
    campus
    capacity
    type
  }
}
    `;let zi=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Bi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ui=r.a`
    mutation editVenue($venue: VenueInput) {
  editVenue(venue: $venue) {
    venueId
    campus
    capacity
    type
  }
}
    `;let qi=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Ui}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Wi=r.a`
    mutation deleteVenue($venue: VenueInput) {
  deleteVenue(venue: $venue) {
    venueId
    campus
    capacity
    type
  }
}
    `;let $i=(()=>{class e extends o.e{constructor(){super(...arguments),this.document=Wi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Gi=r.a`
    query venue($venueId: String!) {
  venue(venueId: $venueId) {
    venueId
    campus
    capacity
    type
  }
}
    `;let Ki=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Gi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Qi=r.a`
    query venues {
  venues {
    venueId
    campus
    capacity
    type
  }
}
    `;let Ji=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Qi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();r.a`
    mutation addWorkFocus($workFocus: WorkFocusInput) {
  addWorkFocus(workFocus: $workFocus) {
    name
    teachingRatio
    researchRatio
    serviceRatio
  }
}
    `,r.a`
    mutation editWorkFocus($workFocus: WorkFocusInput) {
  editWorkFocus(workFocus: $workFocus) {
    name
    teachingRatio
    researchRatio
    serviceRatio
  }
}
    `,r.a`
    mutation deleteWorkFocus($workFocus: WorkFocusInput) {
  deleteWorkFocus(workFocus: $workFocus) {
    name
    teachingRatio
    researchRatio
    serviceRatio
  }
}
    `;const Zi=r.a`
    query workFocus($name: String!) {
  workFocus(name: $name) {
    name
    teachingRatio
    researchRatio
    serviceRatio
  }
}
    `;let Xi=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Zi}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const er=r.a`
    query workFocuses {
  workFocuses {
    name
    teachingRatio
    researchRatio
    serviceRatio
  }
}
    `;let tr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=er}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const nr=r.a`
    query teachingHours($userId: String!) {
  teachingHours(userId: $userId)
}
    `;let ir=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=nr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const rr=r.a`
    query researchHours($userId: String!) {
  researchHours(userId: $userId)
}
    `;let or=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=rr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const sr=r.a`
    query serviceHours($userId: String!) {
  serviceHours(userId: $userId)
}
    `;let ar=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=sr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const lr=r.a`
    query annualHours {
  annualHours
}
    `;let ur=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=lr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const cr=r.a`
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
    `;let dr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=cr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const hr=r.a`
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
    `;let pr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=hr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const fr=r.a`
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
    `;let mr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=fr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const gr=r.a`
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
    `;let yr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=gr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const vr=r.a`
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
    `;let _r=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=vr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const br=r.a`
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
    `;let wr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=br}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Ir=r.a`
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
    `;let kr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Ir}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Sr=r.a`
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
    `;let Cr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Sr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Mr=r.a`
    query totalHoursPerUser($userId: String!) {
  totalHoursPerUser(userId: $userId)
}
    `;let Dr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Mr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const xr=r.a`
    query teachingHoursPerUser($userId: String!) {
  teachingHoursPerUser(userId: $userId)
}
    `;let Tr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=xr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Er=r.a`
    query researchHoursPerUser($userId: String!) {
  researchHoursPerUser(userId: $userId)
}
    `;let Lr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Er}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Or=r.a`
    query serviceHoursPerUser($userId: String!) {
  serviceHoursPerUser(userId: $userId)
}
    `;let Rr=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=Or}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const jr=r.a`
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
    `;let Ar=(()=>{class e extends o.f{constructor(){super(...arguments),this.document=jr}}return e.ngInjectableDef=s["\u0275\u0275defineInjectable"]({factory:function(){return new e(s["\u0275\u0275inject"](o.c))},token:e,providedIn:"root"}),e})();const Pr=r.a`
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