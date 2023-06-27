import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CurrentSessionService } from './current-session.service';

describe('CurrentSessionService', () => {
  let service: CurrentSessionService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CurrentSessionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
