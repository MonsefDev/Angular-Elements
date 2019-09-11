import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MymHeaderComponent } from './mym-header.component';

describe('MymHeaderComponent', () => {
  let component: MymHeaderComponent;
  let fixture: ComponentFixture<MymHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MymHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MymHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
