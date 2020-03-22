
const TiroAction = {
  setTiros: (tiros) => {
    return {
      type:'SetTiros',
      payload: tiros,
    }
  },
};

export default TiroAction;

