import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class DesasignarServicioService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  desasignarServicio(idServicio){
      let params = new HttpParams()
      .set("id", idServicio+"")
      .set("estado","1")
      .set("observacion","");
      this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"ModEstadoServicio.php", params, Constantes.httpOptions );
      console.log(this.respuesta);
      return this.respuesta;
  }
}
