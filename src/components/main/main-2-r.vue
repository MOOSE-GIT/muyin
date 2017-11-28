<template>
<div>
    <div class="nav">
    
        <div>
            <router-link to="/music/recommend" active-class="active">推荐</router-link>
        </div>
        <div>
            <router-link to="/music/songlist" active-class="active">歌手</router-link>
        </div>
        <div>
            <router-link to="/music/radio" active-class="active">电台</router-link>
        </div>
        <div>
            <router-link to="/music/list" active-class="active">榜单</router-link>
        </div>
        
    </div>
    <router-view>
    	
    </router-view>

</div>    

</template>
<script type="text/javascript">
    export default{

    }
</script>
<style lang="less" scoped>
    .nav{
        height: 80/100rem;
        display: flex;
        div{
            flex-grow:1;
            text-align: center;
            a{
                color: #333;
                text-decoration: none;
                font-size: 34/100rem;
                line-height: 80/100rem;
                display:inline-block;
                vertical-align: top;
                padding: 0px 25/100rempx;
                letter-spacing: 5/100rem;
               
                box-sizing: border-box;
            }
            a.active{
                 border-bottom: 3px solid #e41f7f;
            }
        }
    }
    
</style>