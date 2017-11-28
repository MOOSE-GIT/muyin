<template>
   <div class="player" v-show="getplaylist.length>0">
        <div :class="flag?'normal-player':'mini-player'" v-show="!fullscreen" >
        <span v-if="flag" @click="min" class="min"><i class="iconfont icon-zuixiaohua "></i></span>
        <span v-else @click="max" class="max"><i class="iconfont icon-icon_zuidahua"></i></span>
          <div class="background">
            
          </div>
           <div class="top" v-if="flag">
              <h1 class="title" >{{gettitle}}</h1>
              <h2 class="subtitle">{{playingsongs.singer[0]["name"]}}</h2>
              <div class="bg-image" :style="bgStyle"></div>
              <p v-text="geci"></p>
              <p v-text="strgeci" class="geci"></p>
              
           </div>
           <audio :src="srcbefor+musicid+srcback" width="200" height="100" controls="controls" class="bf" >{{getmusicid}}</audio>
           <span class="next" @click="next">下一首</span>
        </div>
        
   </div>
</template>
<script type="text/javascript">

import {mapGetters} from 'vuex'
  export default{
      data(){
        return{
            // playlist:[],
            fullscreen:false,
            playingsongs:{},
            flag:true,
            srcbefor:"http://ws.stream.qqmusic.qq.com/",
            srcback:".m4a?fromtag=46",
            musicid:"",
            strgeci:''
        }
      },
      computed:{
        ...mapGetters([
            'getfullscreen',
            'getplaylist',
            'getplayingsongs',
            'getmid'
          ]),
		bgStyle() {
               
                return 'background-image:url("http://y.gtimg.cn/music/photo_new/T001R300x300M000'+this.getmid+'.jpg?max_age=2592000")'
                
                
        },
        
		geci() {
             var str=' http://music.qq.com/miniportal/static/lyric/'+this.musicid%100+'/'+this.musicid+'.xml'
             var str1='miniportal/static/lyric/'+this.musicid%100+'/'+this.musicid+'.xml'
            
				
				const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
       		
       			var musicurl=this.gec+str1;
//     			var musicurl=API_PROXY+ str;
       			
       			this.$axios.get(musicurl)
	
    			.then(res => {
               	
             var lk1 = 	res.data.replace('<?xml version="1.0" encoding="GB2312" ?><lyric><![CDATA[',"");
                 lk1 = 	lk1.replace(']]></lyric>',"")+'';
                
                 
                 
     			console.log(lk1)
     			
      			this.strgeci =lk1;

 				
     
    			})
    			.catch(error => {
      			console.log(error);
    			})
				
			
          return 113;   
            
                
                
        },
        gettitle(){
          this.playingsongs= this.$store.state.playingsongs;
//        if(this.$store.state.playlist.length!=0){
          	let title=this.playingsongs["songname"]
          	 return title
         
        },
        getmusicid(){
          this.playingsongs= this.$store.state.playingsongs;
          this.musicid=this.playingsongs["songid"]
          console.log(666)
          return this.musicid
        },
        getsubtitle(){
          this.playingsongs= this.$store.state.playingsongs;
          let subtitle=this.playingsongs.singer[0]["name"]
          return subtitle
        },
        getplaylist(){
           let playinglist= this.$store.state.playlist;
          // let title=this.playingsongs["songname"]
          return playinglist
        }

        
      },
      methods:{
        min(){
          this.flag=false
        },
        max(){
          this.flag=true
        },
        next(){
         
          let playinglist= this.$store.state.playlist;
//        if(playinglist){
          	for (var i = 0; i < playinglist.length; i++) {
            if (playinglist[i]==this.playingsongs) {
              
              if (i==playinglist.length-1) {
                i=0;
              }
              console.log(this.musicid);
              this.$store.commit('setPlayingsongs', playinglist[i+1])
              this.musicid=this.playingsongs["songid"]
              console.log(this.musicid);
              console.log(555)
              break;
            }
          }
        }
      }
  }
</script>
<style scoped lang="less">

.geci{
	font-size: 40/100rem;
}
  .bg-image{
  	
  	width: 400/100rem;
  	height: 400/100rem;
  	margin: 40/100rem auto;
  	
  	background-size: 400/100rem 400/100rem;
  	border-radius: 50%;
  	@keyframes rotating{
		from{transform:rotate(0)}
		to{transform:rotate(360deg)}
		}

	animation:rotating 3s linear infinite
  	
  }

  .player{
    .normal-player{
    	.bf{
        	position: fixed;
        	bottom: 50/100rem;
        	
        }
        .next{
        	padding-top:25/100rem;
        	padding-bottom:20/100rem;
        	/*background-color: white;*/
        	/*font-size: 50/100rem;
        	right: 0/100rem;*/
        }
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background-image:linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);
      }
  }
  .min{
    font-size: 20/50rem;
    i{
    	font-size: 50/100rem;
    	margin-left: 50/100rem;
    	color: magenta;
    }
  }
  .max{
    font-size: 20/50rem;
  }
  .mini-player{
      display: flex;
      align-items: center;
      position: fixed;
      left: 0;
      bottom: 0;
      z-index: 180;
      width: 100%;
      height: 60px;
      background: #FAFAFA;
    }
    .title{
      width: 60%;
      margin: 0 auto;
      line-height: 40/50rem;
      text-align: center;
      font-size: 40/50rem;
      color: midnightblue
    }
        .top{
        position: relative;
        margin-bottom: 25px
        }
        .subtitle{
          line-height: 20px;
          text-align: center;
          font-size: 20/50rem;
          color: midnightblue;
        }
        
        .next{
          font-size: 16/50rem;
          position: fixed;
          bottom: 50/100rem; 
          right: 50/100rem;
          
        }
</style>