import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonAppUserComponent } from './json-app-user.component';

describe('JsonAppUserComponent', () => {
  let component: JsonAppUserComponent;
  let fixture: ComponentFixture<JsonAppUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonAppUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonAppUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
