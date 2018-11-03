import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, RouterLinkActive } from '@angular/router';
import { HashLocationStrategy, Location, LocationStrategy } from '@angular/common';
import { Routes } from '@angular/router';
import { NguCarouselModule } from '@ngu/carousel';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { FormsModule } from '@angular/forms';
import { SliderModule } from 'primeng/slider';

import { CarouselModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PresencaComponent } from './presenca/presenca.component';
import { TvComponent } from './tv/tv.component';
import { InternetComponent } from './internet/internet.component';
import { OportunidadesComponent } from './oportunidades/oportunidades.component';
import { MenuInternaComponent } from './menu-interna/menu-interna.component';

export const ROUTES: Routes = [
{ path: '', component: HomeComponent },
{ path: 'internet', component: InternetComponent },
{ path: 'oportunidades', component: OportunidadesComponent },
{ path: 'presenca', component: PresencaComponent },
{ path: 'tv', component: TvComponent }
]


@NgModule({
  declarations: [
  AppComponent,
  HomeComponent,
  PresencaComponent,
  TvComponent,
  InternetComponent,
  OportunidadesComponent,
  MenuInternaComponent
  ],
  imports: [
  BrowserModule,
  CarouselModule.forRoot(),
  AngularFontAwesomeModule,
  RouterModule.forRoot(ROUTES, { useHash: true }),
  SliderModule,
  FormsModule,
  NguCarouselModule
  ],
  providers: [Location, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
