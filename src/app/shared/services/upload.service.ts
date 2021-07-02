import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  constructor() {}

  uploadProfilePicture(file: File[], userId: string) {}
  uploadAcademicAdministrationEvidence(
    file: File,
    userId: string,
    activityId: string
  ) {}
  uploadResearchEvidence(file: File, userId: string, activityId: string) {}
}
