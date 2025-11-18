import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaHome } from './consulta-home';

describe('ConsultaHome', () => {
  let component: ConsultaHome;
  let fixture: ComponentFixture<ConsultaHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConsultaHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsultaHome);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
