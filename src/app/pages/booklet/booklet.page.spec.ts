import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BookletPage } from './booklet.page';

describe('BookletPage', () => {
  let component: BookletPage;
  let fixture: ComponentFixture<BookletPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(BookletPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
