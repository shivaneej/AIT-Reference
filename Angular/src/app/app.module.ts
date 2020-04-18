import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JoinNamePipe } from './join-name.pipe';
import { JoinNameComponent } from './join-name.component';
import { FormsModule }   from '@angular/forms';
import { TitleCasePipe } from '@angular/common';
import { ReverseStringPipe } from './reverse-string.pipe';
import { CampSitePipe, CampSitesImpurePipe } from './filter-locations.pipe';
import { LocationsComponent, LocationsImpureComponent } from './locations.component';
import { UserFormComponent } from './user-form/user-form.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    JoinNamePipe,
    JoinNameComponent,
    ReverseStringPipe, //import this for chaining of custom pipes
    CampSitePipe, //import these for pure and impure pipes
    CampSitesImpurePipe,
    LocationsComponent,
    LocationsImpureComponent,
    UserFormComponent,
    LoginComponent,
    SignupComponent //For angular forms
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [TitleCasePipe], //import when using TitleCasePipe in custom pipe
  bootstrap: [AppComponent]
})
export class AppModule { }
