import axios from 'axios'
import {message} from 'element-ui';
//创建axios，赋给变量service
//手把手擼碼前端API，地址http://www.web-jshtml.cn/productApi
const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
const service = axios.create({
  baseURL: BASEURL,
  timeout: 1000,  //超时时间,这个时间要比网络请求接口时间长一些
});

// 添加请求拦截器
/**请求接口前，做一些数据处理（请求拦截器） */
service.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    //后台需要前端这边传相关的参数，在请求头添加参数
    //Tokey
    //userId
    //sui
    console.log(config.headers)
    //业务需求




    //最终目的在请求头添加参数
    config.headers.Tokey = '1111111111'
    config.headers.useId = '333333'
    config.headers.sui = '44444'


    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
/**请求接口，返回数据进行拦截（响应拦截器） */
service.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    let data = response.data
    if(data.resCode !== 0){
      message.error(data.message);
      return Promise.reject(data);
    }else{
      return response;
    }
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default service;
  /**
   * 使用export defaul时，但不能同时存在多个default
   * 文件import不需要花括号
   */

