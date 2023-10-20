import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { DateUser } from 'src/app/pages/optometra/models/info_user';

@Component({
  selector: 'app-modal-detail-register',
  templateUrl: './modal-detail-register.component.html',
  styleUrls: ['./modal-detail-register.component.scss'],
})
export class ModalDetailRegisterComponent  implements OnInit {

  
  constructor(
    private modalCtrl: ModalController,
    public alertCtrl: AlertController,
  ) { }
  date_user : DateUser = new DateUser()
  ngOnInit() {
    this.date_user = JSON.parse(sessionStorage.getItem('view_atencion_cliente')!);
  }
  
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
  detail_lente = [
    {
      label: "Familia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Material",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Diseño",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tratamientos",
      placeholder: null,
      type_input: 'date',
      type_data: 'date',
      col:6
    }
    ,
    {
      label: "Gama",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Antirreflejos",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tecnología",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Obsequio",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
   
  ]
  value_searchs = [
    {
      label: "Compañia",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Almacén",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Ruc - Dni",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Fecha de entrega",
      placeholder: null,
      type_input: 'date',
      type_data: 'date',
      col:6
    },
    {
      label: "Tipo de Factura",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
   
    {
      label: "Documento",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tipo de venta",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Publicidad",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    
    
   
    {
      label: "Vendedor",
      placeholder: null,
      type_input: 'select',
      type_data: 'text',
      col:6
    },
    {
      label: "Tipo de Pago",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:4
    },
    {
      label: "-",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:2
    },
   
    {
      label: "Cancelado",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:6
    },
    {
      label: "Banco",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:4
    }
    ,
    {
      label: "-",
      placeholder: null,
      type_input: 'normal',
      type_data: 'text',
      col:2
    }
    ,
   
    
  ]
  option_checkboxs = [
    {
      text : "Gas Permeable",
      col:4
    },
    {
      text : "Blandos esféricos",
      col:4
    },
    {
      text : "Blandos Tóricos",
      col:4
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
