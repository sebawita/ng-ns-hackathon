import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrDevsComponent } from './or-devs.component';

describe('OrDevsComponent', () => {
  let component: OrDevsComponent;
  let fixture: ComponentFixture<OrDevsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrDevsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrDevsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
