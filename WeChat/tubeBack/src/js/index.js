/**
 * Created by Administrator on 2017/8/29.
 */

//获取页面高度
let winHeight=$(document).height();
$('.contain').height(winHeight);

let headerHeight=$('.header').height();
let value=winHeight-headerHeight;

$('.con').height(value);

//发货
$('.con-btn').on('click',function(){
    $(this).parent('.shipments-page').removeClass('select').addClass('noselect');
    $('.order-page').removeClass('noselect').addClass('select');
});

//生成订单
/*$('.order-btn').on('click',function(){
    $(this).parent('.order-page').removeClass('select').addClass('noselect');
    $('.shipments-page').removeClass('noselect').addClass('select');
});*/

//导航栏切换
/*$('.con-left li').on('click',function(){
    var index=$(this).index();
   // console.log(index);
    $(this).css({"backgroundColor":"#F7F8FD","color":"#FD6C6E"}).siblings().css({"backgroundColor":"","color":""});
    $('.page').eq(index).removeClass('noselect').addClass('select').siblings().removeClass('select').addClass('noselect');
});*/

//品名弹窗
$('.arrow').on('click',function(){
    $('.pop-up').slideToggle();
});

//城市联动
$('#province').ProvinceCity();

//是否生成订单

$('.order-btn').on('click',function(){
    var tel=$('.tel').val();
    var isMob = /^([0-9]{3,4}-)?[0-9]{7,8}$/;
    var isPhone = /^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
    var telValue = $.trim(tel);
        if($('.channel').find('option:selected').val()=='选择销售渠道'||$('.carriage').find('option:selected').val()=='选择运输方式'||$('.city').find('option:selected').val()=='选择城市'||$('.addressee-name').val()==""||$('.tel').val()==""||$('.prov').find('option:selected').val()=='请选择'||$('.area').val()==""){
            alert('请填写完整信息')
        }else if(isMob.test(telValue) || isPhone.test(telValue)){
            $(this).parent('.order-page').removeClass('select').addClass('noselect');
            $('.shipments-page').removeClass('noselect').addClass('select');
        }else{
            alert('请填写正确的手机号码');
        }
});
