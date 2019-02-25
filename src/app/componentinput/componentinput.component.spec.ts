import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentinputComponent } from './componentinput.component';

describe('ComponentinputComponent', () => {
  let component: ComponentinputComponent;
  let fixture: ComponentFixture<ComponentinputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentinputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentinputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
