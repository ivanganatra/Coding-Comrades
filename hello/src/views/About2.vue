 <template>
    <div id="cont" >
          <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="width:200px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>

  <div class="w3-bar-block">
    <router-link to="/" style="color:white; margin-left=-10px" id-:home>Home</router-link>
 <div onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">{{list.heading}}  </div>
    <a href="#services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white"></a> 
    <!-- <a href="#designers" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Designers</a>  -->
    <!-- <a href="#packages" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Packages</a>  -->
    <!-- <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</a> -->
  </div>
</nav> 
 <div id="h">

   <nav>
        <ul class="mainMenu">
            <!-- <li><a href="#">Home</a></li> -->
            <li><h3 >Sort By</h3>
                <ul class="subMenu">
                    <li><a >Rating</a></li>
                    <!-- <li><a href="#">course</a></li> -->
                    <li><a >Course</a>
                        <ul class="SuperSubMenu">
                            <li><a >Udemy</a></li>
                            <li><a >Edx</a></li>
                            <li><a >Gfg</a></li>
                            <li><a >Youtube</a></li>
                            <li><a >Freecourse Site</a></li>
                            <li><a >Whinsical</a></li>
                            <li><a >Coursera</a></li>
                            <li><a >Other</a></li>
                     
                        </ul>
                    </li>
                </ul>
            </li>
            
        </ul>
    </nav>
 </div>
        <h1>Field : {{list.heading}} 
                     </h1>

<div id="head" v-for="item in ll" :key="item">
        
       <!-- {{list.link[0].link}} -->
       
    <a :href="item.link" target="blank"><button class="button button5">{{item.heading}}</button></a>
       <br>
         <!-- {{list}} -->{{item.course}}
       <!-- {{ll}} -->
         <div id="con">
     
       <div class="w3-container" id="cont">
  <!-- <h2>Dropdown Button</h2> -->
  <!-- <p>Move the mouse over the button to open the dropdown content.</p> -->
 
  
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
    props:["id"],
    data(){
        return{
         
            
            // list:["https://whimsical.com/dbms-roadmap-by-love-babbar-FmUi8ffVop33t3MmpVxPCo","OOP","CN","OS","DS","ALGORITHMS","AI-ML","CA"]
            list:[],
           
            ll:[],
            display:false
           
        }
    },
    async mounted(){
      
      const result=await axios.get("http://localhost:3000/subjects/"+this.id);
      this.list=result.data;
      // console.log(result);
      this.ll=this.list.link;
      // console.warn("hellewhejbfd")
    },
}
</script>
<style scoped>
#home{
  margin-left: -10px;
}
html,body{
 padding: 0;
 margin: 0;
 font-family: 'Open Sans', sans-serif;
}
ul{
    margin: 0;
    padding: 0;
    list-style: none;
}
.mainMenu{
  margin-left: 700px;
  
  
}
a{
    margin: 0;
    text-align: center;
    padding: 12px 15px 12px 15px;
    /* background: #5F6975; */
    color: rgb(0, 0, 0);
    display: block;
    text-decoration: none;
}
.mainMenu>li{
    display: inline-block;
    margin-left: -5px;
}
li:hover>a{
    background: #4B545F;
    cursor: pointer;
}
.subMenu{
    position: absolute;
    display: none;
}
.subMenu li{
    border: 1px solid #575F6A;
    /* border-bottom: 1px solid #6B727C; */
    position: relative;
}
.mainMenu>li:hover .subMenu{
    display: block;
}
.SuperSubMenu{
    position: absolute;
    top: 0;
    right: 0;
    -ms-transform: translate(100%,0);
    -webkit-transform: translate(100%,0);
    transform:translate(100%,0);
    display: none;
}
.subMenu li:hover>.SuperSubMenu{
    display: block;
}
#h,h1{
    /* margin-top: 50px; */
    margin: auto;
    /* border:2px solid black; */
    display: flex;
    justify-content: center;
    margin-left: 500px;
    margin-bottom:20px;
    width: 30%;
}
#ins{
    width: 500px;
    /* border: 2px solid olive; */
    display: flex;
    margin-left:-140px
}
#mySidebar,#div{
  /* margin-top: 50px;; */
}
#head{
  margin:auto;
  /* width: 60%; */
margin-left: 150px;
}
#cont{
  /* border:2px solid blue; */
  margin-top: 50px;

  
  


 
}.button5:hover {
  background-color: #555555;
  color: white;
}
#cont{
  /* border:2px solid black; */
 
}
</style>
