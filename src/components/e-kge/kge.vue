<template>
	<div class="kge">
		<div class="kge-top"></div>
		<div  class="kge-midder">
			<a href="#">K歌</a>
		</div> 
		<div class="kge-bottom">
			<mt-navbar v-model="selected">
			  <mt-tab-item id="1">日榜</mt-tab-item>
			   <mt-tab-item id="2">总榜</mt-tab-item>
			</mt-navbar>

			<!-- tab-container -->
			<mt-tab-container v-model="selected">
			  <mt-tab-container-item id="1" >
			  	  <div class="selected-box" v-for="item in songlists">
			  	  	 <span>{{item.data.songname}}</span>
			  	  </div>
			  </mt-tab-container-item>

			  <mt-tab-container-item id="2" >
			  	  <div class="selected-box" v-for="song in songlist">
			  	  	 <span>{{song.data.songname}}</span>
			  	  </div>
			  </mt-tab-container-item>
			</mt-tab-container>
		</div>
   </div>
      
</template>

<script type="text/javascript">
	export default {  
  		name:'kge',
        data(){  
		  return{  
		  	 "selected":"1",
		  	  songlists:[],
		  	  songlist:[]
		  } 
        },
        created(){
          var url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1060760102&uin=1213594966&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1511168499598";
     
		    const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
			      // 网络请求
			this.$axios.get(API_PROXY+url,{

	        }).then(res=> {
	          /*console.log(res.data)*/
	          /*console.log(res.data.songlist)*/
	          /*let str=res.data;*/
	          this.songlists = res.data.songlist.slice(0,50);
	          this.songlist = res.data.songlist.slice(1,100);
	         /* console.log(this.songlists.slice(0,50))*/
	        })
	        .catch(error=>{
	            console.log(error)
	        })
		}
    }  
</script>

<style lang= "less" scoped>
.kge{
	width:100%;
}
.kge-top{
	width: 100%;
	height: 7rem;
	background:url(../../assets/img/K歌_01.png) no-repeat center center;
	background-size: 100% 7.5rem;
}
.kge-midder{
	width:100%;
	height:1.11rem;
	background: #ffffff;
	overflow: hidden;
}
.kge-midder a{
	display: block;
	width: 2.8rem;
	height:0.78rem;
	line-height:0.78rem;
	background:#715cea; 
	margin:0.15rem auto 0;
	text-align: center;
	font-size: 0.5rem;
	color: #ffffff;
	border-radius: 5px;
}
.kge-bottom{
	width: 100%;
	background:#ffffff;
	margin-top: 0.15rem;

}
.selected-box>span{
	font-size: 0.12rem;
	width: 100%;
	height: 0.32rem;
	line-height: 0.32rem;
	padding-left: 1.5rem;
}


</style>
