import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';
import {YearbookModule} from './yearbook/yearbook.module'
import { AuthGuard } from './_guards/index';
import { AuthenticationService, UserService } from './_services/index';
import { LoginComponent } from './login/index';
import { HomeComponent } from './home/index';
import {PageNotFoundComponent} from './pagenotfound.component';

@NgModule({

    imports:      [ BrowserModule,
                    HttpModule,
                    FormsModule,
                    YearbookModule,
                  routing],

    declarations: [ AppComponent, PageNotFoundComponent, LoginComponent, HomeComponent],
    bootstrap:    [ AppComponent ],
    providers: [AuthGuard,
          AuthenticationService,
          UserService,

          // providers used to create fake backend
          fakeBackendProvider,
          MockBackend,
          BaseRequestOptions]

  })

  export class AppModule { }
