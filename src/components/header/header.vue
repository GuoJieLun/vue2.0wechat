<template>
      <mt-header   :title="title">
        <mt-button slot="left" icon="back" v-if="goBack" @click="$router.go(-1)">返回</mt-button>
        <div slot="right">
            <slot name="r-info"></slot>
        </div>
      </mt-header>
</template>
<script type="es6">
    export default{
        props:['title','goBack']
    }
</script>
<style lang="scss">
  .mint-header{
    background:linear-gradient(to bottom, #303036, #3c3b40);
    height: 45px;
    font-size: 19px;
  }
</style>
