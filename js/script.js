// definire un array di oggetti; ogni oggetto
// rappresenta un'icona, che è caratterizzata da:
// nome, prefisso, tipo e famiglia.

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
      "lightcoral",
      "orange",
      "blue"
    ];

    const container=$(".box");


    const types= getTypes(icons);

    const coloredItem = color(icons,colors,types);
    // Visualizzare le icone di colore diverso in base al
    // tipo.
    print(coloredItem,container);
    // ogni volta che cambia il valore selezionato,
    // visualizzare le icone corrispondenti
    const select= ($("#select"));
    printOptions(select,types);

    select.change(
      function(){
        const selected = $(this).val();
        if (selected=="all") {
          print(coloredItem,container);


        }else {
          const filtered=coloredItem.filter(
            (element)=>{
              return element.type==selected;
            }
          );
          print(filtered,container)
        }
      }
    )
  }
);

// Utilizzando la funzione forEach e il template
// literal
function print(array,container){
  container.html("");

  array.forEach((element,index) => {

    const {family,type,prefix,name,color}=element;
    container.append(`
        <div class="icon">
        <i class="fas fa-${name}"style="color:${color}"></i>
        <div> ${name.toUpperCase()} </div>
        </div>
    `);
  });
}

// definire un array di colori e associare ad ogni
// tipo di icona un colore.

function getTypes(array){
  const types = [];

  array.forEach(
    (element) => {
      if (types.includes(element.type) == false) {
      types.push(element.type);
      }
    }
  );
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

// aggiungere una select per filtrare le icone in
// base al tipo.
// Popolare le options della select dinamicamente
function printOptions(select,types){
  types.forEach(
  (element) => {
    select.append(`
      <option value="${element}">${element.toUpperCase()}</option>
    `)
  });
}
