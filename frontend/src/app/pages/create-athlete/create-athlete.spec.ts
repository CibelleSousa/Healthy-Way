import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAthlete } from './create-athlete';

describe('CreateAthlete', () => {
  let component: CreateAthlete;
  let fixture: ComponentFixture<CreateAthlete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAthlete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateAthlete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
