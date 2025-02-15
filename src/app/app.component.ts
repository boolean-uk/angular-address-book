import { Component } from '@angular/core';
import { LayoutModule } from "./layout/layout.module";
import { MenuComponent } from "./layout/menu/menu.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: false,

})
export class AppComponent {
  title = 'angular-address-book';
}
