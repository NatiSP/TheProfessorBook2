import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TcgPage } from './tcg.page';

describe('TcgPage', () => {
  let component: TcgPage;
  let fixture: ComponentFixture<TcgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(TcgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
