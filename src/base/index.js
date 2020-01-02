import watchImg from './watchImg/watchImg.vue'
const components = {
  install(Vue){
  Vue.component( "watchImg", watchImg)
  }
  }
  if(typeof window !== undefined && window.Vue){
  window.Vue.use(components)
  }
export default components