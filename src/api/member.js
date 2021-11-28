import request from '@/utils/request'

export function getMemberList(data) {
  return request({
    url: '/vue-admin-template/member/list',
    method: 'post',
    data
  })
}
