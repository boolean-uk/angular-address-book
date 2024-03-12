import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponentComponent } from './contacts-list-component.component';

describe('ContactsListComponentComponent', () => {
  let component: ContactsListComponentComponent;
  let fixture: ComponentFixture<ContactsListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactsListComponentComponent]
    });
    fixture = TestBed.createComponent(ContactsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
