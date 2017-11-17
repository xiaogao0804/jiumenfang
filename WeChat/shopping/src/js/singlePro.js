/**
 * Created by Administrator on 2017/6/9.
 */
//轮播
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:1000,

    // 如果需要分页器
    pagination: '.swiper-pagination',
})

//tab切换
$('.tab-nav li').on('click',function(){
    var i=$(this).index();
    $(this).addClass('tab-nav-active').siblings().removeClass('tab-nav-active');
    $('.tab-info li').eq(i).addClass('tab-info-active').siblings().removeClass('tab-info-active');
});


//返回上一个页面
$('.single-header .fa-angle-left').on('click',function(){
    window.history.back();
})


//返回顶部
$('.top-back').click(function(){
    $("body").scrollTo({top:-9})
});

//弹窗
//弹出弹窗
function pop(select,popSelect){
    $(select).on('click',function(){
        $(popSelect).show();
        $('.pop-change-num').html(1);
    })
};
pop('.shopping-bag-add','.shopping-pop-cart');
pop('.shopping-bag-settlement','.shopping-pop');

//关闭弹窗
$('.shopping-pop .pop-remove').on('click',function(){
    $('.shopping-pop').hide();
});
$('.shopping-pop-cart .pop-remove').on('click',function(){
    $('.shopping-pop-cart').hide();
});


var cartNum=5;//msg
$('.shopping-pop-cart .pop-footer').on('click',function(){
    $('.shopping-pop-cart').hide();
    let shoppingNum=parseInt($('.pop-change-num').html());//加的数量
     //console.log(shoppingNum);
    let popNum=cartNum+shoppingNum;//总数量
    console.log(popNum);
    cartNum=popNum;
    $('.shopping-num').html('+'+popNum);

});
$('.shopping-pop .pop-footer').on('click',function(){
    $('.shopping-pop').hide();
});

//数量加减
//加入购物车-加
$('.shopping-pop-cart .pop-change-add').on('click',function(){
    let popNumStr=$('.shopping-pop-cart .pop-change-num').html();
    let popNum=parseInt(popNumStr);
    popNum=++popNum;
    $(this).prev('.pop-change-num').html(popNum);
});
//减
$('.shopping-pop-cart .pop-change-subtract').on('click',function(){
    let popNumStr=$('.shopping-pop-cart .pop-change-num').html();
    let popNum=parseInt(popNumStr);
    popNum=--popNum;
    if(popNum<=1){
        popNum=1
    };
    $(this).next('.pop-change-num').html(popNum);
});

//立即购买-加
$('.shopping-pop .pop-change-add').on('click',function(){
    let popNumStr=$('.shopping-pop .pop-change-num').html();
    let popNum=parseInt(popNumStr);
    popNum=popNum+1;
    console.log(popNum);
    $(this).prev('.pop-change-num').html(popNum);
});
//减
$('.shopping-pop .pop-change-subtract').on('click',function(){
    let popNumStr=$('.shopping-pop .pop-change-num').html();
    let popNum=parseInt(popNumStr);
    popNum=--popNum;
    if(popNum<=1){
        popNum=1
    };
    $(this).next('.pop-change-num').html(popNum);
});

