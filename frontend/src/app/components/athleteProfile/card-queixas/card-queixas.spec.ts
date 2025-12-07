import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardQueixas } from './card-queixas';

describe('CardQueixas', () => {
  let component: CardQueixas;
  let fixture: ComponentFixture<CardQueixas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardQueixas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardQueixas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
