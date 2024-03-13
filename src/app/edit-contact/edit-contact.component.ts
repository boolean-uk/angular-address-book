import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact-service'; // Import the contact service
import { ActivatedRoute, Router } from '@angular/router'; // Import ActivatedRoute and Router
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import FormGroup, FormBuilder, and Validators from Angular forms module
import { Contact } from '../contact-model'; // Import the Contact model

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  contact: Contact | undefined; // Define a variable to hold the contact details
  contactForm: FormGroup; // Define a variable to hold the contact form
  error: string | null = null; // Define a variable to hold error messages, initially set to null

  constructor(
    private contactService: ContactService, // Inject ContactService
    private route: ActivatedRoute, // Inject ActivatedRoute
    private router: Router, // Inject Router
    private formBuilder: FormBuilder // Inject FormBuilder
  ) {
    // Initialize the contact form using FormBuilder
    this.contactForm = this.formBuilder.group({
      id: [null, Validators.required], // Initialize id form control with Validators.required
      firstName: ['', Validators.required], // Initialize firstName form control with Validators.required
      lastName: ['', Validators.required], // Initialize lastName form control with Validators.required
      street: ['', Validators.required], // Initialize street form control with Validators.required
      city: ['', Validators.required], // Initialize city form control with Validators.required
    });
  }

  ngOnInit() {
    // Subscribe to route parameters changes to load the contact
    this.route.params.subscribe((params) => {
      const id = +params['id']; // Extract the id parameter from the route
      this.loadContact(id); // Load the contact details based on the extracted id
    });
  }

  // Method to load contact details based on the provided id
  loadContact(id: number) {
    // Retrieve contact details from the contact service based on the provided id
    this.contact = this.contactService.getContactById(id);
    // If contact is not found, set an error message
    if (!this.contact) {
      this.error = 'Contact not found.';
      return; // Exit the method
    }
    // Patch the contact details to the contact form
    this.contactForm.patchValue(this.contact);
  }

  // Method to handle form submission
  onSubmit() {
    // Check if the contact form is valid
    if (this.contactForm.valid) {
      try {
        // Update the contact details using the contact service
        this.contactService.updateContact(this.contactForm.value);
        // Navigate to the contacts route after successful update
        this.router.navigate(['/contacts']);
      } catch (error: any) {
        // If an error occurs during contact update, set an error message
        this.error = error.message || 'An unknown error occurred';
      }
    }
  }
}
