export default {
  name: 'watchImg',
  props:{
    src: String
  },
  data () {
    return {
      showfloat:false
    }
  },
  mounted () {
  },
  methods: {
    headClick(){
      this.showfloat = true
    }
  }
}
