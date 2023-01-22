<template>
    <div>
<HeaderComponent 
spot="mint_books.svg"
title="Comic-Books"
subtitle=""
small="All Categories"
/>

<BookCard />
    </div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderComponent from '../components/HeaderComponent.vue'
import BookCard from '../components/BookCard.vue'

    export default {
        name:'BiblioComponent',
        components:{
            HeaderComponent,BookCard
        },
        computed:{
            ...mapState(['DB']),
          
        },
        created(){
            this.DBMusic = this.DB
            .filter((o)=>o.type==="painting")
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
            }
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


</style>