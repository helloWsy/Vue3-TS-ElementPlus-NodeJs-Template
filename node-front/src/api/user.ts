import request from '@/utils/request'

// Login
interface UserForm {
  username: string;
  password: string;
}
export function userLogin(params:UserForm) {
  return request({
    url: '/api/login',
    method: 'post',
    params
  })
}
