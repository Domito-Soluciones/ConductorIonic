import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constantes} from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class ProgramadodetalleService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  obtenererviciosProgramadoDetalle() {
    let params = new HttpParams()
    .set("conductor", Constantes.conductor.id)
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"GetServiciosProgramados.php", params, Constantes.httpOptions );
    return this.respuesta;
  }

}
