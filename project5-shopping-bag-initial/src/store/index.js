import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
state: {
  products: []
},
// getters: {
// },
mutations: {
  loadProducts(state, products) {
    state.products = products;
  }
},
actions: {

  loadProducts({ commit }) {
    axios
    .get('https://fakestoreapi.com/Products')
    .then(response => {
      commit('loadProducts', response.data);
    })
  },

  // loadBag({ commit }) {
    
  //   if (localStorage.getItem("productsInBag")) {
  //     commit('loadBag', JSON.parse(localStorage.getItem("productsInBag")));
  //   }
    
  // },

  // addToBag({ commit }, product) {
  //   commit('addToBag', product);
  // },

  // removeFromBag({ commit }, productId) {
  //   if (confirm('Are you sure you want to remove the item from bag?')) {
  //     commit('removeFromBag', productId);
  //   }
  // },

},
modules: {
}
})
