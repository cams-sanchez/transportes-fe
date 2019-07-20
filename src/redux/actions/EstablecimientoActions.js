
const EstablecimientoActions = {
  setAllEstablecimientos: (allEstablecimientos) => {
    return {
      type:'SetAllEstablecimientos',
      payload: allEstablecimientos,
    }
  },
  setTipoEstablecimientos: (allTipoEstablecimientos) => {
    return {
      type:'SetAllTipoEstablecimientos',
      payload: allTipoEstablecimientos,
    }
  },
};

export default EstablecimientoActions;

