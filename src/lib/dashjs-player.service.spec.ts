import { TestBed, inject } from '@angular/core/testing';

import { DashjsPlayerService } from './dashjs-player.service';

describe('DashjsPlayerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashjsPlayerService]
    });
  });

  it('should be created', inject([DashjsPlayerService], (service: DashjsPlayerService) => {
    expect(service).toBeTruthy();
  }));
});
