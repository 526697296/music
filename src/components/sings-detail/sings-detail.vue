<template>
<transition name="slide">
  <div class="singsdetail">

  </div>  
</transition>

</template>
<script>
export default {
  name: "singsdetail",
  data() {
    return {};
  }
};
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/variable';

.singsdetail 
  position: fixed;
  z-index: 10000;
  height: 100%;
  width: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: $color-background;
.slide-enter-active, .slide-leave-active
  transition: all .3s
.slide-enter, .slide-leave-to
  transform: translate3d(100%, 0, 0)
</style>
