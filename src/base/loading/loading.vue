<template>
  <!-- loading组件封装 -->
  <div class="loading">
    <img src="./loading.gif" alt="loading" width="24" height="24">
    <p class="desc">{{title}}</p>
  </div>
</template>
<script>
export default{
  data() {
    return {

    }
  },
  props: {
    title: {
      type: String,
      default: '正在加载中，请骚等...'
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~common/stylus/variable"
.loading
 width 100%
 text-align center
 .desc
   line-height 20px
   font-size $font-size-small
   color: $color-text-l
</style>
