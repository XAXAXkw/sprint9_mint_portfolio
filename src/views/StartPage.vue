<template>
<div class="peebody" v-cloak>
    <div class="main">
    <HeaderComponent
    spot="mint_paint.svg"
    title="PortFolio"
    subtitle="Analogic & Digital Artwork"
    small="check my UPWORK PROFILE"
    />





    </div>

    <div class="top bg-success d-flex justify-content-start p-4">
    
    <p> 

        <router-link to="/audio">Music</router-link> | 
        <router-link to="/pic">Full Catalogue</router-link> | 
        <router-link to="/biblio">Comic-Books</router-link>
     </p> 
        
        </div>

<div class="container">

<div class="row">
<div 

class="col bg-dark border border-success m-2 p-4"
>
<a href="#" @click="openVisor(0)">
<img 

:src="fillPic(0)"/>
</a>
<p style="color:grey">{{ INTROLIST[0].title }}</p></div>


<div class="col bg-dark border border-success m-2 p-4"><img :src="fillPic(1)"/><p style="color:grey">{{ INTROLIST[1].title }}</p></div>
<div class="col bg-dark border border-success m-2 p-4"><img :src="fillPic(2)"/><p style="color:grey">{{ INTROLIST[2].title }}</p></div>
<div class="col bg-dark border border-success m-2 p-4"><img :src="fillPic(3)"/><p style="color:grey">{{ INTROLIST[3].title }}</p></div>
<div class="col bg-dark border border-success m-2 p-4"><img :src="fillPic(4)"/><p style="color:grey">{{ INTROLIST[4].title }}</p></div>
<div class="col bg-dark border border-success m-2 p-4"><img :src="fillPic(5)"/><p style="color:grey">{{ INTROLIST[5].title }}</p></div>
</div>
</div>


    </div>
</template>

<script>


import { mapState } from 'vuex';
import HeaderComponent from '../components/HeaderComponent.vue'

    export default {
        name:'StartPage',
        components:{
            HeaderComponent },
            data(){
                return{
                    INTROLIST:[]
                }
            },
       
           
            computed:{
                    ...mapState(['DB'])
            },
            created(){
                

                const LIST = this.DB.filter(o=>o.type === "painting")

                 this.INTROLIST = [];  
                for (let i=0; i<6 ;i++){

                    let randomNumber = Math.floor(Math.random() * LIST.length);
                    this.INTROLIST.push(LIST[randomNumber]);
                    LIST.splice(randomNumber,1);
                  
                }

                 console.log(this.INTROLIST)  


                     
            
            },
         methods:{
            randomList(){
               const RANDOMIZED = [];
               for (let i = 0; i<7; i++){
                
                let randomN = Math.floor(Math.random() * this.DB.length);
                RANDOMIZED.push(randomN)
                return RANDOMIZED[i]
               }


        
            },
            fillPic(n){

                return require("../assets/data/pics/" + this.INTROLIST[n].pic)
            },
            openVisor(){
   
                this.visorState=true;
            },
     
        }

    }
</script>

<style lang="scss" scoped>
.main{
    background-color: whitesmoke;
}
img{
    max-width:150px;
    margin:2rem;
}
a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;

    &.router-link-exact-active {
      color: #96ffd0;
    }
  }

  a:hover{
    color:aquamarine;
  }
</style>