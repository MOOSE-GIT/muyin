<template>
<div>
  
    <swiper :options="swiperOption">
            <swiper-slide v-for="(imglist,index) in news" key="key">
              <img :src="imglist.picUrl" alt="">
            </swiper-slide>
           
            <div class="swiper-pagination"  slot="pagination"></div>
            <!-- <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div> -->
    </swiper>
</div>
</template>
<script>
  export default{
    name:"layout",
    data(){
      return {
        news:[],
        swiperOption: {
            autoplay: 3000,
            grabCursor: true,
            setWrapperSize: true,
            autoHeight: true,
            pagination: '.swiper-pagination',
            paginationClickable: true,
            prevButton: '.swiper-button-prev',
            nextButton: '.swiper-button-next',
            observeParents: true,
            loop:true
          }
      }
    },
    created(){
      const API_PROXY = 'https://bird.ioliu.cn/v1/?url=';
    // 网络请求
    this.$axios.get(API_PROXY+"https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg ",{
      
    })
    .then(res => {
      console.log(res.data.data.slider);
      this.news = res.data.data.slider;
      console.log(this.news)
    })
    .catch(error => {
      console.log(error);
    })
  }
  
}


 

</script>

<style scoped lang="less">
  /* element轮播图样式 */
.swiper-container{
    height:300/100rem;
    width:100%; 
    overflow: hidden; 
   
}

.swiper-slide{
    height:300/100rem;
    width:750/100rem;  
    background-color: red;
    float:left;
}
.swiper-slide img {
    color: #475669;
    font-size: 14/100rem;
    line-height: 300/100rem;
    height:300/100rem;
    width:750/100rem;
    margin: 0;
}

</style>