import { Injectable } from '@angular/core';
import { HttpRequest, HttpResponse, HttpHandler, HttpEvent, HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { delay, mergeMap, materialize, dematerialize } from 'rxjs/operators';
import { User, Activity, Department, Qualification, Subject, Faculty, Duty, Block, Position } from '../models';
import * as uuid from 'uuid';

@Injectable()
export class FakeBackendInterceptor implements HttpInterceptor {

    constructor() { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // arrays in local storage for entities
        const users: User[] = JSON.parse(localStorage.getItem('users')) || [];
        const activities: Activity[] = JSON.parse(localStorage.getItem('activities')) || [];
        const blocks: Block[] = JSON.parse(localStorage.getItem('blocks')) || [
            { blockCode: '21', blockDescription: 'First Semester' },
            { blockCode: '22', blockDescription: 'Second Semester' }
        ];
        const departments: Department[] = JSON.parse(localStorage.getItem('departments')) || [
            { departmentId: '1', departmentName: 'Information Technology', facultyId: '1' },
            { departmentId: '2', departmentName: 'Financial Accounting', facultyId: '4'},
            { departmentId: '3', departmentName: 'Auditing and Taxation', facultyId: '4'},
            { departmentId: '4', departmentName: 'Mechanical Engineering', facultyId: '3'},
            { departmentId: '5', departmentName: 'Interior Design', facultyId: '2' }
        ];
        const duties: Duty[] = JSON.parse(localStorage.getItem('subjects')) || [
            { dutyId: '12', dutyDescription: 'Formal Instruction' },
            { dutyId: '11', dutyDescription: 'Community Instruction' },
            { dutyId: '20', dutyDescription: 'Research' },
            { dutyId: '30', dutyDescription: 'Public Service Activities' },
            { dutyId: '46', dutyDescription: 'Academic Administration' },
            { dutyId: '48', dutyDescription: 'Academic Personnel Development' },
            { dutyId: '61', dutyDescription: 'Executive Management' }
        ];
        const faculties: Faculty[] = JSON.parse(localStorage.getItem('faculties')) || [
            { facultyId: '1', facultyName: 'Accounting and Informatics' },
            { facultyId: '2', facultyName: 'Engineering and Built Environment' },
            { facultyId: '3', facultyName: 'Arts and Design' },
            { facultyId: '4', facultyName: 'Management and Economics' }

        ];
        const positions: Position[] = JSON.parse(localStorage.getItem('positions')) || [
            { positionId: '1', positionDescription: 'Lecturer' },
            { positionId: '2', positionDescription: 'Senior Lecturer' },
            { positionId: '3', positionDescription: 'Dean' },
            { positionId: '4', positionDescription: 'Developer' }
        ];
        const qualifications: Qualification[] = JSON.parse(localStorage.getItem('qualifications')) || [
            { qualificationId: 'BTFIS2', qualificationDescription: 'BTech: Financial Information Systems' },
            { qualificationId: 'BTINF2', qualificationDescription: 'BTech: Information Systems' },
            { qualificationId: 'DIIAD1', qualificationDescription: 'Dip: Information and Communications Technology' }
        ];
        const subjects: Subject[] = JSON.parse(localStorage.getItem('subjects')) || [
            {
                subjectId: 'INCP101',
                subjectDescription: 'Introduction to Computing',
                offering: 'D1/P1',
                period: '1',
                level: 5,
                credit: 12,
                baseContact: 60,
                repeatContact: 60,
                basePracticals: 0,
                repeatPracticals: 0,
                other: 0,
                qualificationId: 'BINCT1'
            },
            {
                subjectId: 'DBSYS404',
                subjectDescription: 'Database Systems 4',
                offering: 'D1/P1',
                period: '1',
                level: 7,
                credit: 12,
                baseContact: 36,
                repeatContact: 36,
                basePracticals: 24,
                repeatPracticals: 0,
                other: 1249,
                qualificationId: 'BTINF2'
            },
            {
                subjectId: 'FISY402',
                subjectDescription: 'Financial Information Systems 4',
                offering: 'D1/P1',
                period: '1',
                level: 5,
                credit: 12,
                baseContact: 72,
                repeatContact: 0,
                basePracticals: 0,
                repeatPracticals: 0,
                other: 436,
                qualificationId: 'BTFIS2'
            }
        ];


        // wrap in delayed observable to simulate server api call
        return of(null).pipe(mergeMap(() => {

            // authenticate
            // if (request.url.endsWith('/users/authenticate') && request.method === 'POST') {
            if (request.url.endsWith('/login') && request.method === 'POST') {
                // find if any user matches login credentials
                const filteredUsers = users.filter(user => {
                    return user.userId === request.body.userId && user.password === request.body.password;
                });

                if (filteredUsers.length) {
                    // if login details are valid return 200 OK with user details and fake jwt token
                    const user = filteredUsers[0];
                    const body = {
                        userId: user.userId,
                        firstName: user.firstName,
                        lastName: user.lastName,
                        token: 'fake-jwt-token'
                    };

                    return of(new HttpResponse({ status: 200, body: body }));
                } else {
                    // else return 400 bad request
                    return throwError({ error: { message: 'Username or password is incorrect' } });
                }
            }

            // get users
            if (request.url.endsWith('/users') && request.method === 'GET') {
                // check for fake auth token in header and return users if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: users }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get user by id
            if (request.url.match(/\/users\/\d+$/) && request.method === 'GET') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const userId = urlParts[urlParts.length - 1];
                    console.log(userId);

                    const matchedUsers = users.filter(user => { return user.userId.toString() === userId; });
                    const user: User = matchedUsers.length ? matchedUsers[0] : null;

                    return of(new HttpResponse({ status: 200, body: user }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // register user
            if (request.url.endsWith('/signup') && request.method === 'POST') {
                // get new user object from post body
                const newUser: User = request.body;

                // validation
                const duplicateUser = users.filter(user => { return user.userId === newUser.userId; }).length;
                if (duplicateUser) {
                    return throwError({ error: { message: 'User ID "' + newUser.userId + '" is already taken' } });
                }

                // save new user
                // newUser.userId = users.length + 1;
                users.push(newUser);
                localStorage.setItem('users', JSON.stringify(users));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // edit user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'POST') {
                const editUser: User = request.body;

                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const userId = editUser.userId;
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.userId === userId) {
                            // edit user
                            users[i] = editUser;
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    return of(new HttpResponse({ status: 200, body: editUser }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }

            }

            // delete user
            if (request.url.match(/\/users\/\d+$/) && request.method === 'DELETE') {
                // check for fake auth token in header and return user if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    // find user by id in users array
                    const urlParts = request.url.split('/');
                    const userId = parseInt(urlParts[urlParts.length - 1]);
                    for (let i = 0; i < users.length; i++) {
                        const user = users[i];
                        if (user.userId === userId) {
                            // delete user
                            users.splice(i, 1);
                            localStorage.setItem('users', JSON.stringify(users));
                            break;
                        }
                    }

                    // respond 200 OK
                    return of(new HttpResponse({ status: 200 }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }


            // get activities
            if (request.url.endsWith('/activities') && request.method === 'GET') {
                // check for fake auth token in header and return activities if valid,
                // this security is implemented server side in a real application
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: activities }));
                } else {
                    // return 401 not authorised if token is null or invalid
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }


            // get activity by id
            if (request.url.match(/\/activities\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const activityId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedActivities = activities.filter(activity => { return activity.activityId === activityId.toString(); });
                    const activity: Activity = matchedActivities.length ? matchedActivities[0] : null;

                    return of(new HttpResponse({ status: 200, body: activity }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // create activity
            if (request.url.endsWith('/activity/add') && request.method === 'POST') {
                const newActivity: Activity = request.body;

                const duplicateActivity = activities.filter(activity => { return activity.activityId === newActivity.activityId; }).length;
                if (duplicateActivity) {
                    return throwError({ error: { message: 'Activity ID "' + newActivity.activityId + '" is already taken' } });
                }

                // save new user
                newActivity.activityId = uuid.v4().toString();
                activities.push(newActivity);
                localStorage.setItem('activities', JSON.stringify(activities));

                // respond 200 OK
                return of(new HttpResponse({ status: 200 }));
            }

            // delete activity



            // get departments
            if (request.url.endsWith('/departments') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: departments }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get departments by id
            if (request.url.match(/\/departments\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const departmentId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedDepartments = departments.filter(department => {
                        return department.departmentId === departmentId.toString();
                    });
                    const department: Department = matchedDepartments.length ? matchedDepartments[0] : null;

                    return of(new HttpResponse({ status: 200, body: department }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add departments

            // edit departments

            // delete departments



            // get duties
            if (request.url.endsWith('/duties') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: duties }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get duty by id
            if (request.url.match(/\/duties\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const dutyId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedDuties = duties.filter(duty => { return duty.dutyId === dutyId.toString(); });
                    const duty: Duty = matchedDuties.length ? matchedDuties[0] : null;

                    return of(new HttpResponse({ status: 200, body: duty }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add duty

            // edit duty

            // delete duty



            // get faculties
            if (request.url.endsWith('/faculties') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: faculties }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get faculty by id
            if (request.url.match(/\/faculties\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const facultyId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedFaculties = faculties.filter(faculty => { return faculty.facultyId === facultyId.toString(); });
                    const faculty: Faculty = matchedFaculties.length ? matchedFaculties[0] : null;

                    return of(new HttpResponse({ status: 200, body: faculty }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add faculty

            // edit faculty

            // delete faculty



            // get positions
            if (request.url.endsWith('/positions') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: positions }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get position by id
            if (request.url.match(/\/positions\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const positionId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedPositions = positions.filter(position => {
                        return position.positionId === positionId.toString();
                    });
                    const position: Position = matchedPositions.length ? matchedPositions[0] : null;

                    return of(new HttpResponse({ status: 200, body: position }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add position

            // edit position

            // delete position


            // get qualifications
            if (request.url.endsWith('/qualifications') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: qualifications }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get qualification by id
            if (request.url.match(/\/qualifications\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const qualificationId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedQualifications = qualifications.filter(qualification => {
                        return qualification.qualificationId === qualificationId.toString();
                    });
                    const qualification: Qualification = matchedQualifications.length ? matchedQualifications[0] : null;

                    return of(new HttpResponse({ status: 200, body: qualification }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add qualification

            // edit qualification

            // delete qualification



            // get subjects
            if (request.url.endsWith('/subjects') && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {
                    return of(new HttpResponse({ status: 200, body: subjects }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // get subject by id
            if (request.url.match(/\/subjects\/\d+$/) && request.method === 'GET') {
                if (request.headers.get('Authorization') === 'Bearer fake-jwt-token') {

                    const urlParts = request.url.split('/');
                    const subjectId = parseInt(urlParts[urlParts.length - 1]);
                    const matchedSubjects = subjects.filter(subject => {
                        return subject.subjectId === subjectId.toString();
                    });
                    const subject: Subject = matchedSubjects.length ? matchedSubjects[0] : null;

                    return of(new HttpResponse({ status: 200, body: subject }));
                } else {
                    return throwError({ status: 401, error: { message: 'Unauthorised' } });
                }
            }

            // add subject

            // edit subject

            // delete subject



            // pass through any requests not handled above
            return next.handle(request);

        }))

            // call materialize and dematerialize to ensure delay even if an error is thrown
            // (https://github.com/Reactive-Extensions/RxJS/issues/648)
            .pipe(materialize())
            .pipe(delay(500))
            .pipe(dematerialize());
    }
}

export let fakeBackendProvider = {
    // use fake backend in place of Http service for backend-less development
    provide: HTTP_INTERCEPTORS,
    useClass: FakeBackendInterceptor,
    multi: true
};
