$(function(){
  // 点击其他效果
  $('.other').click(function(){
    $('.foot2').slideToggle('slow');
  });
  // 按钮排序
  $('.iconSort').click(function(){
    var active = $(this).hasClass('active');
    if(active){
      $(this).removeClass('active');
    }else {
      $('.iconSort').removeClass('active');
      $(this).addClass('active');
    }
  })
  // 三个奖励隐藏
//$('.three').toggle(function(){
//	$(this).prev('.platReward1').toggle('slow');
//},function(){
//	$(this).prev('.platReward1').toggle('slow');
//});
	$('.three').click(function(){
		$(this).prev('.platReward1').toggle('slow');
	})
});
