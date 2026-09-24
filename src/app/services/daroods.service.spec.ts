import { TestBed } from '@angular/core/testing';
import { DaroodsService } from './daroods.service';

describe('DaroodsService', () => {
  let service: DaroodsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DaroodsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
