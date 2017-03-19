const _userSelf = {
    'id': 10000,
    'name': '月落',
    'email': '424532913@qq.com',
    'sex': 'male',
    'folowers': 666,
    'folowing': 233,
    'register': '2017-3-19',
    'avatar': ''
};

export default {
    getInfo: function (n) {
        setTimeout(function () {
            return _userSelf[n];
        },200)
    },
    getAll: function () {
        setTimeout(function () {
            return _userSelf;
        },200)
    }
}