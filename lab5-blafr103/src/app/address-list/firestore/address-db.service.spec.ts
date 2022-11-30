import { TestBed } from '@angular/core/testing';

import { AddressDbService } from './address-db.service';

describe('AddressDbService', () => {
  let service: AddressDbService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddressDbService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
