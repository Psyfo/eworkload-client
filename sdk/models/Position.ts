/* tslint:disable */

declare var Object: any;
export interface PositionInterface {
  "positionId": string;
  "name": string;
  "description"?: string;
}

export class Position implements PositionInterface {
  "positionId": string;
  "name": string;
  "description": string;
  constructor(data?: PositionInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Position`.
   */
  public static getModelName() {
    return "Position";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Position for dynamic purposes.
  **/
  public static factory(data: PositionInterface): Position{
    return new Position(data);
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
      name: 'Position',
      plural: 'Positions',
      path: 'Positions',
      idName: 'positionId',
      properties: {
        "positionId": {
          name: 'positionId',
          type: 'string'
        },
        "name": {
          name: 'name',
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
