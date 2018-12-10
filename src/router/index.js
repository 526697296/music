import Vue from 'vue'
import Router from 'vue-router'
import rank from 'components/rank/rank.vue'
import search from 'components/search/search.vue'
import sings from 'components/sings/sings.vue'
import recommend from 'components/recommend/recommend.vue'
import singsdeatil from 'components/sings-detail/sings-detail.vue'


Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/recommend'
    },
    {
      path: '/rank',
      name: 'rank',
      component: rank
    },
    {
      path:'/search',
      name: 'search',
      component: search
    },
    {
      path: '/sings',
      name: 'sings',
      component: sings,
      children: [
        {
          path: ':id',
          component: singsdeatil
        }
      ]
    },
    {
      path: '/recommend',
      name: 'recommend',
      component: recommend
    }

  ]
})
