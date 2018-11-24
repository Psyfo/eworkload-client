import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import {
    AlertService,
    AuthenticationService,
    DepartmentService,
    BlockService,
    DutyService,
    FacultyService,
    UtilityService,
    QualificationService
} from './shared/services';
import { AlertComponent } from './shared/directives';
import { UserService } from './shared/services/user.service';

import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
import { PositionService } from './shared/services/position.service';
import { SubjectService } from './shared/services/subject.service';
import {
    SDKBrowserModule
} from '../../sdk';
import {
    ActiveSubjectApi,
    ActivityApi,
    BlockApi,
    CommInstructionApi,
    DepartmentApi,
    DutyApi,
    EventApi,
    FacultyApi,
    LecturerApi,
    LectureStackApi,
    OfferingTypeApi,
    PositionApi,
    PublicServiceApi,
    QualificationApi,
    ResearchApi,
    RoleApi,
    RoleMappingApi,
    TariffApi,
    UserApi,
    VenueApi
} from '../../sdk/services';
import { DataTableModule } from "angular-6-datatable";


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
        SDKBrowserModule.forRoot(),
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }
        }),
        AppRoutingModule,
        FlashMessagesModule.forRoot(),
        DataTableModule
    ],
    declarations: [
        AppComponent,
        AlertComponent
    ],
    providers: [
        AlertService,
        AuthGuard,
        AuthenticationService,
        BlockService,
        DepartmentService,
        DutyService,
        FacultyService,
        FlashMessagesService,
        PositionService,
        QualificationService,
        SubjectService,
        UserService,
        UtilityService,
        ActiveSubjectApi,
        ActivityApi,
        BlockApi,
        CommInstructionApi,
        DepartmentApi,
        DutyApi,
        EventApi,
        FacultyApi,
        LecturerApi,
        LectureStackApi,
        OfferingTypeApi,
        PositionApi,
        PublicServiceApi,
        QualificationApi,
        ResearchApi,
        RoleApi,
        RoleMappingApi,
        TariffApi,
        UserApi,
        VenueApi
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
