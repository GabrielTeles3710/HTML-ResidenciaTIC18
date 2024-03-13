import { TestBed } from '@angular/core/testing';

import { PetshopServiceService } from './petshop-service.service';

describe('PetshopServiceService', () => {
  let service: PetshopServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PetshopServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
