/* tslint:disable */
import {
  Duty,
  Event
} from '../index';

declare var Object: any;
export interface TariffInterface {
  "dutyId": string;
  "eventId": string;
  "description": string;
  "appliedTarrif": string;
  "minHours"?: number;
  "maxHours"?: number;
  "explanation"?: string;
  "TRS": string;
  "evidenceRequired": boolean;
  "id"?: any;
  duty?: Duty;
  event?: Event;
}

export class Tariff implements TariffInterface {
  "dutyId": string;
  "eventId": string;
  "description": string;
  "appliedTarrif": string;
  "minHours": number;
  "maxHours": number;
  "explanation": string;
  "TRS": string;
  "evidenceRequired": boolean;
  "id": any;
  duty: Duty;
  event: Event;
  constructor(data?: TariffInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Tariff`.
   */
  public static getModelName() {
    return "Tariff";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Tariff for dynamic purposes.
  **/
  public static factory(data: TariffInterface): Tariff{
    return new Tariff(data);
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
      name: 'Tariff',
      plural: 'Tariffs',
      path: 'Tariffs',
      idName: 'id',
      properties: {
        "dutyId": {
          name: 'dutyId',
          type: 'string'
        },
        "eventId": {
          name: 'eventId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "appliedTarrif": {
          name: 'appliedTarrif',
          type: 'string'
        },
        "minHours": {
          name: 'minHours',
          type: 'number'
        },
        "maxHours": {
          name: 'maxHours',
          type: 'number'
        },
        "explanation": {
          name: 'explanation',
          type: 'string'
        },
        "TRS": {
          name: 'TRS',
          type: 'string'
        },
        "evidenceRequired": {
          name: 'evidenceRequired',
          type: 'boolean'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        duty: {
          name: 'duty',
          type: 'Duty',
          model: 'Duty',
          relationType: 'belongsTo',
                  keyFrom: 'dutyId',
          keyTo: 'dutyId'
        },
        event: {
          name: 'event',
          type: 'Event',
          model: 'Event',
          relationType: 'belongsTo',
                  keyFrom: 'eventId',
          keyTo: 'eventId'
        },
      }
    }
  }
}
