/* tslint:disable */
import {
  Activity
} from '../index';

declare var Object: any;
export interface CommInstructionInterface {
  "commInstructionId": string;
  "description": string;
  "activityId": string;
  "evidence": any;
  activity?: Activity;
}

export class CommInstruction implements CommInstructionInterface {
  "commInstructionId": string;
  "description": string;
  "activityId": string;
  "evidence": any;
  activity: Activity;
  constructor(data?: CommInstructionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `CommInstruction`.
   */
  public static getModelName() {
    return "CommInstruction";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of CommInstruction for dynamic purposes.
  **/
  public static factory(data: CommInstructionInterface): CommInstruction{
    return new CommInstruction(data);
  }
  /**
  * @method getModelDefinition
  * @author Julien Ledun
  * @license MIT
  * This method returns an object that represents some of the model
  * definitions.
  **/
  public static getModelDefinition() {
    return {
      name: 'CommInstruction',
      plural: 'CommInstructions',
      path: 'CommInstructions',
      idName: 'commInstructionId',
      properties: {
        "commInstructionId": {
          name: 'commInstructionId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "activityId": {
          name: 'activityId',
          type: 'string'
        },
        "evidence": {
          name: 'evidence',
          type: 'any'
        },
      },
      relations: {
        activity: {
          name: 'activity',
          type: 'Activity',
          model: 'Activity',
          relationType: 'belongsTo',
                  keyFrom: 'activityId',
          keyTo: 'activityId'
        },
      }
    }
  }
}
