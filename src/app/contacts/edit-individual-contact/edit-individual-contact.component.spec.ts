import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditIndividualContactComponent } from './edit-individual-contact.component';

describe('EditIndividualContactComponent', () => {
  let component: EditIndividualContactComponent;
  let fixture: ComponentFixture<EditIndividualContactComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditIndividualContactComponent]
    });
    fixture = TestBed.createComponent(EditIndividualContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
