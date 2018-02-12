import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumerLoanComponent } from './consumer-loan.component';

describe('ConsumerLoanComponent', () => {
  let component: ConsumerLoanComponent;
  let fixture: ComponentFixture<ConsumerLoanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumerLoanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumerLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
