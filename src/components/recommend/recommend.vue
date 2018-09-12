<template>
  <div class="recommend">
    <!-- :data="disclist"确保数据全部加载进来，否则scroll无效 -->
    <scroll class="recommend-content" :data="disclist">
      <div>
      <div class="slider-wrapper" v-if="recommends.length">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(recommend, index) in recommends" :key="index">
            <a :href="recommend.linkUrl">
              <img class="img" :src="recommend.picUrl">
            </a>
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
      <div class="recommend-list">
        <h1 class="list-title">热门歌单推荐</h1>
        <ul>
          <li v-for="(item, index) in disclist" :key="index" class="list-content">
            <!-- 列表左的img -->
            <div class="icon">
              <img :src="item.imgurl" width="60" height="60">
            </div>
            <!-- 列表右边的text -->
            <div class="text">
              <h2 class="name" v-html="item.creator.name"></h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </li>
        </ul>
      </div>
      </div>
    </scroll>
  </div>
</template>
<script>
import Scroll from 'base/scroll/scroll.vue'
import {getRecommend, getDiscList} from 'api/recommend.js'
import {ERR_OK} from 'api/config'
export default{
  name: 'recommend',
  data() {
    return {
      swiperOption:{
        speed: 2000,
        loop:true,
        pagination : '.swiper-pagination',
        autoplayDisableOnInteraction : false,
        paginationClickable :true,
        autoplay: {
          delay: 3000
        }
      },
      recommends:[],
      disclist: []
    }
  },
  components: {
    Scroll
  },
  created() {
    this._getRecommend();
    this._getDiscList();
  },
  methods: {
    _getRecommend() {
      getRecommend().then((res) => {
        if(res.code === ERR_OK){
          // console.log(res.data.slider)
          this.recommends = res.data.slider;
          // console.log(this.recommends)
        }
      })
    },
    _getDiscList() {
      getDiscList().then((res)=>{
        if(res.code === ERR_OK){
          this.disclist = res.data.list;
          console.log(this.disclist);
        }
      })
    }
  }
}
</script>
<style scoped lang="stylus">
@import "~common/stylus/variable"
  .recommend >>> .swiper-pagination-bullet-active
    background yellow
  .recommend
    position: fixed
    width: 100%
    top: 88px
    bottom: 0
    .recommend-content
      height: 100%
      overflow: hidden
      .slider-wrapper
        position: relative
        width: 100%
        overflow: hidden
        .img
          display block
          height 150px
          width 100%
      .recommend-list
        .list-title
          height: 65px
          line-height: 65px
          text-align: center
          font-size: $font-size-medium
          color: $color-theme
        .list-content
          display flex
          width 60px
          padding 0 20px 0 20px
          align-items center
          box-sizing border-box
          .icon
            flex: 0 0 60px
            width: 60px
            padding-right: 20px
          .text
            display: flex
            flex-direction: column
            justify-content: center
            flex: 1
            line-height: 20px
            font-size: $font-size-medium
            .name
              margin-bottom: 15px
              color: $color-text
            .desc
              color: $color-text-d
              white-space:nowrap
              overflow:hidden
              text-overflow:ellipsis
</style>
