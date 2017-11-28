<template>
<transition name="slide">
<div class="singer-detail">

     <div class="bg-image" :style="bgStyle">
     <!-- <span>{{bgStyle}}</span> -->
    </div>
    <Scroll ref="scroll" :data="list" class="list">
        <ul>
            <li v-for="(item,index) in list" key=index class="song-list-wrapper" @click="selectItem(item,index)">
                <span class="name">{{item.songname}}</span>
                <span class="singer">{{item.singer[0]["name"]}}</span>
            </li>
        </ul>
    </Scroll>
</div>
   
</transition>
</template>
<script type="text/javascript">
    import { mapGetters } from 'vuex'
    import Scroll from '../../../../base/scroll'
    export default{
        data(){
            return{
                list:[],
                songinfor:{}
            }
        },
        computed:{

            ...mapGetters([
                    'getsinger',
                    'getmid',
                    'getplayingsongs'
          
          
            ]),
            bgStyle() {
               
                return 'background-image:url("http://y.gtimg.cn/music/photo_new/T001R300x300M000'+this.getmid+'.jpg?max_age=2592000")'
                
                
            }
            


        
        
        },
        created(){
        	
            let url = "https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg?singerid="+this.$store.state.singer+"&g_tk=288264445&uin=1565609872&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5page&needNewCode=1&order=listen&from=h5&num=15&begin=0&_=1511157527592";
            const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
            this.$axios.get(API_PROXY+url,{

        }).then(res=>{
            // console.log(res)
            let musiclist=res.data.data.list

            for (var i = 0; i < musiclist.length; i++) {
                this.list.push(musiclist[i]["musicData"]);

            }
            //  console.log(this.list)
            // console.log(this.list[0].singer[0]["mid"])
            // console.log("http://y.gtimg.cn/music/photo_new/T001R300x300M000"+this.list[0].singer[0]["mid"]+".jpg?max_age=2592000")
            
            // console.log(this.list)
            
        }).catch(error=>{
            console.log(error)
        })
            // console.log(this.$store.state.singer)
          
        },
        methods:{
            selectItem(item,index){
            	console.log(this);
               
                this.songinfor=item;
                // this.$store.state.playingsongs = this.songinfor;
                console.log(666)
                // setPlayingsongs(state,this.songinfor;)
                this.$store.commit('setPlayingsongs', this.songinfor)
                
                this.$store.state.playlist.push(this.songinfor)
                this.$store.commit('setPlaylist', this.$store.state.playlist)
                console.log(this.$store.state.playlist)
                console.log(this.$store.state.playingsongs)
                // console.log(this.$store.state.playingsongs)
                // console.log(this.$store.state.playlist)
            }
        },
        
        components:{
            Scroll
        }
    }
</script>
<style scoped lang="less">
.singer-detail{
    position: fixed;
    left:0px;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 100;
    background-color: #fff;

}
.slide-enter-active, .slide-leave-active{
    transition: all 0.3s
}
    

  .slide-enter, .slide-leave-to{
    transform: translate3d(100%, 0, 0)
  }
   .bg-image{
    position: relative;
      width: 100%;
      height: 0;
      padding-top: 70%;
      transform-origin: top;
      background-size: cover;
      z-index: 99;
   }
   .song-list-wrapper{
        padding: 20px 30px;
        background-color: #fff;
        
        .name{
            font-size: 20/50rem;
            display: block

        }
        .singer{
            font-size: 16/50rem;
            display: block
        }
   }
   .list{
    position: fixed;
      top: 0;
      margin-top: 70%;
      bottom: 0;
      width: 100%;
      background-color: #fff;
      z-index: 40;
     } 
      
      
        
    
    
</style>