const {createApp} = Vue;

const app = createApp({

  data(){

    return{
      createdEmail: [],
    }
    
  },
  
  methods: {
    createEmail(){
      for(let i = 0; i < 10; i++){
        
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
          this.createdEmail.push(res.data.response);
          
          console.log(res.data.response)
        })
      }
    },
    
    addEmail(){
      axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res)=>{
          this.createdEmail.push(res.data.response);
        })
    }
  },
  
  computed: {
    
  },
  
  mounted(){
    console.log('in mounted')
  },
  
  created(){
    
    
    // console.log('in created')
  },

  beforeCreate(){
    console.log('in before created')
  },

  beforeUpdate(){
    console.log('in before update')
  },

  updated(){
    console.log('in update')
  }
  
});
app.mount('#app');
