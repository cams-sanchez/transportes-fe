
const TipoMantenimientoAction = {
  setMantenimientos: (allMantenimientos) => {
    return {
      type:'SetMantenimientos',
      payload: allMantenimientos,
    }
  },
};

export default TipoMantenimientoAction;

