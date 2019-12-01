import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupNestedComponent } from './form-group-nested.component';

describe('FormGroupNestedComponent', () => {
  let component: FormGroupNestedComponent;
  let fixture: ComponentFixture<FormGroupNestedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupNestedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupNestedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
