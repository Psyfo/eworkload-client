/* tslint:disable */
import {
  Event
} from '../index';

declare var Object: any;
export interface DutyInterface {
  "dutyId": string;
  "description": string;
  "type"?: any;
  events?: Event[];
}

export class Duty implements DutyInterface {
  "dutyId": string;
  "description": string;
  "type": any;
  events: Event[];
  constructor(data?: DutyInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Duty`.
   */
  public static getModelName() {
    return "Duty";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Duty for dynamic purposes.
  **/
  public static factory(data: DutyInterface): Duty{
    return new Duty(data);
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
      name: 'Duty',
      plural: 'Duties',
      path: 'Duties',
      idName: 'dutyId',
      properties: {
        "dutyId": {
          name: 'dutyId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "type": {
          name: 'type',
          type: 'any'
        },
      },
      relations: {
        events: {
          name: 'events',
          type: 'Event[]',
          model: 'Event',
          relationType: 'hasMany',
          modelThrough: 'Tariff',
          keyThrough: 'eventId',
          keyFrom: 'dutyId',
          keyTo: 'dutyId'
        },
      }
    }
  }
}
