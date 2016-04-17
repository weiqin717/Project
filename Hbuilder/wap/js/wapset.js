$(function(){
  $('.setTwo').click(function(){
    $('.one').css('display','none');
    $('.preson').css('display','none');
    var index = $(this).index();
    $('.preson').eq(index).css('display','block');
  });
  $('.presonPic').click(function(){
    $('.preson1').css('display','none');
    $('.tx').css('display','block');
  })
})
