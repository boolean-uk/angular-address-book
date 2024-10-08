import { NgModule } from "@angular/core";
import { AddContactComponent } from "../add-contact/add-contact.component";
import { ContactListComponent } from "../contact-list/contact-list.component";
import { ContactComponent } from "./contact.component";
import { RouterModule } from "@angular/router";
import { ReactiveFormsModule } from "@angular/forms";
import { NgFor } from "@angular/common";

@NgModule({
    declarations: [AddContactComponent, ContactListComponent, ContactComponent],
    imports: [ReactiveFormsModule, RouterModule, NgFor],
    exports: [AddContactComponent, ContactListComponent, ContactComponent]
})
export class ContactModule {}