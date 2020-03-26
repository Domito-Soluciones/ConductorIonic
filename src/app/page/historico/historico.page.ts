import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../../service/historico.service';
import { Observable } from 'rxjs';
import { ToastController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.page.html',
  styleUrls: ['./historico.page.scss'],
})
export class HistoricoPage implements OnInit {

  imagen = "./assets/historial.png";
  respuestaHistorico:Observable<any>;
  historico:any[];

  constructor(private activatedRoute: ActivatedRoute, 
    private router: Router,
    private historicoService:HistoricoService,
    private toastController: ToastController  ) { 
      this.obtenerHistorico();
    }

  ngOnInit() {
  }

  obtenerHistorico(){
    this.respuestaHistorico = this.historicoService.obtenerHistorico();
    this.respuestaHistorico.subscribe(data => {
      this.historico = data;
      if(this.historico.length === 0){
        this.mostrarMensaje("No hay historial registrado");
      }
    }, error => {
         console.log(error);
   });
  }  

  async mostrarMensaje(mensaje:string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000
    });
    toast.present();
  }

  verDetalle(idServicio:string){
    this.router.navigate(['./historicodetalle/'+idServicio]);
  }

}
