<template>
  <div class="rec-main">
    <Banner /> 
    <RadioList /> 
    
    <RecList /> 
    <Sidebar />
  </div>
</template>

<script>
import Banner from "../banner/banner"
import RadioList from "../radio-list/radio-list"

import RecCon from "../recommend-con/rec-con"
import RecList from "../recommend-list/rec-list"
import Sidebar from "../sidebar/sidebar"

  export default {
  name: 'app',
  components:{
    RadioList,
    Banner,   
    RecCon,
    RecList,
    Sidebar
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
