/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MentionsComponent } from './mentions.component';

describe('MentionsComponent', () => {
  let component: MentionsComponent;
  let fixture: ComponentFixture<MentionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
