// IMPORTAR AL ARRAY QUE CONTIENE A LOS TOP 10 PLAYERS COMO OBJETOS
import TopPlayers from '../utils/TopPlayers.js'
// IMPORTAR LA FUNCION QUE OBTIENE LOS ELEMENTOS DEL HTML
import gettingElements from './gettingELements.js'
// IMPORTAR LOS ELEMENTOS OBTENIDOS DEL HTML
import {
   nameElement1,
   nameElement2,
   nameElement3,
   nameElement4,
   nameElement5,
   nameElement6,
   nameElement7,
   nameElement8,
   nameElement9,
   nameElement10,
   eloElement1,
   eloElement2,
   eloElement3,
   eloElement4,
   eloElement5,
   eloElement6,
   eloElement7,
   eloElement8,
   eloElement9,
   eloElement10,
   kdElement1,
   kdElement2,
   kdElement3,
   kdElement4,
   kdElement5,
   kdElement6,
   kdElement7,
   kdElement8,
   kdElement9,
   kdElement10
  } 
  from './gettingELements.js'

// EJECUTAR LA FUNCION QUE OBTIENE LOS ELEMENTOS DEL HTML
  gettingElements()  
// GUARDAR LOS ELEMENTOS OBTENIDOS COMO VARIABLES
let nameElements = [
  nameElement1,
  nameElement2,
  nameElement3,
  nameElement4,
  nameElement5,
  nameElement6,
  nameElement7,
  nameElement8,
  nameElement9,
  nameElement10
]

let eloElements = [
  eloElement1,
  eloElement2,
  eloElement3,
  eloElement4,
  eloElement5,
  eloElement6,
  eloElement7,
  eloElement8,
  eloElement9,
  eloElement10
]

let kdElements = [
  kdElement1,
  kdElement2,
  kdElement3,
  kdElement4,
  kdElement5,
  kdElement6,
  kdElement7,
  kdElement8,
  kdElement9,
  kdElement10
]

// CREAR FUNCION QUE IMPIME LOS DATOS EN LOS ELEMENTOS HTML SELECCIONADOS
const printData = function() {    
  for(let i = 0; i < 10; i++) {
    nameElements[i].innerHTML = TopPlayers[i].name
    eloElements[i].innerHTML = TopPlayers[i].elo
    kdElements[i].innerHTML = TopPlayers[i].kd
  }  
}
// EXPORTAR DICHA FUNCION QUE IMPRIME LOS DATOS
export default printData