

  const powers = [];
  const types = [];
  const boxIcons = document.getElementById('card-lyst');


  const fieldCodes = [
    'W', 'U', 'B', 'R', 'G'
  ]

  const cardTypes = [
    'terre',
    'creature',
    'incantesimi',
    'artefatti',
    'instantanei',
    'stregonerie'
  ]

  // Abbiamo creato un oggetto di oggetti, come riferimento
  // di una edizione. Se ad esempio scrivo editions['SP']
  // allora otterrò tutto un oggetto che descrive
  // con più dettagli l'edizione.
  // come oggetto di oggetti, può essere navigato solo con il for-in
  const editions = {

    'BL': {
        edition: 'Boolean',
        rarity: 'blue'
    },

    'SP': {
        edition: 'Special',
        rarity: 'red'
    }

  }

  // for(let key in editions){
  //   console.log(key, editions[key]);
  // }


  const cards = [{

    cardName: 'Grizzly Bears',

    cost: {
      genericCostNumber: 1,
      costFields: [ // colors array con riferimento a fieldCodes
        fieldCodes[0],  // 'W',  - un suo riferimento
        fieldCodes[2]   // 'B'
      ],
    },

    picture: 'images/i.png',
    cardType: cardTypes[1],
    cardObject: 'Bear',

    editionType: editions['BL'],

    description: 'Lorem ipsum',
    story: 'Naltro Lorem Ipsum',

    score: {
      power: 2,  // filtrarlo per power
      toughness: 2
    }

    },
    {

      cardName: 'Sviluppatore guerriero',

      cost: {
        genericCostNumber: 3,
        costFields: [ // colors array con riferimento a fieldCodes
          fieldCodes[2],
          fieldCodes[3]
        ],
      },

      picture: 'images/g.png',  // da inserire immagine
      cardType: cardTypes[1],
      cardObject: 'Bear',

      editionType: editions['BL'],

      description: 'Lo sviluppatore guerriero spezza i byte in bit!',
      story: 'Lo sviluppatore guerriero è una forma di essere umano evoluto.',

      score: {
        power: 5,  // r
        toughness: 3
      }

      },

      {

        cardName: 'Scimmia con ascia',

        cost: {
          genericCostNumber: 2,
          costFields: [ // colors array con riferimento a fieldCodes
            fieldCodes[2],
            fieldCodes[3]
          ],
        },

        picture: 'images/g.png',  // da inserire immagine
        cardType: cardTypes[1],
        cardObject: 'Monkey',

        editionType: editions['BL'],

        description: 'La scimmia con ascia raccoglie le banane con la sua ascia',
        story: 'La scimmia con ascia ha un\'intelligenza evoluta anche per spaccare la legna',

        score: {
          power: 2,  // r
          toughness: 2
        }

        },

        {

          cardName: 'Uccello con martello',

          cost: {
            genericCostNumber: 2,
            costFields: [ // colors array con riferimento a fieldCodes
              fieldCodes[0],
              fieldCodes[1]
            ],
          },

          picture: 'images/g.png',  // da inserire immagine
          cardType: cardTypes[1],
          cardObject: 'Bird',

          editionType: editions['BL'],

          description: 'Ciaone',
          story: 'Ciao',

          score: {
            power: 3,  // r
            toughness: 2
          }

          },

          {

            cardName: 'Ombra nera',

            cost: {
              genericCostNumber: 2,
              costFields: [ // colors array con riferimento a fieldCodes
                fieldCodes[0],
                fieldCodes[1]
              ],
            },

            picture: 'images/g.png',  // da inserire immagine
            cardType: cardTypes[3],
            cardObject: '',

            editionType: editions['BL'],

            description: 'Ciaone',
            story: 'Ciao',

            score: {
              power: 4,  // r
              toughness: 2
            }

            }
  ];



  //----------------------Logica-------------------------------------------------

  // Funzione che renderizza a video i nomi delle carte
  function render(domElement, array){
    const listaCarte = document.getElementById(domElement);
    array.forEach((element) => {
      listaCarte.innerHTML += `
      <div>
        <li style="color:blue;">${element.cardName}</li>
      </div>`;
    });
  }

  function filterByPower(powerValue, array){
    return array.filter((element) => {
      return element.score.power === powerValue;
    });
  }

  function filterByType(typeValue, array){
    return array.filter((element) => {
      return element.cardType === typeValue;
    })
  }



  function insertPowerIntoArray(array2, array1){
    array1.forEach((element) => {
      if(!array2.includes(element.score.power)){
        array2.push(element.score.power);
      }
    });
  }

  function insertTypeIntoArray(array2, array1){
    array1.forEach((element) => {
      if(!array2.includes(element.cardType)){
        array2.push(element.cardType);
      }
    });
  }

  function insertIntoSelect(domElement, array){
    array.forEach((element) => {
      const select = document.getElementById(domElement);
      select.innerHTML += `<option value="${element}">${element}</option>`
    });

  }

 //  function renderFiltered(domElement, selectedValue, arrayFiltrato, array){
 //
 //    const boxIcone = document.getElementById(domElement);
 //
 //    // boxIcone.innerHTML = '';
 //
 //     // selectedValue = parseInt($(this).val()) ;
 //
 //     arrayFiltrato = filterByPower(selectedValue, array);
 //
 //    if(selectedValue !== 'all'){
 //      arrayFiltrato;
 //    }else{
 //      arrayFiltrato = array;
 //    }
 //
 // render(domElement, arrayFiltrato);
 //  }



  //----------------------------Renderizzazione-------------------------

  insertPowerIntoArray(powers, cards);
  insertIntoSelect('power-select', powers);
  render('card-lyst', cards);


  const selectorElement = $('#power-select');


 selectorElement.change(function(){

   boxIcons.innerHTML = '';
//
   const powerSelected = parseInt($(this).val()) ;
//
   let filteredArray = filterByPower(powerSelected, cards);

   if(powerSelected !== 'all'){
     filteredArray;
   }else{
     filteredArray = cards;
   }

render('card-lyst', filteredArray);

// renderFiltered(boxIcons, powerSelected, filteredArray, cards );

});


const selectForType = $('#type-select');


insertTypeIntoArray(types, cards);
insertIntoSelect('type-select', types);

selectForType.change(function(){


  boxIcons.innerHTML = '';
  const typeValue = $(this).val();

  let filteredArrayByType = filterByType(typeValue, cards);

  if(typeValue !== 'all'){
    filteredArrayByType;
  }else{
    filteredArrayByType = cards;
  }

  render('card-lyst', filteredArrayByType);


});
