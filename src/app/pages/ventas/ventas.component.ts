import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ventas',
  templateUrl: './ventas.component.html',
  styleUrls: ['./ventas.component.scss'],
})
export class VentasComponent  implements OnInit {
  public celular:any;
  public email: any;
  public data:any;
  datosUsuario={
    names:"Omar Miguel",
    apellidoPaterno:"Fonseca",
    apellidoMaterno:"García",
    genero:"Masculino",
    numberDocument:"40283800",
    direccion:"Los rubies 388 dpto 6",
    fechaNacimiento:"12-01-1979"
  }
  constructor() { }

  ngOnInit() {}

  getData(){
    this.data = this.datosUsuario
  }

  saveData(){
    this.data.push(this.celular,this.email);
    console.log(this.data);
  }
}
