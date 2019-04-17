import { Qualification } from "./qualification.model";
import { OfferingType } from "./offering-type.model";
import { Discipline } from "./discipline.model";
import { Venue } from "./venue.model";
import { Block } from "./block.model";
import { User } from "./user.model";

export class Module {
    moduleId: string
      name: string
      type: string
      assessmentMethod: string
      nqfLevel: string
      qualificationId: string
      qualification: Qualification
      offeringTypeId: string
      offeringType: OfferingType
      disciplineId: string
      discipline: Discipline
      venueId: string
      venue: Venue
      blockIds: [string]
      blocks: [Block]
      userIds: [string]
      users: [User]
      stackId: string
}
