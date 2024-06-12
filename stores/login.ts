export const useLoginStore = defineStore('loginStore', {
  state: () => ({
    token: '',
  }),
  getters: {
    getToken: state => (state.token || ''),
    isLogin: state => !!state.token,
  },
  actions: {
    login(token: string) {
      this.$state.token = token
    },
    logout() {
      this.$state.token = ''
    },
  },
  persist: true,
})
