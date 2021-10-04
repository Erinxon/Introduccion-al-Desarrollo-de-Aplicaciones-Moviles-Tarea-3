import { TestBed } from '@angular/core/testing';

import { TransformNumberIntoLetterService } from './transform-number-into-letter.service';

describe('TransformNumberIntoLetterService', () => {
  let service: TransformNumberIntoLetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TransformNumberIntoLetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
