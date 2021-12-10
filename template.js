let state = {
  numCircles: 25,
  theme: 'light',
}

let store

let template = {
  data: {},

  state,

  update() {
    store.state = { ...state }
  },

  draw() {
    store = PetiteVue.reactive({ state })
    PetiteVue.createApp({
      store,

      get state() {
        return store.state
      }
    }).mount()
  }
}

window.template = template
