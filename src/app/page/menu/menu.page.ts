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
        title: 'Programdos',
        url: '/menu/programado'
      } ,
      {
        title: 'Historico',
        url: '/menu/historico'
      } ,
      {
        title: 'Producción',
        url: '/menu/produccion'
      },
      {
        title: 'Configuración',
        url: '/menu/configuracion'
      }
  ];

  selectedPath = '';

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      this.selectedPath = event.url;
      console.log(this.selectedPath);
    }
    )};

  ngOnInit() {
  }

}
