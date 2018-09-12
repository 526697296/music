// 用jsonp调用api接口，这里封装jsonp，方便以后
// 引入npm安装的jsonp
import originJSONP from 'jsonp'

// 对外暴露一个方法
// jsonp有3个参数，url,option,callback
export default function jsonp(url, data, option){
  // 拼接url
  url += (url.indexOf('?') < 0 ? '?' : '&') + params(data);  

  return new Promise((resolve, reject) => {
    originJSONP(url, option, (err, data) => {
      if(!err){
        resolve(data)
      }else{
        reject(err)
      }
    })
  })
}

// 拼接url的函数
function params(data){
  let url = '';
  for(var k in data){
    let value = data[k] !== undefined ? data[k] : '';
    url += `&${k}=${encodeURIComponent(value)}`
  }
  // 字符串方法substring()
  return url ? url.substring(1) : '';
}