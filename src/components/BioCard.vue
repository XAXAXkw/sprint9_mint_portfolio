<template>
    <div>
<div class="bio container border border-success mb-2 p-4">

<h1  style="text-align:end; margin-left:50px;color:green">{{ title }}</h1>

<div class="container">
<div class="row">
<div class="col-4 bg-success rounded text-white p-3">

    <h1>{{ YEAR }}</h1>
</div>
<div class="col">
<h5>{{ subtitle }}</h5>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero consequatur, hic harum ut placeat quod dolore repellendus et aspernatur, atque repellat qui iusto excepturi ipsum reprehenderit saepe? Maiores, cupiditate ipsum.</p></div>
</div>
</div>

</div>
    </div>
</template>

<script>
    export default {
        name:'BioCard',
        props:(['YEAR','title','subtitle'])
    }
</script>

<style lang="scss" scoped>
.bio{
    background-color: rgba(0, 0, 0, 0.774);
    color:grey;
    border-radius: 25px;
    margin:1rem auto;
}
</style>