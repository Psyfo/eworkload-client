/* tslint:disable */
import {
  ActiveSubject,
  Lecturer
} from '../index';

declare var Object: any;
export interface DisciplineInterface {
  "disciplineId": string;
  "name": string;
  "description"?: string;
  activeSubjects?: ActiveSubject[];
  lecturers?: Lecturer[];
}

export class Discipline implements DisciplineInterface {
  "disciplineId": string;
  "name": string;
  "description": string;
  activeSubjects: ActiveSubject[];
  lecturers: Lecturer[];
  constructor(data?: DisciplineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `Discipline`.
   */
  public static getModelName() {
    return "Discipline";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of Discipline for dynamic purposes.
  **/
  public static factory(data: DisciplineInterface): Discipline{
    return new Discipline(data);
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
      name: 'Discipline',
      plural: 'Disciplines',
      path: 'Disciplines',
      idName: 'disciplineId',
      properties: {
        "disciplineId": {
          name: 'disciplineId',
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
        activeSubjects: {
          name: 'activeSubjects',
          type: 'ActiveSubject[]',
          model: 'ActiveSubject',
          relationType: 'hasMany',
                  keyFrom: 'disciplineId',
          keyTo: 'disciplineId'
        },
        lecturers: {
          name: 'lecturers',
          type: 'Lecturer[]',
          model: 'Lecturer',
          relationType: 'hasMany',
          modelThrough: 'LecturerDiscipline',
          keyThrough: 'lecturerId',
          keyFrom: 'disciplineId',
          keyTo: 'disciplineId'
        },
      }
    }
  }
}
