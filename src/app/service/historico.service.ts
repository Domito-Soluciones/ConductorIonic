import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Constantes} from '../intercace/constantes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) {}

  obtenerHistorico() {
    let today = new Date();
    let mm = today.getMonth() + 1;
    let yyyy = today.getFullYear();
    let fechaDesde = "01/" + (mm-2) + "/" + yyyy;
    let fechaHasta = "01/" + mm + "/" + yyyy;
    let params = new HttpParams()
    .set("desde", fechaDesde)
    .set("hasta", fechaHasta)
    .set("conductor", Constantes.conductor.id);
  this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"GetServiciosHistoricos.php", params, Constantes.httpOptions );
  this.respuesta.subscribe(data => {

  }, error => {
   console.log(error);
 });  return this.respuesta;
}
}
