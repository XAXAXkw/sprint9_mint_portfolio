<template>
    <div class=" carder container bg-dark text-light">

    <div class="container d-flex   p-2 m-0">
    <div class="row m-0">
    <div class="container"> 
       <button class="btn btn-sm btn-dark m-1" @click="byP()">Paintings</button>
       <button class="btn btn-sm btn-dark m-1" @click="byM()">Music</button>
       <button class="btn btn-sm btn-dark m-1" @click="byC()">Comic-Books</button>
       <button class="btn btn-sm btn-dark m-1">Abstract</button>
       <button class="btn btn-sm btn-dark m-1">Illustration</button>
       <button class="btn btn-sm btn-dark m-1" @click="byAll()">ALL ArtWork</button>
    
    
    
    
    </div>
    <hr />
<p style="color:grey;text-align:left">Total items: {{ DB.length }}</p>
    </div>
    </div>
    <p style="color:green;text-align:left"><img style="width:50px;margin:2em" src="../assets/icons/mint_paint.svg"/>Similar Selected items: {{ DBMusic.length }}</p>
<div class="row">


<div
v-for="item in DBMusic" :key="item.id"
 class=" card  container bg-dark text-light mb-4 p-2 ">
<div class="row">
<div><h5>{{item.title}}</h5><p>{{item.txt}}</p>
<div class="container"><img style="width:150px"
:src="fillPic(item.pic)"
/></div></div>
</div>
</div>

</div>


    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name:'PicCard',
        computed:{
            ...mapState(['DB']),
          
        },
        created(){
            this.DBMusic = this.DB
            .map((o)=>o)
        },
        data(){
            return{
                   DBMusic:[]
                  
            }
        },
        methods:{
            fillPic(pic){
                return require("../assets/data/pics/" + pic)
            },
            fillMp3(mp3){
                return require("../assets/data/mp3/" + mp3)
            },
           byP(){
            this.DBMusic = this.DB
            .filter((o)=>o.type==="painting")
            this.DBMusic.reverse()
        },  byM(){
            this.DBMusic = this.DB
            .filter((o)=>o.type==="music")
            this.DBMusic.reverse()
        },  byC(){
            this.DBMusic = this.DB
            .filter((o)=>o.type==="comic")
            this.DBMusic.reverse()
        },
       byAll(){
            this.DBMusic = this.DB
            .map((o)=>o)
            this.DBMusic.reverse()
        },
        }
    }
</script>

<style lang="scss" scoped>
.carder{
    max-width:800px;
    display: flow-root;
}
.card{
margin:0.5rem;
max-width:30%;
}

audio{
    width:250px;
}
@media only screen and (max-width: 600px) {

.card{
     flex-direction: column;
     min-width:75%;
     margin:auto;
 //   flex-direction: row;

 }
}

.jungled1{
    background-size: cover;
}
</style>