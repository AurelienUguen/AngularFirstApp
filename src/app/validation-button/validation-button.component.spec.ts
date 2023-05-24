import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidationButtonComponent } from './validation-button.component';

describe('ValidationButtonComponent', () => {
  let component: ValidationButtonComponent;
  let fixture: ComponentFixture<ValidationButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ValidationButtonComponent]
    });
    fixture = TestBed.createComponent(ValidationButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
