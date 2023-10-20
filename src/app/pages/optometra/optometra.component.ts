import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonModal, ModalController } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { ModalOptometraComponent } from './modal-optometra/modal-optometra.component';
import { OptometriaService } from 'src/app/services/optometria.service';
import { LoadingController } from '@ionic/angular';
import { DateUser } from './models/info_user';

@Component({
  selector: 'app-optometra',
  templateUrl: './optometra.component.html',
  styleUrls: ['./optometra.component.scss'],
})
export class OptometraComponent implements OnInit {

  documents = [
    { codigo: 'D', nombre: 'DNI' },
    { codigo: 'C', nombre: 'Carnet Extrangeria' },
    { codigo: 'P', nombre: 'Pasaporte' },
  ];

  detalles_rangos = [

    { codigo: 'R62', nombre: 'R62' },
    { codigo: '+1.50', nombre: '+1.50' },
    { codigo: 'PR', nombre: 'PR' },
    { codigo: 'estado', nombre: 'estado' },

  ]
  searched_pacient: boolean = false;
  constructor(
    public router: Router,
    private modalCtrl: ModalController,
    private optometriaService: OptometriaService,
    public loadingController: LoadingController
  ) { }

  ngOnInit() { }

  exit_menu() {
    this.router.navigate(['/home'])
  }
  dates_searchs = [
    {
      name: 'PR',
      values: 'PR'
    },
    {
      name: 'R62',
      values: 'R62'
    },
    {
      name: '+1.50',
      values: '+1.50'
    },
  ]

  values = [
    {
      name: '+1.25',
      values: '+1.25'
    },
    {
      name: '+1.50',
      values: '+1.50'
    }, {
      name: "-0.25",
      values: "-0.25"
    }, {
      name: "+0.00",
      values: "+0.00"
    }, {
      name: "+0.00",
      values: null,
    }, {
      name: '20/20',
      values: "20/20"
    }
  ]

  un_solo_ojo = [
    {
      text: 'Si',
      value: 1,
      col: 4
    },
    {
      text: 'No',
      value: 2,
      col: 4
    }
  ]

  un_solo_ojo2 = [
    {
      text: 'Si',
      value: 1,
      col: 4
    },
    {
      text: 'No',
      value: 2,
      col: 4
    },
    {
      text: 'Gas Permeable',
      value: 2,
      col: 4
    },
    {
      text: 'Blandos Esfericos',
      value: 2,
      col: 4
    },
    {
      text: 'Blandos Tóricos',
      value: 2,
      col: 4
    }
  ]
  type_documento: any;
  num_documento: any;


  date_user: DateUser = new DateUser();
  // BUSCAR PACIENTE
  searhPaciente() {
    this.show()
    /* const data = {
      documento: this.num_documento,// "10193827",
      tipodocumento: this.type_documento //"D"
    } */
    const data = {
      documento: "10193827",// "10193827",
      tipodocumento: "D" //"D"
    }
    console.log(data);
    
    this.optometriaService.getInfoUser(data).subscribe(
      response => {

        this.date_user = response
        console.log(response);

        this.hide()
        this.searched_pacient = true
      }, err => {
        console.log(err);
        this.hide()
      }
    )
  }


  async openModal() {
    sessionStorage.setItem('save_cotizacion', JSON.stringify(this.date_user));
    const modal = await this.modalCtrl.create({
      component: ModalOptometraComponent,
      cssClass: 'detail-optometra',
      backdropDismiss: true
    });
    modal.present();
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
