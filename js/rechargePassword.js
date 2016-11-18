Zepto(function($){
	var memoryInfo = JSON.parse(sessionStorage.getItem("memory"));
	console.log(memoryInfo)

	
	$(".reTips").text("您输入卡号***"+memoryInfo.cardNo.substring(15)+"的卡密码");
	$(".rechargeTips").addClass("rechargeTipsOn");
	//键盘函数
	CheckedPwd(function(pwd){

	},function(){

	})

	//密码提示
	$(".rechargeTips").bind("click",function(){
		$(".pwdTipsBox").addClass("pwdTipsBoxOn");
	})
	$(".tipsTitle i").bind("click",function(){
		$(".pwdTipsBox").removeClass("pwdTipsBoxOn");
	})
	
	//重试按钮
	$(".pwdError span").bind("click",function(){
		$(".btn").removeClass("btnOn");
		$(".alertBox").removeClass("alertBoxOn");
		for(var j = 0;j<6;j++){
			$(".box").eq(j).removeClass("keyOn");
		}
		keyVal = "";
		count = 0;
	})
	//忘记密码
	$(".pwdError i").bind("click",function(){
		location.href = "./forgetPassword.jsp?openId="+memoryInfo.openId;
	})
	
	
})