import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FloatingPanelButtonComponent } from './floating-panel-button.component';

describe('FloatingPanelButtonComponent', () => {
  let component: FloatingPanelButtonComponent;
  let fixture: ComponentFixture<FloatingPanelButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FloatingPanelButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FloatingPanelButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
