import Mock from 'mockjs'
import roleAPI from './role'

Mock.setup({
  timeout: '350-600'
})


//权限相关
Mock.mock(/\/auth\/modules/, 'post', roleAPI.modules)

export default Mock
