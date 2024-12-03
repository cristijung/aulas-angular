import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EbindingComponent } from './ebinding.component';

describe('EbindingComponent', () => {
  let component: EbindingComponent;
  let fixture: ComponentFixture<EbindingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EbindingComponent]
    });
    fixture = TestBed.createComponent(EbindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
