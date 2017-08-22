const users = [{
    'id': 10000,
    'name': '月落',
    'email': '424532913@qq.com',
    'sex': 'male',
    'folowers': 666,
    'folowing': 233,
    'register': '2017-3-19',
    'avatar': './images/lu2.jpg'
},{
    'id': 10001,
    'name': 'swd3e2',
    'email': 'xxxxxx@xx.com',
    'sex': 'male',
    'folowers': 666,
    'folowing': 233,
    'register': '2017-4-13',
    'avatar': './images/aisha-henir.jpg'
},];

export default {
    getUser: function (id) {
        users.forEach(function (item) {
            if (item['id'] === id){
                setTimeout(function () {
                    return item;
                },200)
            }
        });
        setTimeout(function () {
            return false;
        },400)
    },
}