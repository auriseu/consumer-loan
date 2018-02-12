import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';


import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ConsumerLoanComponent} from './consumer-loan/consumer-loan.component';
import {RouterModule} from '@angular/router';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {NgbModule, NgbTooltipModule} from '@ng-bootstrap/ng-bootstrap';
import {FormWizardComponent} from './utilities/form-wizard/form-wizard.component';
import {WizardStepComponent} from './utilities/form-wizard/wizard-step/wizard-step.component';
import { ApplicationFormComponent } from './consumer-loan/forms/application-form/application-form.component';

const routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'consumer-loan',
    component: ConsumerLoanComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ConsumerLoanComponent,
    PageNotFoundComponent,
    FormWizardComponent,
    WizardStepComponent,
    ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    NgbTooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
