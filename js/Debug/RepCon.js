// console.log('http://www.genshuixue.com/teacher/courseDetail/111111?number=2337&person=nanci'.split('?'));

// console.log('Hello log.js')

console.log(/<div(\w*)\/>/.exec('<divsssswww/> <divwwwsssw/>'));
console.log(/s/.exec('aaa'));

var arr = {
    'a': 'a',
    'length': 'length'
};

console.log([1, 2, 3, 4].reverse());
console.log(Object.prototype.toString.call({'sss': 'sss'}));
console.log(/\d{13}/.exec('sss123sss1111111111111'));

// console.log(Object.prototype.toString.call(document.location));
// console.log( $.isPlainObject( document.location ) );

// var url = require.toUrl("./image/share_img.png");


var a = [];

for(var i = 0; i < 10; i++) {
    a[i] = function (i) {
        console.log(i);
    }(i);
}

for(var i = 0; i < 10; i++) {
    a[i] = function (i) {
        var j = i;
        console.log(j);
    };
    a[i](i);
}

console.log('400-222-222'.replace(/-/g, ''));
console.log('4000-122-166 转 184027'.replace('-', '').replace(',', '转'));

console.log(encodeURI('http://www.haorooms.com/app.cgi?arg1=1&arg2=hello world'));
console.log(decodeURI('\u00a9'));
console.log(unescape('%u6625%u8282'), escape('\u6625\u8282'), escape('%u6625%u8282'), escape('+u6625%u8282'));
console.log(unescape('\u6625\u8282'));