import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardThankYouSummaryComponent } from './dashboard-thank-you-summary.component';

describe('DashboardThankYouSummaryComponent', () => {
  let component: DashboardThankYouSummaryComponent;
  let fixture: ComponentFixture<DashboardThankYouSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardThankYouSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardThankYouSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
