<template>
    <div class="headerComp greengrad">

<div class="container">
<div class="row">

<div class="col"><img style="width:100px" :src="fillMe(spot)"/><h1>{{ title }}</h1></div>
<div class="col"><hr /></div>
<div class="col"><div class="container text-light">
<h3>{{ subtitle }}</h3>
<p>{{ small }}</p>

</div></div>
</div>
</div>





    </div>
</template>

<script>
    export default {
        name:'HeaderComponent',
        props:(['title','subtitle','spot','small']),
        methods:{
            fillMe(spot){
             
                return   require('../assets/icons/' + spot)
            }
        }
    }
</script>

<style lang="scss" scoped>
.headerComp{
    background-color: rgba(36, 49, 37, 0.485);
    min-width:100%;
    margin:0;
    text-align: left;
   padding:2rem ;
   line-height: 10px;
    display: flex;

}
.greengrad{
    background: linear-gradient(270deg, #49e0b9, #27ad8a, #baffed);
    background-size: 600% 600%;

    -webkit-animation: AnimationName 30s ease infinite;
    -moz-animation: AnimationName 30s ease infinite;
    animation: AnimationName 30s ease infinite;
}

@-webkit-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@-moz-keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
@keyframes AnimationName {
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%}
}
h1{
    color:rgb(30, 48, 30);
    text-shadow: 0px 0px 15px rgba(127, 255, 212, 0.832);
}
</style>