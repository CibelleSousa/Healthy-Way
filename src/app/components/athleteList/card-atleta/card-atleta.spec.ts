import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardAtleta } from './card-atleta';

describe('CardAtleta', () => {
  let component: CardAtleta;
  let fixture: ComponentFixture<CardAtleta>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardAtleta]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardAtleta);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
