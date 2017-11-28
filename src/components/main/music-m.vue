<template>
	<div class="music-m">
		<Headers/>
		<Main2r/>
		<Footers/>
	</div>
</template>

<script>

import Headers from "../header"
import Footers from "../footer"
import Main2r from "../main/main-2-r"


	
export default{
	name:"music-m",
	data(){
		return{
			
	        }
	},
	components:{
    	Headers,
    	Footers,
		Main2r
		
    }
	
	
}
	
	
	

</script>
<style scoped lang="less">

</style>