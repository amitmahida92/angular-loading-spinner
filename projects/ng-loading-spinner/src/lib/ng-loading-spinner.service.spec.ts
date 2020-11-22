import { TestBed } from '@angular/core/testing';

import { NgLoadingSpinnerService } from './ng-loading-spinner.service';

describe('NgLoadingSpinnerService', () => {
  let service: NgLoadingSpinnerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgLoadingSpinnerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
