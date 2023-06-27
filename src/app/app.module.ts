import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaskedSSNPipe, PhoneNumberPipe } from './model/pipes';
import { LandingPageComponent } from './page/landing-page/landing-page.component';
import { ErrorDialogComponent } from './shared/dialogs/error/error.dialog.component';
import { ProgessDialogComponent } from './shared/dialogs/progess/progess.dialog.component';
import { PromptYesNoDialogComponent } from './shared/dialogs/prompt-yes-no/prompt-yes-no.dialog.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderComponent } from './shared/header/header.component';
import { SSNTooltipComponent } from './shared/tooltips/ssntooltip/ssn-tooltip.component';
import { LeadershipPageComponent } from './page/leadership-page/leadership-page.component';
import { ContactUsPageComponent } from './page/contact-us-page/contact-us-page.component';


@NgModule({
  declarations: [
    AppComponent,
    ErrorDialogComponent,
    FooterComponent,
    HeaderComponent,
    LandingPageComponent,
    MaskedSSNPipe,
    PhoneNumberPipe,
    ProgessDialogComponent,
    PromptYesNoDialogComponent,
    SSNTooltipComponent,
    LeadershipPageComponent,
    ContactUsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    MatIconModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
