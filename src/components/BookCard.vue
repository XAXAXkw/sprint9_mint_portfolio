<template>
    <div class=" carder container  m-auto text-light">
<div
v-for="item in DBMusic" :key="item.id"
 class=" card container bg-dark text-light rounded mb-4 p-4  jungled">
<div class="row ">

<div class="col"><div><h4>{{item.title}}</h4><h6 style="color:green">{{item.txt}}</h6>


<div class="container rotateIn"><img style="width:150px"
:src="fillPic(item.pic)"
/></div>
<br />
<p>{{ item.data }}</p></div></div>
<div class="col">
<div class="container bg-light text-dark justify-content-start note m-2 p-4 border m-0">
<h6>{{ item.title }}</h6>
<p>{{ item.txt }}
Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur placeat id eveniet eos nesciunt ducimus totam amet vel, debitis quaerat aspernatur odit ex tenetur reiciendis esse rerum accusamus suscipit? Corrupti.</p>

<hr />
<a :href="item.data" target="_blank">READ ONLINE</a>

</div>


</div>

</div>
</div>

    </div>
</template>

<script>
import { mapState } from 'vuex';

    export default {
        name:'BookCard',
        computed:{
            ...mapState(['DB']),
          
        },
        created(){
            this.DBMusic = this.DB
            .filter((o)=>o.type==="comic")
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
}

audio{
    width:250px;
}
a {
    font-weight: bold;
    color: #33d994;
    text-decoration: none;
    text-shadow: 0px 0px 15px rgba(127, 255, 212, 0.832);


  }

  a:hover{
    color: #96ffd0;

  }
  .note{
    box-shadow: 0px 1px 15px grey;
  }

</style>