<template>
	<div class="server-title">
		<p >
			
			<input type="text" placeholder="请输入歌曲名/歌手名"  />
			<i class="iconfont icon-sousuo "></i>
			<i class="iconfont icon-Microphone "></i>
			
		</p>
		 
		
	</div>
</template>

<script>




	
export default{
	name:"header",
	data(){
		return{
			
	        }
	},
	
	components:{
   
    
    }
}
	
	
	

</script>
<style scoped lang="less">
    .server-title{
    	box-sizing: border-box;
	
		padding-top: 62/100rem;
		width: 100%;
		height:128/100rem;
		background-image:-webkit-linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);
		background-image:linear-gradient(to right, #6d2ada, #af24a5,#e51f7e);
    	p{	
    		position: relative;
    		height: 75/100rem;
			/*background-color: dodgerblue;*/
			font-size: 25/100rem;
				input{
			  		padding: 0 53/100rem;
					margin-left: 95/100rem;
					border-style: solid; 
					border: 0px solid #000;
					border-radius: 5/100rem;
					box-sizing: border-box;
					position: absolute;
					width: 635/100rem;
					height:55/100rem ;
					background-color: rgba(255,255,255,.7);

				};
	           
				i{
					position: absolute;
					top:13/100rem;
					
					
				};
				i:nth-of-type(1){
					left:102/100rem
				}
				i:nth-of-type(2){
					right:40/100rem
				}
			
			
    	}
    }
	
	
 

</style>