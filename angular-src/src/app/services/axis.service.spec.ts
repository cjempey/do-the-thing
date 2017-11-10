import { TestBed, inject } from '@angular/core/testing';

import { AxisService } from './axis.service';

describe('AxisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AxisService]
    });
  });

  it('should be created', inject([AxisService], (service: AxisService) => {
    expect(service).toBeTruthy();
  }));
});
