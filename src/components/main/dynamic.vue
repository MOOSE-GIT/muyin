<template>

	<div>			<Headers/>
	<div class="dynamic">

		<ul class="dongtaiBox">
			<li v-for="(list,index) in dongtailists">
				<div class="list-top">
					<img :src="list.icon" class="list-icon">
	                <div>
		                <h2>{{list.title}}</h2>
		                <span class="data">{{list.data}}</span>
	                </div>
	                <b>+关注</b>
                </div>
				<p class="text">{{list.text}}</p>
                <p class="quanwen">全文</p>
				<div class="imglist">
			          <div v-for="(pic,index) in list.pics" >
			            <img :src="pic.pic1" class="pic">
			          </div>
			    </div>
			</li>
        </ul>
	    <div class="dongtai-foot">
	              <div class="bottom-left">
	                  <img src="../../assets/img/03.png">
	                  <div>
	                      <p>Volor</p>
	                      <p>Alvaro Soler</p>
	                  </div>
	              </div>
	              <div class="bottom-right">
	                   <span class="iconfont icon-bofang bofang1"></span>

	                   <span class="iconfont icon-gengduo genduo"></span>
	              </div>
	    </div>
	</div>
	</div>
</template>


<script type="text/javascript">
import "../../assets/css/fonte/iconfont.css"
import Headers from "../header"
	export default{
		name:"dynamic",
		data(){
			return{
		        dongtailists:[
		               {
		               	"icon":"http://img2.imgtn.bdimg.com/it/u=4209534887,2802805627&fm=27&gp=0.jpg",
		               	"title":"音乐总局",
		               	"data":"昨天 19:14",
		               	"text":"Raaz and Nina所有失去的，都会以另一种方式归来, 成熟的人不问过去，聪明的人，不问现在，豁达的人，不问未来.",
		               	"pics":[{
		               		"pic1":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2718052278,1008910023&fm=27&gp=0.jpg"
		               	},{
		               		"pic1":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2154810956,2073747221&fm=27&gp=0.jpg"
		               	},{
		                         "pic1":"https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1207689824,624169419&fm=27&gp=0.jpg"
		                    }]

		               },
		               {
		               	"icon":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2154810956,2073747221&fm=27&gp=0.jpg",
		               	"title":"浅蓝色的猕猴桃",
		               	"data":"昨天 12:12",
		               	"text":"只要活着，就不算悲剧。我们尚在途中, 今后仍要继续。",
		               	"text1":"",
		                    "pics":[{
		                         "pic1":"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=2154810956,2073747221&fm=27&gp=0.jpg"
		                    },{
		                         "pic1":"http://img4.imgtn.bdimg.com/it/u=1413758850,1580807524&fm=27&gp=0.jpg"
		                    },{
		                         "pic1":"https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=273744117,198560208&fm=27&gp=0.jpg"
		                    }]
                }
                 ]
		    }
		},
		components:{
    	Headers

		
    }

	}
</script>



<style scoped lang="less">
.dynamic{
    width:100%;
    background-color: #fff;
    overflow: hidden;
    .dongtaiBox{
	     width:96%;
	     margin:0 auto;
	     .list-top{
		     padding:0.2rem 0.2rem 0;
		     box-sizing: border-box;
		     overflow:hidden;
		     .list-icon{
		        display:inline-block;     
		        width:0.83rem;
		        height:0.83rem;
		        border-radius:50%;
			}
			&>img,&>div,&b{
				float: left;
			}
			&>div{
				h2{
		        font-size:0.3rem;
		        color:#1f1e1f;
		        padding:0.15rem 0 0 0.22rem;
                box-sizing: border-box;
			    }
				.data{
					 display:block;
				     font-size:0.27rem;
				     color:#989898;
				     padding-left:0.22rem; 
			         padding: 0.15rem 0 0.15rem 0.22rem;
				}

			}
			b{ 
		     	color:#ef7b72;
		     	float:right;
		     	padding-top:0.15rem;
		     	font-size:0.3rem;
		     	box-sizing: border-box;
	        }
			

	    }
	    .quanwen{
		     font-size:0.23rem;
		     color:#7729d2;
		     padding:0.14rem 0 0.14rem 0.22rem;
		     padding-left: 0.22rem;
		     box-sizing: border-box;
		}
		p{
		    font-size:0.28rem;
		    line-height:0.44rem;
		    color:#1f1e1f;
		    padding-left: 0.22rem;
		}
		.imglist{
		  width:100%;
		  height:2.26rem;
		  &>div{
			  width: 31.65%;
			  margin-right:1.671%;
			  margin-top:0.15rem;
			  float:left;
			  .pic{
			    width:100%;
			    height:2.26rem;
			  }
         }
		}
	}
	.dongtaiBox>li:nth-child(2){
        margin-top: 0.8rem;
    }
}
.dongtai-foot{
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
                padding-right: 0.35rem;
                &>.bofang1,&>.genduo{
                  display: inline-block;                 
                  font-size: 0.55rem;
                  padding-top: 0.17rem;
                  box-sizing: border-box;

                }
                &>:first-child{
                  padding-right: 0.6rem;
                   box-sizing: border-box;
                  color:#ae96c0;
                  font-weight: bold;
                }

            }
      }
</style>