<template>
	<div class="ser-con-min">
	<div class="ser-con-list" v-for="(nav,index) in lis">
		<img :src="url1+nav.data.albummid+url2"></img>
		<div>
			<p>{{nav.data.albumname.substr(0,20)}}</p>
			<p>{{nav.data.singer[0].name}}</p>
			<p>大家都爱唱</p>
		</div>
        <router-link to="/Ksong" tag="span">K歌</router-link>
		
	</div>
	</div>
</template>

<script>



	
export default{
	name:"ser-con-list",
	data(){
		return{
		lis:[],
		url1:'https://y.gtimg.cn/music/photo_new/T002R300x300M000',
		url2:'.jpg'
	        }
	},
	created(){
       const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
       var a='https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1060760102&uin=1213594966&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1511168499598'
       
       this.$axios.get(API_PROXY+a,{
      
    })
	
    .then(res => {
     
      this.lis = res.data.songlist.slice(10,19) ;
      console.log(res.data.songlist)


     
    })
    .catch(error => {
      console.log(error);
    })
    }
	
}
	
	
	

</script>
<style scoped lang="less">
.ser-con-min{
	

    .ser-con-list{
    	
    	background-color: white;
    	padding: 20/100rem 20/100rem;
    	width:710/100rem;
    	height: 120/100rem;
    	border-bottom: 1px solid #ECECEC;
    	img{
    		float: left;
    		width: 120/100rem;
    		height: 120/100rem;
    		background-color: red;
    		
    	}
    	div{
    		float: left;
    		p:nth-of-type(1){
    		font-size:35/100rem ;
    	    }
    	    p:nth-of-type(2),p:nth-of-type(3){
    		font-size:24/100rem ;
    	    }
    	    p:nth-of-type(2){
    	    	padding:17/100rem 0 ;
    	    }
    	};
    	span{
    		margin-top:44/100rem ;
    		margin-right:37/100rem ;
    		text-align: center;
    		float:right;
    		width: 110/100rem;
    		height: 36/100rem;
    		line-height:36/100rem ;
    		color: #E41F6E;
		    border: 1px solid #E41F6E;
		    border-radius: 5px;
    	}
    	
    }
	
}
</style>