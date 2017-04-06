export default function(state, action){
  switch(action.type){
    case 'DANTE':
      return "hiciste Click!";
    default:
      return "aun no haz hecho click :( ";
  }
}