import { TestBed } from '@angular/core/testing';

import { ServicioPracticaService } from './servicio-practica.service';

describe('ServicioPracticaService', () => {
  let service: ServicioPracticaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioPracticaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
