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
    console.log(this.date_user);
    
    this.loadValueSearchs(this.date_user.personaMast);
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
  value_searchs: any[] = []
  loadValueSearchs(data) {
    this.value_searchs = [
      {
        label: "Ruc / Dni Cliente",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.documento,
        col: 6
      },
      {
        label: "Nombre cliente",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.nombres,
        col: 6
      },
      {
        label: "Compañia",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "Royal",
        col: 6
      },
      {
        label: "Fecha",
        placeholder: null,
        type_input: 'normal',
        type_data: 'date',
        value: data.ingresoFechaRegistro,
        col: 6
      }
      ,
      {
        label: "Almacén",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.direccion,
        col: 6
      },
      {
        label: "00160",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "000001'",
        col: 6
      },
      {
        label: "Moneda",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "SOLES",
        col: 6
      },
      {
        label: "Tipo de Factura",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "BOLETA",
        col: 6
      },
      {
        label: "Documento",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.documento,
        col: 6
      },
      {
        label: "Tipo de venta",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.actividadEconomica,
        col: 6
      },
      {
        label: "Edad",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: "45",
        col: 3
      },
      {
        label: "Celular",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.telefono,
        col: 3
      }
      ,
      {
        label: "Correo",
        placeholder: null,
        type_input: 'normal',
        type_data: 'text',
        value: data.correoElectronico,
        col: 6
      }

    ]
  }
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
