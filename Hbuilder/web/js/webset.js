$(function(){
  $('.setTwo').click(function(){
    $('.one').css('display','none');
    $('.preson').css('display','none');
    var index = $(this).index();
    $('.preson').eq(index).css('display','block');
  })
})
