$(function(){
  // 签到
  $('.sign').click(function(){
    $.ajax({
      url:"",
      type:"post",
      data:{},
      success:function(data){
        if(data.status == 1){
          $('.sign').val('');
          $('.sign').css('background','#666');
        }
      }
    })
  });
  // 点击其他效果
  $('.other').click(function(){
    $('.foot2').slideToggle('slow');
  });
})
