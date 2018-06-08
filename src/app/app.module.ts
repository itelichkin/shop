import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppbarComponent } from './appbar/appbar.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SweetsPageComponent } from './pages/sweets-page/sweets-page.component';
import { PizzaPageComponent } from './pages/pizza-page/pizza-page.component';
import { IceCreamPageComponent } from './pages/ice-cream-page/ice-cream-page.component';
import { PageDefaultComponent } from './pages/page-default/page-default.component';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FlexLayoutModule} from '@angular/flex-layout';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {MaterialModule} from './modules/material.module';
import {DataTableModule, DropdownModule, OverlayPanelModule} from 'primeng/primeng';
import {SharedModule} from 'primeng/shared';
import {HttpClientModule} from '@angular/common/http';
import { SpinnerComponent } from './spinner/spinner.component';
import { DeleteDialogComponent } from './dialogs/delete-dialog/delete-dialog.component';
import { ModifyObjectComponent } from './pages/home-page/modify-object/modify-object.component';
import {HeadersService} from './services/headers.service';
import {ErrorService} from './services/error.service';
import {DialogsService} from './services/dialogs.service';
import {ApiService} from './services/api.service';
import {AuthTokenService} from './services/auth-token.service';

@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    PageNotFoundComponent,
    HomePageComponent,
    SweetsPageComponent,
    PizzaPageComponent,
    IceCreamPageComponent,
    PageDefaultComponent,
    SpinnerComponent,
    DeleteDialogComponent,
    ModifyObjectComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    DataTableModule,
    SharedModule,
    OverlayPanelModule,
    DropdownModule,
    HttpClientModule
  ],
  providers: [HttpClientModule, HeadersService, ErrorService, DialogsService, ApiService, AuthTokenService],
  entryComponents: [DeleteDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
