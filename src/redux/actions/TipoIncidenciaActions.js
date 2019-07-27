
const TipoIncidenciaAction = {
  setIncidencias: (allIncidencias) => {
    return {
      type:'SetIncidencias',
      payload: allIncidencias,
    }
  },
};

export default TipoIncidenciaAction;

