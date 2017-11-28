<template>
	<div class="rec-con">	
		<img :src="musicList.murl" alt="" />
		<p>{{musicList.mtext}}</p>
	</div>
</template>

<script>
	
export default{
	name:"rec-con",
	data(){
		return{
			
			
	        }
	},
	props:{
  	
	  	musicList:{
	  		type:Object,
	  		default:function(){
				return{
					murl:"",
					mtext:"",
					id:""
				}
				
	  		}
	  	}
  },
	
}
	
	
	

</script>
<style scoped lang="less">
	.rec-con{
		float: left;
		width: 228/100rem;
		height: 323/100rem;
		/*background-color: pink;*/
		img{
			width: 228/100rem;
			height: 228/100rem;
		}
		p{
			text-align: left;
			font-size: 24/100rem;
			line-height: 30/100rem;
		}
		
	}
</style>