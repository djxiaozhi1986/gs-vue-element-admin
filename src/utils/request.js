import axios from "axios"
import qs from "qs"
export function requireData(url,params,type,item) {
    if(!url) return false
    switch(item){
        case "API1":
            url=axios.defaults.baseApi1URL+url
            break;
        case "API2":
            url=axios.defaults.baseApi2URL+url
            break;
        case "API3":
            url=axios.defaults.baseApiOldURL+url
            break;
    }
    if(type=='get'){
        return new Promise((resolve,reject)=>{
            axios.get(url,qs.stringify({params:params})).then(res=>{
                resolve(res.data)
                }).catch(err=>{
                    reject(err)
                })
        })
    }else if(type=='post'){
        return new Promise((resolve,reject)=>{
            axios.post(url,params).then(res=>{
                resolve(res.data)
                }).catch(err=>{
                    reject(err)
                })
        })
    }else if(type=='upload'){
        return new Promise((resolve,reject)=>{
            let config = {
                //添加请求头
                headers: { "Content-Type": "multipart/form-data" },
                //添加上传进度监听事件
                onUploadProgress: e => {
                    var completeProgress = ((e.loaded / e.total * 100) | 0) + "%";
                    this.progress = completeProgress;
                }
            };
            axios.post(url,params,config).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }else if(type=='delete'){
        return new Promise((resolve,reject)=>{
            axios.delete(url,{params:params}).then(res=>{
                resolve(res.data)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}