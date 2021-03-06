import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Constantes} from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class ProgramadoService {

  respuesta:Observable<any>;
  servicio:any[] = [];

  constructor(private http: HttpClient) { }

  obtenererviciosProgramado(idServicio:string) {
    let params = new HttpParams()
    .set("conductor", Constantes.conductor.id)
    .set("id", idServicio);
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"GetServicioProgramado.php", params, Constantes.httpOptions );
    return this.respuesta;
  }

}
