import {defineStore} from 'pinia'
export const useUserStore = defineStore('useUser', {
  state: () => ({
    count: 0,
    loading: false,
    cart: [],
    name:'',
    email: '',
  }),
  getters: {
    user () { 
       return this.name.slice(0,1)
    }
  },
  actions: {
    addItems (item ) {
      this.cart.push(item)
    },
    removeItems (index) {
      this.cart.splice(index, 1);
    },
    clearCart () {
      this.cart = [];
    },
    add () {
      this.count++
    },
    loadingtrue () {
      this.loading = true
    },
    loadingfalse () {
      this.loading = false
    },
    changeusename () {
      this.name = 'Ghousia'
      this.password = 'Ghousia@786'
      this.email ='ghousia390@gmail.com'
    }

  }
})