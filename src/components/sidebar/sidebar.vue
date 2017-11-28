<template>
	<div>
	<div class="sidebar"   :class="flag?'black':''">
		<!--v-show="flag"-->
	    <div class="sidebar-top" >
	        <img src="../../assets/img/user_03.png" alt="" />
	        <p>LV.10</p>
	        <p>音沐音乐</p>
	    </div>
	    <div class="sidebar-bottom">
	    	<ul class="ul-sid-b">
	    		<li><a href=""><i class="iconfont  icon-wodexiaoxi"></i>我的消息</a></li>
	    		<li><a href=""><i class="iconfont  icon-huiyuanzhongxin"></i>会员中心</a></li>
	    		<li><a href=""><i class="iconfont  icon-icon"></i>商城</a></li>
	    		<li><a href=""><i class="iconfont  icon-wodehaoyou"></i>我的好友</a></li>
	    		<li><a href=""><i class="iconfont  icon-fujinderen"></i>附近的人</a></li>
	    		<li><a href=""><i class="iconfont  icon-gexingdingzhipifu"></i>个性皮肤</a></li>
	    		<li><a href=""><i class="iconfont  icon-tinggeshiqu"></i>听歌识曲</a></li>
	    		<li><a href=""><i class="iconfont  icon-dingshibofang"></i>定时播放</a></li>
	    		<li><a href=""><i class="iconfont  icon-yejianmoshi"></i>夜间模式</a></li>
	    		<li><a href=""><i class="iconfont  icon-shezhi"></i>设置</a></li>
	    	</ul>
	    </div>
	</div>
	</div>
	

</template>

<script>

	
export default{
	name:"sidebar",
	data(){
		return{
			
	        }
	},
	props:{
	
	  	flag:{
	  		type:Boolean,
	  		default:false
				
	  		}
	  	}
  
}
	
	
	

</script>
<style scoped lang="less">
.black{
	transform: translateX(258/100rem);
	transition: 1s;
	}
.sidebar{
	
	
	position: fixed;
	z-index:100;
	top: 0;
	left: -258/100rem;
	width: 258/100rem;
	background-color: white;
	.sidebar-top{
		text-align: center;
		width: 100%;
		height:282/100rem;
		background-image:-webkit-linear-gradient(to top right, #7B59AF, #BE439D); 
		background-image:linear-gradient(to top right,#7B59AF, #BE439D);
		img{
			margin-top:69/100rem;
			width: 110/100rem;
			height: 110/100rem;
			border-radius: 50%;	
			
		}
		p:nth-of-type(1){
			width: 72/100rem;
			height: 18/100rem;
			font-size: 18/100rem;
		    border: 1px solid #000;
		    border-radius: 18/100rem;
		    text-align: center;	
		    margin: 0 auto;
			
		}
		p:nth-of-type(2){
			width: 100/100rem;
			height: 25/100rem;
			font-size: 24/100rem;
			margin: 0 auto;
			margin-top: 17/100rem;
		}
	}
	.sidebar-bottom{
		
		.ul-sid-b{
			
			li{ 
				padding-left: 35/100rem;
				
				line-height:105/100rem ;
				height: 105/100rem;
				width: 100%;
				font-size: 28/100rem;
				i{
					padding-right: 20/100rem;
					font-size: 35/100rem;
				}
				a{
					width: 100%;
					height: 100%;
					font-size: 24/100rem;
				}
			};
		}
		
		
	}
}
	

</style>