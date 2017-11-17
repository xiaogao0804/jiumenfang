/**
 * Created by Administrator on 2017/6/9.
 */
//轮播
var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    autoplay:1000,

    // 如果需要分页器
    pagination: '.swiper-pagination'
})



////tab切换
//$('.tab-nav li').on('click',function(){
//    var i=$(this).index();
//    $(this).addClass('tab-nav-active').siblings().removeClass('tab-nav-active');
//    $('.tab-info li').eq(i).addClass('tab-info-active').siblings().removeClass('tab-info-active');
//})
//
//
////返回顶部
//$('.top-back').click(function(){
//    $("body").scrollTo({top:0})
//});




