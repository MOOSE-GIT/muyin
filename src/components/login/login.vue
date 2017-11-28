<template>
	<div :class="{log}">
		<div class="logo">
			<div class="logo-img">
				<img src="../../assets/img/1.png">
			</div>	
		</div>

		<div class="input">
			<div>
				<input ref="uname" type="text" name="" placeholder="账号">
			</div>
			<div>
				<input ref="upwd" type="text" name="" placeholder="密码">
			</div>
			
		</div>

		<div class="logins">
			<a v-on:click="login" href="javascript:;">
				登录
			</a>
		</div>

		<div class="forget">
			<a href="javascript:;">
				忘记密码？
				<span>|</span>
				<router-link :to="{path:'/reg'}">立即注册></router-link>
			</a>
			<div class="method">
				<img src="../../assets/img/4.png">
				<img src="../../assets/img/5.png">
				<img src="../../assets/img/6.png">
			</div>
		</div>
		<div class="mark"></div>
		
	</div>
</template>

<script>
import qs from "qs"
	export default {
	  name: 'logins',
	  data() {
	    return {
	      isLogin:false,
	      loginStatus: false,
	      log:false
	    }
	  },
	  methods:{
	  	//登录功能
         login:function(){
         	this.isNull();
         	if(this.loginStatus){
         		console.log("格式正确")
         		this.select();
         	}else{
         		console.log("用户名和密码不能为空")
         	}
         },
         //查询数据库功能
         select:function(){

            var uname=this.$refs.uname.value;
           this.$axios.post('http://localhost:3000/login',{
           	uname:uname
           }).then(response => {
           	if(response.data.length==0){
           		console.log("没有这个人")
           		return
           	}else{
           		//调用方法判断密码是否正确
           		console.log(response.data[0].upwd)
                   this.isRight(response.data[0].upwd);
           	}

        }, response => {
            console.log("error");
        });
         },
         //判断密码是否正确
         isRight:function(upwd1){
         	console.log(upwd1)
              var upwd = this.$refs.upwd.value;

              		if(upwd1==upwd){
                         this.isLogin=true;
              		}else{
              			this.isLogin = false;
              		}
              	
              
              console.log(this.isLogin)
              if(this.isLogin){
              	this.log = true;
                 console.log("登录成功")
                 setTimeout(function(){
                 	window.location.href="/#/music"
                 },1000)
              }else{
                 console.log("用户名或密码错误")
              }
         },
         //判断用户名和密码是否为空
         isNull:function(){
         	var uname=this.$refs.uname.value;
         	var upwd=this.$refs.upwd.value;
         	this.loginStatus = !(/^\s*$/g.test(uname)||/^\s*$/g.test(upwd))
         	//
         }
	  }
	}
</script>

<style scoped lang="less">


.logo{
	width:100%;
	height:229/50rem;
	overflow: hidden;
	.logo-img{
		width:87/50rem;
		height:77/50rem;
		margin:0 auto;
		margin-top:67/50rem;
		&>img{
		width:100%;
		}
	}
	
}

.input{
	width:276/50rem;
	height:87/50rem;
	margin:0 auto;
	&>div{
		padding-left: 22/50rem;
		position: relative;
		&>input{
			width:248/50rem;
			height:23/50rem;
			border:none;
			border-bottom: 1px solid #a6a6a6;
			margin-left:7/50rem;
		    background: none;
		    outline: none;
		    font-size:14/50rem;
		    color:#a6a6a6;
		     margin-top: -999999rem;
		}
		&:before{
			content:"";
			width:22/50rem;
			height:22/50rem; 
			position: absolute;
			top:0px;
			left:0px;
			background:url(../../assets/img/2.png);
			background-size: 22/50rem;

		}
		
	}
	&>div:nth-child(2){
		margin-top:37/50rem;
		&:before{
			content:"";
			width:22/50rem;
			height:22/50rem; 
			position: absolute;
			top:0px;
			left:0px;
			background:url(../../assets/img/3.png);
			background-size: 22/50rem;

		}
	}
		

	}

	.logins{
		margin:0 auto;
		text-align:center;

		&>a{
			background:#ff406f;
			padding:11/50rem 113/50rem;
			display:inline-block;
			font-size:18/50rem;
			color:#fff;
			border-radius:10/50rem;
			margin-top:52/50rem;
			box-shadow:0 2px 25px #ff406f;
		}		
	}
			
	.forget{
		margin-top:92/50rem;
		text-align:center;
		color:#afafaf;
		span{
			margin:0 36/50rem;
		}
		.method{
			margin-top:31/50rem;
			&>img{
			width:23/50rem;
			height:23/50rem;
			margin:0 18/50rem;
			}
		}
		
	}


.log{
	position: relative;
	.mark{
		position: absolute;
		top: 283/50rem;
		left: 137/50rem;
		height: 100/50rem;
		width: 100/50rem;
		border-radius:50%;
		background: #ff406f;
		transition: 1s linear;
  		-webkit-transition: -webkit-transform 1s linear;
	    transition: transform 1s linear;
	    -webkit-animation:mymove 1.2s linear;
	}
	.mark{
		transform:scale(12);
	    -webkit-transform:scale(12);
	}    

}
	// 问题1,动画及动画衔接(顺序执行)?
	// <style>
	// 	@keyframes dffect1{
	// 	    0%{ transform:translateY(-200px); opacity:0;}  
	// 	    100%{ transform:translateY(0px); opacity:1; }
	// 	}
	// 	@keyframes effect2{
	// 	    0%{ margin-top:20px; }
	// 	    100%{ margin-top:0px; }
	// 	}
	// .div{
	//     animation-name:Effect1, Effect2;
	//     animation-duration:3s, 2s;
	//     animation-timing-function:linear, linear;
	//     animation-delay:0, 2s;
	//     animation-iteration-count:1, infinite;
	//     animation-fill-mode:forwards, forwards;
	//     animation-direction:normal, alternate;
	// }
	// </style>

	
	// 问题2:多个动画同时执行
	// div:hover{transform: rotate(360deg) scale(2,2) skew(10deg,5deg);} 中间用空格隔开 旋转 缩放 扭曲 等同时执行多个效果！


	// 问题3:页面延时1s跳转
	// setTimeout(function(){
    // window.location.href="/#/index"
    // },1000)
	


</style>
