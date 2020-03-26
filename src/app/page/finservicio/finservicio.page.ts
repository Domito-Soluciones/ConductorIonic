import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AceptarServicioService } from 'src/app/service/aceptar-servicio.service'
import { CambiarEstadoPasajerosService } from 'src/app/service/cambiar-estado-pasajeros.service';
import { Constantes } from 'src/app/intercace/constantes';

@Component({
  selector: 'app-finservicio',
  templateUrl: './finservicio.page.html',
  styleUrls: ['./finservicio.page.scss'],
})
export class FinservicioPage implements OnInit {

  id:string;
  cliente:string;
  fecha:string;
  hora:string;
  tarifa:string;

  @ViewChild("observacion", {static: false}) observacion: ElementRef;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private aceptarServicioService: AceptarServicioService,
              private cambiarEstadoPasajerosService:CambiarEstadoPasajerosService) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = this.activatedRoute.snapshot.paramMap.get("id");
      this.cliente = this.activatedRoute.snapshot.paramMap.get("cliente");
      this.fecha = this.activatedRoute.snapshot.paramMap.get("fecha");
      this.hora = this.activatedRoute.snapshot.paramMap.get("hora");
      this.tarifa = this.activatedRoute.snapshot.paramMap.get("tarifa");
      console.log(this.id+" "+this.cliente+" "+this.fecha+" "+this.hora+" "+this.tarifa);
    });
  }

  finalizar(){
    let respuesta = this.aceptarServicioService.cambiarEstadoServicio(this.id,"5","");
    respuesta.subscribe(data => {
      this.router.navigate(['./menu/programado']);
    }, error => {
       console.log(error);
     });
  }

  volver(){
    this.router.navigate(['./menu/programado']);
  }

}
