//var openId='${param.openId}'; 

Zepto(function($){
	var memoryInfo = JSON.parse(sessionStorage.getItem("memory"));
	console.log(memoryInfo)
	var keyVal = "";//用于记录前6点击的数字
	var count = 0;//用于记录小黑点显示

	if(memoryInfo.type == "unbind"){//解绑
		$(".cardTips").text("您即将解绑尾号"+memoryInfo.cardNo.substring(0,4)+"的捷顺通卡");
		$(".pTips").text("请输入卡密码");
		$(".pwdBtn").addClass("pwdBtnOn");
		//键盘事件
		$(".keyBox").bind("click",".key",function(){
			if($(this).index() == 9){
				keyVal = keyVal;
				console.log(keyVal)
			}else if($(this).index() == 11){
				count--;
				if(count < 0){
					count = 0;
				}
				$(".btn").removeClass("btnOn");
				//小黑点
				$(".box").eq(count).removeClass("keyOn");

				if(keyVal.length == 0){
					keyVal = "";
				}else{
					keyVal = keyVal.substring(0,keyVal.length-1);
				}
				console.log(keyVal)
			}else{
				if(keyVal.length >= 6){
					keyVal = $(this).find("i").text();
					for(var a=0;a<6;a++){
						$(".box").eq(a).removeClass("keyOn");
					}
					count = 0;
					$(".box").eq(count).addClass("keyOn");
				}else{
					keyVal = keyVal.concat($(this).find("i").text());
					//小黑点
					$(".box").eq(count).addClass("keyOn");
				}

				count++;
				if(count > 6 ){
					count = 0; 
				}
				
				//确定按钮状态事件
				if(keyVal.length == 6){
					$(".btn").addClass("btnOn");
				}else{
					$(".btn").removeClass("btnOn");
				}
				
				console.log(keyVal)
			}
			
		})
	}else if(memoryInfo.type == "loss"){//挂失
		$(".cardTips").text("您即将挂失尾号"+memoryInfo.cardNo.substring(0,4)+"的捷顺通卡");
		$(".pTips").text("请输入卡密码");
		$(".pwdBtn").addClass("pwdBtnOn");
		//键盘事件
		$(".keyBox").bind("click",".key",function(){
			if($(this).index() == 9){
				keyVal = keyVal;
				console.log(keyVal)
			}else if($(this).index() == 11){

				count--;
				if(count < 0){
					count = 0;
				}
				$(".btn").removeClass("btnOn");
				//小黑点
				$(".box").eq(count).removeClass("keyOn");

				if(keyVal.length == 0){
					keyVal = "";
				}else{
					keyVal = keyVal.substring(0,keyVal.length-1);
				}
				console.log(keyVal)
			}else{
				if(keyVal.length >= 6){
					keyVal = $(this).find("i").text();
					for(var a=0;a<6;a++){
						$(".box").eq(a).removeClass("keyOn");
					}
					count = 0;
					$(".box").eq(count).addClass("keyOn");
				}else{
					keyVal = keyVal.concat($(this).find("i").text());
					//小黑点
					$(".box").eq(count).addClass("keyOn");
				}

				count++;
				if(count > 6 ){
					count = 0; 
				}
				
				//确定按钮状态事件
				if(keyVal.length == 6){
					$(".btn").addClass("btnOn");
				}else{
					$(".btn").removeClass("btnOn");
				}
				
				console.log(keyVal)
			}
			
		})

	}else if(memoryInfo.type == "reset"){//重置密码
		$(".pTips").text("请输入原卡密码");

		var oldPassword = "";//
		var firstPwd = "";//
		var secondPwd = "";//
		var tipsUp = 0;
		//键盘事件
		$(".keyBox").bind("click",".key",function(){
			if($(this).index() == 9){
				keyVal = keyVal;
				console.log(keyVal)
			}else if($(this).index() == 11){

				count--;
				if(count < 0){
					count = 0;
				}
				$(".btn").removeClass("btnOn");
				//小黑点
				$(".box").eq(count).removeClass("keyOn");

				if(keyVal.length == 0){
					keyVal = "";
				}else{
					keyVal = keyVal.substring(0,keyVal.length-1);
				}
				console.log(keyVal)
			}else{


				if(keyVal.length >= 6){
					keyVal = $(this).find("i").text();
					for(var a=0;a<6;a++){
						$(".box").eq(a).removeClass("keyOn");
					}
					count = 0;
					$(".box").eq(count).addClass("keyOn");
					if(tipsUp == 1){
						$(".pwdTips").removeClass("pwdTipsOn");
					}

				}else{
					keyVal = keyVal.concat($(this).find("i").text());
					//小黑点
					$(".box").eq(count).addClass("keyOn");
				}

				count++;
				if(count > 6 ){
					count = 0; 
				}
				
				//密码校验
				if(keyVal.length == 6){
					tipsUp ++;
					if(tipsUp == 1){
						if(keyVal == "123456"){
							console.log("成功");
							oldPassword = keyVal;
							$(".pTips").text("请输入新的卡密码");
							for(var i = 0;i<6;i++){
								$(".box").eq(i).removeClass("keyOn");
							}
							keyVal = "";
							count = 0;
						}else{
							$(".alertBox").addClass("alertBoxOn");
							tipsUp = 0;
							console.log("密码错误")
						}
					}else if(tipsUp == 2){
						firstPwd = keyVal;
						$(".pwdTips").addClass("pwdTipsOn");
						$(".pwdTips span").text("请再次输入密码");
						for(var b = 0;b<6;b++){
							$(".box").eq(b).removeClass("keyOn");
						}
						keyVal = "";
						count = 0;
					}else if(tipsUp == 3){
						secondPwd = keyVal;
						if(firstPwd == secondPwd){
							console.log("成功")
							tipsUp = 0;
						}else{
							tipsUp = 1;
							$(".pwdTips span").text("两次密码输入不一致");
							console.log("重新输入")
						}
					}

				}else{
						
				}
				
				console.log(keyVal)
			}
			
		})
	}

	//确定按钮点击事件
	$(".pwdBtn").bind("click",".btnOn",function(){
		if(memoryInfo.type == "unbind"){
			$(".alertBox").addClass("alertBoxOn");
			
			console.log("解绑")
		}else if(memoryInfo.type == "loss"){
			$(".alertBox").addClass("alertBoxOn");
			console.log("挂失")
		}else if(memoryInfo.type == "reset"){

		}
	})

	//重试按钮
	$(".pwdError span").bind("click",function(){
		$(".alertBox").removeClass("alertBoxOn");
		for(var j = 0;j<6;j++){
			$(".box").eq(j).removeClass("keyOn");
		}
		keyVal = "";
		count = 0;
	})
	//忘记密码
	$(".pwdError i").bind("click",function(){
		location.href = "../new-html/forgetPassword.html"
	})
	
	
})