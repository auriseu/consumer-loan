import {Component, Injectable, OnInit} from '@angular/core';
import {FormWizardComponent} from '../../../utilities/form-wizard/form-wizard.component';

@Component({
  selector: 'app-application-form',
  templateUrl: './application-form.component.html',
  styleUrls: ['./application-form.component.css'],
})

@Injectable()
export class ApplicationFormComponent implements OnInit {

  constructor(private formWizard: FormWizardComponent) { }

  ngOnInit() {
  }

  showCreditUseTypeMessage(){

  }

  checkMaxPeriod(){

  }
}
