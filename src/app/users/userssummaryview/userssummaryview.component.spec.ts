import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserssummaryviewComponent } from './userssummaryview.component';

describe('UserssummaryviewComponent', () => {
  let component: UserssummaryviewComponent;
  let fixture: ComponentFixture<UserssummaryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserssummaryviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserssummaryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
