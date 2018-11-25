/* tslint:disable */
import {
  Lecturer,
  Discipline
} from '../index';

declare var Object: any;
export interface LecturerDisciplineInterface {
  "lecturerId": string;
  "disciplineId": string;
  "id"?: any;
  lecturer?: Lecturer;
  discipline?: Discipline;
}

export class LecturerDiscipline implements LecturerDisciplineInterface {
  "lecturerId": string;
  "disciplineId": string;
  "id": any;
  lecturer: Lecturer;
  discipline: Discipline;
  constructor(data?: LecturerDisciplineInterface) {
    Object.assign(this, data);
  }
  /**
   * The name of the model represented by this $resource,
   * i.e. `LecturerDiscipline`.
   */
  public static getModelName() {
    return "LecturerDiscipline";
  }
  /**
  * @method factory
  * @author Jonathan Casarrubias
  * @license MIT
  * This method creates an instance of LecturerDiscipline for dynamic purposes.
  **/
  public static factory(data: LecturerDisciplineInterface): LecturerDiscipline{
    return new LecturerDiscipline(data);
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
      name: 'LecturerDiscipline',
      plural: 'LecturerDisciplines',
      path: 'LecturerDisciplines',
      idName: 'id',
      properties: {
        "lecturerId": {
          name: 'lecturerId',
          type: 'string'
        },
        "disciplineId": {
          name: 'disciplineId',
          type: 'string'
        },
        "id": {
          name: 'id',
          type: 'any'
        },
      },
      relations: {
        lecturer: {
          name: 'lecturer',
          type: 'Lecturer',
          model: 'Lecturer',
          relationType: 'belongsTo',
                  keyFrom: 'lecturerId',
          keyTo: 'lecturerId'
        },
        discipline: {
          name: 'discipline',
          type: 'Discipline',
          model: 'Discipline',
          relationType: 'belongsTo',
                  keyFrom: 'disciplineId',
          keyTo: 'disciplineId'
        },
      }
    }
  }
}
