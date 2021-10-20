import { TestBed } from '@angular/core/testing';

import { FilmsSharingService } from './films-sharing.service';

describe('FilmsSharingService', () => {
  let service: FilmsSharingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilmsSharingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
