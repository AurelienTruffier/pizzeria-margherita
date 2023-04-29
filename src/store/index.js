import { createStore } from 'vuex'

export default createStore({
  state: {
    pizzaMenu:[
      {
        name: "Margherita",
        ingredients: "Sauce tomate, mozzarella, basilic, huile d'olive...",
        classique: "13,50",
        grande: "17",
        vegetarien: false
      },
      {
        name: "Reine",
        ingredients: "Sauce tomate, mozzarella, champignons, jambon...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: false
      },
      {
        name: "Napolitaine",
        ingredients: "Sauce tomate, mozzarella, anchois, olives noires, origan, huile d'olive...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: false
      },
      {
        name: "Quatres Fromages",
        ingredients: "Sauce tomate, mozzarella, cheddar, chèvre, bleu...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: false
      },
      {
        name: "Welsh",
        ingredients: "Crème fraîche, cheddar, jambon, moutarde, bière, oeufs...",
        classique: "14.50",
        grande: "18",
        vegetarien: false
      },
      {
        name: "Ch'ti",
        ingredients: "Crème fraîche, oignons, lardon, pomme de terre, maroilles...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: false
      },
      {
        name: "Hawaîenne",
        ingredients: "Sauce tomate, poulet, emmental, ananas...",
        classique: "14,50",
        grande: "18",
        vegetarien: false
      },
      {
        name: "Végétarienne",
        ingredients: "Sauce tomate, champignons, oignon, poivron, persil...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: true
      }
    ],
    dessertMenu:[
      {
        name: "Panna cotta",
        description: "Dessert traditionnel italien à base de crème, lait, sucre et gélatine. Servi avec un coulis de caramel ou de fraise.",
        price: "5,60",
        image: "pexels-pixabay-302468.jpg"
      },
      {
        name: "Tartelette aux pommes",
        description: "Tartelette aux pommes à l'ancienne, cuite au four.",
        price: "6,20",
        image: "pexels-polina-tankilevitch-5419108.jpg"
      },
      {
        name: "Brownies au chocolat",
        description: "Gâteau au chocolat moelleux, cuit au four. Servi avec sa boule de glace vanille artisanale.",
        price: "5,80",
        image: "pexels-dana-tentis-683499.jpg",
      },
      {
        name: "Boules de glaces artisanales",
        description: "3 boules, saveur vanille, fraise, chocolat, café ou spéculoos.",
        price: "4,80",
        image: "pexels-manuel-mouzo-13350513.jpg"
      },
      {
        name: "Mousse au chocolat",
        description: "Mousse au chocolat noir accompagné d'une sauce au caramel au beurre salé.",
        price: "5,20",
        image: "pexels-ella-olsson-3026810.jpg"
      }
    ],
    boissonMenu:{
      softs:[
        {
          name: 'Coca-Cola 33cl',
          price: "3,60"
        },
        {
          name: 'Lipton Ice Tea 33cl',
          price: "3,60"
        },
        {
          name: 'Oasis Tropical 33cl',
          price: "3,60"
        },
        {
          name: 'Orangina 33cl',
          price: "3,60"
        },
        {
          name: 'Schweppes 33cl',
          price: "3,60"
        },
        {
          name: 'San Pellegrinno 50cl',
          price: "3,40"
        }
      ],
      cocktails:[
        {
          name: 'Piña Colada',
          description: "Rhum, jus d'ananas, lait de coco",
          price: '6,60'
        },
        {
          name: 'Mojito',
          description: "Rhum, limonade, citron vert, sucre de canne, feuilles de menthe ",
          price: '6,60'
        },
        {
          name: 'Rouge Passion',
          description: "Vodka, fraise, fruit de la passion, mangue, sirop de banane",
          price: '6,60'
        },
        {
          name: 'Gin Tonic',
          description: "Gin, Schweppes, citron",
          price: '6,60'
        },
      ],
      bieres:[
        {
          name: 'Grimbergen 33cl',
          price: '5,90'
        },
        {
          name: 'Grimbergen rouge 33cl',
          price: '5,90'
        }
      ],
      vins:[

      ],
      aperitifs:[

      ],
      chaudes:[
        {
          name: "Café",
          price: "1,90"
        },
        {
          name: "Thé",
          price: "2,30"
        },
        {
          name: "Cappuccino",
          price: "3,30"
        },
        {
          name: "Irish Coffee",
          price: "6,80"
        },
      ]
    }
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
