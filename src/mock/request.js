// 引入封装的axios请求
// import axios from 'axios'

// https://gitee.com/api/v5/users/liyangyf
// export const reqToolList = () => fetch('/mock/tool', {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// export const reqToolList = () => fetch('https://gitee.com/api/v5/users/liyangyf', {
//     headers: {
//         'Content-Type': 'application/json'
//     }
// })

// axios
import request from './mockAjax';
export const reqToolList = () => request.get('/tool')