<template>
	<div class="rec-list">
		<p><span></span>推荐</p>
		<div v-for="(item,index) in musicList" :class=" index%3==1 ? 'addpadding':'' " >
			
			<RecCon :musicList="item"/>
			
		</div>
	</div>
</template>

<script>
	
import RecCon from "../../components/recommend-con/rec-con"
	



export default{
	name:"rec-list",
	data(){
		return{
		musList:[],	
		musicList:[],
		
		url1:'https://y.gtimg.cn/music/photo_new/T002R300x300M000',
		url2:'.jpg'
	        }
	},
	components:{
   
    RecCon
    
  	},
	created(){
       const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
       var a='https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1060760102&uin=1213594966&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1511168499598'
       var b='https://u.y.qq.com/cgi-bin/musicu.fcg?callback=recom8868473989945107&g_tk=5381&jsonpCallback=recom8868473989945107&loginUin=0&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0&data=%7B%22comm%22%3A%7B%22ct%22%3A24%7D%2C%22playlist%22%3A%7B%22method%22%3A%22get_playlist_by_category%22%2C%22param%22%3A%7B%22id%22%3A59%2C%22curPage%22%3A1%2C%22size%22%3A40%2C%22order%22%3A5%2C%22titleid%22%3A59%7D%2C%22module%22%3A%22playlist.PlayListPlazaServer%22%7D%7D'
       this.$axios.get(API_PROXY+b,{
      
    })
	
    .then(res => {
     
//    this.lis = res.data.songlist.slice(10,19) ;
      
	var str=res.data
        str = str.replace("recom8868473989945107(","")
        str = str.substr(0, str.length - 1)
    var json2 = JSON.parse(str)
        
        json2=json2.playlist.data.v_playlist;
        
        for(var i=1;i<10;i++){
        	var obj ={
        		murl:this.url1+json2[i].album_pic_mid+this.url2,
        		mtext:json2[i].title
        	}
        	this.musicList.push(obj)
        }
        console.log(json2[0].album_pic_mid)
        console.log(json2[0].title)
        
        
    })
    .catch(error => {
      console.log(error);
    })
    }
	
}
	
	
	
	
	

</script>
<style scoped lang="less">
	.rec-list{
		padding: 0 23/100rem;
		box-sizing: border-box;
		overflow: hidden;
		p{	
			margin-left: -23/100rem;
			margin-bottom:15/100rem ;
			height: 28/100rem;
			font-size:28/100rem ;
			span{
				display: inline-block;
				margin: 0 6/100rem 0 2/100rem;
				width: 6/100rem;
				height: 100%;
				background-color: #9844A1;
				vertical-align: bottom;
			
				
			}
		};
		.addpadding{
			div{
				padding: 0 10/100rem;
			}
		}
	}
</style>