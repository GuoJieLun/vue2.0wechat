<template>
  <div id="test" class="search-bar" :class="[isActive ? 'search-bar-focusing' : '']">
    <div class="search-bar-form">
      <div class="search-bar-box">
        <i class="icon-search"></i>
        <input v-on:focus=focus type="text" ref="input" v-model="value" class="search-bar-input" placeholder="搜索" required="">
      </div>
      <label @click="beginSearch"  class="search-bar-label"
             style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
        <i class="icon-search"></i>
        <span>搜索</span>
      </label>
    </div>
    <div class="search-bar-cancel-btn" @click="cancel">取消</div>
  </div>
</template>
<script type="es6">
  export default{
    data(){
      return {
        isActive: false,
        value: this.searchValue
      }
    },
    methods: {
      beginSearch(){
        this.isActive = !this.isActive;
        console.log(document.getElementById('#test'))
        console.log(this.$refs.input)
        this.$refs.input.focus()
      },
      cancel(){
        this.isActive = !this.isActive;
      },
      focus(){
          console.log('2333')
      }
    },
    props: {
      searchValue: String
    }
  }
</script>
<style lang="scss" scoped>
  @import "search_bar.scss";
</style>
