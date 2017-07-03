/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthLocalService } from './auth-local.service';

describe('AuthLocalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthLocalService]
    });
  });

  it('should ...', inject([AuthLocalService], (service: AuthLocalService) => {
    expect(service).toBeTruthy();
  }));
});
