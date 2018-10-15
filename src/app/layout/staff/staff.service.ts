import { Injectable } from '@angular/core';
import { Staff } from '../../shared/models/staff.model';

@Injectable({
    providedIn: 'root'
})
export class StaffService {
    staffList: Staff[] = [
        {
            staffId: 40018574,
            name: 'Sipho Mahlangu',
            imagePath: '~/assets/images/staff/img_staff_man.jpg',
            qualification: 'Information Technology',
            position: 'Developer',
            discipline: 'Software Development',
            department: 'Information Technology',
            faculty: 'Accounting and Informatics'
        },
        {
            staffId: 40017332,
            name: 'Robyn Thompson',
            imagePath: '~assets/images/staff/img_staff_woman.jpg',
            qualification: 'Information Technology',
            position: 'Senior Lecturer',
            discipline: 'Operating Systems',
            department: 'Information Technology',
            faculty: 'Accounting and Informatics'
        },
        {
            staffId: 40017833,
            name: 'Jeanette Wing',
            imagePath: '~/assets/images/staff/img_staff_man.jpg',
            qualification: 'Information Technology',
            position: 'Course Coordinator',
            discipline: 'User Interfaces',
            department: 'Information Technology',
            faculty: 'Accounting and Informatics'
        },
        {
            staffId: 40015346,
            name: 'Aboubadya Shabat',
            imagePath: '~/assets/images/staff/img_staff_man.jpg',
            qualification: 'Information Technology',
            position: 'Developer',
            discipline: 'Machine Learning',
            department: 'Information Technology',
            faculty: 'Accounting and Informatics'
        },
    ];

    constructor() { }

    getStaffList() {
        return this.staffList;
    }

    getStaff(staffId: number) {
        const staff = this.staffList.find(
            (s) => {
                return s.staffId === staffId;
            }
        );
        return staff;
    }

    updateStaff(staffId: number, staffInfo: Staff) {
        const staff = this.staffList.find(
            (s) => {
                return s.staffId === staffId;
            }
        );
        if (staff) {
            staff.staffId = staffInfo.staffId;
            staff.name = staffInfo.name;
            staff.qualification = staffInfo.qualification;
            staff.position = staffInfo.position;
            staff.discipline = staffInfo.discipline;
            staff.department = staffInfo.department;
            staff.faculty = staffInfo.faculty;
        }
    }
}
