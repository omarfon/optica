import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { VentasDiaService } from 'src/app/services/ventas-dia.service';

@Component({
  selector: 'app-ventasdia',
  templateUrl: './ventasdia.component.html',
  styleUrls: ['./ventasdia.component.scss'],
})
export class VentasdiaComponent implements OnInit {

  constructor(
    public router: Router,
    public loadingController: LoadingController,
    public ventasDiaService: VentasDiaService
  ) { }

  ngOnInit() {
    this.getVentasDia()
   }

  clients: any[] = []
  getVentasDia() {
    this.show()    

    this.ventasDiaService.getVentas().subscribe(
      response => {

        this.clients = response
        console.log(response);

        this.hide()

      }, err => {
        console.log(err);
        this.hide()
      }
    )
  }


  goToAtentionOfClient(item: any) {
    this.router.navigate(['home/ventasdia/' + '40669'])
    console.log("ELEGIDO: ", item);
  }
  // LOADINGS
  async show() {
    const loading = await this.loadingController.create({
      message: 'Cargando...', // Puedes personalizar el mensaje
      duration: 2000, // Duración en milisegundos. O utiliza spinner: 'crescent' para que sea indefinido hasta que lo ocultes manualmente.
    });

    await loading.present();
  }

  async hide() {
    await this.loadingController.dismiss();
  }
}
