<template>
  <div class="sings">
    <listview :data="singss" @select="selectsings"></listview>
    <router-view></router-view>
  </div>
</template>
<script>
import {getSings} from 'api/sings.js'
import {ERR_OK} from 'api/config.js'
import sings from 'common/js/sings.js'
import listview from 'base/listview/listview.vue'
import {mapMutations} from 'vuex'
const HOT_HAME = '热门'
const HOT_SINGS_LENGTH = 10
export default{
  name: 'sings',
  data() {
    return {
      singss: []
    }
  },
  components: {
    listview
  },
  created() {
    this._getSingsList();
  },
  methods: {
    // sings这个必须和router里面的父组件名字一样
    selectsings(sings) {
      this.$router.push({
        path: `/sings/${sings.id}`
      })
      // 实现对一个mutations的提交
      this.setSinger(sings);
    },
    _getSingsList() {
      getSings().then((res)=>{
        if(res.code === ERR_OK){
          // console.log(res.data.list);
          this.singss = this._norSings(res.data.list);
          // console.log(this.singss);
          // console.log(this._norSings(this.singss))
          // console.log(res.data)
          console.log(this.singss)
        }
      });
    },
    // 处理我们需要的数据,把res.data传进去
    _norSings(list) {
      let map = {
        hot: {
          title: HOT_HAME,
          items: []
        }
      }
      // 判断list，不进行判断，foreach会报错
      if(!list){
        return;
      }
      // foreach传进来的list数据,取前10条做为热门数据
      list.forEach((item, index) => {
          // list数据<10条，直接push
          if (index < HOT_SINGS_LENGTH) {
            map.hot.items.push(new sings({
              name: item.Fsinger_name,
              id: item.Fsinger_mid
            }))
          }
          // 按A-Z排序归类
          const key = item.Findex
          // 不存在，就创建map[key]
          if (!map[key]) {
            map[key] = {
              title: key,
              items: []
            }
          }
          map[key].items.push(new sings({
            name: item.Fsinger_name,
            id: item.Fsinger_mid
          }))
        })
        // console.log(map)
        // 为了得到有序列表，我们需要处理 map
        // A-Z
        let ret = []
        // 热门
        let hot = []
        // 遍历map
        for (let key in map) {
          let val = map[key]
          // match() 方法可在字符串内检索指定的值，或找到一个或多个正则表达式的匹//配。它返回指定的值，而不是字符串的位置。
          if (val.title.match(/[a-zA-Z]/)) {
            ret.push(val)
            // console.log(ret)
          } else if (val.title === HOT_HAME) {
            hot.push(val)
            // console.log(hot)
          }
        }
        // 利用sort进行升序排序
        ret.sort((a, b) => {
          return a.title.charCodeAt(0) - b.title.charCodeAt(0)
        });
        return hot.concat(ret);
        // return hot;
    },
    ...mapMutations({
      // 做一个映射关系
      setSinger: 'SET_SINGS'
    })
  }
}
</script>
<style scoped lang="stylus">

.sings
  position fixed
  top: 88px;
  bottom: 0;
  width: 100%;
</style>
