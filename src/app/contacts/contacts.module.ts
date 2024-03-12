import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { ProfileComponent } from './profile/profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ListComponent,
    CreateComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class ContactsModule { }
