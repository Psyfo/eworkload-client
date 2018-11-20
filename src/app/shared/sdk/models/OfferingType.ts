/* tslint:disable */

declare var Object: any;
export interface OfferingTypeInterface {
  "offeringTypeId": string;
  "description": string;
}

export class OfferingType implements OfferingTypeInterface {
  "offeringTypeId": string;
  "description": string;
  constructor(data?: OfferingTypeInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `OfferingType`.
   */
  public static getModelName() {
    return "OfferingType";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of OfferingType for dynamic purposes.
  **/
  public static factory(data: OfferingTypeInterface): OfferingType{
    return new OfferingType(data);
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
      name: 'OfferingType',
      plural: 'OfferingTypes',
      path: 'OfferingTypes',
      idName: 'offeringTypeId',
      properties: {
        "offeringTypeId": {
          name: 'offeringTypeId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
      },
      relations: {
      }
    }
  }
}
