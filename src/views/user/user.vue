<template>
  <div>
    <w-header title="我" >
    </w-header>
  </div>
</template>
<script type="es6">
  import wHeader from '@/components/header/header'
  import {mapState, mapActions} from 'vuex'
  export default{
    data(){
      return{
      }
    },
    components: {
      wHeader
    }
  }
</script>
