import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMarqueComponent } from './my-marque.component';

describe('MyMarqueComponent', () => {
  let component: MyMarqueComponent;
  let fixture: ComponentFixture<MyMarqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMarqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMarqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
