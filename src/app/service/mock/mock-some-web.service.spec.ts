import { TestBed } from '@angular/core/testing';
import {} from "jasmine";

import { MockSomeWebService } from './mock-some-web.service';

describe('MockSomeWebService', () => {
  let service: MockSomeWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockSomeWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
