import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotViewComponent } from './mot-view.component';

describe('MotViewComponent', () => {
  let component: MotViewComponent;
  let fixture: ComponentFixture<MotViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotViewComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
