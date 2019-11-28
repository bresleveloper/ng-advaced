import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMuzarellaComponent } from './pizza-muzarella.component';

describe('PizzaMuzarellaComponent', () => {
  let component: PizzaMuzarellaComponent;
  let fixture: ComponentFixture<PizzaMuzarellaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMuzarellaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMuzarellaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
