import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElemekComponent } from './elemek.component';

describe('ElemekComponent', () => {
  let component: ElemekComponent;
  let fixture: ComponentFixture<ElemekComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ElemekComponent]
    });
    fixture = TestBed.createComponent(ElemekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
