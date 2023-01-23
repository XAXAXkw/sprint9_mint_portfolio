<template>
  <div class="about jungled2">
  <div class="biorain"></div>
    <HeaderComponent 
    spot="mint_about.svg"
    title="20 years Freelancing"
    small="since 1975 to 2023"
    />


    <BioCard 
    title="BackEnd Programming"
    subtitle="Future Goals: python, C#, MySQL, Node.js"
    YEAR="2023"/>

    <BioCard 
    title="FrontEnd Programming Bootcamp"
    subtitle="New features: Javascript, Bootstrap, Vue.js"
    YEAR="2020"/>



    <BioCard 
    title="BLENDER 3D"
    subtitle="3D: modelling, animation, MotionGraphics"
    YEAR="2018"/>

    <BioCard 
    title="2D Animation"
    subtitle="Software: After Effects, OpenToonz, Krita"
    YEAR="2017"/>



   <div class="container m-4 p-2
   ">
       <h6>Studies & Achievements in the University of Misery</h6>
   </div>




    <hr />
    <div class="row d-flex bg-dark text-light p-4">
    <div class="col-8 border border-light p-4 m-auto">
    <h1>Title here</h1>
    <h6>Lorem, ipsumnus repudiandae.</h6>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem earum dignissimos autem ducimus perspiciatis assumenda, tempore quisquam explicabo asperiores. Quasi molestias ea sit consequatur beatae pariatur. Illum, quisquam corporis. Quibusdam.</p>
    </div>

    </div>
  </div>
</template>

<script>
import HeaderComponent from '../components/HeaderComponent.vue'
import BioCard from '../components/BioCard.vue'
    export default {
        name:'AboutView',
        components:{
            HeaderComponent, BioCard
        }

    }
</script>