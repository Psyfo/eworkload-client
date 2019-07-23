import { DataTablesModule } from 'angular-datatables';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink } from 'apollo-link';
import { onError } from 'apollo-link-error';
import { MessageModule } from 'primeng/message';
import { MessagesModule } from 'primeng/messages';

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
import { AuthGuard } from './shared/guard';
import { CustomRouteReuseStrategy } from './shared/helpers/routing-strategy';
import { AlertService } from './shared/modules';
import { AlertModule } from './shared/modules/alert/alert.module';
import { PrimeNgModulesModule } from './shared/modules/prime-ng-modules.module';
import {
    ActivityService,
    BlockService,
    DepartmentService,
    EnrollmentService,
    FacultyService,
    ModuleService,
    OfferingTypeService,
    PositionService,
    QualificationService,
    StudentService,
    UploadService,
    UserService,
    VenueService,
    WorkFocusService,
    WorkloadService
} from './shared/services';
import { DutyService } from './shared/services/duty.service';
import { ValidationService } from './shared/services/validation.service';

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
        AppRoutingModule,
        DataTablesModule.forRoot(),
        //GraphQLModule,
        ApolloModule,
        HttpLinkModule,
        AlertModule,
        PrimeNgModulesModule
    ],
    declarations: [AppComponent],
    providers: [
        AlertService,
        AuthGuard,
        [{ provide: RouteReuseStrategy, userClass: CustomRouteReuseStrategy }],
        ActivityService,
        BlockService,
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
        WorkloadService
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
                    this.alertService.errorToast(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`,
                        'errorToast',
                        0,
                        true
                    );
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    );
                });
                return;
            }

            if (networkError) {
                this.alertService.errorToast(
                    `[Network error]:
                 Message: ${networkError.message}
                 Name: ${networkError.name}
                 Stack: ${networkError.stack}`,
                    'errorToast',
                    0,
                    true
                );
                console.log(`[Network error]:
                Message: ${networkError.message}
                Name: ${networkError.name}
                Stack: ${networkError.stack}`);
                return;
            }
        });

        const link = ApolloLink.from([errorLink, webLink]);

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
