/* tslint:disable */

declare var Object: any;
export interface VenueInterface {
  "venueId": string;
  "campus": string;
  "capacity": number;
}

export class Venue implements VenueInterface {
  "venueId": string;
  "campus": string;
  "capacity": number;
  constructor(data?: VenueInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Venue`.
   */
  public static getModelName() {
    return "Venue";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Venue for dynamic purposes.
  **/
  public static factory(data: VenueInterface): Venue{
    return new Venue(data);
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
      name: 'Venue',
      plural: 'Venues',
      path: 'Venues',
      idName: 'venueId',
      properties: {
        "venueId": {
          name: 'venueId',
          type: 'string'
        },
        "campus": {
          name: 'campus',
          type: 'string'
        },
        "capacity": {
          name: 'capacity',
          type: 'number'
        },
      },
      relations: {
      }
    }
  }
}
