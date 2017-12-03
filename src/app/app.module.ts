import { ProfilePage } from './../pages/profile/profile';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import {SearchPage} from '../pages/search/search';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ModifypofilePage } from '../pages/modifypofile/modifypofile';
import { SignupPage } from '../pages/signup/signup';
import { HackatonProvider } from '../providers/hackaton/hackaton';
import { HttpClientModule } from '@angular/common/http';
import { CreateEventPage } from '../pages/create-event/create-event';
import { FeedPage } from '../pages/feed/feed';
import { ShowEventPage } from '../pages/show-event/show-event';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    SignupPage,
    ProfilePage,
    ModifypofilePage,
    SearchPage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateEventPage,
    FeedPage,
    ShowEventPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    SignupPage,
    ProfilePage,
    SearchPage,
    ModifypofilePage,
    ContactPage,
    HomePage,
    TabsPage,
    CreateEventPage,
    FeedPage,
    ShowEventPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HackatonProvider
  ]
})
export class AppModule {}
