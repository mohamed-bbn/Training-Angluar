import { TestBed } from '@angular/core/testing';

import { TermsservicesService } from './termsservices.service';

describe('TermsservicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TermsservicesService = TestBed.get(TermsservicesService);
    expect(service).toBeTruthy();
  });
});
