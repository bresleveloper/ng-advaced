import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaGreenComponent } from './pizza-green.component';

describe('PizzaGreenComponent', () => {
  let component: PizzaGreenComponent;
  let fixture: ComponentFixture<PizzaGreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaGreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaGreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
