import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgLoadingSpinnerComponent } from './ng-loading-spinner.component';

describe('NgLoadingSpinnerComponent', () => {
  let component: NgLoadingSpinnerComponent;
  let fixture: ComponentFixture<NgLoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgLoadingSpinnerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgLoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
