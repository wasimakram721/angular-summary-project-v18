import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RolessummaryviewComponent } from './rolessummaryview.component';

describe('RolessummaryviewComponent', () => {
  let component: RolessummaryviewComponent;
  let fixture: ComponentFixture<RolessummaryviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RolessummaryviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RolessummaryviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
