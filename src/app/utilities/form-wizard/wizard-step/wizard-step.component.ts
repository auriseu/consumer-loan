import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent {
  @Input() title: string;
  @Input() hidden: boolean = false;
  @Input() isValid: boolean = true;
  @Input() showNext: boolean = true;
  @Input() showPrev: boolean = true;

  @Output() onNext: EventEmitter<any> = new EventEmitter<any>();
  @Output() onPrev: EventEmitter<any> = new EventEmitter<any>();
  @Output() onComplete: EventEmitter<any> = new EventEmitter<any>();

  private _isActive: boolean = false;
  private _isDisabled: boolean = true;
  private _isValidated: boolean = false;

  constructor() {
  }

  @Input('isActive')
  set isActive(isActive: boolean) {
    this._isActive = isActive;
    this._isDisabled = false;
  }

  get isActive(): boolean {
    return this._isActive;
  }

  get isValidated(): boolean {
    return this._isValidated;
  }

  set isValidated(value: boolean) {
    this._isValidated = value;
  }

  get isDisabled(): boolean {
    return this._isDisabled;
  }

  set isDisabled(value: boolean) {
    this._isDisabled = value;
  }
}
