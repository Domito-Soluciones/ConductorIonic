import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class CambiarEstadoPasajeroService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  cambiarEstadoPasajero(id:string,idPasajero:string,estado:string,observacion:string,tipo:any){
    let params = new HttpParams()
    .set("idServicio", id)
    .set("idPasajero",idPasajero)
    .set("estado",estado)
    .set("observacion",observacion)
    .set("tipo",tipo)
    .set("lat","0")
    .set("lon","0");
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"ModEstadoServicioPasajero.php", params, Constantes.httpOptions );
    return this.respuesta;
  }
}
