// 引入Mock 和 所有模拟数据json文件
import Mock from 'mockjs'
// import mockjsFetch from 'mockjs-fetch'
// mockjsFetch(Mock)


// Mock.mock()方法模拟数据
// Mock.mock(路径,要返回的数据)
Mock.mock('/mock/tool', 'get', {
    code: 200,
    data:[{id: "1", name: 'jjsun'}]     //可以直接将模拟数据写在这里
})