export class User {
    userId: string;
    password: string;
    email: string;
    firstName: string;
    lastName: string;
    photoUrl: string;
    discipline: {
        disciplineId: string;
        name: string;
        description: string;
    };
    position: {
        positionId: string
        name: string
        description: string
    }
    gender: string
    nationality: string
}
