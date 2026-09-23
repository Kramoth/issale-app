import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CirclePage } from './circle.page';

describe('CirclePage', () => {
  let component: CirclePage;
  let fixture: ComponentFixture<CirclePage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
