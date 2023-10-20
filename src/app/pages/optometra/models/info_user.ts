export class DateUser {
    personaMast: DtoPersona
    ultimaMedicion: ultimaMedicionClass
    //alistaMedicion: ultimaMedicionClass[] = []
}

export class ultimaMedicionClass {
    companiaSocio: string
    unidadNegocio: string
    medicionID: Number
    fecha: string
    clienteNumero: Number
    clienteRUC: string
    clienteNombre: string
    clienteDireccion: string
    clienteTelefono: string
    clienteCorreo: string
    profesion: string
    clienteEdad: 44
    keratometriaOD: string
    keratometriaOI: string
    keratometriaComentario: string
    lenteContactoOD: string
    lenteContactoOI: string
    lcTipo: string
    lcEsferaOD: string
    lcCilindroOD: string
    lcEjeOD: string
    lcEsferaOI: string
    lcCilindroOI: string
    lcEjeOI: string
    lenteContactoComentario: string
    addCerca: string
    addIntermedia: string
    distanciaOD: string
    rangoOD: string
    rangoOI: string
    distanciaOI: string
    optometra: Number
    revisadoPor: string
    observacion: string
    anamnesis: string
    ensambladoPor: string
    fechaEntrega: string
    fechaEnviado: string
    fechaTermino: string
    estado: string
    ultimoUsuario: string
    ultimaFechaModif: string
    lcrangoOD: string
    lcrangoOI: string
    clienteAPaterno: string
    clienteAMaterno: string
    altura: string
    tipoDocumento: string
    cprismaOI: string
    cejeOI: string
    ktipoOD: string
    kpoderOI: string
    khorizontalOD: string
    ktipoOI: string
    khorizontalOI: string
    lesferaOD: string
    kcboi: string
    kdiametroOI: string
    kdiametroOD: string
    kejeOI: string
    kverticalOD: string
    kverticalOI: string
    kejeOD: string
    kcbod: string
    kpoderOD: string
    iavod: string
    cprismaOD: string
    iprismaOD: string
    iesferaOD: string
    lejeOD: string
    lcilindroOD: string
    cavod: string
    iesferaOI: string
    ldipoi: string
    lprismaOD: string
    iprismaOI: string
    ccilindroOD: string
    iavoi: string
    lejeOI: string
    lcilindroOI: string
    idipoi: string
    cesferaOD: string
    ldipod: string
    cejeOD: string
    cesferaOI: string
    iejeOD: string
    icilindroOD: string
    cdipod: string
    ccilindroOI: string
    icilindroOI: string
    lprismaOI: string
    lavoi: string
    idipod: string
    lesferaOI: string
    iejeOI: string
    lavod: string
    cdipoi: string
    cavoi: string

}


export class DtoPersona {

    persona : Number
    origen : string
    apellidoPaterno : string
    apellidoMaterno : string
    nombres : string
    nombreCompleto : string
    busqueda : string
    tipoDocumento : string
    documento : string
    codigoBarras : string
    tipoPersonaUsuario : string
    esCliente : string
    esEmpleado : string
    esOtro : string
    tipoPersona : string
    fechaNacimiento : string
    ciudadNacimiento : string
    sexo : string
    nacionalidad : string
    estadoCivil : string
    nivelInstruccion : string
    direccion : string
    codigoPostal : string
    departamento : string
    telefono : string
    fax : string
    documentoFiscal : string
    documentoIdentidad : string
    carnetExtranjeria : string
    documentoMilitarFA : string
    tipoBrevete : string
    brevete : string
    pasaporte : string
    nombreEmergencia : string
    direccionEmergencia : string
    telefonoEmergencia : string
    bancoMonedaLocal : string
    tipoCuentaLocal : string
    cuentaMonedaLocal : string
    bancoMonedaExtranjera : string
    tipoCuentaExtranjera : string
    cuentaMonedaExtranjera : string
    personaAnt : string
    correoElectronico : string
    clasePersonaCodigo : string
    estado : string
    ultimoUsuario : string
    ultimaFechaModif : string
    cuentaMonedaLocal_tmp : string
    cuentaMonedaExtranjera_tmp : string
    enfermedadGraveFlag : string
    provincia : string
    tarjetadeCredito : string
    flagActualizacion : string
    ingresoFechaRegistro : string
    ingresoAplicacionCodigo : string
    ingresoUsuario : string
    pymeFlag : string
    grupoEmpresarial : string
    celular : string
    celularEmergencia : string
    lugarNacimiento : string
    parentescoEmergencia : string
    personaClasificacion : string
    direccionReferencia : string
    flagRepetido : string
    codDiscamec : string
    fecIniDiscamec : string
    fecFinDiscamec : string
    codLicArma : string
    marcaArma : string
    serieArma : string
    inicioArma : string
    vencimientoArma : string
    seguroDiscamec : string
    correlativoSCTR : string
    sunatNacionalidad : string
    sunatVia : string
    sunatZona : string
    sunatUbigeo : string
    sunatDomiciliado : string
    nombresemp : string
    brevete_fecvcto : string
    paisEmisor : string
    codigoLDN : string
    carnetextranjeria_fecvcto : string
    tipoDocumentoIdentidad : string
    codAdministEps : string
    codAdministCaja : string
    codAdministPension : string
    codAdministCesantia : string
    actividadEconomica : string
    codigoInterbancario : string
    sunatNDConvenio : string
    sunatNDTipoRenta : string
    sunatNDExoneracion : string
    sunatNDServicio : string
    flagSolicitaUsuario : string
    pais : string
    errorFlag : string

}