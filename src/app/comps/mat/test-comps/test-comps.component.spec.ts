import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestCompsComponent } from './test-comps.component';

describe('TestCompsComponent', () => {
  let component: TestCompsComponent;
  let fixture: ComponentFixture<TestCompsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestCompsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
