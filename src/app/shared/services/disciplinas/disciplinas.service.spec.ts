import { TestBed } from '@angular/core/testing';

import { DisciplinasService } from './disciplinas.service';

describe('DisciplinasService', () => {
  let service: DisciplinasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DisciplinasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
