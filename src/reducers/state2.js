export default function(initialState, action){
  switch(action.type){
    case 'OLIVER':
      return "Hola "+ action.payload + "!!!" ;
    default:
      return " ";
  }
}