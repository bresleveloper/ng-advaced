import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsNaviComponent } from './forms-navi.component';

describe('FormsNaviComponent', () => {
  let component: FormsNaviComponent;
  let fixture: ComponentFixture<FormsNaviComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsNaviComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsNaviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
