import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {Routing} from './app.routing';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import {TestService} from './services/test.service.client';
import { RegisterComponent } from './components/user/register/register.component';
import { ProfileComponent } from './components/user/profile/profile.component';
import {UserService} from './services/user.service.client';
import {AgmCoreModule} from '@agm/core';

@NgModule({
  // Declare components here
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    Routing,
    AgmCoreModule.forRoot({apiKey:
      'AIzaSyCMwJEcq8gK7hFL32MqJ91CwQNy1k6z6dw'
    })
  ],
  // Client Side services here
  providers: [ TestService, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
