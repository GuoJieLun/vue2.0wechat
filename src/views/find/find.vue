<template>
  <div style="background: #f0eff5;">
    <div class="find-item">
      <mt-cell title="朋友圈"  is-link icon="more">
        <img slot="icon" src="../../assets/images/find_icon-circle.png" width="20" height="20">
      </mt-cell>
    </div>
    <div class="find-item">
      <mt-cell title="扫一扫" is-link icon="more">
        <img slot="icon" src="../../assets/images/find_icon-qrcode.png" width="20" height="20">
      </mt-cell>
      <mt-cell title="摇一摇" is-link icon="more">
        <img slot="icon" src="../../assets/images/find_icon-shake.png" width="20" height="20">
      </mt-cell>
    </div>
    <div class="find-item">
      <mt-cell title="漂流瓶"  is-link  icon="more">
        <img slot="icon" src="../../assets/images/find_icon-bottle.png" width="20" height="20">
      </mt-cell>
    </div>
    <div class="find-item">
      <mt-cell title="购物"  is-link  icon="more">
        <img slot="icon" src="../../assets/images/find_icon-shopping.png" width="20" height="20">
      </mt-cell>
      <mt-cell title="游戏"  is-link  icon="more">
        <img slot="icon" src="../../assets/images/find_icon-moregame.png" width="20" height="20">
      </mt-cell>
    </div>
  </div>
</template>

<style lang="scss" style="scoped">
  .find-item{
    margin-top:1.17647059em;
    .mint-cell-text{
      margin-left:10px;
      display:inline-block;
    }
  }
</style>
