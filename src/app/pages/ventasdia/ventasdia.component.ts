import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ventasdia',
  templateUrl: './ventasdia.component.html',
  styleUrls: ['./ventasdia.component.scss'],
})
export class VentasdiaComponent  implements OnInit {
  
  constructor(public router: Router) { }

  ngOnInit() {}
  clients = [
    { id: 1, nombre: "Aurora López García" },
    { id: 2, nombre: "Sebastián Morales Díaz" },
    { id: 3, nombre: "Valentina Rodríguez Fernández" },
    { id: 4, nombre: "Javier Ramírez Martínez" },
    { id: 5, nombre: "Camila Herrera Pérez" },
    { id: 6, nombre: "Mateo González Ruiz" },
    { id: 7, nombre: "Isabella Martínez Sánchez" },
    { id: 8, nombre: "Juan Carlos Pérez Gómez" },
    { id: 9, nombre: "Daniela Sánchez López" },
    { id: 10, nombre: "Felipe Castro Ramírez" },
  ];

  goToAtentionOfClient(item : any){
    this.router.navigate(['home/ventasdia/' + item.id])
    console.log("ELEGIDO: " , item);
    
  }
}
