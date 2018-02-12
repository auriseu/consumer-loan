import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {ApplicationFormComponent} from './forms/application-form/application-form.component';

@Component({
  selector: 'app-consumer-loan',
  templateUrl: './consumer-loan.component.html',
  styleUrls: ['./consumer-loan.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ConsumerLoanComponent implements OnInit {

  constructor(private titleService: Title, private appForm: ApplicationFormComponent) {
  }

  ngOnInit() {
    this.titleService.setTitle('Consumer Loan');
  }

  // Steps
  onApplicationNext() {

  }

  onPersonalDataNext() {
  }

  onObligationsNext() {
  }

  onIncomeNext() {
  }

  onComplete() {
    console.log('Complete');
  }
}
