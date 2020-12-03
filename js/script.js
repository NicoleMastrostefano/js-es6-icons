// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.
// Utilizzando la funzione forEach e il template
// literal, visualizzare in pagina tutte le icone con il
// proprio nome.

$(document).ready(
  function(){

    const icons = [
      {
        name: "dove",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "otter",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "sleigh",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "kiwi-bird",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "spider",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "apple-alt",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "carrot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "lemon",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "dragon",
        prefix: "fa-",
        type: "animal",
        family: "fas"
      },
      {
        name: "pepper-hot",
        prefix: "fa-",
        type: "vegetable",
        family: "fas"
      },
      {
        name: "space-shuttle",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "truck-monster",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "wheelchair",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "tram",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "fighter-jet",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
      {
        name: "helicopter",
        prefix: "fa-",
        type: "vehicle",
        family: "fas"
      },
    ];
    const colors = [
      "pink",
      "orange",
      "lightblue"
    ];

    const container=$(".box");
    print(icons,container);

    const types= getTypes(icons)

    const coloredItem = color(icons,colors,types)
    console.log(coloredItem);
  }
);




function print(array,container){
  array.forEach((element,index) => {

    const {family,prefix,name}=element;
    container.append(`
        <div class="icon">
        <i class="fas fa-${name}"></i>
        <div> ${name.toUpperCase()} </div>
        </div>
      `);

  });

}

// milestone 2:
// definire un array di colori e associare ad ogni
// tipo di icona un colore.
// Visualizzare le icone di colore diverso in base al
// tipo.


function getTypes(array){
  const types = [];

  array.forEach(
    (element) => {
      if (types.includes(element.type) == false) {
      types.push(element.type);
      }
  });
  return types;
}

function color(array,color,types) {

  const newArray = array.map(
    (element) =>{
      const index = types.indexOf(element.type);
      const colorItem = color[index];
      const colored= {
        ...element,
        color:colorItem
      };
      return colored;
    }
  );
  return newArray;
}
