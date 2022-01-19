import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThankYouListComponent } from './thank-you-list.component';

describe('ThankYouListComponent', () => {
  let component: ThankYouListComponent;
  let fixture: ComponentFixture<ThankYouListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThankYouListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThankYouListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
