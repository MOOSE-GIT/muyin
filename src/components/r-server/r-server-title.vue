<template>
  <div>
    <el-input
    placeholder="请输入内容"
    v-model.lazy="msg" v-on:keydown.native="haha">
    <i slot="prefix" class="el-input__icon el-icon-search" ></i>
  </el-input>
  <div class="search_div" v-if="flag">
  <div v-for="(value,index) in news" :key="index" >
    <p  class="search_p"  v-html='value["albumName_hilight"]'></p>
  </div>
  </div>
  <div class="sea" v-if="flag1">
    <div v-for="(list,index) in searchs" class="searchs">
    <span @click="q(list)">{{list.data.songname}}</span>
  </div>
  </div>
  
  </div>
</template>
<script>
  
export default{
  name:"input",
  data(){
    return{
      msg:"",
      news:[],
      flag:false,
      searchs:[],
      flag1:true,
    }

  },
        methods:{
          haha(event){
            this.flag=!this.flag;
             this.flag1=!this.flag1;
          },
          q(list){
          this.msg=list.data.songname;
         
        }
        },
  watch:{
    msg:function(value){
      
     var url=this.music+"fcgi-bin/music_search_new_platform?t=0&n=20&aggr=1&cr=1&loginUin=0&format=json&inCharset=GB2312&outCharset=utf-8&notice=0&platform=jqminiframe.json&needNewCode=0&p=1&catZhida=0&remoteplace=sizer.newclient.next_song&w="+value;
    // const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
    //     // 网络请求
        this.$axios.get(url,{
        }).then(res=> {
          if(this.msg!=""){
            this.news = res.data.data.song.list;
           
          }else{
            this.news="";
          }
        })
        .catch(error=>{
            console.log(error)
        })
    }
  },
  created(){
      
      var url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1060760102&uin=1213594966&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1511168499598";
     
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
        // 网络请求
        this.$axios.get(API_PROXY+url,{
        }).then(res=> {
          this.searchs = res.data.songlist.slice(0,6);
        })
        .catch(error=>{
            console.log(error)
        })

      }
}
</script>
<style scoped lang=less>
.search_div{
  width: 90%;
  border-top: none;  
  margin:0 auto;
  padding-top:0.5rem;
  box-shadow: 0 0.1rem 0.1rem 0.1rem #ccc;
}
  .search_p{
    border:1px dashed red;
    width: 40%;

    font-size: 0.4rem;
    text-align: center;
    margin:0.1rem auto;
    border-radius: 0.1rem;
   
  }
  .sea{
    width: 80%;
    margin:0.5rem auto;
    font-size: 0.45rem;
    .searchs{
          
        span{
          display: inline-block;
         margin-left: 1.5rem;
         margin-top: 0.1rem;
          border:1px dashed red;
          border-radius: 0.5rem;
        }
    }
  }
  
</style>