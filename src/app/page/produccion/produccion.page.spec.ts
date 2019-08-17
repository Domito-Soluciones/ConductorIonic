import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionPage } from './produccion.page';

describe('ProduccionPage', () => {
  let component: ProduccionPage;
  let fixture: ComponentFixture<ProduccionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProduccionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProduccionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
