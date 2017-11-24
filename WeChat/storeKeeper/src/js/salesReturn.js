/**
 * Created by Administrator on 2017/8/22.
 */
//返回上一页
$('.receiving-header i').on('click',function(){
    window.history.back();
});

//获取高度
var winHeight = window.innerHeight;
window.addEventListener('resize', function(event){
    winHeight = window.screen.availHeight   ;
    console.log(winHeight);
});
$('.pappers-contain').height(winHeight);

//拍照
/*  $('.camera-ipt').on('change',function(){
      let image=$(this).val();
      console.log(image);
      $(this).parent().empty().append(`<img src=${image} />`)
  })*/
var upload = function(c, d){
    "use strict";
    var $c = document.querySelector(c),
        $d = document.querySelector(d),
        file = $c.files[0],
        reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(e){
        $d.setAttribute("src", e.target.result);
    };
   $(c).siblings('span').remove();
};

//从相册选择照片
/*
var image = '';
function selectImage(file,f) {
    var $f=document.querySelectorAll(f);
    if (!file.files || !file.files[0]) {
        return;
    }
    var reader = new FileReader();
    reader.onload = function (evt) {
        $f.setAttribute("src", evt.target.result);
       // document.getElementById('image').src = evt.target.result;
        image = evt.target.result;
    }
    reader.readAsDataURL(file.files[0]);
}*/
