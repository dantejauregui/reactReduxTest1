//los reducers son PURE FUNCTIONs, osea no se declara como CLASS COMPOnent, xq redux se encarga de la DATA y no del UI:

export default function(initialState, action){
  switch(action.type){
    case 'DANTE':
      return "hiciste Click!";
    default:
      return "aun no haz hecho click :( ";
  }
}