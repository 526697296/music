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
    },
    listenScroll: {
      type: Boolean,
      default: false
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
      if(this.listenScroll){
        let me = this;
        this.scroll.on('scroll', (pos) => {
          me.$emit('scroll', pos);
        })
      }
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
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
  }
}
</script>
<style scoped lang="stylus">

</style>
