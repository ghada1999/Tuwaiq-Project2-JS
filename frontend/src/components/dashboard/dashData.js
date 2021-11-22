let dashBoard=[
    {
    id: 1,
    title:"Driving Licenses",
    total: 1,
    img:"",
    name:"Number of Licenses"
},
{
    id: 2,
    title:"Passports",
    total: 1,
    img:"",
    name:"Passports Count"
},
{
    id: 3,
    title:"National Address",
    total: 2,
    img:"",
    name:"Registered Addresses"
},

]

export function getInformation() {
    return dashBoard;
  }

  export function getProduct(id) {
    return dashBoard.find(
        information => information.id === id
    );
  }