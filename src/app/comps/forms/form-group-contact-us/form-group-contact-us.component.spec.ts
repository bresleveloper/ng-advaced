import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupContactUsComponent } from './form-group-contact-us.component';

describe('FormGroupContactUsComponent', () => {
  let component: FormGroupContactUsComponent;
  let fixture: ComponentFixture<FormGroupContactUsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormGroupContactUsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupContactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
