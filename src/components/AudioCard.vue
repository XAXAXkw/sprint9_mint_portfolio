<template>
    <div  class="memphis">
    <div class=" carder container  text-light ">
        

<div class="container  p-2 m-auto">
<div class="row m-0">
<div class="container"> 
   <button class="btn btn-sm btn-dark m-1" @click="byJazz()">Jazz</button>
   <button class="btn btn-sm btn-dark m-1" @click="byCovers()">Covers</button>
   <button class="btn btn-sm btn-dark m-1" @click="byInstru()">Instrumental</button>
   <button class="btn btn-sm btn-dark m-1" @click="byPunk()">Weird</button>
   <button class="btn btn-sm btn-dark m-1">World Music</button>
   <button class="btn btn-sm btn-dark m-1" @click="byAll()">ALL Music</button>




</div>
<hr />
<p style="color:grey;text-align:left">Total items: {{ DB.length }}</p>
</div>
</div>

<div class="row"><p style="color:green;text-align:left"><img style="width:50px;margin:2em" src="../assets/icons/mint_music.svg"/>Similar Selected items: {{ DBMusic.length }}</p></div>


<div
v-for="item in DBMusic" :key="item.id"
 class=" card container rounded border-success  peebody text-light mb-2 ">
 <div class="row  d-flex justify-content-center p-2 ">
 <div class="col">
 <div class="container"> <h4>{{item.title}}</h4></div>

 </div>
 <div class="col">
    <audio controls style="width:150px"
:src="fillMp3(item.mp3)"
/><p>{{item.txt}}</p>
 </div>
 
 </div>
<div class="row d-flex">
<div>
</div>
</div>
</div>

    </div>
    <br />
    </div>
</template>

<script>



import { mapState } from 'vuex';

    export default {
        name:'AudioCard',
        computed:{
            ...mapState(['DB']),
          
        },
        created(){
            this.DBMusic = this.DB.filter((o)=>o.type==="music");
            this.DBMusic.reverse();
          
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
           byJazz(){
            this.DBMusic = this.DB
            .filter((o)=>o.style==="jazz")
        },  byCovers(){
            this.DBMusic = this.DB
            .filter((o)=>o.style==="covers")
        },  byInstru(){
            this.DBMusic = this.DB
            .filter((o)=>o.style==="instrumental")
        },
        byPunk(){
                  this.DBMusic = this.DB.filter((o)=>o.style==="punk")
        },
       byAll(){
        this.DBMusic = this.DB.filter((o)=>o.type==="music")
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
margin:2rem;
width:75%;
box-shadow: 0px 0px 25px rgba(127, 255, 212, 0.585);
}

audio{
    width:90%;
    height: 15px;
}
audio::-webkit-media-controls-panel {
  background-color: #56ffdd;
  height: 15px;
}

audio::-webkit-media-controls-time-remaining-display {
  color: #fff;
}
.memphis{
    background-image: url('../assets/memphisbkg.png');
    background-repeat: no-repeat;
    background-size: cover;

}

</style>