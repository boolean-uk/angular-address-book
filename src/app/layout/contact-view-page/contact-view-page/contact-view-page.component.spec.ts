import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactViewPageComponent } from './contact-view-page.component';

describe('ContactViewPageComponent', () => {
  let component: ContactViewPageComponent;
  let fixture: ComponentFixture<ContactViewPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactViewPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContactViewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
