<template>
    <div style="background-color: black;" class="row">
        <span style="font-size: 10px;color:aquamarine;align-text:left;background-color: black;">
       MINT <span style="font-size:20px">⊛</span> PORTFOLIO</span>
    <div class="top row d-flex justify-content-start">
    
<p>MENU  ||  
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> | 
    <router-link to="/contract">Contract</router-link> | 
    <router-link to="/audio">Music Player</router-link> | 
    <router-link to="/pic">Gallery</router-link> | 
    <router-link to="/biblio">Books</router-link>
 </p> 
    
    </div>
  
    </div>
</template>

<script>
    export default {
        name:'TopMenu'
    }
</script>

<style lang="scss" scoped>
.top{
    background-color:  #42b983;

    text-align: start;
    max-height:15px;
}
a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;

    &.router-link-exact-active {
      color: #96ffd0;
    }
  }
</style>