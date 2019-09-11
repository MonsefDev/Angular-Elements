import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymFooterComponent } from './mym-footer.component';

describe('MymFooterComponent', () => {
  let component: MymFooterComponent;
  let fixture: ComponentFixture<MymFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
