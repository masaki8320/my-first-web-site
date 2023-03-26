var Links = {
    setColor: function (color) {
        //<原型>
        // var alist = document.querySelectorAll('a');
        // var i = 0;
        // while (i < alist.length) {
        //     alist[i].style.color = color;
        //     i = i + 1;
        // }
        //<jQuery> - 上記while文処理をjQuery文法1行で表現（すべてのAタグのCSSを制御する）
        //ループまで全部やってくれる
        $('a').css('color', color)
    }
}
var Body = {
    setColor: function (color) {
        //<原型>
        // document.querySelector('Body').style.color = color;
        //<jQuery> - 上記while文処理をjQuery文法1行で表現
        $('body').css('color', color)
    },
    setBackgroundColor: function (color) {
        //<原型>
        // document.querySelector('Body').style.backgroundColor = color;
        //<jQuery> - 上記while文処理をjQuery文法1行で表現
        $('body').css('backgroundColor', color)
    }
}
//nightDayHandler(Night <--> Day)
function nightDayHandler(P_self) {
    var target = document.querySelector('body');
    if (P_self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('yellow');
        P_self.value = 'day';
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('blue');
        P_self.value = 'night';
    }
}