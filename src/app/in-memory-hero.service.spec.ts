import { TestBed, inject } from '@angular/core/testing';

import { InMemoryHeroService } from './in-memory-hero.service';

describe('InMemoryDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [InMemoryHeroService]
    });
  });

  it('should be created', inject([InMemoryHeroService], (service: InMemoryHeroService) => {
    expect(service).toBeTruthy();
  }));
});
