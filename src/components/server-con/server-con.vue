<template>
	<div class="server-con">
		<div class="tabs">
			<p>
				<span  @click="showa" :class="show?'active':''"  >热歌推荐</span>
				<span  @click="showa" :class="show?'active':''">猜你喜欢</span>
				<span  @click="showa" :class="show?'active':''" >新歌首发</span>
			</p>
		</div>
		<SerCL/>
	</div>
</template>

<script>
import SerCL from "./server-con-list"	
export default{
	name:"server-con",
	data(){
		return{
			show:false
			
	        }
	},
	methods: {
     showa(e){
     	e.path[1].children[0].style.color="black"
     	e.path[1].children[1].style.color="black"
     	e.path[1].children[2].style.color="black"
     	e.path[1].children[0].style.borderBottom="0px solid red"
     	e.path[1].children[1].style.borderBottom="0px solid red"
     	e.path[1].children[2].style.borderBottom="0px solid red"
     	e.path[0].style.borderBottom="2px solid #E41F6E"
     	e.path[0].style.color="#E41F6E"
     	
     	
     },
    
    },
    components:{
   
    SerCL
    }
		
}
	

</script>
<style  lang="less">
	
	.server-con{
		width: 100%;
		font-size: 28/100rem;
		.tabs{
			height:80/100rem ;
			background-color:white ;
			border-bottom: 1px solid #E3E3E4;
			p{	
				height: 80/100rem;
				
				margin-left:  35/100rem;
				margin-right:  35/100rem;
				/*background-color: red;*/
				span{
					float: left;
					height: 80/100rem;
					line-height: 80/100rem;
					padding: 0 35/100rem;
					font-size: 28/100rem;
					/*background-color:pink;*/
					box-sizing: border-box;
					
				}
				span.active{
					border-bottom: 0px ;
					background-color: #fff;
					
				}
				span:nth-of-type(2){
					margin-left: 65/100rem;
					margin-right: 65/100rem;
				}
			}
		}
		
		
	}
 

</style>