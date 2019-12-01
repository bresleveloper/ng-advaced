import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CityByCountryComponent } from './city-by-country.component';

describe('CityByCountryComponent', () => {
  let component: CityByCountryComponent;
  let fixture: ComponentFixture<CityByCountryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityByCountryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CityByCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
