export const rendering = () => {
  return {
    type: 'DANTE',
    payload: null
  };
};


export const oliver = (term) => {

  console.log(term);
  
  return {
    type: 'OLIVER',
    payload: term
  };
};