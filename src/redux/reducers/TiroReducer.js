const initialState = {
    tiros: [],
    id: '',
    viaje_id: '',
    unidad_id: '',
    tipo_de_carga_id: '',
    cantidad: '',
    delivery: '',
    solicitud: '',
    numero_de_pedido: '',
    notas: '',
    status: '',
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
