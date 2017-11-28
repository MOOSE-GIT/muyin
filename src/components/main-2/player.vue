<template>
   <div class="player" v-show="getplaylist.length>0">
        <div :class="flag?'normal-player':'mini-player'" v-show="!fullscreen" >
        <span v-if="flag" @click="min" class="min">最小化</span>
        <span v-else @click="max" class="max">最大化</span>
          <div class="background">
          </div>
           <div class="top" v-if="flag">
              <h1 class="title" >{{gettitle}}</h1>
              <h2 class="subtitle">{{playingsongs.singer[0]["name"]}}</h2>
              
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
            musicid:""
        }
      },
      computed:{
        ...mapGetters([
            'getfullscreen',
            'getplaylist',
            'getplayingsongs'
          ]),


        gettitle(){
          this.playingsongs= this.$store.state.playingsongs;
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
          for (var i = 0; i < playinglist.length; i++) {
            if (playinglist[i]==this.playingsongs) {
              
              if (i==playinglist.length-1) {
                i=0;
              }
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
  .player{
    .normal-player{
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      z-index: 150;
      background: blue
      }
  }
  .min{
    font-size: 20/50rem;
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
      background: red;
    }
    .title{
      width: 70%;
      margin: 0 auto;
      line-height: 40/50rem;
      text-align: center;
      font-size: 40/50rem;
      color: red
    }
        .top{
        position: relative;
        margin-bottom: 25px
        }
        .subtitle{
          line-height: 20px;
          text-align: center;
          font-size: 20/50rem;
          color: red;
        }
        .next{
          font-size: 16/50rem;
        }
</style>