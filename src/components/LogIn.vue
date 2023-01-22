<template>
    <div><div class="logg"> 
    <button 
    @click="loggin=!loggin"
    class="logg btn btn-success btn-sm"> LogIn </button></div>
       
<div class="logger" v-if="loggin">

<div class="container mb-2">
User <input type="email" id="email" /><br/>
User <input type="password" id="password"  />
</div>
<p> <button class="btn btn-success btn-sm"> ENTER</button></p>



</div>
    </div>
</template>

<script>
    export default {
        name:'LogIn',
        data(){
            return{
                password:666, userName:"ivancuadros@gmail.com",loggin:false
            }
        }
    }
</script>

<style lang="scss" scoped>
.logger{
    background-color: rgba(0, 0, 0, 0.878);
    border:solid 1px whitesmoke;
    border-radius: 1em;
    color:aquamarine;
    position:absolute;
    padding:2rem;
    font-size: 10px;
    width:250px;
    margin-left: 50%;
    margin-top: 5%;
    z-index:4;
    input{
background-color: rgb(33, 48, 37);
color:green;
margin:10px;
    }

}

.logg{
    position:absolute;
z-index:5;
    font-size: 10px;
margin-left: 75%;
}
</style>