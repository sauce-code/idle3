import { TestBed } from '@angular/core/testing';

import { CastleRepositoryService } from './castle-repository.service';

describe('RepositoryService', () => {
  let service: CastleRepositoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CastleRepositoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
