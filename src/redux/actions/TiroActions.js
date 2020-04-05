
const TiroAction = {
  setTiros: (tiros) => {
    return {
      type:'SetTiros',
      payload: tiros,
    }
  },
  setDelivery: (delivery) => {
    return {
      type:'SetDelivery',
      payload: delivery,
    }
  },
  setEstablecimiento: (establecimiento) => {
    return {
      type:'SetEstablecimiento',
      payload: establecimiento,
    }
  },
};

export default TiroAction;

