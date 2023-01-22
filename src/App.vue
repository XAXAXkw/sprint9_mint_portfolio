<script>
import TopMenu from '../src/components/TopMenu.vue'
import LogIn from '../src/components/LogIn.vue'
import FooTer from '../src/components/FooTer.vue'
export default{
  name:'app',
  components:{
    TopMenu,LogIn,FooTer
  }
}
</script>

<template >
  <div>
  <LogIn />
  <TopMenu />

  <nav>
    <router-link to="/"><p>FRONTEND developped with vue.js <img style="width:15px" src="./assets/logo.png"/></p>Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contract">Contract</router-link>
  </nav>
  <router-view/>
  <FooTer />
  </div>

</template>

<style lang="scss">
#app {
  //font-family: Avenir, Helvetica, Arial, sans-serif;


  h1,h2,h3{
      font-family: 'Chakra Petch', sans-serif;
      font-weight: 700;
  }
  h4,h5,h6{
    font-family: 'Chakra Petch', sans-serif;
      font-weight: 700;
  }
  p{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  }


  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    text-shadow: 0px 0px 15px rgba(127, 255, 212, 0.832);

    &.router-link-exact-active {
      color: #42b983;
    }
  }

  a:hover{
    color: #96ffd0;

  }
}
</style>
