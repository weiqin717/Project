<script type="text/javascript">
		window.onload=function(){
			//倒计时
			showLeftTime();
			var timeID=setTimeout(showLeftTime,1000);
			function showLeftTime(){
				var timeID=setTimeout(showLeftTime,1000);
				var str = $("#shijian").text();//开始预约
		        var str1=$("#shijian1").text();//预约结束
		        var str2=$("#shijian2").text();//投标开始
		        var str3=$("#shijian3").text();//活动结束
		        str = str.replace(/-/g,'/');
		      	str1=str1.replace(/-/g,'/');
		      	str2=str2.replace(/-/g,'/');
		      	str3=str3.replace(/-/g,'/');
		        var datex = new Date(str);//开始预约
		        var datey = new Date(str2);//投标开始
		        var datez = new Date(str3);//活动结束
			    var date1 = new Date(str1);//预约结束
			    var date2 = new Date();
				var ts = (new Date(datex)) - (new Date());//计算剩余的毫秒数
				var dd = parseInt(ts / 1000 / 60 / 60 / 24, 10);//计算剩余的天数
				var hh = parseInt(ts / 1000 / 60 / 60 % 24, 10);//计算剩余的小时数
				var mm = parseInt(ts / 1000 / 60 % 60, 10);//计算剩余的分钟数
				var ss = parseInt(ts / 1000 % 60, 10);//计算剩余的秒数
				dd = checkTime(dd);
				hh = checkTime(hh);
				mm = checkTime(mm);
				ss = checkTime(ss);
				//倒计时()》开始预约(datex)》预约结束(date1)》开始投标(datey)》活动结束(datez)
					if(date2>datez&&date2>datey&&date2>date1&&date2>datex){
						document.getElementById("timer-t").innerHTML = "本期" ;
						document.getElementById("timer-s").innerHTML = "已";
						document.getElementById("timer-f").innerHTML = "结束";
						document.getElementById("timer-m").innerHTML = "！" ;
					}else if(date2>date1&&date2>datex&&date2<datez){
						document.getElementById("timer-t").innerHTML = "开始" ;
						document.getElementById("timer-s").innerHTML = "投标";
						document.getElementById("timer-f").innerHTML = "中";
						document.getElementById("timer-m").innerHTML = "！" ;
					}else
						if(ts <= 0){
						document.getElementById("timer-t").innerHTML = "火爆" ;
						document.getElementById("timer-s").innerHTML = "预约";
						document.getElementById("timer-f").innerHTML = "中";
						document.getElementById("timer-m").innerHTML = '<img src="/Public/Theme/Supertarget/images/hy.gif">';
						}
					else{
						document.getElementById("timer-t").innerHTML = dd+'天' ;
						document.getElementById("timer-s").innerHTML =  hh+'时' ;
						document.getElementById("timer-f").innerHTML =  mm+'分' ;
						document.getElementById("timer-m").innerHTML =  ss+'秒' ;
						}
				}
				function checkTime(i){
	               if (i < 10){
	                   i = "0" + i;
	                }
	               return i;
				 }
		}
	</script>
