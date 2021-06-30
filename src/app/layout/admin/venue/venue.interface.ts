export interface IVenue {
    _id: string;
    venueId: string;
    campus: string;
    capacity: number;
    type?: string;
    createdAt?: Date;
    updatedAt?: Date;
}