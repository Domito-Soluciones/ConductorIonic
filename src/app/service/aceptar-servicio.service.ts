import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { Observable, observable } from 'rxjs';
import { Constantes } from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class AceptarServicioService {
  
  respuesta:Observable<any>;
  
  constructor(private http: HttpClient) { 
  }

  cambiarEstadoServicio(id,estado,observacion){
    let params = new HttpParams()
    .set("id", id)
    .set("estado",estado)
    .set("observacion",observacion);
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"ModEstadoServicio.php", params, Constantes.httpOptions );
    return this.respuesta;
  }
}
