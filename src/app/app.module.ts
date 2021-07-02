import { ConfirmationService, MessageService } from 'primeng/api';
import { DialogService } from 'primeng/dynamicdialog';
import { ErrorService } from 'src/app/shared/services';
import { environment } from 'src/environments/environment';

import { CommonModule } from '@angular/common';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule
} from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ActivityService } from './layout/activity/activity.service';
import { BlockService } from './layout/admin/block/block.service';
import { DepartmentService } from './layout/admin/department/department.service';
import { DutyService } from './layout/admin/duty/duty.service';
import { EnrollmentService } from './layout/admin/enrollment/enrollment.service';
import { FacultyService } from './layout/admin/faculty/faculty.service';
import { GroupModule } from './layout/admin/group/group.module';
import { ModuleService } from './layout/admin/module/module.service';
import { OfferingTypeService } from './layout/admin/offering-type/offering-type.service';
import { PositionService } from './layout/admin/position/position.service';
import { QualificationService } from './layout/admin/qualification/qualification.service';
import { StudentService } from './layout/admin/student/student.service';
import { UserService } from './layout/admin/user/user.service';
import { VenueService } from './layout/admin/venue/venue.service';
import { WorkFocusService } from './layout/admin/work-focus/work-focus.service';
import { StaffSummaryModule } from './layout/hod/staff-summary/staff-summary.module';
import { AuthGuard } from './shared/guard';
import { ErrorIntercept } from './shared/helpers/error.interceptor';
import { AlertModule, AlertService } from './shared/modules';
import { PrimeNgModulesModule } from './shared/modules/prime-ng-modules.module';
import { SharedPipesModule } from './shared/pipes/shared-pipes.module';
import {
  UploadService,
  ValidationService,
  WorkloadService
} from './shared/services';

// AoT requires an exported function for factories
export const createTranslateLoader = (http: HttpClient) => {
  /* for development
    return new TranslateHttpLoader(
        http,
        '/start-angular/SB-Admin-BS4-Angular-6/master/dist/assets/i18n/',
        '.json'
    ); */
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
};

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    SharedPipesModule,
    AppRoutingModule,
    AlertModule,
    PrimeNgModulesModule,
    StaffSummaryModule,
    GroupModule
  ],
  declarations: [AppComponent],
  providers: [
    AlertService,
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorIntercept,
      multi: true
    },
    {
      provide: ErrorHandler,
      useClass: ErrorService
    },
    ActivityService,
    BlockService,
    ConfirmationService,
    DepartmentService,
    DutyService,
    EnrollmentService,
    ErrorService,
    FacultyService,
    MessageService,
    ModuleService,
    OfferingTypeService,
    PositionService,
    QualificationService,
    StudentService,
    UploadService,
    UserService,
    ValidationService,
    VenueService,
    WorkFocusService,
    WorkloadService,
    DialogService
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {}
}
