//手机号正则验证和是否已经注册过
			function checkTel(){
				var tel=/^(\+?86-?)?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/;
				var tels=$('#mobile').val();
				if(!tel.test(tels)){
					$('#tip_m').text('手机号码格式不正确 ');
					return false;
				}else{
					$('#tip_m').text(' ');
					 $.ajax({
			              url:"{:U('checkUsername')}",
			              type:"post",
			              data:{username:tels},
			              dataType:"json",
			              success:function(data){
								if(data.status==1){
									$('#tip_m').text('');
									return true;
								}else{
									if(data.info != ''){
										$('#tip_m').text(data.info);
										return false;
									}
									
								}
								
			                }
			        });
				}
			}
			//正则验证手机号
			function checkTels(){
				var tel=/^(\+?86-?)?(11|12|13|14|15|16|17|18|19)[0-9]{9}$/;
				var tels=$('#mobile').val();
				if(!tel.test(tels)){
					$('#tip_m').text('手机号码格式不正确 ');
					return false;
				}
				return true;
			}
			
			
		
			
			
			
			//验证码
			function checkCode(){
				var code=/^[0-9A-Za-z]{4}$/;
				var code_val=$('#code').val();
				if(!code.test(code_val) && $('#code').val()!=''){
					$('#tip_c').text('验证码输入错误 ');
					return false;
				}else{
					$('#tip_c').text(' ');
					return true;
				}
			}
			
			
			
			
			
			
			
			//下一步
			function cheknext(){
				if(checkTels()==false || checkCode()==false){
					return false;
				}
				var tels=$('#mobile').val();
				var code_val=$('#code').val();
//				var invitecode=$('#invitecode').val();
				$.ajax({
					"url":"{:U('wapRegVerify')}",
					"type":"post",
					"data":{username:tels,
							verify:code_val,
//							invitecode:invitecode
					},
					"success":function(data){
						if(data.status==1){
							$('.bg5').css('display','none');
							$('.bg6').css('display','block');
							var n=60;
							var timer=null;
							timer=setInterval(function(){
								n--;
								$('#identifying').text(n+"s后重新发送");
								$('#identifying').attr('disabled','disabled');
								if(n==0){
									clearInterval(timer);
									$('#identifying').val("重新发送");
									$('#identifying').removeAttr('disabled');
								}
							},1000);
							return true;
						}else{
							if(data.url==0){
								$('#tip_m').text(data.info);
							}else if(data.url==1){
								$('#tip_p').text(data.info);
							}else{ 
								$('#tip_c').text(data.info);
							}
							
							$("#verifyimg").click();
						}
					}
				});
			}
			
			
				//密码验证
			function checkPassword(){
				var pass=/^[a-zA-Z0-9]{6,18}$/;
				if(!pass.test($('#password1').val()) && $('#password1').val()!=''){
					$('#tip_p').text('密码格式不正确 ');
					return false;
				}else{
					$('#tip_p').text(' ');
					return true;
				}
			}
			
			
			//短信验证
			function checkMes(){
				var code=/^[0-9]{6}$/;
				var code_val=$('#send_code').val();
				if(!code.test(code_val) && $('#send_code').val()!=''){
					$('#tip_s').text('验证码输入错误 ');
					return false;
				}else{
					$('#tip_s').text('');
					return true;
				}
			}
			
			
			
			
			//刷新验证码
			$(function () {
		        var verifyimg = $("#verifyimg").attr("src");
		        $("#verifyimg").click(function () {
		          if (verifyimg.indexOf('?') > 0) {
		              $("#verifyimg").attr("src", verifyimg + '&random=' + Math.random());
		            } else {
		              $("#verifyimg").attr("src", verifyimg.replace(/\?.*$/, '') + '?' + Math.random());
		            }
		        });
		    });
			
			
		//重新获取
		
			$('#identifying').click(function(){
				if($('#identifying').val()=='重新发送'){
					var tels=$('#mobile').val();
					$.post("{:U('wapRegCaptcha')}",{mobile:tels},function(data){
						if(data.status==1){
							var n=60;
							var timer=null;
							timer=setInterval(function(){
								n--;
								$('#identifying').val(n+"s后重新发送");
								$('#identifying').attr('disabled','disabled');
								if(n==0){
									clearInterval(timer);
									$('#identifying').val("重新发送");
									$('#identifying').removeAttr('disabled');
								}
							},1000);
							return true;
						}
					})
				}
			})
		
			
			
			
			
			//注册成功
			$('#agree').click(function(){
				var tels=$('#mobile').val();
				var password1=$('#password1').val();
				var send_code=$('#send_code').val();
				var invitecode=$('#invitecode').val();
				$.post("{:U('wapRegVerify')}",{
						username:tels,
						password:password1,
						captcha:send_code,
						invitecode:invitecode
				},function(data){
					if(data.status==1){
						window.location.href="{:U('registered3')}";
							return true;
						}else{
							$('#tip_s').text(data.info);
						}
				})
			})
			
			
			
			
			
			
			
