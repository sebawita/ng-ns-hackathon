import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForNgosComponent } from './for-ngos.component';

describe('ForNgosComponent', () => {
  let component: ForNgosComponent;
  let fixture: ComponentFixture<ForNgosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForNgosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForNgosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
