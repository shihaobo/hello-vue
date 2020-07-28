const Mock = require('mockjs') //随机获取数据
Mock.mock('/api/users', () => {
    {
        return Mock.mock({
            "user|1-10": [{
                'name': '@cname',
                'id|+1': 1,
                'age|10-60': 0, 
                'birthday': '@date("yyyy-MM-dd")', //年月日
                'city': '@city(true)' //中国城市
            }]
        })
    }
})