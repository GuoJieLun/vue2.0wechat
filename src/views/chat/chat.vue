<template>
  <div style="overflow:hidden;padding-bottom: 20px;position: relative;">
    <mt-actionsheet class="chat-sheet" :actions="actions" v-model="sheetVisible" cancel-text="仍然关注">
    </mt-actionsheet>

    <scroller :on-infinite="infinite"
              ref="my_scroller">
      <search-bar :searchValue="searchValue"></search-bar>
      <transition-group name="fade">
        <mt-cell-swipe v-show='!item.chatConfigModel.isDelete' class="chat-item " :key="index"
                       v-for="(item,index) in list"
                       :right="rightButtons(item,index)">
          <div class="flex-grow-1">
            <div class="left icon-box">
              <img class="chat-item-photo" :src=item.base.iconSrc width="45" height="45">
              <i :class="filterBadge(item.chatConfigModel,'class')"
                 v-show="filterBadge(item,'swtich')">
                <span v-if="!item.chatConfigModel.newsMute">
                    {{item.chatBaseModel.newsUnreadCount}}
                </span>
              </i>
            </div>
            <div class="des" style="">
              <div class="right time">
                {{item.chatBaseModel.endTimeStr | time}}
              </div>
              <div class="name">{{item.base.nickname}}</div>
              <div class="msg clearfix">
                <i class=" right iconfont icon-mute" v-if="item.chatConfigModel.newsMute"></i>
                <span>{{item.chatBaseModel.endChatTxt}}</span>
              </div>
            </div>
          </div>
        </mt-cell-swipe>
      </transition-group>

    </scroller>

    <router-view class="full-view"></router-view>

  </div>

</template>

<script type="es6">
  import {chatList} from '@/api/api'
  import XDate from '@/assets/js/xdate.js'
  import searchBar from '@//components/common/search_bar'
  export default{
    data(){
      return {
        list: '',//列表
        loadMore: true,//加载状态
        sheetVisible: false,//默认隐藏弹窗
        actions: [],//弹窗按钮
        currentIndex:'',//取消关注索引
        searchValue:'34234',//搜索默认值
      }
    },
    components:{
      searchBar
    },
    created(){
      this.actions = [{
        name: '不再关注',
        method:this.deleteFollow
      }];
    },
    mounted(){

      chatList().then(res => {
        this.list = res;
      })
    },
    methods: {
      //无限下拉-回调
      infinite(done){
        chatList().then(res => {
          if (this.list.length <= 30) {
            this.timer = setTimeout(() => {
              clearTimeout(this.timer)
              let newList = this.list.concat(res);
              this.list = newList;
              done();
            }, 3000)
          } else {
            done(true);
          }
        })
      },
      //计算消息和显示
      filterBadge(obj, attr){
        let ret;
        switch (attr) {
          case 'class':
            ret = obj.newsMute ? 'tips-badge-dot' : 'tips-badge';
            break;
          case 'swtich':
            if (obj.chatConfigModel.isReading) {
              ret = false;
            } else {
              ret = (obj.chatBaseModel.newsUnreadCount > 0);
            }
            break;
        }
        return ret;
      },
      //根据type显示对应的文字
      rightButtons(target, index){
        var content, handler;
        if (target.base.type == 'service') {
          content = '取消关注';
          handler = () => this.cancelFollow(index);
        } else {
          let current = this.list[index];
          if (current.chatConfigModel.isReading) {
            content = '标记未读';
          } else {
            content = '标记已读';
          }
          handler = () => this.setReadStatus(index);
        }
        let ret = [
          {
            content: content,
            style: {background: '#cdcdcd', color: '#fff'},
            handler: handler
          },
          {
            content: '删除',
            style: {background: 'red', color: '#fff'},
            handler: () => this.deleteChat(index)
          }
        ];
        return ret;
      },
      //删除
      deleteChat(index){
        this.list[index].chatConfigModel.isDelete = true;
      },
      //不再关注
      deleteFollow(){
            this.deleteChat(this.currentIndex);
      },
      //取消关注
      cancelFollow(index){
        this.sheetVisible = true;
        this.currentIndex = index;
      },
      //设置已读或未读
      setReadStatus(index){
        var current = this.list[index];
        current.chatConfigModel.isReading = !current.chatConfigModel.isReading;
      },
      test(){
          console.log(this.searchValue);
      },
      clickTest(){
          console.log('2333');
      }
    },
    filters: {
      time(value){
        return new XDate(value).toString('HH:ss');
      }
    },


  }
</script>
<style lang="scss" scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s
  }

  .fade-enter, .fade-leave-active {
    opacity: 0
  }
</style>
<style lang="scss">
  @import "chat.scss";
</style>


