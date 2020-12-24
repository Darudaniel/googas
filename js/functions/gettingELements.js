// EXPORTAR LOS ELMENTOS OBTENIDOS CON LA FUNCION "gettingElements()" QUE SE CREA MAS ABAJO
export let nameElement1
export let nameElement2
export let nameElement3
export let nameElement4
export let nameElement5
export let nameElement6
export let nameElement7
export let nameElement8
export let nameElement9
export let nameElement10

export let eloElement1
export let eloElement2
export let eloElement3
export let eloElement4
export let eloElement5
export let eloElement6
export let eloElement7
export let eloElement8
export let eloElement9
export let eloElement10

export let kdElement1 
export let kdElement2 
export let kdElement3 
export let kdElement4 
export let kdElement5 
export let kdElement6 
export let kdElement7 
export let kdElement8 
export let kdElement9 
export let kdElement10

// FUNCION QUE OBTIENE LOS ELEMENTOS DEL HTML
function gettingElements() {
  nameElement1 = document.getElementById('name1')
  nameElement2 = document.getElementById('name2')
  nameElement3 = document.getElementById('name3')
  nameElement4 = document.getElementById('name4')
  nameElement5 = document.getElementById('name5')
  nameElement6 = document.getElementById('name6')
  nameElement7 = document.getElementById('name7')
  nameElement8 = document.getElementById('name8')
  nameElement9 = document.getElementById('name9')
  nameElement10 = document.getElementById('name10')

  eloElement2 = document.getElementById('elo2')
  eloElement3 = document.getElementById('elo3')
  eloElement1 = document.getElementById('elo1')
  eloElement4 = document.getElementById('elo4')
  eloElement5 = document.getElementById('elo5')
  eloElement6 = document.getElementById('elo6')
  eloElement7 = document.getElementById('elo7')
  eloElement8 = document.getElementById('elo8')
  eloElement9 = document.getElementById('elo9')
  eloElement10 = document.getElementById('elo10')

  kdElement1 = document.getElementById('kd1')
  kdElement2 = document.getElementById('kd2')
  kdElement3 = document.getElementById('kd3')
  kdElement4 = document.getElementById('kd4')
  kdElement5 = document.getElementById('kd5')
  kdElement6 = document.getElementById('kd6')
  kdElement7 = document.getElementById('kd7')
  kdElement8 = document.getElementById('kd8')
  kdElement9 = document.getElementById('kd9')
  kdElement10 = document.getElementById('kd10')
}

// EXPORTAR DICHA FUNCION QUE OBTIENE ELEMENTOS DEL HTML
export default gettingElements