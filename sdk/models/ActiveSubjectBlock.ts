/* tslint:disable */
import {
  ActiveSubject,
  Block
} from '../index';

declare var Object: any;
export interface ActiveSubjectBlockInterface {
  "subjectId": string;
  "blockId": string;
  "description"?: string;
  "id"?: any;
  activeSubject?: ActiveSubject;
  block?: Block;
}

export class ActiveSubjectBlock implements ActiveSubjectBlockInterface {
  "subjectId": string;
  "blockId": string;
  "description": string;
  "id": any;
  activeSubject: ActiveSubject;
  block: Block;
  constructor(data?: ActiveSubjectBlockInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `ActiveSubjectBlock`.
   */
  public static getModelName() {
    return "ActiveSubjectBlock";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of ActiveSubjectBlock for dynamic purposes.
  **/
  public static factory(data: ActiveSubjectBlockInterface): ActiveSubjectBlock{
    return new ActiveSubjectBlock(data);
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
      name: 'ActiveSubjectBlock',
      plural: 'ActiveSubjectBlocks',
      path: 'ActiveSubjectBlocks',
      idName: 'id',
      properties: {
        "subjectId": {
          name: 'subjectId',
          type: 'string'
        },
        "blockId": {
          name: 'blockId',
          type: 'string'
        },
        "description": {
          name: 'description',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        activeSubject: {
          name: 'activeSubject',
          type: 'ActiveSubject',
          model: 'ActiveSubject',
          relationType: 'belongsTo',
                  keyFrom: 'subjectId',
          keyTo: 'subjectId'
        },
        block: {
          name: 'block',
          type: 'Block',
          model: 'Block',
          relationType: 'belongsTo',
                  keyFrom: 'blockId',
          keyTo: 'blockId'
        },
      }
    }
  }
}
