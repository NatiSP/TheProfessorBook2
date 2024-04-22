import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VgPage } from './vg.page';

describe('VgPage', () => {
  let component: VgPage;
  let fixture: ComponentFixture<VgPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(VgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
