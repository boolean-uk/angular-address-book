import { Component } from '@angular/core'; // Import Component decorator from Angular core
import { ContactService } from '../contact-service'; // Import ContactService
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Import FormGroup, FormBuilder, and Validators from Angular forms module
import { Contact } from '../contact-model'; // Import Contact model
import { Router } from '@angular/router'; // Import Router from Angular router module

@Component({
  selector: 'app-create-contact', // Define the component selector
  templateUrl: './create-contact.component.html', // Define the component template file
  styleUrls: ['./create-contact.component.css'], // Define the component's CSS file
})
export class CreateContactComponent { // Define the component class
  contactForm: FormGroup; // Define a variable to hold the contact form

  constructor(
    private contactService: ContactService, // Inject ContactService
    private formBuilder: FormBuilder, // Inject FormBuilder
    private router: Router // Inject Router
  ) {
    // Initialize the contact form using FormBuilder
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required], // Initialize firstName form control with Validators.required
      lastName: ['', Validators.required], // Initialize lastName form control with Validators.required
      street: ['', Validators.required], // Initialize street form control with Validators.required
      city: ['', Validators.required], // Initialize city form control with Validators.required
    });
  }

  // Method to handle form submission
  onSubmit() {
    // Check if the contact form is valid
    if (this.contactForm.valid) {
      // Create a new Contact object with form values
      const newContact: Contact = {
        id: 0, // Assuming you're assigning the id in the service
        ...this.contactForm.value // Spread the form values into the new contact object
      };

      // Add the new contact using the contact service and capture the added contact
      const addedContact = this.contactService.addContact(newContact);
      
      // Reset the contact form after successful addition
      this.contactForm.reset();

      // Navigate to the contacts route after adding the contact
      this.router.navigate(['/contacts']);
    }
  }
}
