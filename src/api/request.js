import axios from "axios"

// 创建axios实例，在这里可以设置请求的默认配置
const instance = axios.create({
    baseURL: 'https://api.example.com',
    timeout: 6000,
})

// 统一设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 配置请求拦截
instance.interceptors.request.use(config => {
    // config.header["Content-Typa"] = 
    return config
}, error => {
    return Promise.reject(error)
})

// 配置响应拦截
instance.interceptors.response.use(response => {
    return response
}, error => {
    return Promise.reject(error)
})


export const post = (url, data, config = {}) => {
    debugger
    return new Promise((resolve, reject) => {
        instance({
            method: "post",
            url,
            data,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })
}

export const get = (url, params, config = {}) => {
    return new Promise((resolve, reject) => {
        // 添加时间戳参数，防止浏览器（IE）对get请求的缓存
        url = url + "?t=" + new Date().getTime().toString()
        instance({
            mothod: "get",
            url,
            params,
            ...config
        }).then(response => {
            resolve(response)
        }).catch(error => {
            reject(error)
        })
    })

}