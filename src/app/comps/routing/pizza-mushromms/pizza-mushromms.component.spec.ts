import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaMushrommsComponent } from './pizza-mushromms.component';

describe('PizzaMushrommsComponent', () => {
  let component: PizzaMushrommsComponent;
  let fixture: ComponentFixture<PizzaMushrommsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PizzaMushrommsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaMushrommsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
