const TopPlayers = [
  {
    name: "Selfie",
    elo: "1205",
    kd: "5.3"
  },
  {
    name: "Daru",
    elo: "1185",
    kd: "5.1"
  },
  {
    name: "Hulm",
    elo: "1150",
    kd: "3.2"
  },
  {
    name: "Elrichmc",
    elo: "1110",
    kd: "2.4"
  },
  {
    name: "VegettaGaymer",
    elo: "990",
    kd: "4.6"
  },
  {
    name: "Willyrex",
    elo: "950",
    kd: "4.2"
  },
  {
    name: "MrSantiHD",
    elo: "925",
    kd: "3.1"
  },
  {
    name: "Jorgeleocaguai",
    elo: "895",
    kd: "2.1"
  },
  {
    name: "canobat40",
    elo: "870",
    kd: "1.5"
  },
  {
    name: "pigmachomanpro",
    elo: "855",
    kd: "1.8"
  }
]

const nameElement1 = document.getElementById('name1')
const nameElement2 = document.getElementById('name2')
const nameElement3 = document.getElementById('name3')
const nameElement4 = document.getElementById('name4')
const nameElement5 = document.getElementById('name5')
const nameElement6 = document.getElementById('name6')
const nameElement7 = document.getElementById('name7')
const nameElement8 = document.getElementById('name8')
const nameElement9 = document.getElementById('name9')
const nameElement10 = document.getElementById('name10')

const eloElement1 = document.getElementById('elo1')
const eloElement2 = document.getElementById('elo2')
const eloElement3 = document.getElementById('elo3')
const eloElement4 = document.getElementById('elo4')
const eloElement5 = document.getElementById('elo5')
const eloElement6 = document.getElementById('elo6')
const eloElement7 = document.getElementById('elo7')
const eloElement8 = document.getElementById('elo8')
const eloElement9 = document.getElementById('elo9')
const eloElement10 = document.getElementById('elo10')

const kdElement1 = document.getElementById('kd1')
const kdElement2 = document.getElementById('kd2')
const kdElement3 = document.getElementById('kd3')
const kdElement4 = document.getElementById('kd4')
const kdElement5 = document.getElementById('kd5')
const kdElement6 = document.getElementById('kd6')
const kdElement7 = document.getElementById('kd7')
const kdElement8 = document.getElementById('kd8')
const kdElement9 = document.getElementById('kd9')
const kdElement10 = document.getElementById('kd10')



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

 

  const printData = function() {    
  for(let i = 0; i < 10; i++) {
    nameElements[i].innerHTML = TopPlayers[i].name
    eloElements[i].innerHTML = TopPlayers[i].elo
    kdElements[i].innerHTML = TopPlayers[i].kd
  }  
}

printData()