import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { SomeWebService } from './some-web.service';

describe('SomeWebService', () => {
  let service: SomeWebService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(SomeWebService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
