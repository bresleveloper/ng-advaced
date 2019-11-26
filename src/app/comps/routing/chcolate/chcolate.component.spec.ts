import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChcolateComponent } from './chcolate.component';

describe('ChcolateComponent', () => {
  let component: ChcolateComponent;
  let fixture: ComponentFixture<ChcolateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChcolateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChcolateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
