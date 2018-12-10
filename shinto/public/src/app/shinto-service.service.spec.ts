import { TestBed } from '@angular/core/testing';

import { ShintoServiceService } from './shinto-service.service';

describe('ShintoServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShintoServiceService = TestBed.get(ShintoServiceService);
    expect(service).toBeTruthy();
  });
});
