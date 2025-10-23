import { Component } from '@angular/core';
import { RouterOutlet } from "@angular/router";
import { SidebarComponent } from "../sidebar/sidebar.component";
import { SidebarMovilComponent } from "../sidebar-movil/sidebar-movil.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, SidebarComponent, SidebarMovilComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
