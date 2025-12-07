import { TestBed } from '@angular/core/testing';

import { Athlete } from './athlete';

describe('Athlete', () => {
  let service: Athlete;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Athlete);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
