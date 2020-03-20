import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Constantes } from 'src/app/intercace/constantes';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LaunchNavigator, LaunchNavigatorOptions } from '@ionic-native/launch-navigator/';

@Component({
  selector: 'app-pasajero',
  templateUrl: './pasajero.page.html',
  styleUrls: ['./pasajero.page.scss'],
})
export class PasajeroPage implements OnInit {

  servicio:any[] = [];
  idServicio:any;

  constructor(private activatedRoute: ActivatedRoute, 
              private router: Router,
              private callNumber: CallNumber
              /*private launchNavigator: LaunchNavigator*/) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.idServicio = this.activatedRoute.snapshot.paramMap.get("id")
      this.cargarPasajeros();
  });

  }

  cargarPasajeros(){
    for(let i = 0; i < Constantes.programados.length;i++){
      let aux = Constantes.programados[i];
      if(aux.servicio_id === this.idServicio){
        this.servicio.push(aux);
      }
    }

    console.log(this.servicio.length);

  }

  volver(){
    this.router.navigate(['./menu/programado']);
  }

  llamar(numero){
    this.callNumber.callNumber(numero, true)
     .then(res => console.log('Launched dialer!', res))
     .catch(err => console.log('Error launching dialer', err));
  }

  navegar(destino){
   /* let options: LaunchNavigatorOptions = {
      start: 'London, ON'
      //app: LaunchNavigator.APP.GOOGLE_MAPS 
    }
    
    this.launchNavigator.navigate(destino, options)
      .then(
        success => console.log('Launched navigator'),
        error => console.log('Error launching navigator', error)
      );*/
  }
}

