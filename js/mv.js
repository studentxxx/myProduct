//MV频道轮播图 
var index = 0;
//左右按钮翻页
$('.slider .arrow').click(function(event) {
    if (event.target === $('.slider .left')[0]) {
        $('.slider .pic').animate({
            left: '+=880px'
        }, function() {
            if (parseInt($('.slider .pic').css('left')) >= 0) {
                $('.slider .pic').css('left', '-8800px');
                index = 9;
            } else {
                index--;
            }
            $('.slider .dot li').eq(index).addClass('current').siblings().removeClass('current');
        });
    } else if (event.target === $('.slider .right')[0]) {
        $('.slider .pic').animate({
            left: '-=880px'
        }, function() {
            if (parseInt($('.slider .pic').css('left')) <= -9680) {
                $('.slider .pic').css('left', '-880px');
                index = 0;
            } else {
                index++;
            }
            $('.slider .dot li').eq(index).addClass('current').siblings().removeClass('current');
        });
    }
});
//右下角小点翻页
$('.dot').click(function(event) {
    index = $(event.target).index();
    $('.slider .dot li').eq(index).addClass('current').siblings().removeClass('current');
    $('.slider .pic').animate({
        'left': (index + 1) * (-880) + 'px'
    })
});
//自动轮播
var banner = setInterval(function() {
    $('.slider .pic').animate({
        left: '-=880px'
    }, function() {
        if (parseInt($('.slider .pic').css('left')) <= -9680) {
            $('.slider .pic').css('left', '-880px');
            index = 0;
        } else {
            index++;
        }
        $('.slider .dot li').eq(index).addClass('current').siblings().removeClass('current');
    });
}, 5000)
$('.slider').on('mouseenter', function() {
    clearInterval(banner);
    banner = null;
}).on('mouseout', function() {
    if (!banner) {
        banner = setInterval(function() {
            $('.slider .pic').animate({
                left: '-=880px'
            }, function() {
                if (parseInt($('.slider .pic').css('left')) <= -9680) {
                    $('.slider .pic').css('left', '-880px');
                    index = 0;
                } else {
                    index++;
                }
                $('.slider .dot li').eq(index).addClass('current').siblings().removeClass('current');
            });
        }, 5000)
    }
})

$('.item-con li').on('mouseover', function(event) {
    $(event.target).parents('li').addClass('current').siblings().removeClass('current');
}).on('mouseout', function(event) {
    $(event.target).parents('li').remove('current');
})

//table栏切换
$('.table-con .table-plane').click(function(event) {
    if (event.target === $(this).find('li').eq(1).find('a')[0]) {
        $(event.target).parent().addClass('current').siblings().removeClass('current');
        $('.item-con').eq(1).show().prev().hide();
    } else if (event.target === $(this).find('li').eq(0).find('a')[0]) {
        $(event.target).parent().addClass('current').siblings().removeClass('current');
        $('.item-con').eq(0).show().next().hide();
    }
});

//台哥推荐模块轮播图
var index2 = 0;
$('.recom .arrow').click(function(event) {
    if (event.target === $('.recom .right')[0]) {
        index2++;
        $('.recom .left').show();
        if (index2 <= 3) {
            $('.recom_con ul').animate({
                left: '-=1215px'
            }, 1000)
            if (index2 === 3) {
                $(event.target).hide();
            }
        }
    } else if (event.target === $('.recom .left')[0]) {
        if (index2 <= 3) {
            index2--;
            $('.recom .right').show();
            $('.recom_con ul').animate({
                left: '+=1215px'
            }, 1000)
            if (index2 === 0) {
                $(event.target).hide();
            }
        }
    }
});

//欧美模块路面博图
var index3 = 0;
$('.occident .arrow').click(function(event) {
    if (event.target === $('.occident .right')[0]) {
        index3++;
        $('.occident .left').show();
        if (index3 <= 2) {
            $('.occident_con ul').animate({
                left: '-=1215px'
            }, 1000)
            if (index3 === 2) {
                $(event.target).hide();
            }
        }
    } else if (event.target === $('.occident .left')[0]) {
        if (index3 <= 2) {
            index3--;
            $('.occident .right').show();
            $('.occident_con ul').animate({
                left: '+=1215px'
            }, 1000)
            if (index3 === 0) {
                $(event.target).hide();
            }
        }
    }
});