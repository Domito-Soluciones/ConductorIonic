import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Constantes } from '../intercace/constantes';

@Injectable({
  providedIn: 'root'
})
export class CambiarEstadoPasajerosService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient) { }

  cambiarEstadoPasajeros(id:string,estado:string){
    let params = new HttpParams()
    .set("idServicio", id)
    .set("estado",estado);
    this.respuesta = this.http.post(Constantes.URL_BASE_SERVICIO+"ModEstadoServicioPasajeros.php", params, Constantes.httpOptions );
    this.respuesta.subscribe(data => {

    }, error => {
     console.log(error);
   });
    return this.respuesta;
  }
}
