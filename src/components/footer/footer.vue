<template>
  <div id="menu" class="row">
    <div v-for="item in menuList" @click="jump({path:item.url})" class="menu_item col-xs-3">
      <div class="menu_icon iconfont "  :class="[item.iconClass,$route.path.indexOf(item.url) !== -1? 'menu_active' : '']">
        <span class="menu_tips" v-if="item.hint.count" :class="[item.index == 2 ? 'find_tips' : '']">
           <span v-if="item.hint.type == 'count'">{{item.hint.count}}</span>
        </span>
      </div>
      <div class="menu_text">{{item.text}}</div>
    </div>

  </div>
</template>


<script type="es6">
  import {mapState, mapActions} from 'vuex'
  export default {
    data(){
        return{
            menuList:''
        }
    },
    methods: {
      ...mapActions([
        'getMenu'
      ]),
      jump(path){
        this.$router.push(path);
      }
    },
    async created(){
      await this.getMenu();
      this.menuList = this.$store.state.baseModule.list;
    }
  };
</script>
<style lang="scss" scoped>
  @import "footer.scss";
</style>
