import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterDaddyComponent } from './router-daddy.component';

describe('RouterDaddyComponent', () => {
  let component: RouterDaddyComponent;
  let fixture: ComponentFixture<RouterDaddyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouterDaddyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterDaddyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
