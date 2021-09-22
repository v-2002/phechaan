import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ListOfAdsComponent } from './list-of-ads/list-of-ads.component';
import { AdsComponent } from './ads/ads.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HowToDoComponent } from './how-to-do/how-to-do.component';
import { AddAdsComponent } from './add-ads/add-ads.component';

const routes: Routes=[
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'signup',
    component: SignUpComponent 
  },
  {
    path: 'ads',
    component: AdsComponent 
  },
  {
    path: 'advertisement',
    component: ListOfAdsComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'howtodo',
    component: HowToDoComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ListOfAdsComponent,
    AdsComponent,
    LoginComponent,
    SignUpComponent,
    AboutComponent,
    HowToDoComponent,
    AddAdsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
