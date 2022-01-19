import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouEntryComponent } from './thank-you-entry.component';

describe('ThankYouEntryComponent', () => {
  let component: ThankYouEntryComponent;
  let fixture: ComponentFixture<ThankYouEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
