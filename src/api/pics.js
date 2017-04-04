const pics = [{
    'picId': 1,
    'author': 'swd3e2',
    'title': 'Elsword-Aisha',
    'description': '',
    'tags': ['elsword','aisha'],
    'url': './images/1.jpg',
    'time': '2017-3-20 12:19'
},{
    'picId': 2,
    'author': 'swd3e2',
    'title': 'Neptune',
    'description': '',
    'tags': ['neptune'],
    'url': './images/3.jpg',
    'time': '2017-3-20 12:20'
},{
    'picId': 3,
    'author': 'swd3e2',
    'title': 'Void Princess',
    'description': '',
    'tags': ['elsword','aisha','vp'],
    'url': './images/4.jpg',
    'time': '2017-3-20 12:21'
},{
    'picId': 4,
    'author': 'swd3e2',
    'title': 'Elsword-Aisha',
    'description': '',
    'tags': ['elsword','aisha'],
    'url': './images/1.jpg',
    'time': '2017-3-20 12:19'
},{
    'picId': 5,
    'author': 'swd3e2',
    'title': 'Neptune',
    'description': '',
    'tags': ['neptune'],
    'url': './images/5.jpg',
    'time': '2017-3-20 12:20'
},{
    'picId': 6,
    'author': 'swd3e2',
    'title': 'Void Princess',
    'description': '',
    'tags': ['elsword','aisha','vp'],
    'url': './images/4.jpg',
    'time': '2017-3-20 12:21'
},{
    'picId': 7,
    'author': 'swd3e2',
    'title': 'Elsword-Aisha',
    'description': '',
    'tags': ['elsword','aisha'],
    'url': './images/1.jpg',
    'time': '2017-3-20 12:19'
},{
    'picId': 8,
    'author': 'swd3e2',
    'title': 'Neptune',
    'description': '',
    'tags': ['neptune'],
    'url': './images/3.jpg',
    'time': '2017-3-20 12:20'
},{
    'picId': 9,
    'author': 'swd3e2',
    'title': 'Void Princess',
    'description': '',
    'tags': ['elsword','aisha','vp'],
    'url': './images/4.jpg',
    'time': '2017-3-20 12:21'
},{
    'picId': 10,
    'author': 'swd3e2',
    'title': 'Neptune',
    'description': '',
    'tags': ['neptune'],
    'url': './images/3.jpg',
    'time': '2017-3-20 12:20'
},{
    'picId': 11,
    'author': 'swd3e2',
    'title': 'Void Princess',
    'description': '',
    'tags': ['elsword','aisha','vp'],
    'url': './images/4.jpg',
    'time': '2017-3-20 12:21'
},];

export default {
    getInfo: function (n) {
        setTimeout(function () {
            return pics[n];
        },200)
    },
    getAll: function (resolve) {
        setTimeout(function () {
            resolve(pics);
        },200)
    }
}