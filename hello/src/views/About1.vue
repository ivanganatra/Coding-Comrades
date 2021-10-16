<template>
    <div>
          <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="width:200px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>

  <div class="w3-bar-block">
    <a href="#" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Home</a> 
    <a href="#showcase" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">{{idd}}</a> 
    <a href="#services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white"></a> 
    <!-- <a href="#designers" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Designers</a>  -->
    <!-- <a href="#packages" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Packages</a>  -->
    <!-- <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</a> -->
  </div>
</nav>
        <h1></h1>
         <div id="con">
           <!-- {{list}} -->
     <div v-for="index in list" :key="index" :index="iddd">
      <router-link :to="{ name: 'About2', params: {id:index.id} }" :key="$route.path">
          <!-- {{index}} -->
       
<!-- {{index.id}} -->
     <div class="w3-row-padding w3-center w3-margin-top">
<div class="w3-third">
  <div class="w3-card w3-container" style="min-height:460px; width: 270px;">
  <h3>{{index.heading}}</h3><br>
  <i class="fa fa-desktop w3-margin-bottom w3-text-theme" style="font-size:120px"></i>
  <p>{{index.heading}}</p>
  <p>Mobile first fluid grid</p>
  <p>Fits any screen sizes</p>
  <p>PC Tablet and Mobile</p>
  </div>
</div></div></router-link> </div>

</div> 


    </div>
</template>
<script>
import axios from 'axios';
export default {
    
    data(){
        return{
          
           list:[],
           
           
            
           
        }
    },
     
    async mounted(){
      
      const result=await axios.get("http://localhost:3000/subjects");
      this.list=result.data;
      
    }
}
</script>
<style scoped>
h1{
    /* margin-top: 50px; */
}

#mySidebar,#div{
  /* margin-top: 50px;; */
}
#con{
  /* border:2px solid black; */
  display: flex;
  flex-wrap: wrap;
  margin-left: 200px;
}
</style>
