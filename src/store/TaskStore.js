import { defineStore } from 'pinia'
import { ref } from 'vue'
import axiosCreate from '../axiosCreate'

// You can name the return value of `defineStore()` anything you want,
// but it's best to use the name of the store and surround it with `use`
// and `Store` (e.g. `useUserStore`, `useCartStore`, `useProductStore`)
// the first argument is a unique id of the store across your application


//composition Api Store
// export const useTasksStore = defineStore('tasks-store', () => {
//   const name = ref('yasin')
//   return {
//     name
//   }
// })
