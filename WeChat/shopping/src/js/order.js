/**
 * Created by Administrator on 2017/6/13.
 */
//公共订单号
function getNowTime(select){
    var date=new Date();
    var seperator1="-";
    var seperator2=":";
    var month=date.getMonth()+1;
    var strDate=date.getDate();
    if(month>=1&&month<=9){
        month="0"+month;
    }
    if(strDate>=1&&strDate<=9){
        strDate="0"+strDate;
    }
    var currentDate=date.getFullYear()+month+strDate+date.getHours()+date.getMinutes()+date.getSeconds();
    $(select).html(currentDate);
    //pay.html  订单号
    $('.order-num span').html(currentDate);
    return currentDate;
}
//myOrder.html  订单号
getNowTime(".item-num .item-num-time");


/*//弹窗获取屏幕高度
    const maskHeight=window.screen.height;
    $('.mask-pop').height(maskHeight);
    $('.mask-pop-logistics').height(maskHeight);

// 弹窗弹出
$('.shipments-btn').on('click',function(){
    $('.mask-pop').show();
});
//取消
$('.pop-cancel').on('click',function(){
    $('.mask-pop').hide();
});
//确定退货
$('.pop-confirm').on('click',function(){
    $('.mask-pop').hide();
    $('.shipments-btn a').html('退货中');
    $('.shipments-btn').unbind();
});
//显示物流信息弹窗
$('.refund-btn').on('click',function(){
    $('.mask-pop-logistics').show();
});
//消除弹窗
$('.pop-del').on('click',function(){
    $('.mask-pop-logistics').hide();
});*/



