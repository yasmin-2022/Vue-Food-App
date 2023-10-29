import {defineStore} from 'pinia'
export const useUserStore = defineStore('useUser', {
  state: () => ({
    count: 0,
    loading: false,
    cart:2,
    name: 'Yasmin',
    password: 'Yasmin@786',
    email: 'parveenyasmin390@gmail.com',
  }),
  getters: {
    cartAddition(state){
      return state.cart * 2;
    }
  },
  actions: {
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