import { HomeComponent } from './container/home/home.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './container/login/login.component';
import { SignupComponent } from './container/signup/signup.component';
import { EditprofileComponent } from './container/editprofile/editprofile.component';
import { HostingComponent } from './container/hosting/hosting.component';
import { RepresentationComponent } from './container/hosting/representation/representation.component';
import { HouseComponent } from './container/hosting/house/house.component';
import { AddressComponent } from './container/hosting/address/address.component';
import { DescriptionComponent } from './container/editprofile/description/description.component';
import { PhotoComponent } from './container/editprofile/photo/photo.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    EditprofileComponent,
    HostingComponent,
    RepresentationComponent,
    HouseComponent,
    AddressComponent,
    DescriptionComponent,
    PhotoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
