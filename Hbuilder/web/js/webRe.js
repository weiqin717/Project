$(function(){
  // 手机号正则验证
  $('.tel').blur(function(){
    telVerify();
  });
  function telVerify(){
    var tel = $('.tel').val();
    var telTest = /^(\+?86-?)?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/;
    if(!telTest.test(tel)){
      $('.telTip').text('手机号格式不对/用户名未注册，请输入手机号');
      return false;
    }else {
      $('.telTip').text('');
    }
  };
  // 点击下一步验证手机号
  $('.telNextBtn').click(function(){
    var tel = $('.tel').val();
    var telTest = /^(\+?86-?)?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/;
    if(!telTest.test(tel)){
      $('.telTip').text('手机号格式不对/用户名未注册，请输入手机号');
      return false;
    }else {
      $('telTip').text('');
      $.ajax({
        url:"",
        type:"post",
        data:{username:tel},
        dataType:"json",
        success:function(data){
          if(data.status == 1){

          }else {

          }
        }
      })
    }
  });
  //登陆密码验证
  $('.oldPassword').blur(function(){
    passwordVerify();
  });
  function passwordVerify(){
    var oldPassword = $('.oldPassword').val();
    var oldpasswordTest = /^[a-zA-Z0-9]{6,18}$/;
    if(!oldpasswordTest.test(oldPassword)){
      $('.oldPasswordTip').text('6-18位字母、数字、符号组合，不含空格');
      return false;
    }else {
      $('.oldPasswordTip').text('');
    }
  };
  // 点击下一步验证密码
  $('.passwordNextBtn').click(function(){
    var oldPassword = $('.oldPassword').val();
    var tel = $('.tel').val();
    var oldpasswordTest = /^[a-zA-Z0-9]{6,18}$/;
    if(!oldpasswordTest.test(oldPassword)){
      $('.oldPasswordTip').text('6-18位字母、数字、符号组合，不含空格');
      return false;
    }else {
      $('.oldPasswordTip').text('');
      $.ajax({
        url:"",
        type:"post",
        data:{username:tel,password:oldPassword},
        dataType:"json",
        success:function(data){
          if(data.status == 1){
            window.location.href="";
            return true;
          }else {
            $('.oldPasswordTip').text();
          }
        }
      })
    }
  });
  // 注册手机号是
  var  tel = $('.tel').val();
  $('.reTel').text(tel);

  // 点击发送验证码
  $('.send').click(function(){
    var tel = $('.tel').val();
    $.ajax({
      url:"",
      data:{username:tel},
      type:"post",
      dataType:"json",
      success:function(){
        if(data.status == 1){
          var n = 60;
          var timer = null;
          timer = setInterval(function(){
            n--;
            $('.send').text(n+'s');
            $('.send').attr('disabled','disabled');
            if(n == 0){
              clearInterval(timer);
              $('.send').text('点击发送');
              $('.send').removeAttr('disabled','disabled');
            }
          },1000);
          return true;
        }else {
          $('.codeTip').text('验证码错误');
          return false;
        }
      }
    })
  });
  // 正则验证短信验证码
  $('.code').blur(function(){
    codeVerify();
  })
  function codeVerify(){
    var code = $('.code').val();
    var codeTest = /^[0-9]{6}$/;
    if(!codeTest.test(code)){
      $('.codeTip').text('验证码有误');
      return false;
    }else {
      $('.codeTip').text('');
    }
  };
  //
$('.password').blur(function(){
  passwordVerify1()
})
function passwordVerify1(){
  var password = $('.password').val();
  var oldpasswordTest = /^[a-zA-Z0-9]{6,18}$/;
  if(!oldpasswordTest.test(password)){
    $('.passwordTel').text('6-18位字母、数字、符号组合，不含空格');
    return false;
  }else {
    $('.passwordTel').text('');
  }
};
//点击注册  完成
  $('.pass').click(function(){
    if(codeVerify() == false && passwordVerify1() == false){
      return false;
    };
    var tel = $('.tel').val();
    var code = $('.code').val();
    var password = $('.password').val();
    $.ajax({
      url:"",
      type:"post",
      data:{username:tel,password:password,code:code},
      dataType:"json",
      success:function(){
        if(data.status == 1){

        }else {

        }
      }
    })
  })

});
