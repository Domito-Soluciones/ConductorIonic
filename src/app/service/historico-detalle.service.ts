import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Constantes } from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class HistoricoDetalleService {

  id:string
  respuesta:Observable<any>;

  constructor(private http: HttpClient) {}

  obtenerHistoricoDetalle(id:string) {
    let params = new HttpParams()
    .set("id", id);
  this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"GetServicioHistorico.php", params, Constantes.httpOptions );
 return this.respuesta;
}
}
