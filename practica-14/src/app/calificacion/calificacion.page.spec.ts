import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CalificacionPage } from './calificacion.page';

describe('CalificacionPage', () => {
  let component: CalificacionPage;
  let fixture: ComponentFixture<CalificacionPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CalificacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
