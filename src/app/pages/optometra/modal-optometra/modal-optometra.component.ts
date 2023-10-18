import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-optometra',
  templateUrl: './modal-optometra.component.html',
  styleUrls: ['./modal-optometra.component.scss'],
})
export class ModalOptometraComponent  implements OnInit {

  constructor(
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
  ) { }

  ngOnInit() {}

  setOpen(value : any){
    
  }
  cancel() {
    return this.modalCtrl.dismiss(null, 'cancel');
  }
  documents = [
    { codigo: '1', nombre: 'DNI' },
    { codigo: '2', nombre: 'Carnet Extrangeria' },
    { codigo: '3', nombre: 'Pasaporte' },    
  ];
  
  value_searchs = [
    {
      label: "Tipo de Documento",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Número de Documento",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Nombre",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Sexo",
      placeholder: null,
      type_input: 'select',
      type_data: 'date',
      col:6
    }
    ,
    {
      label: "Enfermedad Preexistentes",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Edad",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Profesión",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Correo",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    }
    
  ]
  date_cotizacion = [
    {
      type : "LEJOS",
      values : [

      ]
    },
    {
      type : "CERCA",
      values : [
        
      ]
    }
  ]

  values = [
    {
      values : '-0.5'
    },
    {
      values : '1'
    },{
      values : '1.5'
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
}
