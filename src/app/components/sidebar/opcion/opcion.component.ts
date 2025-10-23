import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-opcion',
  standalone: true,
  imports: [],
  templateUrl: './opcion.component.html',
  styleUrl: './opcion.component.css'
})
export class OpcionComponent {

  @Input() icon: string='';
  @Input() texto: string='';
  @Input() urlDestino: string='';
  @Input() isActive: boolean=false;



}
