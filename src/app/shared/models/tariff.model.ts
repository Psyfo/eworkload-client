import { Duty } from './duty.model';
import { Event } from './event.model';

export class Tariff {
    dutyId: string
    duty: Duty
    eventId: string
    event: Event
    description: string
    appliedTarrif: string
    minHours: number
    maxHours: number
    explanation: string
    TRS: string
    evidenceRequired: boolean
}
