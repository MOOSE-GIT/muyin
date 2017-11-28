<template>
      <div class="hotSong">
         <div class="hotSong-head">
               <div>
                     <h4>IMMERSE   &nbsp;&nbsp;MUSIC</h4>
                     <h1>音沐热歌榜</h1>
                     <p><i class="iconfont icon-iconfonterji erji"></i>569233人在听</p>
               </div>
         </div>
         <div class="hotSong-content">
               <div class="hotSong-content-title">
                     <i class="iconfont icon-bofang bofang"></i>
                     <span class="bfqb">播放全部</span>
                     <i class="iconfont icon-liebiao liebiao"></i>
                     <span class="dx">多选</span>
               </div>
               <ol class="hotSong-content-box">
                     <!-- <li v-for="(item,index) in songlists">{{index+1}}.{{item.data.songname}}</li> -->

                      <li v-for="(item,index) in songlists">
                         <span>{{index+1}}</span>
                         <p>
                           <i class="one">{{item.data.songname}}</i>
                           <i>{{item.data.albumname}}</i>
                         </p>
                         <b class="iconfont icon-more dgd"></b>
                      </li>
        
               </ol>
         </div>
         <div class="hotSong-foot">
              <div class="bottom-left">
                  <img src="../../assets/img/03.png">
                  <div>
                      <p>Volor</p>
                      <p>Alvaro Soler</p>
                  </div>
              </div>
              <div class="bottom-right">
                   <span class="iconfont icon-bofang bofang1"></span>

                   <span class="iconfont icon-gengduo1 genduo"></span>
              </div>
         </div>
      </div>
</template>
<script type="text/javascript">
import "../../assets/css/fonte/iconfont.css"
	export default{
		name:"hotSong",
		data(){
			return{
         songlists:[]
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
          this.songlists = res.data.songlist;
          console.log(this.songlists)
        })
        .catch(error=>{
            console.log(error)
        })
		}
}
</script>


<style lang="less" scoped>
.hotSong{
      width:100%;
      background: #fff;
      &>.hotSong-head{
            width: 100%;
            height: 4.56rem;
            background:url(../../assets/img/音沐热歌榜_01.png) no-repeat;
            overflow: hidden;
            &>div{
                  width: 4.65rem;
                  /*height: 2.17rem;
*/                margin: 1.17rem auto 0;
                  text-align: center;
                  &>h4{
                      color:#fff; 
                       font:bold 0.5rem 微软雅黑;
                  }
                  &>h1{
                      color: #fff;
                      font:bold 0.93rem Arial;
                  }
                  &>p{
                      color:#fff;
                      font:bold 0.25rem 微软雅黑;
                      padding-left: 0.4rem;
                      line-height:0.93rem;
                      height: 0.93rem;
                      position: relative;
                      &>.erji{
                        position: absolute;
                        top: -0.02rem;
                        left: 1.25rem;
                      }
                  }
            }
      }
      &>.hotSong-content{
            &>.hotSong-content-title{
            width: 100%;
            height: 1rem;
            font-size: 0.28rem;
            font-weight: bold;
            border-bottom: 0.02rem solid #b7b7b7;
            position: relative;
            
                  &>.bfqb,&>.dx{
                        width: 100%;
                        height:1rem;
                        line-height: 1rem;
                  } 
                  &>.bfqb{
                        padding-left: 0.82rem;
                  }
                  &>.dx{
                       padding-left: 4.50rem; 
                  }
                  .liebiao{
                        position:absolute;
                        top:0.34rem;
                        left:6.10rem;
                  }
                  .bofang{
                        position:absolute;
                        top:0.34rem;
                        left:0.33rem; 
                  }
            }
            &>.hotSong-content-box{
                  li{
                      width: 100%;
                      height: 0.97rem;
                      border-bottom: 0.01rem solid #f0f0f0;
                      overflow: hidden;
                      position: relative;
                      &>span{
                        display: inline-block;
                        width: 0.82rem;
                        height: 0.97rem;
                        line-height:0.97rem;
                       text-align: center;
                       float: left;
                       font-size: 0.35rem;
                      }
                      &>p{
                        float: left;
                         &>i:nth-child(1){
                            display: block;
                            color:#060606;
                            padding: 0.15rem 0;
                            font-size: 0.3rem;
                        }
                      &>i:nth-child(2){
                          display: block;
                            color: #444444;
                            padding:0 0 0.06rem;
                            font-size: 0.26rem;

                        }
                      }
                      &>.dgd{
                          content: "";
                          width: 0.62rem;
                          height: 0.22rem;
                          font-size: 0.38rem;
                          position: absolute;
                          top: 0.34rem;
                          right: 0.19rem;
                        }

                      &>.xuanzhong{
                        color: #e02283;
                      }
                  }
            }
      }
      &>.hotSong-foot{
            width: 100%;
            height: 1rem;
            background:#f4f4f4;
            position: fixed;
            bottom:0;
            left:0;
            padding-top: 0.15rem;
            box-sizing: border-box;
            .bottom-left{
                float:left;
                 &>img{
                       width:0.77rem;
                       height:0.77rem;
                       float:left;
                       padding:0 0.10rem 0 0.1rem;
                       box-sizing: border-box;
                }
                &>div{
                  width: 1.65rem;
                  height: 0.77rem;
                  padding-left: 0.77rem;
                   box-sizing: border-box;
                  &>p{   
                        line-height: 0.38rem;
                        padding: 0.02rem;
                        box-sizing: border-box;
                  }
                  &>:first-child{
                        font-size: 0.28rem;
                  }
                  &>:last-child{
                        font-size: 0.24rem;
                  }

                }

            }
            .bottom-right{
                float:right;
                padding-right: 0.3rem;
                &>.bofang1,&>.genduo{
                   display: inline-block;                 
                   font-size: 0.7rem;
                   box-sizing: border-box;
                  }
                &>.bofang1{
                  padding-right: 0.6rem;
                  box-sizing: border-box;
                  font-size: 0.58rem;
                  color:#ae96c0;
                  
                }

            }
      }
}    
</style>
