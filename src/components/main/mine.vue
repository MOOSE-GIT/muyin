<template>
	<div class="mine">
		 <el-tabs v-model="activeName" @tab-click="handleClick" style="background:#ffffff;">
    <el-tab-pane label="我喜欢" name="first" >
    <el-collapse v-model="activeNames" @change="handleChange">
  <el-collapse-item title="自建歌单 " name="1">
 <div v-for="(musics,index) in boardMusic[0].music" :key="index" class="pic_img">
      <img :src="musics.img" alt="">

    </div>
  </el-collapse-item>
  <el-collapse-item title="收藏歌单" name="2">
     <div v-for="(musics,index) in boardMusic[0].music" :key="index" class="pic_img">
      <img :src="musics.img" alt="">

    </div>
  </el-collapse-item> 
  </el-collapse-item>
</el-collapse>
    </el-tab-pane>
    <el-tab-pane label="全部" name="second">
      <p class="all">全部</p>
        <div v-for="(alll,index) in news" :key="index" class="all_class">
        <span class="alls lei">{{index+1}}</span>
        <img :src="imgb+alll.data.albummid+imgba" alt="" class="picImg">
          <span class="alls">{{alll.data.songname}}</span>
          <span class="alls">{{alll.data.singer[0].name}}</span>
          <span class="interval">{{alll.data.interval%60}}</span>
        </div> 
    </el-tab-pane>
    <el-tab-pane label="下载" name="third">
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
    </el-tab-pane>
    <el-tab-pane label="最近播放" name="fourth">
    <p class="all">最近播放</p>
      <div v-for="(alll,index) in news" :key="index" >
        <span class="alls lei">{{index+1}}</span>
        <img :src="imgb+alll.data.albummid+imgba" alt="" class="picImg">
          <span class="alls">{{alll.data.songname}}</span>
          <span class="alls">{{alll.data.singer[0].name}}</span>
          <span class="interval">{{alll.data.interval%60}}</span>
        </div> 
    </el-tab-pane>
  </el-tabs>
	</div>
</template>

<script>



	
export default{
	name:"m",
	data(){
		return{
			activeName: 'first',
        activeNames:1,
        news:[],
        imgb:"https://y.gtimg.cn/music/photo_new/T002R300x300M000",
        imgba:".jpg?max_age=2592000",
         boardMusic:[
        {
          title:"自建歌单",
          music:[
          {
           "img": require("../../common/img/zj1.jpg")
          },
          {
            "img":require("../../common/img/zj2.jpg")
          },
          {
            "img":require("../../common/img/zj3.jpg")
          },
          {
            "img":require("../../common/img/zj4.jpg")
          }
          ],
         
        }
        
      ],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleChange(tab, event){
        console.log(tab, event);
      }
    },
     created(){
      
      var url="https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg?g_tk=1060760102&uin=1213594966&format=json&inCharset=utf-8&outCharset=utf-8&notice=0&platform=h5&needNewCode=1&tpl=3&page=detail&type=top&topid=4&_=1511168499598";
     
    const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
        // 网络请求
        this.$axios.get(API_PROXY+url,{
        }).then(res=> {
          this.news = res.data.songlist;
          console.log(this.news)
        })
        .catch(error=>{
            console.log(error)
        })
	        
	}
	
	
}
	
	
	

</script>
<style lang=less>
.el-tabs__header{
  background: #ffffff !important;;
}
/*#tab-first,#tab-second,#tab-third,#tab-fourth{
  color: #E41F6E;
}*/
.el-tabs__nav-scroll{

}
.el-tabs__nav{
margin-left: 50/100rem;
}
.el-collapse{
  border-top:none;
}
.el-collapse, .el-collapse-item__header, .el-collapse-item__wrap{
  border-bottom: none;
}
.el-tabs__active-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    height: 5/100rem;
    background-color: #E41F6E;
    z-index: 1;
  }
.el-collapse-item__header{
  font-size: 40/100rem;
  background: #F9F9F9;
  padding-left: 1rem;

}
.el-tabs__item {
         padding: 0 0.5rem;
    height: 0.5rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    line-height: 1rem;
    display: inline-block;
    list-style: none;
    font-size: 0.3rem;
    font-weight: 500;
    color: #2d2f33;
    position: relative;
}
.el-icon-arrow-right{
  float: left;
  margin-top: 0.35rem;
}
.pic_img{
  width: 45%;
  float: left;
  margin-left: 0.2rem;
  margin-top: 0.2rem;
  img{
    width: 100%;
  border-radius: 0.1rem;
  }
}
.collect{
   font-size: 40/100rem;
   height: 0.5rem;
  background: #F9F9F9;
  margin-top: 7.6rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  padding-left: 1rem;

}
.all{
  padding-left: 1rem;
  padding-top: 0.2rem;
  padding-bottom: 0.2rem;
  font-size: 0.5rem;
  background: #F9F9F9;
}
.alls{
  margin-left: 0.1rem;
  font-size: 0.05rem;
}
.alls:hover{
  color: green;
}
.lei{
    font-size: 0.2rem;
}
.picImg{
  width: 10%;
vertical-align:-0.2rem;

}
.interval{
  font-size: 0.1rem;
}
</style>