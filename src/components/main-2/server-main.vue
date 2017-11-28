<template>
  <div class="">
    
    <SerTitle />
    <Banner /> 
    <SerList /> 
    <SerCon /> 
    
    
    
  </div>
</template>

<script>
import Banner from "../banner/banner"
import SerTitle from "../server-title/server-title"
import SerList from "../server-list/server-list"
import SerCon from "../server-con/server-con"



  export default {
  name: 'app',
  components:{
    
    Banner,
    SerTitle,
    SerList,
    SerCon
    
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
