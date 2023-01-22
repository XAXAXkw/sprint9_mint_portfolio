<template>
  <div class="about">
    <HeaderComponent 
    spot="mint_about.svg"
    title="10 years Freelancer"
    small="since 1975 to 2023"
    />
   <div class="container m-4 p-2
   ">
       <h6>Studies & Achievements in the University of Misery</h6>
   </div>




    <hr />
    <div class="container d-flex bg-dark text-light">
    <div class="col-8 border border-light p-2 m-2">
    <h1>Title here</h1>
    <h6>Lorem, ipsumnus repudiandae.</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum dignissimos autem ducimus perspiciatis assumenda, tempore quisquam explicabo asperiores. Quasi molestias ea sit consequatur beatae pariatur. Illum, quisquam corporis. Quibusdam.</p>
    </div>
    <div class="col-2"><ListComponent /></div>
    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import ListComponent from '../components/ListComponent.vue'
    export default {
        name:'AboutView',
        components:{
            HeaderComponent, ListComponent
        }

    }
</script>