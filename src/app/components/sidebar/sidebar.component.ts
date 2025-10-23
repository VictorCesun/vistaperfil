import { Component } from '@angular/core';
import { ProfileComponent } from "./profile/profile.component";
import { OpcionComponent } from "./opcion/opcion.component";

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [ProfileComponent, OpcionComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
