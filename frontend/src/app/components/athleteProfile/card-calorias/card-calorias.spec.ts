import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardCalorias } from './card-calorias';

describe('CardCalorias', () => {
  let component: CardCalorias;
  let fixture: ComponentFixture<CardCalorias>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CardCalorias]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardCalorias);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
