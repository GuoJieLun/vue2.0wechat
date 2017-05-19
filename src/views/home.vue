<template>

  <div>

    <mt-tabbar style="background:#f9f9f9;border-top:1px solid #ccc;">
      <mt-tab-item id="微信" >
        <span slot="icon" class="iconfont icon-wechat" style="font-size: 28px;"></span>
        微信
      </mt-tab-item>
      <mt-tab-item id="通讯录"  >
        <span slot="icon" class="iconfont icon-contact" style="font-size: 28px;"></span>
        通讯录
      </mt-tab-item>
      <mt-tab-item id="发现">
        <span slot="icon" class="iconfont icon-find" style="font-size: 28px;"></span>
        发现
      </mt-tab-item>
      <mt-tab-item id="我">
        <span slot="icon" class="iconfont icon-me" style="font-size: 28px;"></span>
        我
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>
<style lang="scss" scoped>
  @import "../assets/css/iconfont.css";

  .mint-tab-item{
    padding:3px 0;
  }
  .mint-tab-item-icon{
    margin:0 auto 4px;
  }
  .mint-tab-item-label{
    transform: scale(0.9);
  }
</style>

<script>
  export default {
    data() {
      return {
        title: '',
        sheetVisible: false,
        actions: [
          {name: '展示 Toast', method: this.showToast},
          {name: '展示 Message Box', method: this.showMsgbox}
        ]
      };
    },
    mounted(){
          this.title='微信(89)';
    },
    methods: {
      showToast() {
        Toast('这是一个 Toast');
      },
      showMsgbox() {
        MessageBox('提示', '这是一个 Message Box');
      }
    }
  };
</script>
