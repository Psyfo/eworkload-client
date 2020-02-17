import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { createUploadLink } from 'apollo-upload-client';
import { ConfirmationService, DialogService } from 'primeng/api';

import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouteReuseStrategy } from '@angular/router';
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
import { ManageModulesModule } from './layout/hod/manage-modules/manage-modules.module';
import { StaffSummaryModule } from './layout/hod/staff-summary/staff-summary.module';
import { AuthGuard } from './shared/guard';
import { CustomRouteReuseStrategy } from './shared/helpers';
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
    //GraphQLModule,
    ApolloModule,
    HttpLinkModule,
    AlertModule,
    PrimeNgModulesModule,
    StaffSummaryModule,
    GroupModule
  ],
  declarations: [AppComponent],
  providers: [
    AlertService,
    AuthGuard,
    [{ provide: RouteReuseStrategy, userClass: CustomRouteReuseStrategy }],
    ActivityService,
    BlockService,
    ConfirmationService,
    DepartmentService,
    DutyService,
    EnrollmentService,
    FacultyService,
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
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    private apollo: Apollo,
    private httpLink: HttpLink,
    private alertService: AlertService
  ) {
    // Set client uri
    const webLink = httpLink.create({
      uri: 'http://localhost:5000/graphql'
    });
    // Set error handling
    const errorLink = onError(({ graphQLErrors, networkError }) => {
      if (graphQLErrors) {
        graphQLErrors.map(({ message, locations, path }) => {
          // this.alertService.errorToast(
          //     `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${JSON.stringify(path)}`,
          //     'errorToast',
          //     5000,
          //     true
          // );
          this.alertService.errorToast(`${JSON.stringify(message)}`);
          console.error(
            `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${JSON.stringify(
              path
            )}`
          );
        });
        return;
      }

      if (networkError) {
        // this.alertService.errorToast(
        //     `[Network error]:
        //  Message: ${networkError.message}
        //  Name: ${networkError.name}
        //  Stack: ${networkError.stack}`,
        //     'errorToast',
        //     5000,
        //     true
        // );
        console.error(`[Network error]:
                Message: ${networkError.message}
                Name: ${networkError.name}
                Stack: ${networkError.stack}`);
        return;
      }
    });
    const uploadLink = createUploadLink({
      uri: 'http://localhost:5000/graphql'
    });

    const link = ApolloLink.from([errorLink, uploadLink]);

    const cache = new InMemoryCache({
      addTypename: true
    });

    apollo.create({
      link,
      cache: cache,
      defaultOptions: {
        watchQuery: {
          errorPolicy: 'all'
        },
        query: {
          errorPolicy: 'all'
        },
        mutate: {
          errorPolicy: 'all'
        }
      }
    });
  }
}
