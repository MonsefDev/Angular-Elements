import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetConnexionComponent } from './widget-connexion.component';

describe('WidgetConnexionComponent', () => {
  let component: WidgetConnexionComponent;
  let fixture: ComponentFixture<WidgetConnexionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetConnexionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetConnexionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
