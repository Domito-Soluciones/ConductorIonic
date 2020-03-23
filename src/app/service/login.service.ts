import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import {Constantes} from '../intercace/constantes';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  respuesta:Observable<any>;

  constructor(private http: HttpClient,private router: Router) {

  }

  login(usuario:string,clave:string) {
    let params = new HttpParams()
      .set("usuario", usuario)
      .set("password", btoa(clave));
    this.respuesta = this.http.post(Constantes.URL_BASE_CONDUCTOR+"Login.php", params, Constantes.httpOptions );
    this.respuesta.subscribe(data => {

    }, error => {
     console.log(error);
   });
    return this.respuesta;
  }


 
}
