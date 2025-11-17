import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisponibilidade } from './card-disponibilidade';

describe('CardDisponibilidade', () => {
  let component: CardDisponibilidade;
  let fixture: ComponentFixture<CardDisponibilidade>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardDisponibilidade]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardDisponibilidade);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
