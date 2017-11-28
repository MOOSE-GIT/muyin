<template>
	<div class="header">
		<p >
			<i @click="sidebar" class="iconfont icon-category "></i>
			 <router-link to="/music" tag="span">沐音</router-link>
			 <router-link to="/mine" tag="span">我的</router-link>
			 <router-link to="/dynamic" tag="span">动态</router-link>
			
			<router-link class="iconfont icon-search" to="/rserver" ></router-link>
		</p>
		<Sidebar :flag="flag"/> 
		<div @click="sidebar" :class="flag?'black':''"></div>
	</div>
</template>

<script>
import "../assets/css/fonts/iconfont.css"
import Sidebar from "./sidebar/sidebar"



	
export default{
	name:"header",
	data(){
		return{
			flag:false
	        }
	},
	methods:{
		sidebar(e){
			this.flag=!this.flag
//			console.log(e.path)
//			e.path[2].style.backgroundColor="red"
			
		
		}
	},
	components:{
   
    Sidebar
    }
}
	
	
	

</script>
<style scoped lang="less">
    
	.header{
		.black{
		transition: 1s;
		background-color: rgba(0,0,0,.5);
    	position: fixed;
    	top:0;
    	right: 0;
    	width: 100%;
    	height: 100%;
    	z-index: 50;
        }
		
		
		
		box-sizing: border-box;
	
		padding-top: 62/100rem;
		width: 100%;
		height:128/100rem;
		background-image:-webkit-linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);
		background-image:linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);

			p {
				margin: 0 25/100rem;
				font-size: 40/100rem;
				color: #ffffff;
				text-align: center;
				i{
					font-size: 40/100rem;
					float:left;
				}
				&>i:nth-of-type(2){
					float:right;
				}
				span{
					font-size: 40/100rem;

				}
				&>span:nth-of-type(2){
					margin:0 77/100rem;
				}
	        }
	

	}

	
 

</style>