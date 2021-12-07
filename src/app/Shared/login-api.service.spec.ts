import { TestBed } from '@angular/core/testing';

import { LoginAPIService } from './login-api.service';

describe('LoginAPIService', () => {
  let service: LoginAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
