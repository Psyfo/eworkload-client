import { Injectable } from "@angular/core";

import {
    Activity,
    Department,
    Faculty,
    Lecturer,
    Qualification,
    Venue,
    Block
} from "../../../../sdk";

@Injectable({
    providedIn: "root"
})
export class BufferService {
    lecturer: Lecturer;
    qualification: Qualification;
    department: Department;
    position: Position;
    faculty: Faculty;
    venue: Venue;
    activity: Activity;
    block: Block;

    constructor() {}

    public setLecturer(lecturer: Lecturer) {
        this.lecturer = lecturer;
    }

    public getLecturer() {
        return this.lecturer;
    }

    public setDepartment(department: Department) {
        this.department = department;
    }

    public getDepartment() {
        return this.department;
    }

    public setFaculty(faculty: Faculty) {
        this.faculty = faculty;
    }

    public getFaculty() {
        return this.faculty;
    }
}
