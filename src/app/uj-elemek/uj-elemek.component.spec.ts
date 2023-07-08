import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UjElemekComponent } from './uj-elemek.component';

describe('UjElemekComponent', () => {
  let component: UjElemekComponent;
  let fixture: ComponentFixture<UjElemekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UjElemekComponent]
    });
    fixture = TestBed.createComponent(UjElemekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
