<template>
    <div>
<div class="main container d-flex v-cloack">



<div class="mainCard  container border border-dark" v-for="item in DB" :key="item">


<div class="container m-4 border m-auto p-2">
<div class="row  border m-4">
<h1>{{ item.title }}</h1>

</div>

<div class="pixter">

<div class="row mb-4">
    <img class="cardPic" :src="fillPic(item.pic)" />
</div>



</div>
<div class="row mt-4 ">
<div class="col-12 col-md-2 ">
<div class="container mt-4">

<h5>{{ item.title}}</h5>
<h6>{{ item.title}}</h6>
<p>{{ item.title}}</p>


</div>

</div>

<div class="col-12 col-md-10">
    <div class="container  border p-2">
<p>{{ item.txt}}</p>
</div>
</div></div>

</div>

<div class=" audio-player container bg-dark mb-4 p-4 text-light">
Lorem ips<h6>um dolor</h6>
<audio controls style="width:150px"
:src="fillMp3(item.mp3)"
/>
</div>


</div>




</div>
    </div>
</template>

<script>

import { mapState } from 'vuex'; 

    export default {
        name:'ArticleCard',
        computed:{
            ...mapState(['DB']),
          
        },
        data(){
            return{
               
                  
            }
        },
        methods:{
            fillPic(pic){
                return require("../assets/data/pics/" + pic)
            },
            fillMp3(mp3){
                return require("../assets/data/mp3/" + mp3)
            }
        }
    }
</script>

<style lang="scss" scoped>

.pixter{
    height:100px;
    width:100px;
    background-color: black;
    margin:auto;


}

.mainCard{
    max-width:75%;
    margin:0 auto;
}
.audio-player {
  width: 15rem;
  height: 15rem;
}

.icon-container {
  width: 100%;
  height: 100%;
  background-color: #DE5E97;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}

.audio-icon {
   width: 90%;
   height: 90%;
}
</style>