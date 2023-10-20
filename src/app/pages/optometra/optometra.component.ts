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
    this.date_user = {
      "personaMast": {
        "persona": 20465,
        "origen": "LIMA",
        "apellidoPaterno": "TALANCHA                      ",
        "apellidoMaterno": "VELA                          ",
        "nombres": "KARIN                                   ",
        "nombreCompleto": "TALANCHA VELA, KARIN                                                                                ",
        "busqueda": "TALANCHA VELA, KARIN                                                                                ",
        "tipoDocumento": "D",
        "documento": "10193827            ",
        "codigoBarras": null,
        "tipoPersonaUsuario": null,
        "esCliente": "S",
        "esEmpleado": "N",
        "esOtro": "N",
        "tipoPersona": "N",
        "fechaNacimiento": null,
        "ciudadNacimiento": null,
        "sexo": "M",
        "nacionalidad": "COLOMBIA            ",
        "estadoCivil": "S",
        "nivelInstruccion": null,
        "direccion": "T",
        "codigoPostal": null,
        "departamento": null,
        "telefono": null,
        "fax": null,
        "documentoFiscal": null,
        "documentoIdentidad": "10193827            ",
        "carnetExtranjeria": null,
        "documentoMilitarFA": null,
        "tipoBrevete": null,
        "brevete": null,
        "pasaporte": null,
        "nombreEmergencia": null,
        "direccionEmergencia": null,
        "telefonoEmergencia": null,
        "bancoMonedaLocal": null,
        "tipoCuentaLocal": null,
        "cuentaMonedaLocal": null,
        "bancoMonedaExtranjera": null,
        "tipoCuentaExtranjera": null,
        "cuentaMonedaExtranjera": null,
        "personaAnt": null,
        "correoElectronico": "FacturacionElectronica@corpmezones.pe",
        "clasePersonaCodigo": null,
        "estado": "A",
        "ultimoUsuario": null,
        "ultimaFechaModif": null,
        "cuentaMonedaLocal_tmp": null,
        "cuentaMonedaExtranjera_tmp": null,
        "enfermedadGraveFlag": "N",
        "provincia": null,
        "tarjetadeCredito": null,
        "flagActualizacion": null,
        "ingresoFechaRegistro": "2019-03-05T10:44:35.78",
        "ingresoAplicacionCodigo": "CO",
        "ingresoUsuario": "AGARCIA             ",
        "pymeFlag": "N",
        "grupoEmpresarial": null,
        "celular": null,
        "celularEmergencia": null,
        "lugarNacimiento": null,
        "parentescoEmergencia": null,
        "personaClasificacion": null,
        "direccionReferencia": "S",
        "flagRepetido": null,
        "codDiscamec": null,
        "fecIniDiscamec": null,
        "fecFinDiscamec": null,
        "codLicArma": null,
        "marcaArma": null,
        "serieArma": null,
        "inicioArma": null,
        "vencimientoArma": null,
        "seguroDiscamec": null,
        "correlativoSCTR": null,
        "sunatNacionalidad": null,
        "sunatVia": null,
        "sunatZona": null,
        "sunatUbigeo": null,
        "sunatDomiciliado": null,
        "nombresemp": null,
        "brevete_fecvcto": null,
        "paisEmisor": null,
        "codigoLDN": null,
        "carnetextranjeria_fecvcto": null,
        "tipoDocumentoIdentidad": null,
        "codAdministEps": null,
        "codAdministCaja": null,
        "codAdministPension": null,
        "codAdministCesantia": null,
        "actividadEconomica": "44  ",
        "codigoInterbancario": null,
        "sunatNDConvenio": null,
        "sunatNDTipoRenta": null,
        "sunatNDExoneracion": null,
        "sunatNDServicio": null,
        "flagSolicitaUsuario": null,
        "pais": null,
        "errorFlag": "N"
      },
      "ultimaMedicion": {
        "companiaSocio": "01000000",
        "unidadNegocio": "0100",
        "medicionID": 5245,
        "fecha": "2019-03-05T10:36:34.157",
        "clienteNumero": 20465,
        "clienteRUC": "10193827",
        "clienteNombre": "KARIN",
        "clienteDireccion": "T",
        "clienteTelefono": null,
        "clienteCorreo": "t",
        "profesion": "S",
        "clienteEdad": 44,
        "keratometriaOD": null,
        "keratometriaOI": null,
        "keratometriaComentario": "MULTI DIGITAL CON ANTIRREFLEX",
        "lenteContactoOD": null,
        "lenteContactoOI": null,
        "lcTipo": null,
        "lcEsferaOD": null,
        "lcCilindroOD": null,
        "lcEjeOD": null,
        "lcEsferaOI": null,
        "lcCilindroOI": null,
        "lcEjeOI": null,
        "lenteContactoComentario": null,
        "addCerca": "+1.50",
        "addIntermedia": null,
        "distanciaOD": "L",
        "rangoOD": "R62",
        "rangoOI": "R62",
        "distanciaOI": "L",
        "optometra": 29,
        "revisadoPor": null,
        "observacion": null,
        "anamnesis": null,
        "ensambladoPor": null,
        "fechaEntrega": null,
        "fechaEnviado": null,
        "fechaTermino": null,
        "estado": "PR",
        "ultimoUsuario": "AGARCIA",
        "ultimaFechaModif": "2019-03-05T10:44:35.767",
        "lcrangoOD": null,
        "lcrangoOI": null,
        "clienteAPaterno": "TALANCHA",
        "clienteAMaterno": "VELA",
        "altura": null,
        "tipoDocumento": null,
        "kverticalOI": null,
        "khorizontalOI": null,
        "kejeOI": null,
        "kpoderOI": null,
        "kverticalOD": null,
        "kcbod": null,
        "kcboi": null,
        "kejeOD": null,
        "kdiametroOD": null,
        "ktipoOI": null,
        "lesferaOD": "-0.25",
        "khorizontalOD": null,
        "kpoderOD": null,
        "ktipoOD": null,
        "kdiametroOI": null,
        "cesferaOD": "+1.25",
        "cesferaOI": "+1.50",
        "lprismaOD": null,
        "lavoi": "20/20",
        "ldipoi": "30.5",
        "ccilindroOI": null,
        "icilindroOD": null,
        "lavod": "20/20",
        "ccilindroOD": null,
        "iprismaOD": null,
        "cejeOD": null,
        "lejeOD": null,
        "iavod": null,
        "lesferaOI": "+0.00",
        "lprismaOI": null,
        "iesferaOD": null,
        "iejeOD": null,
        "cprismaOD": null,
        "lcilindroOI": null,
        "lcilindroOD": null,
        "cdipod": "29.5",
        "icilindroOI": null,
        "iejeOI": null,
        "ldipod": "30.5",
        "iesferaOI": null,
        "cavod": null,
        "iprismaOI": null,
        "lejeOI": null,
        "iavoi": null,
        "idipoi": null,
        "idipod": null,
        "cprismaOI": null,
        "cejeOI": null,
        "cdipoi": "29.5",
        "cavoi": null
      }
    }
    this.hide()
    /* this.optometriaService.getInfoUser(data).subscribe(
      response => {
        this.date_user = response
        console.log(response);

        this.hide()
      }, err => {
        console.log(err);
        this.hide()
      }
    ) */
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
