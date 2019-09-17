import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntryAdditionPage } from './entry-addition.page';

describe('EntryAdditionPage', () => {
  let component: EntryAdditionPage;
  let fixture: ComponentFixture<EntryAdditionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntryAdditionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntryAdditionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
