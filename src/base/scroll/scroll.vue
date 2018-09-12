<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>
<script>
// 引入better-scroll
import BScroll from 'better-scroll'
export default{
  data() {
    return {

    }
  },
  // 接受父组件传过来的参数
  props:{
    probeType:{
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted() {
    // 延迟20ms加载
    setTimeout(()=>{
      this._initScroll();
    },20)
  },
  // 监听data的变化
  watch: {
    // 如果data变化了，则重新刷新scroll
    data() {
      setTimeout(()=>{
      this.refresh();
    },20)
    }
  },
  methods: {
    _initScroll() {
      if(!this.$refs.wrapper){
        return
      }
      // 初始化better-scroll
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
    },
    enable() {
      this.scroll && this.scroll.enable()
    },
    disable() {
      this.scroll && this.scroll.disable()
    },
    // 重新计算
    refresh() {
      this.scroll && this.scroll.refresh()
    }
  }
}
</script>
<style scoped lang="stylus">

</style>
