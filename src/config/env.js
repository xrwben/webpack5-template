// 请求接口host地址
const envConfig = {
  development: '//demo.ntsgw.oa.com/api/sso',
  test: '//demo.ntsgw.oa.com/api/sso',
  production: '//portal.learn.woa.com'
}

console.log('当前环境：', process.env.NODE_ENV, process.env.HOST_ENV)

const requestHost = envConfig[process.env.HOST_ENV];

console.log('接口请求host>>>>', requestHost)

export {
  requestHost
}