/**
 * Created by superman on 17/2/16.
 * http配置
 */
import axios from 'axios'
import router from './router'
import { getToken, removeToken} from './utils/auth'
import { requireData } from './utils/request'
import APIURL  from './utils/ipconfig.js'
import GLOBAL from './global'
import { Message } from 'element-ui'
axios.defaults = {
    timeout:5000
};
// axios 配置
axios.defaults.baseApi1URL=APIURL.Base_API1_URL;
axios.defaults.baseApi2URL=APIURL.Base_API2_URL;
axios.defaults.ossUrl=APIURL.OSS_URL;
// http request 拦截器
axios.interceptors.request.use(
    config => {
        if (getToken()) {
            // config.headers['Authorization'] = `token ${getToken()}`;
            // config.headers.Authorization = 'Bearer '+getToken()
            config.headers.token = getToken();
        }else{
            config.headers.token = ''
        }
        return config;
    },
    err => {
        return Promise.reject(err);
    });

// http response 拦截器
axios.interceptors.response.use(
    response => {
        if(response.status==200){
            var token = response.headers.authorization
            if (token) {
                // 如果 header 中存在 token，那么触发 refreshToken 方法，替换本地的 token
                this.$store.dispatch('refreshToken', token)
            }
            if(response.data!=undefined && response.data.dec.code==GLOBAL.API_RESULT.TOKEN_ERROR){
                Message.error("登录过期，请重新登录");
                //登录失效
                let redirect = router.currentRoute.fullPath;
                let to = {
                    path: '/login',
                }
                if(redirect.indexOf('login')==-1){
                    to.query = {redirect: redirect}
                }
                router.replace(to)
            }
        }else{
            //服务器内部错误
            Message.error("服务器内部错误");
        }
        return response;
    },
    error => {
        if(error.response){
            switch (error.response.status) {
                case 400:
                    Message.error("错误的请求");
                    break;
                case 401:
                    Message.error("登录过期，请重新登录");
                    removeToken();
                    let redirect = router.currentRoute.fullPath;
                    let to = {
                        path: '/login',
                    };
                    if(redirect.indexOf('login')==-1){
                        to.query = {redirect: redirect}
                    }
                    router.replace(to);
                    break;
                case 404:
                    Message.error("访问的接口不存在");
                    break;
                case 408:
                    Message.error("请求超时");
                    break;
                case 500:
                    Message.error("服务器内部错误，清理联系管理员！");
                    break;
                case 501:
                    Message.error("服务未实现，清理联系管理员！");
                    break;
                case 502:
                    Message.error("网关错误，清理联系管理员！");
                    break;
                case 504:
                    Message.error("网关超时，清理联系管理员！");
                    break;
                case 505:
                    Message.error("HTTP版本不受支持，清理联系管理员！");
                    break;
            }
        }
        return Promise.reject(error.response.data)
    },complete=>{
        console.log(complete)
    });

    export function api1Service(url,params,type){
        return requireData.call(this,url,params,type,'API1');
    }
    //->接口2的请求数据方法
    export function api2Service(url,params,type){
        return requireData.call(this,url,params,type,'API2');
    }
    export function apiUploadService(url,params,type){
        return requireData.call(this,url,params,type,'API2');
    }
    export function defaultService(url,params,type){
        return requireData.call(this,url,params,type,'');
    }
export default axios;
