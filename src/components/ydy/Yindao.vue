<template>
	<div class="yindao">
		 <swiper :options="swiperOption">
		    <swiper-slide>
		    		<div class="yindao-box">
		    			<div class="yindao-top">
		    				<img src="../../assets/img/yindao1.png">
		    			</div>
		    			<div class="yindao-bottom">
		    				<p>“We were seventeen, but he was sweet and it was true”</p>
		    				<p>《 Another Day of Sun》-  Soundtrack</p>
		    				<div>

		    					<p>触碰音乐</p>
		    				    <p>沉静其中</p>
		    				</div>
		    				
		    			</div>
		    		</div>
		    </swiper-slide>

		    <swiper-slide>
		    	<div class="yindao-box1">
		    		<p>开启音乐之旅</p>
		    	</div>
		    </swiper-slide>
		    <swiper-slide>
		    	<div class="yindao-box2">
		    	<div class="roul">
		    		<router-link to="/Login" class="login">登录</router-link><br/>
		    		<router-link to="/res" class="res">注册</router-link>
		    	</div>
		    		<div>
		    		
		    			<p>最美音乐</p>
		    		    <p>听你想听的歌</p>
		    		</div>
		    		
		    	</div>
		    </swiper-slide>
		    <div class="swiper-pagination"  slot="pagination"></div>
		 </swiper>
	</div>
</template>

<script>
  export default {
  	name:"yindao",
    data () {
    	return{
    	  notNextTick: true,
          swiperOption: {
          	  loop:'true',
	         /* autoplay: 3000,*/
	          grabCursor: true,
	          setWrapperSize: true,
	          autoHeight: true,
	          pagination: '.swiper-pagination',
	          paginationClickable: true,
	          prevButton: '.swiper-button-prev',
	          nextButton: '.swiper-button-next',
	          mousewheelControl: true,
	          observeParents: true,
          }
    	}
    }

  }
</script>


<style lang="less" scoped>
.yindao{
    	width:100%;

    	background-color: #fff;
    	.swiper-container {
		    width:100%;
		    height: 13.34rem;
		    .yindao-box{
    		width: 100%;
    		margin: 0 auto;
    		background-color: #fff;
    		position: relative;
	    		&>.yindao-top{
	    			&>img{
	    				width: 100%;
	    				height: 6.82rem;
	    			}
	    		}
	    		&>.yindao-bottom>p{
	    			height: 0.26rem;
	    			line-height: 0.26rem;
	    			text-align:right;
	    			color:#aaaaaa;
	    			font-size: 0.19rem;
	    			padding-top: 0.55rem;
	    			box-sizing: border-box;
	    			padding-right: 0.1rem;
	    		}
	    		&>.yindao-bottom>div{
	    			width: 4.45rem;
	    			height: 1.37rem;
	    			margin: 0 auto;
	    			margin-top: 1.08rem;
	    			&>p{
	    				font-size: 0.52rem;
	    				color: #000000;
	    				font-family: "宋体";
	    				text-shadow: 2px 2px 2px #676767;
	    				font-weight: bold;
	    				height: 0.82rem;
	    				line-height: 0.82rem;
	    			}
	    			&>p:nth-child(2){
	    				padding-left: 2.28rem;

	    			}
                    
	    		}

    	    }
    	    .yindao-box1{
    	    	width: 100%;
    	    	height: 13.34rem;
    	    	background-color: red;
    	    	background: url("../../assets/img/yindao2.png")no-repeat;
    	    	background-size:100% 13.34rem;
    	    	position: relative;
    	    	&>p{
    	    		font-size: 0.5442rem;
    	    		color: #0ea1db;
    	    		position: absolute;
    	    		bottom: 2.04rem;
    	    		left:2.18rem;
    	    		text-shadow:5px 5px 5px #022f68;
    	    	}

    	    }.yindao-box2{
    	    	width: 100%;
    	    	height: 13.34rem;
    	    	background-color: red;
    	    	background: url("../../assets/img/yindao3.png")no-repeat;
    	    	background-size:100% 13.34rem;
    	    	overflow: hidden;
    	    	&>div{
    	    		margin-top: 4.2rem;
    	    		&>p{
					font-weight: bold;
					text-align: center;
					height: 0.62rem;
					line-height: 0.82rem;
                    font-family: "宋体";
    	    		font-size: 0.54rem;
    	    		color: #fff;
    	    		text-shadow:5px 5px 5px #022f68;
	    	    	}
	    	    	&>p:nth-child(2){
		    		    text-align: center;
		    		    padding-top: 0.1rem;
                    }
	    	    }

    	    }
		}
    	
    }
	.login,.res{
		border:0.1rem solid #af24a5;
		width: 4rem;
		display:inline-block;
		height: 0.7rem;
		text-align:center;
		line-height:0.7rem;
		background-image:linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);
		font-size:0.5rem;
		color: #fff;
		font-weight:bold;
		margin-left:1.5rem;
			
	}
	
</style>