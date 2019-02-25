import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentheaderComponent } from './componentheader.component';

describe('ComponentheaderComponent', () => {
  let component: ComponentheaderComponent;
  let fixture: ComponentFixture<ComponentheaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentheaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentheaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
