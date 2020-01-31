import { TestBed } from '@angular/core/testing';

import { ApiproductService } from './apiproduct.service';

describe('ApiproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApiproductService = TestBed.get(ApiproductService);
    expect(service).toBeTruthy();
  });
});
