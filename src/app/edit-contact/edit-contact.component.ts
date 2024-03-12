import { Component, OnInit } from '@angular/core';
import { GlobalArrayService } from '../global-array.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-contact',
  templateUrl: './edit-contact.component.html',
  styleUrls: ['./edit-contact.component.css'],
})
export class EditContactComponent implements OnInit {
  id!: number;
  editForm!: FormGroup;
  hasData: boolean = false;
  constructor(
    private globalArrayService: GlobalArrayService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10); // Access route parameter
    this.editForm = this.fb.group({
      firstName: [this.contact.firstName, Validators.required],
      lastName: [this.contact.lastName, Validators.required],
      street: [this.contact.street, Validators.required],
      city: [this.contact.city, Validators.required],
    });
  }

  get contact() {
    let contactTemp = this.globalArrayService.getById(this.id);
    if (!contactTemp) {
      this.hasData = false;
      return {};
    } else {
      this.hasData = true;
      return this.globalArrayService.getById(this.id);
    }
  }

  onSubmit() {
    if (this.editForm.valid) {
      const formData = this.editForm.value;
      this.globalArrayService.editItem(this.id, formData);
      this.editForm.reset();
      this.router.navigate(['/home']);
    }
  }
}
