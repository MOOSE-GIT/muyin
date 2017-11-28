<template>
	<div class="server-list">
		<div class="ser-list"> 
			<div>
			<i class="iconfont icon-wodehaoyou "></i>
			<a href="">歌手 </a>
			</div>
			<div>
				<span></span>
				<i class="iconfont icon-fenlei "></i>
				<a href="">分类</a>
				<span></span>
			</div>
			<div>
			<i class="iconfont icon-iconcopy "></i>
			<a href="">已点</a>
			</div>
		</div>
	</div>
</template>

<script>
	
export default{
	name:"server-list",
	data(){
		return{
			
	        }
		}
}
	

</script>
<style scoped lang="less">
	
	.server-list{
		padding: 5/100rem 0;
		width: 740/100rem;
		height: 85/100rem;
		background-color: #EEEEEE;
		.ser-list{
			width: 100%;
			height: 100%;
			background-color:white ;
			div{
				position: relative;
				float: left;
				width: 33.3%;
			    height:100%;
			    font-size:28/100rem ;
			    text-align: center;
			    line-height:85/100rem ;
			    
			    i{  
			    	font-size:45/100rem ;
			    	
			    };
			    span{
			    	position: absolute;
			    	top:22.5/100rem;
			    	
			    	width: 1px;
			    	height: 30/100rem;
			    	background-color: #D4D4D4;
			    }
			    span:nth-of-type(1){
			    	left:0;
			    }
			    span:nth-of-type(2){
			    	right:0;
			    }
			}
			
		}
		
	}
 

</style>