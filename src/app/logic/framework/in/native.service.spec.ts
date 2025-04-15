import { TestBed } from '@angular/core/testing';

import { NativeService } from './native.service';

describe('ApiService', () => {
  let service: NativeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NativeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
