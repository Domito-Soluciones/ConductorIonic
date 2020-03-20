import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Constantes} from '../intercace/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CambiarEstadoNotificacionService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  cambiarEstadoNotificacion(id){
    let params = new HttpParams()
    .set("id", id)
    .set("servicio",id);
    this.respuesta = this.http.post(Constantes.URL_BASE_NOTIFICACION+"ModEstadoNotificacion.php", params, Constantes.httpOptions );
    return this.respuesta;
  }
}
