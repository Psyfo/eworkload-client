/* tslint:disable */
import {
  Duty
} from '../index';

declare var Object: any;
export interface EventInterface {
  "eventId": string;
  "description"?: string;
  duties?: Duty[];
}

export class Event implements EventInterface {
  "eventId": string;
  "description": string;
  duties: Duty[];
  constructor(data?: EventInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Event`.
   */
  public static getModelName() {
    return "Event";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Event for dynamic purposes.
  **/
  public static factory(data: EventInterface): Event{
    return new Event(data);
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
      name: 'Event',
      plural: 'Events',
      path: 'Events',
      idName: 'eventId',
      properties: {
        "eventId": {
          name: 'eventId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
      },
      relations: {
        duties: {
          name: 'duties',
          type: 'Duty[]',
          model: 'Duty',
          relationType: 'hasMany',
          modelThrough: 'Tariff',
          keyThrough: 'dutyId',
          keyFrom: 'eventId',
          keyTo: 'eventId'
        },
      }
    }
  }
}
