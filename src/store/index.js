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
        name: "Vegétarienne",
        ingredients: "Sauce tomate, champignons, oignon, poivron, persil...",
        classique: "13,90",
        grande: "17,50",
        vegetarien: true
      }
    ],
    dessertMenu:[
      {
        name: "Panna cotta",
        description: "Dessert traditionnel italien à base de crème, lait, sucre et gélatine. Servi avec un coulis de caramel.",
        price: "5,20",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Crème brûlée",
        description: "Dessert à base de jaune d'oeufs, de sucre, de crème, de vanille et de caramel",
        price: "5,20",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Flamenkuche Nutella-Banane",
        description: "Tarte flambée recouverte de Nutella et de banane.",
        price: "6,50",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Boule de glace artisanale",
        description: "Saveur vanille, chocolat, café ou spéculoos.",
        price: "4,60",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Mousse au chocolat",
        description: "Mousse au chocolat noir accompagné d'une sauce au caramel au beurre salé.",
        price: "5,20",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
      {
        name: "Irish Coffee",
        description: "Cocktail chaud à base de café, de sucre roux, de crème chantilly et de whisky.",
        price: "6,80",
        image: "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
      },
    ]
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
