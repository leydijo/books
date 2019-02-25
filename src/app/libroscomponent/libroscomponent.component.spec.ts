import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LibroscomponentComponent } from './libroscomponent.component';

describe('LibroscomponentComponent', () => {
  let component: LibroscomponentComponent;
  let fixture: ComponentFixture<LibroscomponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LibroscomponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LibroscomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
