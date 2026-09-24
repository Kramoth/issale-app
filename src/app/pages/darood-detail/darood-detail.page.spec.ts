import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DaroodDetailPage } from './darood-detail.page';

describe('DaroodDetailPage', () => {
  let component: DaroodDetailPage;
  let fixture: ComponentFixture<DaroodDetailPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DaroodDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
