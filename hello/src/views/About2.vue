<template>
    <div id="cont" >
          <nav class="w3-sidebar w3-red w3-collapse w3-top w3-large w3-padding" style="width:200px;font-weight:bold;" id="mySidebar"><br>
  <a href="javascript:void(0)" onclick="w3_close()" class="w3-button w3-hide-large w3-display-topleft" style="width:100%;font-size:22px">Close Menu</a>

  <div class="w3-bar-block">
    <router-link to="/" style="color:white; margin-left=-10px" id-:home>Home</router-link>
 <div onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white" id="dbms">{{list.heading}}  </div>
    <a href="#services" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white"></a> 
    <!-- <a href="#designers" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Designers</a>  -->
    <!-- <a href="#packages" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Packages</a>  -->
    <!-- <a href="#contact" onclick="w3_close()" class="w3-bar-item w3-button w3-hover-white">Contact</a> -->
  </div>
</nav> 
 <div id="h">
    <h1> {{list.heading}} 
                     </h1>

   <nav id="nav">
        <ul class="mainMenu">
            <!-- <li><a href="#">Home</a></li> -->
            <li><h3 style="margin-left:20px">Sort By</h3>
                <ul class="subMenu">
                    <li><a @click="sortbyr">Rating</a></li>
                    <!-- <li><a href="#">course</a></li> -->
                    <li><a >Course</a>
                        <ul class="SuperSubMenu">
                            <li ><a @click="Products">Udemy</a></li>
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

<div id="head" v-for="item in ll" :key="item">
        
       <!-- {{list.link[0].link}} -->
       
    <a :href="item.link" target="blank"><button id="btn5" class="button button5">{{item.heading}}</button></a>
      
         
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
    },computed: {
      
  
  },methods: {
    Products() { console.log("fil")
      return this.ll.filter((item) => {
        return (item.course === 'Udemy');
        // console.log("filter");
       
      } )
    },sortbyr(){
      this.ll.sort((a,b) => {
                    return a.rating - b.rating;
                })
      // console.log(this.ll)
      }
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
  margin-left: 400px;
  
  
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
#dbms{
  margin-left: 44px
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
#nav{
  /* border: 2px solid black */
}
.subMenu li:hover>.SuperSubMenu{
    display: block;
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
  /* margin:auto; */
  line-height: 50px;
  /* border: 2px solid bl/anchedalmond; */
  width: 50%;
  margin: auto;
  margin-left:280px;
  display: flex;
  
  
  /* width: 60%; */
/* margin-left: -1///80px; */

}
#btn5 {
    background-image: url('https://www.pixelstalk.net/wp-content/uploads/2016/07/Computer-Science-HD-Images.jpg');
color: white;
width: 500px;
text-align: left;
}
#cont{
  /* border:2px solid blue; */
  margin-top: 50px;

  
  


 
}.button5:hover {
  background-color: #9fbabe;
  color: rgb(65, 221, 195);
}
#h{
  /* border:2px solid black; */
  display: flex;
  /* justify-content: space-around; */
  /* align-content: space-around; */
  width: 70%;
  margin-left: 300px;
  margin-bottom: 20px;
  
 
}
</style>


// ["https://s7280.pcdn.co/wp-content/uploads/2016/06/database-blue.png",https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdGP8UXLdKqXtHPYitxxRKOA9zgJfNTkD7HQ&usqp=CAU","https://upload.wikimedia.org/wikipedia/commons/6/6c/Logo_Novius_OS.jpg","https://www.tutorialspoint.com/basics_of_computer_science/images/computer_networking.jpg","https://online.crbtech.in/wp-content/uploads/2019/03/C-programming-1024x530.png",]