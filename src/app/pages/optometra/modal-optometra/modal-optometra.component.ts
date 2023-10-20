import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { DateUser } from '../models/info_user';
import { OptometriaService } from 'src/app/services/optometria.service';

@Component({
  selector: 'app-modal-optometra',
  templateUrl: './modal-optometra.component.html',
  styleUrls: ['./modal-optometra.component.scss'],
})
export class ModalOptometraComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
    private optometriaService: OptometriaService,
    public loadingController: LoadingController
  ) { }
  date_user: DateUser = new DateUser();
  ngOnInit() {
    this.date_user = JSON.parse(sessionStorage.getItem('save_cotizacion')!);
    this.loadDatesPaciente(this.date_user.personaMast)
  }

  setOpen(value : any){
    
  }
  value_searchs : any [] = []
  loadDatesPaciente(data : any){
    this.value_searchs = [
      {
        label: "Tipo de Documento",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.tipoDocumento,
        col:6
      },
      {
        label: "Número de Documento",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.documentoIdentidad,
        col:6
      },
      {
        label: "Nombre",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.nombreCompleto,
        col:6
      },
      {
        label: "Sexo",
        placeholder: null,
        type_input: 'normal',
        type_data: 'date',
        value: data.sexo,
        col:6
      }
      ,
      {
        label: "Enfermedad Preexistentes",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.enfermedadGraveFlag,
        col:6
      },
      {
        label: "Edad",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value : data.actividadEconomica,
        col:6
      },
      {
        label: "Profesión",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value : "Cirujano",
        col:6
      },
      {
        label: "Correo",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value : data.correoElectronico,
        col:6
      }
      
    ]
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },    
  ];
  
  
 

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
      text : 'Si',
      value : 1,      
      col : 4
    },
    {
      text : 'No',
      value : 2,      
      col : 4
    }
  ]

  un_solo_ojo2 = [
    {
      text : 'Si',
      value : 1,      
      col : 4
    },
    {
      text : 'No',
      value : 2,      
      col : 4
    },
    {
      text : 'Gas Permeable',
      value : 2,      
      col : 4
    },
    {
      text : 'Blandos Esfericos',
      value : 2,      
      col : 4
    },
    {
      text : 'Blandos Tóricos',
      value : 2,      
      col : 4
    }
  ]

  save_dates (){
    const data = {
      nuevaMedicion : this.date_user.ultimaMedicion,
      personaMast : this.date_user.personaMast
    }
    this.optometriaService.saveInfoUser(data).subscribe(
      response => {
        this.date_user = response
        console.log(response);

        this.hide()
      }, err => {
        console.log(err);
        this.hide()
      }
    ) 
  }

  async smsError(){
    const alert = await this.alertCtrl.create({
      header: "SE GUARDARON CORECTAMENTE LOS CAMBIOS" ,
      //subHeader: "this.messageError",
      cssClass: 'custom-alert',
      buttons: [
        {
          text: 'OK',
          handler: data => {
            this.cancel()
          }
        },
      ],
    });

    await alert.present();
  }
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
