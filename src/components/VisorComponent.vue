<template>
    <div class="visor" v-if="visorState">
{{ visorState }}
    <div class="row d-flex border border-success peebody">
    <div class="container d-flex justify-items-start p-2">
    
    <div class="col"> 
    <div class="container w-25 bg-success rounded rounded-4 p-1">   <p style="color:aqua">
    props: indexator {{ 1 }}</p></div></div>
  

    <div class="col text-start"><h6>{{ DB[1].title }}</h6> <p>{{ DB[1].txt }} - {{ DB[1].type }} </p></div></div>
    
  

    
    </div>

<div class="container">


<div class="pictor"
@click="store.commit('setVis', false)"
>
<img :src="fillPic(1)"/>


</div>

</div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name:'VisorComponent',
        props:(['sendIndexator']),
        computed:{
            ...mapState(['DB','indexator','visorState','setVis']),
          
        },
        data(){
            return{
            
            }
        },
        methods:{
       
            fillPic(pic){
                return require("../assets/data/pics/" + this.DB[pic].pic)
            },
         
        }
    }
</script>

<style lang="scss" scoped>
.visor{
    
    min-width:100%;
    min-height:100% !important;
    margin:0;
    background-color: rgba(0, 0, 0, 0.893);
    position:absolute;
    -webkit-background-size: cover;
   -moz-background-size: cover;
   -o-background-size: cover;
   background-size: cover;
    z-index:50;
    color:aquamarine;
    text-shadow: 0px 0px 25px rgb(17, 12, 17);
    padding-bottom:10em;
    
}
.pictor{
    margin:auto;
    display: flex;
 
}
   img{
 max-height:500px;
 margin:2em auto;

    }
@media only screen and (max-width: 600px) {

img{
    max-height:auto;
    padding:0; 
    min-width:100%;
    margin:auto;
 }
}
</style>