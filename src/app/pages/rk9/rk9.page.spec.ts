import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Rk9Page } from './rk9.page';

describe('Rk9Page', () => {
  let component: Rk9Page;
  let fixture: ComponentFixture<Rk9Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Rk9Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
