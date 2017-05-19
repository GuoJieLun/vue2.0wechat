<template>
  <div  class=" flex-wrap flex-vertical"  >
    <w-header class="flex-row" title="微信" >
    </w-header>
    <transition name="router-fade" mode="out-in">
      <keep-alive>
      <router-view class="flex-grow-1 "></router-view>
        </keep-alive>
    </transition>
    <w-footer class="flex-row"></w-footer>
  </div>
</template>
<style lang="scss">
  @import "assets/css/normalize.css";
  @import "assets/css/flexboxgrid.css";
  @import "assets/sass/_flex.scss";
  @import "assets/css/iconfont.css";

</style>
<script type="es6">
  import wFooter from '@/components/footer/footer'
  import wHeader from '@/components/header/header'
  import {mapState, mapActions} from 'vuex'
  export default{
    data(){
      return {
        menuList:''
      }
    },
    components: {
      wHeader,
      wFooter
    }

  }

</script>
