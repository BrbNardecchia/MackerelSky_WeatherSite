import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CitiesCardComponent } from './cities-card.component';

describe('CitiesCardComponent', () => {
  let component: CitiesCardComponent;
  let fixture: ComponentFixture<CitiesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CitiesCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CitiesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
