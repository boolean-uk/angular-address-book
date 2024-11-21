import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AddComponent } from "./add/add.component";
import { ListComponent } from "./list/list.component";
import { ViewComponent } from './view/view.component';
import { EditComponent } from "./edit/edit.component";


@NgModule({
    declarations: [AddComponent, ListComponent, ViewComponent, EditComponent],
    imports: [CommonModule, RouterModule, ReactiveFormsModule],
    exports: [AddComponent, ListComponent, ViewComponent, EditComponent],
})

export class ContactsModule {}