import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DinamicoComponent } from './dinamico.component';

describe('DinamicoComponent', () => {
  let component: DinamicoComponent;
  let fixture: ComponentFixture<DinamicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DinamicoComponent]
    });
    fixture = TestBed.createComponent(DinamicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
