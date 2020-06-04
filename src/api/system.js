import request from '@/utils/request'

export function password () {
  return request({
    url: '/system/password',
    method: 'post'
  })
}
