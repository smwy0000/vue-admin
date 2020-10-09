import service from "@/utils/request"

//获取验证码
export function GetSms(data){
    return service.request({
        method:'post',
        url:"/getSms",
        data:data
        //左边的data，是变量名（key），后台接收的，右边的data，是接收的参数，如果两者都是同名的情况下，可以写成一个即可
      })
}
//获取用户角色
//登录
export function Login(data){
  return service.request({
        method:'post',
        url:"/login",
        data:data
  })
}
//注册
export function Register(data){
  return service.request({
        method:'post',
        url:"/register",
        data:data
  })
}