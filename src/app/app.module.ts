import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { DataTablesModule } from 'angular-datatables';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { Apollo, ApolloModule } from 'apollo-angular';
import { HttpLink, HttpLinkModule } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { onError } from 'apollo-link-error';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthGuard } from './shared';
import { AlertComponent } from './shared/directives';
import { AlertService, BufferService } from './shared/services';
import { ApolloLink } from 'apollo-link';

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
        FlashMessagesModule.forRoot(),
        DataTablesModule.forRoot(),
        //GraphQLModule,
        ApolloModule,
        HttpLinkModule
    ],
    declarations: [AppComponent, AlertComponent],
    providers: [
        AlertService,
        AuthGuard,
        BufferService
        // {
        //     provide: APOLLO_OPTIONS,
        //     useFactory: (httpLink: HttpLink) => {
        //         return {
        //             cache: new InMemoryCache(),
        //             link: httpLink.create({
        //                 uri: 'http://localhost:5000/graphql'
        //             })
        //         };
        //     },
        //     deps: [HttpLink]
        // }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    constructor(private apollo: Apollo, private httpLink: HttpLink) {
        // Set client uri
        const webLink = httpLink.create({
            uri: 'http://localhost:5000/graphql'
        });
        // Set error handling
        const errorLink = onError(({ graphQLErrors, networkError }) => {
            if (graphQLErrors)
                graphQLErrors.map(({ message, locations, path }) =>
                    console.log(
                        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
                    )
                );

            if (networkError)
                console.log(`[Network error]:
                Message: ${networkError.message}
                Name: ${networkError.name}
                Stack: ${networkError.stack}`);
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
