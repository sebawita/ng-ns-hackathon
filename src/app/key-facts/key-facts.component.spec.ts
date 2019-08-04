import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyFactsComponent } from './key-facts.component';

describe('KeyFactsComponent', () => {
  let component: KeyFactsComponent;
  let fixture: ComponentFixture<KeyFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyFactsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
