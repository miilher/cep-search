import { TestBed } from '@angular/core/testing';

import { SearchZipService } from './search-zip.service';

describe('SearchZipService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchZipService = TestBed.get(SearchZipService);
    expect(service).toBeTruthy();
  });
});
