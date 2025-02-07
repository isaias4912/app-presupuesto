import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cabecera.component.html',
  styleUrl: './cabecera.component.css'
})
export class CabeceraComponent {
  @Input()presupuestoTotal !: number;
  @Input()ingresoTotal !: number;
  @Input()egresoTotal !: number;
  @Input()porcentajeTotal !: number;

}
