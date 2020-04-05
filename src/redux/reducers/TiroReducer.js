const initialState = {
    tiros: [],
    id: '',
    viaje: '',
    ciudad: '',
    unidad: '',
    establecimiento: '',
    tipo_de_carga_id: '',
    cantidad: '',
    delivery: '',
    epv: '',
    jefe_de_sector: '',
    sdic: '',
    doc: '',
    region: '',
    fecha_entrega_solicitada: '',
    propuesta_361: '',
    notas: '',
    status: '',
    deliveryImg: '',
    establecimientoImg: '',
    comentarios: '',
    latitude: '',
    longitude: ''

};

const TiroReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SetTiros':
            return {
                ...state,
                tiros: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default TiroReducer;
