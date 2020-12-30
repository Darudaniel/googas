// IMPORTAR AL ARRAY QUE CONTIENE A LOS TOP 10 PLAYERS COMO OBJETOS
import TopPlayers from '../utils/TopPlayers.js'

// CREAR FUNCION QUE IMPIME LOS DATOS EN PANTALLA
const showData = function() {    
  for(let i = 0; i < 10; i++) {
    let imas1 = i + 1
    let htmlNameId = `name${imas1}`
    let htmlEloId = `elo${imas1}`   
    let htmlKdId = `kd${imas1}`   
    let HtmlNameElement = document.getElementById(htmlNameId)
    let HtmlEloElement = document.getElementById(htmlEloId)
    let HtmlKdElement = document.getElementById(htmlKdId)
    HtmlNameElement.innerHTML = TopPlayers[i].name
    HtmlEloElement.innerHTML = TopPlayers[i].elo
    HtmlKdElement.innerHTML = TopPlayers[i].kd
  }  
}
// EXPORTAR DICHA FUNCION QUE IMPRIME LOS DATOS EN LA PANTALLA
export default showData