<template>
	<div class="recommend">
		<p>
			<i class="iconfont icon-fenlei "></i>
			<a href="">电台分类</a>
			<span></span>
			<i class="iconfont icon-paihang "></i>
			<a href="">电台排行</a>
		</p>
	</div>
</template>

<script>
	
export default{
	name:"recommend",
	data(){
		return{
			
	        }
		}
}
	

</script>
<style scoped lang="less">
	
	.recommend{
		width: 100%;
		height: 170/100rem;
		/*background-color: pink;*/
		p{	
			position: relative;
			box-sizing: border-box;
			padding-top: 20/100rem;
			width: 100%;
			height: 170/100rem;
			overflow: hidden;
			
			i{	
				padding-top:40/100rem;
				font-size:65/100rem;
				padding-left: 100/100rem;
				vertical-align: middle;
			}
			a{
				position:relative;
				vertical-align: middle;
				margin-top: 100/100rem;
				padding:18/100rem 20/100rem;
				/*background-color: red;*/
				font-size:28/100rem;
				
			};
			

			span{
				position: absolute;
				left:375/100rem;
				top:50%;
				margin-top: -35/100rem;
				width: 1px;
				height:65/100rem;
				background-color: #777;
				&:nth-of-type(2){
					left:500/100rem;
				}
				

			}

		}
	}
 

</style>