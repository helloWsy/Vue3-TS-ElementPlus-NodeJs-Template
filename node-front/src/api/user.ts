import request from '@/utils/request'

// Login
export function userLogin() {
  return request({
    url: '/api/login',
    method: 'post'
  })
}
