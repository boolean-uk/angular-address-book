import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactSpecificComponent } from './contact-specific.component';

describe('ContactSpecificComponent', () => {
  let component: ContactSpecificComponent;
  let fixture: ComponentFixture<ContactSpecificComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactSpecificComponent]
    });
    fixture = TestBed.createComponent(ContactSpecificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
