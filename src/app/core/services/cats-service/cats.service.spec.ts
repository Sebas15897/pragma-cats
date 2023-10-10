/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { CatsService } from './cats.service';

describe('Service: Cats', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CatsService]
    });
  });

  it('should ...', inject([CatsService], (service: CatsService) => {
    expect(service).toBeTruthy();
  }));
});
