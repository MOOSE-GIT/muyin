<template>
	<div class="footer">
		<div class="footer-left">
			<img src="../assets/img/icon1.png" alt="" />
			<div class="singer">
			<p>Volar</p>
			<p>Alvaro Soler</p>
			</div>
		</div >
		<div class="footer-right">
			<i class="iconfont icon-bofang "></i>
			<i class="iconfont icon-liebiao "></i>
			
		</div>
	</div>
</template>

<script>

	
export default{
	name:"footer",
	data(){
		return{
			
		}
	}
}	

</script>
<style scoped lang="less">
.footer{
	position: fixed;
	bottom: 0;
	width: 100%;
	height: 80/100rem;
	padding:  10/100rem 0;
	background-color: white;
	overflow: hidden;
	.footer-left{
		padding-left: 10/100rem;
		float:left;
		/*background-color: royalblue;*/
		img{
			float:left;
			width: 80/100rem;
			height: 80/100rem;
		}
		.singer{
			float:left;
			p{
			padding-left: 10/100rem;
			line-height: 40/100rem;
			font-size: 24/100rem;
		    }
		}
		
	};
	.footer-right{
		height: 80/100rem;
		float:right;
		/*background-color: lawngreen;*/
		
		i{
			float:left;
			font-size: 50/100rem;
			padding:15/100rem 30/100rem;
			
		}
	}
	
	
}	
</style>