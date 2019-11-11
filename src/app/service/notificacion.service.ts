import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Constantes} from '../intercace/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  obtenerNotificaciones() {
    let params = new HttpParams()
    .set("llave", Constantes.conductor.id);
    this.respuesta = this.http.post(Constantes.URL_BASE_NOTIFICACION+"GetNotificaciones.php", params, Constantes.httpOptions );
    console.log(this.respuesta);
    return this.respuesta;
  }
}
