<template>
    <div>
        <ul>
            <li v-for="(item,index) in list" @click="singerd(index)" key=index >
            {{index+1}}
            <img :src="'//y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'" class="avatar">
            {{item.Fsinger_name}}
                <!-- <span class="rank">{{index+1}}</span> -->
                <!-- <img :src="'//y.gtimg.cn/music/photo_new/T001R300x300M000'+item.Fsinger_mid+'.jpg?max_age=2592000'" class="avatar"> -->
                <!-- <span>{{item.Fsinger_name}}</span>
                 -->
                
                </a>
            </li>
            
        </ul>
        <router-view></router-view>
        
    </div>
</template>
<script type="text/javascript">
    import { mapMutations } from 'vuex'
    export default{
        data(){
            return{
                list:[]
            }
        },
        created: function () {
            
            let url="https://c.y.qq.com/v8/fcg-bin/v8.fcg?channel=singer&page=list&key=all_all_all&pagesize=100&pagenum=1&g_tk=34361961&jsonpCallback=GetSingerListCallback&loginUin=1565609872&hostUin=0&format=jsonp&inCharset=utf8&outCharset=utf-8&notice=0&platform=yqq&needNewCode=0"
             // this.$jsonp("","GetSingerListCallback")
             //  .then(res=>{
             //    console.log(res);
             //  })
            //   this.$jsonp(url, {'jsonp': 'jsonpCallback'}).then(function(data){
            //     console.log(data)
            // })
            // new Promise((resolve, reject) => {
            //     this.$jsonp(url,  (err, data) => {
            //       if (!err) {
            //         resolve(data)
            //         console.log(666)
            //       } else {
            //         reject(err)
            //         console.log(555)
            //       }
            //     })
            //   })
        const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
        // 网络请求
        this.$axios.get(API_PROXY+url,{

        }).then(res=> {
          
          let str=res.data
          str = str.replace("GetSingerListCallback(","")
          str = str.substr(0, str.length - 1)
          let json=JSON.parse(str)
          this.list=json.data.list
          // console.log(json);
        })
        .catch(error=>{
            console.log(error)
        })
        },
        methods: {
            singerd(index){
            	console.log(this)
                var id=this.list[index]["Fsinger_mid"]
                console.log(id)
                // console.log(this.list[index]["Fsinger_id"])
                this.$router.push({
                    
                    path:`/music/songlist/${id}`
                    
                })
                
               this.$store.commit('setSinger', this.list[index]["Fsinger_id"])
               this.$store.state.singer = this.list[index]["Fsinger_id"];
               this.$store.commit('setMid', id)
               this.$store.state.mid = id;
            }
            // ...mapMutations({
            //   setSinger:"setSinger"
            // })
        }


             
             
            
    
}
</script>
<style scoped lang="less">
    li{
        width: 100%;
        height:70/50rem;
        padding: 10px;
        box-sizing: border-box;
        font-size: 16/50rem;
        span{
            font-size: 16/50rem;
            height:50/50rem;
            
           }
        .avatar{
          width: 50/50rem;
          height: 50/50rem;
          border-radius: 50%;
          vertical-align: middle;
          margin: 0px 20px;
        }
          
    }
</style>








