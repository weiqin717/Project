// 密码
function password() {
    var bindingPass = $(".bindingPass").val();
    var password = /^[a-zA-Z0-9]{6,18}$/;
    if (!password.test(bindingPass) && $('.bindingPass').val() != "") {
        $(".bindingP").text("密码格式不正确");
        return false;
    } else {
        $(".bindingP").text("");
        return true;
    }
}
// 确认密码
function passwordAgin() {
    var bindingPassword = $(".bindingPassword").val();
    var password = /^[a-zA-Z0-9]{6,18}$/;
    if (!password.test(bindingPassword) && $('.bindingPassword').val() != "") {
        $(".bindingPA").text("密码格式不正确");
        return false;
    } else {
        $(".bindingPA").text("");
        return true;
    }
}
// 确定
function conPassword() {
    var bindingPass = $(".bindingPass");
    var bindingPassword = $(".bindingPassword");
    $.ajax({
        url: "",
        type: "post",
        data: {},
        dataType: "json",
        success: function (data) {
            if (data.status == 1) {
                $(".box1").css('display', 'block');
                $(".box1Con").click(function () {
                    $(".binding").css('display', 'none');
                    $(".mask").css('display', 'none');
                });
            } else {
                $(".box2").css('display', 'block');
                $(".box2Con").click(function () {
                    $(".binding").css("display", 'none');
                    $(".mask").css('display', 'none');
                })
            }
        }
    })
}
$(function(){
  
})
