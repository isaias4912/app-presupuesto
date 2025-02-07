import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CabeceraComponent } from "./cabecera/cabecera.component";
import { FormularioComponent } from "./formulario/formulario.component";
import { EgresoComponent } from "./egreso/egreso.component";
import { IngresoComponent } from "./ingreso/ingreso.component";
import { Ingreso } from './ingreso/ingreso.model';
import { IngresoService } from './ingreso/ingreso.service';
import { EgresoService } from './egreso/egreso.service';
import { Egreso } from './egreso/egreso.model';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CabeceraComponent, FormularioComponent, EgresoComponent, IngresoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  ingreso: Ingreso[]=[];
  egreso:Egreso[]=[];


  constructor(
    private ingresoService: IngresoService,
    private egresoService: EgresoService,){
      this.ingreso= this.ingresoService.ingreso;
      this.egreso=this.egresoService.egreso

    }

    getIngresoTotal(){
      let ingresoTotal:number=0;
      this.ingreso.forEach(ingreso=>{ingresoTotal+=ingreso.valor

      });
      return ingresoTotal;
    }
   getEgresoTotal(){
    let egresoTotal:number=0;
    this.egreso.forEach(egreso=>{egresoTotal+=egreso.valor;

    });
    return egresoTotal;
   }
   getPorcentajeTotal(){
    return this.getEgresoTotal()/this.getIngresoTotal();
   }
   getPresupuestoTotal(){
    return this.getIngresoTotal()-this.getEgresoTotal();
   }



}
