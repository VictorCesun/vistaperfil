import { Component } from '@angular/core';
import { ProfileComponent } from "../sidebar/profile/profile.component";
import { OpcionComponent } from "../sidebar/opcion/opcion.component";

@Component({
  selector: 'app-sidebar-movil',
  standalone: true,
  imports: [ProfileComponent, OpcionComponent],
  templateUrl: './sidebar-movil.component.html',
  styleUrl: './sidebar-movil.component.css'
})
export class SidebarMovilComponent {

}
