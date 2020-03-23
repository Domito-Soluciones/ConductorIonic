import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  pages = [
      {
        title: 'Programados',
        url: '/menu/programado',
        img : './assets/calendario.png'
      } ,
      {
        title: 'Historico',
        url: '/menu/historico',
        img : './assets/historial.png'
      } ,
      {
        title: 'Producción',
        url: '/menu/produccion',
        img : './assets/produccion.png'
      },
      {
        title: 'Configuración',
        url: '/menu/configuracion',
        img : './assets/configuracion.png'
      },
      {
        title: 'Cerrar Sesión',
        url: '../login',
        img : './assets/logout.png'
      }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
    }
    )};

  ngOnInit() {
  }

}
