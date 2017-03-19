// copy from 张鑫旭(http://www.zhangxinxu.com/wordpress/2013/04/js-mousewheel-dommousescroll-event/)

const eventCompat = function(event) {
    var type = event.type;
    if (type == 'DOMMouseScroll' || type == 'mousewheel') {
        event.delta = (event.wheelDelta) ? event.wheelDelta / 120 : -(event.detail || 0) / 3;
    }
    if (event.srcElement && !event.target) {
        event.target = event.srcElement;
    }
    if (!event.preventDefault && event.returnValue !== undefined) {
        event.preventDefault = function() {
            event.returnValue = false;
        };
    }
    return event;
};

export default {eventCompat}