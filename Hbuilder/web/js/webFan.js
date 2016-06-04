$(function(){
  // 点击其他效果
  $('.other').click(function(){
    $('.foot2').slideToggle('slow');
  });
  // 按钮排序
  $('.headList').click(function(){
    $('.iconSort').css('transform','rotateX(130deg)');
    $('.iconSort').css('transition','2s');
  })
})
