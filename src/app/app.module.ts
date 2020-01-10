import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { FormsModule} from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


import { AppComponent } from './app.component';
import { ExperiorPageComponent } from './experior-page/experior-page.component';
import { PageListingsComponent } from './experior-page/page-listings/page-listings.component';
import { PageDetailComponent } from './experior-page/page-detail/page-detail.component';

import { ApiService } from './api.service';

import { CurrencyListComponent } from './experior-page/page-detail/currency-list/currency-list.component';
import { LanguageListComponent } from './experior-page/page-detail/language-list/language-list.component';
import { HomeComponent } from './experior-page/page-detail/home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const appRoutes: Routes = [  
  { path: 'home', component: HomeComponent, data: { title: 'Home Page' } },
  { path: 'language-list', component: LanguageListComponent, data: { title: 'Language-list Page' } },
  { path: 'currency-list', component: CurrencyListComponent, data: { title: 'Currency-list Page' } },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];
@NgModule({
  declarations: [
    AppComponent,
    ExperiorPageComponent,
    PageListingsComponent,
    PageDetailComponent,
    CurrencyListComponent,
    LanguageListComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
    constructor() {}
}
