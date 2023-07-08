import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KukaComponent } from './kuka.component';

describe('KukaComponent', () => {
  let component: KukaComponent;
  let fixture: ComponentFixture<KukaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [KukaComponent]
    });
    fixture = TestBed.createComponent(KukaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
