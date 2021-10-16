<template>
    <div>
          <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="width:200px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>

  <div class="w3-bar-block">
    <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
    <router-link :to="{ name: 'About1', params: { id:iii} }"> <div onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white"> {{iii}} </div> </router-link>
    <a href="#services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">{{idd}}</a> 
    <!-- <a href="#designers" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Designers</a>  -->
    <!-- <a href="#packages" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Packages</a>  -->
    <!-- <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</a> -->
  </div>
</nav>
        <h1>Field : {{idd}}</h1>
         <div id="con">
     <!-- <div v-for="index in list" :key="index"> -->
      <!-- <router-link :to="{ name: 'About1', params: { id:sub } }" :key="$route.path" -->
        
        <div>{{list.heading}} </div>
       <div class="w3-container" id="cont">
  <!-- <h2>Dropdown Button</h2> -->
  <!-- <p>Move the mouse over the button to open the dropdown content.</p> -->
  <div class="w3-dropdown-hover">
   <a :href="ll" target="_blank"><button class="w3-button w3-white" id="ins">Roadmap</button></a>
    <div class="w3-dropdown-content w3-bar-block w3-border">
      </div>
      <!-- <a :href="index" target="blank" class="w3-bar-item w3-button">Link 1</a> -->
      <!-- <a href="#" class="w3-bar-item w3-button">Link 2</a>
      <a href="#" class="w3-bar-item w3-button">Link 3</a> -->
    </div>
  </div>
</div>

   <!-- </div>
</div> -->
    </div>
</template>
<script>
import axios from 'axios';
export default {
    props:["id","ip","ii"],
    data(){
        return{
           iii:this.ii,
            idd:this.id,
            // list:["https://whimsical.com/dbms-roadmap-by-love-babbar-FmUi8ffVop33t3MmpVxPCo","OOP","CN","OS","DS","ALGORITHMS","AI-ML","CA"]
            list:[],
            ll:undefined,
           
        }
    },
    async mounted(){
      
      const result=await axios.get("http://localhost:3000/subjects/"+this.ip);
      this.list=result.data;
      this.ll=this.list.Link;
    }
}
</script>
<style scoped>
h1{
    margin-top: 50px;
}
#ins{
    width: 500px;
    /* border: 2px solid olive; */
    display: flex;
    margin-left:-140px
}
#mySidebar,#div{
  margin-top: 50px;;
}
#cont{
  /* border:2px solid blue; */
  width: 50%;
  margin:45px;
  margin-left: 200px;

  /* display: flex;
  flex-wrap: wrap;
  margin-left: 200px; */
}
</style>
