<template>
  <div class="rec-main">
    <Banner /> 
    <Recommend /> 
    <RecList /> 
    <Sidebar />
  </div>
</template>

<script>
import Banner from "../banner/banner"
import Recommend from "../recommend/recommend"
import RecCon from "../recommend-con/rec-con"
import RecList from "../recommend-list/rec-list"
import Sidebar from "../sidebar/sidebar"

  export default {
  name: 'app',
  components:{
    
    Banner,
    Recommend,
    RecCon,
    RecList,
    Sidebar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
