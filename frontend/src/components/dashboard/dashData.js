let dashBoard=[
    {
    id: 1,
    title:"Driving Licenses",
    total: 1,
    img:"./img/drive.png",
    name:"Number of Licenses"
},
{
    id: 2,
    title:"Passports",
    total: 1,
    img:"./img/map.png",
    name:"Passports Count"
},
{
    id: 3,
    title:"National Address",
    total: 2,
    img:"./img/passport.png",
    name:"Registered Addresses"
},
{
    id: 4,
    title:"National Address",
    total: 2,
    img:"./img/passport.png",
    name:"Registered Addresses"
},

]

export function getInformation() {
    return dashBoard;
  }

  export function getData(id) {
    return dashBoard.find(
        information => information.id === id
    );
  }