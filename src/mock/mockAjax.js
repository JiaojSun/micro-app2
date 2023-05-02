import axios from 'axios';

// axios.create创建一个axios实例
const request = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    method: 'get',
    // 根路径
    baseURL:'/mock',          //Mock.mock()方法中的路径有这个前缀
    // 请求超时5s
    timeout:5000
})

export default request