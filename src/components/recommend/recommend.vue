<template>
	<div class="recommend">
		<p>
			<router-link to="/server"  active-class="active">每日推荐</router-link>
			
			<span></span>
			<router-link to="/Hotsong"  active-class="active">音沐热歌榜</router-link>
			
			<span></span>
			<router-link to="/server"  active-class="active">音乐Party</router-link>
			
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
			a{
				position:relative;
				top:20px;
				margin-top: 100/100rem;
				padding:18/100rem 56/100rem;
				/*background-color: red;*/
				font-size:28/100rem;
				&:nth-of-type(2):before{
					background:url(../../assets/img/regebang.png) no-repeat;
					-webkit-background-size:70/100rem 70/100rem ;
					background-size:70/100rem 70/100rem ;
				};
				&:nth-of-type(3):before{
					background:url(../../assets/img/yinyueparty.png) no-repeat;
					-webkit-background-size:70/100rem 70/100rem ;
				    background-size:70/100rem 70/100rem ;
				}
			};
			a:before{
				position: absolute;
				
				left: 50%;
				margin-left: -35/100rem;
				top:-80/100rem;
				content:"";
				display:inline-block; 
				background:url(../../assets/img/meirituijian.png) no-repeat ;
				-webkit-background-size:70/100rem 70/100rem ;
				background-size:70/100rem 70/100rem ;
				width: 70/100rem;
				height: 70/100rem;
				
				
			}

			span{
				position: absolute;
				left:250/100rem;
				top:50%;
				margin-top: -30/100rem;
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