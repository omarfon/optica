import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { PreciosService } from 'src/app/services/precios.service';


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
  public estructura: any;
  public diseno = [];
  public tecnologys: any = [];
  public tratamientos: any = [];
  public producto:any;
  constructor(public presciosSrv: PreciosService, public alert: AlertController) { }

  ngOnInit() {
    this.presciosSrv.getDataTotal().subscribe((data:any) => {
      this.estructura = data;
      console.log('estructura:',this.estructura);
    })


  }

  getData(){
    this.data = this.datosUsuario
  }

  saveNewUser(){
    this.data.celular = this.celular;
    this.data.email = this.email;
    console.log(this.data);
    localStorage.setItem('user',JSON.stringify(this.data));
    console.log((localStorage.getItem('user')));
  }

  obtenerTecnologia(event:any){
    const valor = event.target.value;
    console.log(valor)
    const listNew = this.estructura.filter((x:any) => x.DISENO === valor);
    console.log('DISENO',listNew);
    const tecnology = listNew.map((e:any) => e.TECNOLOGIA)
    
    this.tecnologys = Array.from(new Set(tecnology));
    console.log('TECNOLOGIAS',this.tecnologys );

  }

  obtenerTratamientos(event:any){
    const tecno = event.target.value;
    console.log(tecno, event, this.estructura);

    this.tratamientos = this.estructura.filter((x:any) => x.TECNOLOGIA === tecno);
    console.log('Lista de tratamientos:',tecno, this.tratamientos);

    this.tratamientos = this.tratamientos.map((e:any) => e.TRATAMIENTOS)
    
    this.tratamientos = Array.from(new Set(this.tratamientos));
    console.log('TRATAMIENTOS',this.tratamientos );
  }

  obtenerProductos(event:any){
    const prod = event.target.value;
    console.log(prod);
    this.producto = this.estructura.filter((x:any) => x.TRATAMIENTOS === prod);
    console.log(prod, this.producto);
  }

  async saveDate(){
    let alert = await this.alert.create({
      header:'Transacción Creada',
      subHeader: 'Se ha guardado correctamente',
      message:'Se ha enviado la boleta al mail magentadin@gmail.com',
      buttons:[{
        text:'Entendido',
        
      }]
      
    });
    await alert.present();
  }

}
