import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './layout/menu/menu.component';
import { ContactListComponent } from './layout/contact-list/contact-list.component';
import { NewContactComponent } from './layout/new-contact/new-contact.component';
import { ViewContactComponent } from './layout/view-contact/view-contact.component';

const routes: Routes = [
  { path: 'home',
    component: MenuComponent
  },
  { path: 'contact-list',
    component: ContactListComponent
  },
  { path: 'new-contact',
    component: NewContactComponent
  },
  { path: 'view-contact/:id',
    component: ViewContactComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
