import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbasNavegacao } from './abas-navegacao';

describe('AbasNavegacao', () => {
  let component: AbasNavegacao;
  let fixture: ComponentFixture<AbasNavegacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbasNavegacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbasNavegacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
