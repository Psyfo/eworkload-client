/* tslint:disable */
import {
  ActiveSubject
} from '../index';

declare var Object: any;
export interface BlockInterface {
  "blockId": string;
  "name": string;
  activeSubjects?: ActiveSubject[];
}

export class Block implements BlockInterface {
  "blockId": string;
  "name": string;
  activeSubjects: ActiveSubject[];
  constructor(data?: BlockInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Block`.
   */
  public static getModelName() {
    return "Block";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Block for dynamic purposes.
  **/
  public static factory(data: BlockInterface): Block{
    return new Block(data);
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
      name: 'Block',
      plural: 'Blocks',
      path: 'Blocks',
      idName: 'blockId',
      properties: {
        "blockId": {
          name: 'blockId',
          type: 'string'
        },
        "name": {
          name: 'name',
          type: 'string'
        },
      },
      relations: {
        activeSubjects: {
          name: 'activeSubjects',
          type: 'ActiveSubject[]',
          model: 'ActiveSubject',
          relationType: 'hasMany',
          modelThrough: 'ActiveSubjectBlock',
          keyThrough: 'activeSubjectId',
          keyFrom: 'blockId',
          keyTo: 'blockId'
        },
      }
    }
  }
}
