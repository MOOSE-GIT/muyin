<template>
  <div class="hello">
    <swiper :options="swiperOption">
      <swiper-slide v-for='(item,index) in news' :key='index'>
        <img :src="item.picUrl" alt="">
      </swiper-slide>
      
    </swiper>
    <div >
			<template v-for="(borad,index) in boardList[0].list" >
					
					<ul class="ul-list">
						<li >
						
						<div class="images">
						<div class="bd">
							<span>{{boardList[0].lists[index]["name"]}}</span>
						</div>
							<img :src="borad['picUrl']" alt="11" class="imgs">
							<p>{{ borad.name }}</p>
							<p>{{ borad.names }}</p>
						</div>
						</li>
						
					</ul>
				
				</template>
		</div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      news:[],
      
   swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 1000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          loop:true,
          onTransitionStart (swiper) {
            console.log(swiper.activeIndex)
          }
        },
        boardList:[
				{
					title:"榜单",
					list:[
					{
						name:"1.BOOM歌-Tiesto/Sevenn ",
						names:"2.不能怕-红花会/BrAnTb"
					},
					{
						name:"1.非酋-薛明媛/朱贺 ",
						names:"2.如果我爱你-周冬雨/张一山"
					},
					{
						name:"1.SARA-崔开潮",
						names:"2.水库-上海彩虹室内合唱团"
					},
					{
						name:"1.追光者-岑宁儿",
						names:"2.再也没有-Ryan.B/AY杨老三"
					}
					],
					lists:[
					{
						name:"飙升榜 "
						
					},
					{
						name:"新歌榜 "
						
					},
					{
						name:"原创榜单"
						
					},
					{
						name:"热歌榜单"
						
					}
					]
				}
				
			],
     }
 },

     created(){
     	

     	const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
		// 网络请求
		this.$axios.get(API_PROXY+"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg",{
			
		})
		.then(res => {
			// console.log(res.data.data.slider);
			this.news = res.data.data.slider;
			for(var i=0; i<this.news.length-1;i++){

				
				this.boardList[0].list[i]["picUrl"]=this.news[i].picUrl
				console.log(this.boardList[0].list[i])
				
			}
			
		})
		.catch(error => {
			console.log(error);
		});
		
	}
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang=less>
img{
	width:100%;

}
.swiper-container{
	width:100%;
}

ul{
	list-style: none;
	width: 100%;
	font-size: 0px;
	li{
		float: left;
		display: inline-block;
		width: 45%;
		margin-left: 0.25rem;
		padding-top: 0.25rem;
		position: relative;
		.bd{
			position: absolute;
			background: rgba(0,0,0,0.3);
			width: 100%;
			height: 68%;
			span{
				display: inline-block;
				width: 2rem;
				position: absolute;
				z-index: 9999;
				font-size: 0.5rem;
				color: #ffffff;
				margin-left: 0.9rem;
    			margin-top: 1.2rem;   			
			}
		}
		.images{
			p{
				margin-top: 0.2rem;
				color: #4C4948;
			}
		}
	}
}
.ul-list li .imgs{
	width: 100%;
	height: 240/100rem;
	border-top-left-radius: 0.1rem;
	border-top-right-radius: 0.1rem;
}
p{
	font-size:  0.1rem;
}
</style>
