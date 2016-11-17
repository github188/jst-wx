$(function(){
	var userInfo = JSON.parse(sessionStorage.getItem("memory"));
	$(".reIcon i").bind("touchstart",function(){
		location.href = "./jsp/password.jsp?openId"+userInfo.openId;
	})
	$(".forgetIcon i").bind("touchstart",function(){
		location.href = "../new-html/forgetPassword.html";
	})
})