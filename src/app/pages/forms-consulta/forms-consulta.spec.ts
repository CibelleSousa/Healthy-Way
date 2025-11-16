import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsConsulta } from './forms-consulta';

describe('FormsConsulta', () => {
  let component: FormsConsulta;
  let fixture: ComponentFixture<FormsConsulta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsConsulta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsConsulta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
