const Mock = require('mockjs')
var Random = Mock.Random
Random.cname()
Random.first()
// Random.datetime('yyyy-MM-dd A HH:mm:ss')

const data = Mock.mock({
  'items|30': [{
    id: '@id',
    name: '@cname',
    job: 'job',
    nickname: '@first',
    phone: '13112345678',
    class_name: 'web design',
    position: 'manager',
    'year|1-10': 1,
    create_time: '2021-10-01 12:12:12'
  }]
})

module.exports = [
  {
    url: '/vue-admin-template/member/list',
    type: 'post',
    response: config => {
      const items = data.items
      return {
        code: 20000,
        data: {
          total: items.length,
          items: items
        }
      }
    }
  }
]
