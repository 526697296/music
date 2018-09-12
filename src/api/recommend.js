// 获取数据，封装方法，这里是recommend相关的方法
//引入封装好的jsonp方法
// import {jsop} from 'common/js/jsonp'
import jsonpp from 'common/js/jsonp.js'

import {commonParams, options} from './config'
// import jsonp from 'common/js/jsonp';
import axios from 'axios'

// 把封装好的方法export 出去
// 首页轮播图数据
export function getRecommend(){
  const url = 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg';

  const data = Object.assign({}, commonParams, {
    g_tk: 5381,
    format: 'jsonp',
    platform: 'h5',
    uin: 0,
    needNewCode: 1
  })

  return jsonpp(url, data, options)
}

//歌单数据
export function getDiscList() {
  const url = '/api/getDiscList'
  const data = Object.assign({}, commonParams, {
    platform: 'yqq',
    hostUin: 0,
    sin: 0,
    ein: 29,
    sortId: 5,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    needNewCode: 0,
    categoryId: 10000000,
    rnd: Math.random(),
    format: 'json'
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}