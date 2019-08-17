import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constantes} from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class ServiciosProgramadosService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  getServiciosProgramados() {
    let params = new HttpParams()
    .set("conductor", Constantes.conductor.id)
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"ModEstadoMovil.php", params, Constantes.httpOptions );
    return this.respuesta;
  }

}
