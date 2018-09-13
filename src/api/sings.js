// 歌手相关的数据截取
import jsonpp from 'common/js/jsonp.js'

import {commonParams, options} from './config'

export function getSings(){
  const url = 'https://c.y.qq.com/v8/fcg-bin/v8.fcg'

  const data = Object.assign({}, commonParams, {
    channel: 'singer',
    page: 'list',
    key: 'all_all_all',
    pagesize: 100,
    pagenum: 1,
    hostUin: 0,
    inCharset: 'utf-8',
    outCharset: 'utf-8',
    needNewCode: 0,
    platform: 'yqq'
  })

  return jsonpp(url, data, options)
}