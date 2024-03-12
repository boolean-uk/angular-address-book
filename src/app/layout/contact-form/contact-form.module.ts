import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactFormViewComponent } from './contact-form-view/contact-form-view.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [],
  bootstrap: [AppComponent],
})
export class ContactFormModule {}
