$(function(){
	//解决点透问题
	FastClick.attach(document.body);
	//用于检验卡号、密码是否为空
	var checked = {cardNo:false,pwd:false};
	var cardInfo = JSON.parse(sessionStorage.getItem("bind"));
	//卡号输入验证
	var count = 0;//记录空格标志
	var cardNum = "";//记录卡号

	$(".cardId input").bind("keyup",function(){
		$(".cardTitle").addClass("cardTitleOn");
		//只能输入数字
		if(/^[0-9\s]*$/.test($(this).val())){

		}else{
			var str = $(this).val();
			str = str.substring(0,str.length-1);
			$(this).val(str);
		}
		if($(this).val().length > 6){//卡宾
			//只能有一个空格
			var arr = $(this).val().split(" ");
			if(arr.length == 0){
				$(this).val($(this).val().substring(0,6)+ " " +$(this).val().substring(6));
			}else if(arr.length == 1){
				var text = arr[0]
				$(this).val(text.substring(0,6)+ " " +text.substring(6))
			}else{
				var txt = arr[0] + arr[1];
				cardNum = txt;
				$(this).val(txt.substring(0,6)+ " " +txt.substring(6))
			}

			if($(this).val().substring(0,6) != "880755"){
				$(".cardIdBox p").addClass("pOn");
				$(".cardIdBox p").text("请输入正确的捷顺通卡号");
				$(".iconBox i").text($(this).val());
				//$(".btn").removeClass("btnOn");
				checked.cardNo = false;
				$(".cardId i").addClass("iOn");
			}else{
				//
				$(".cardIdBox p").removeClass("pOn");
				$(".cardIdBox p").text("");
				$(".iconBox i").text($(this).val());
				if($(this).val().length == 20){
					//$(".btn").addClass("btnOn");
					checked.cardNo = true;
					$(".cardId i").removeClass("iOn");

				}else{
					//$(".btn").removeClass("btnOn");
					checked.cardNo = false;
					$(".cardId i").addClass("iOn");
				}
			}
		}else if($(this).val().length == 6){
			if($(this).val().substring(0,6) != "880755"){
				$(".cardIdBox p").addClass("pOn");
				$(".cardIdBox p").text("请输入正确的捷顺通卡号");
			}
		}else if($(this).val().length == 0){
			$(".cardIdBox p").removeClass("pOn");
			$(".cardIdBox p").text("");
			$(".iconBox i").text($(this).val());
			$(".cardId i").removeClass("iOn");
			count = 0;
		}else{
			$(".iconBox i").text($(this).val());
			//$(".btn").removeClass("btnOn");
			checked.cardNo = false;
			$(".cardId i").addClass("iOn");
		}
		count ++;
		if(count == 6){
			$(this).val($(this).val()+" ");
		}
		if($(this).val().length == 0){
			count = 0;
		}

		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})

	//密码输入
	$(".cardPwd input").bind("keyup",function(){
		if($(this).val().length >= 6){
			checked.pwd = true;
		}else{
			checked.pwd = false;
		}
		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})

	//卡号输入时的叉的事件
	$(".cardId i").bind("click",function(){
		$(".cardId input").val("");
		count = 0;
		$(this).removeClass("iOn");
		$(".cardIdBox p").removeClass("pOn");
		$(".cardIdBox p").text("");
		$(".iconBox i").text($(this).val());
	})

	//卡号输入失去焦点事件
	$(".cardId input").bind("blur",function(){
		$(".cardTitle").addClass("cardTitleOn");
		if($(this).val().length >= 19){
			var arr = $(this).val().split(" ");
			if(arr.length == 0){
				$(this).val($(this).val().substring(0,6)+ " " +$(this).val().substring(6));
			}else if(arr.length == 1){
				var text = arr[0]
				$(this).val(text.substring(0,6)+ " " +text.substring(6))
			}else{
				var txt = arr[0] + arr[1];
				
				$(this).val(txt.substring(0,6)+ " " +txt.substring(6));
			}
			if($(this).val().length == 20){
				//$(".btn").addClass("btnOn");
				checked.cardNo = true;
				cardNum = txt;
			}else{
				//$(".btn").removeClass("btnOn");
				checked.cardNo = false;
			}
			$(".iconBox i").text($(this).val());
		}else{
			$(".cardIdBox p").addClass("pOn");
			$(".cardIdBox p").text("请输入正确的捷顺通卡号");
			$(".iconBox i").text($(this).val());
			//$(".btn").removeClass("btnOn");
			checked.cardNo = false;
		}
		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})
	//卡号输入获取焦点事件
	$(".cardId input").focus(function(){
		$(".cardTitle").addClass("cardTitleOn");
		if($(this).val().length >= 19){
			var arr = $(this).val().split(" ");
			if(arr.length == 0){
				$(this).val($(this).val().substring(0,6)+ " " +$(this).val().substring(6));
			}else if(arr.length == 1){
				var text = arr[0]
				$(this).val(text.substring(0,6)+ " " +text.substring(6))
			}else{
				var txt = arr[0] + arr[1];			
				$(this).val(txt.substring(0,6)+ " " +txt.substring(6));
			}
			if($(this).val().length == 20){
				//$(".btn").addClass("btnOn");
				checked.cardNo = true;
				cardNum = txt;
			}else{
				// $(".btn").removeClass("btnOn");
				checked.cardNo = false;
			}
			$(".iconBox i").text($(this).val());
		}

		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})
	//密码输入获取焦点
	$(".cardPwd input").focus(function(){
		if($(this).val().length == 6){
			checked.pwd = true;
		}else{
			checked.pwd = false;
		}

		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})
	//密码输入失去焦点
	$(".cardPwd input").blur(function(){
		if($(this).val().length == 6){
			checked.pwd = true;
		}else{
			checked.pwd = false;
		}

		if(checked.cardNo && checked.pwd){
			$(".btn").addClass("btnOn");
		}else{
			$(".btn").removeClass("btnOn");
		}
	})

	//弹出密码提示框
	$(".forgetTips span").bind("click",function(){
		$(".tipsBox").addClass("tipsBoxOn");
	})

	//关闭密码提示框
	$(".tipsTitle i").bind("click",function(){
		$(".tipsBox").removeClass("tipsBoxOn");
	})

	//确定按钮事件
	$(".comfirmBtn").bind("touchstart",".btnOn",function(){
		console.log(cardNum)
		// $(".alertBox").addClass("alertBoxOn");
		// $(".pwdError").addClass("btnOn");
		//location.href = "bindSuccess.html";
		$.ajax({
				url:"./bindJstCard.execute",
				type:"POST",
				data:{
					openId:cardInfo.openId,
					cardCode:cardNum,
					password:$(".cardPwd input").val(),
					accounttype:cardInfo.accounttype
				},
				success:function(data){
					var info = JSON.parse(data);
					if(info.resCode == "WX000"){
						var memoryInfo = {
							openId:cardInfo.openId,
							cardNo:cardNum,
							accounttype:cardInfo.accounttype,
							type:"reset"
						};
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo))
						location.href = "./bindSuccess.jsp?"+cardInfo.openId;
					}else if(info.resCode == "WX007"){
						$(".alertBox").addClass("alertBoxOn");
						$(".alertMes span").text(info.msgContent);
						$(".longtime").addClass("btnOn");
						$(".pwdError").removeClass("btnOn");	
					}else if(info.resCode == "WX002"){
						$(".alertBox").addClass("alertBoxOn");
						$(".alertMes span").text(info.msgContent);
						$(".longtime").addClass("btnOn");
						$(".pwdError").removeClass("btnOn");
					}else if(info.resCode == "WX008"){
						$(".alertBox").addClass("alertBoxOn");
						$(".alertMes span").text(info.msgContent);
						$(".longtime").removeClass("btnOn");
						$(".pwdError").addClass("btnOn");
					}
					
					console.log(info);
					
				},
				error:function(error){
					console.log("服务未开启")
				}
			})
	})

	//错误确认按钮
	$(".longtime span").bind("click",function(){
		//console.log(5464646)
		$(".alertBox").removeClass("alertBoxOn");
	})
	//错误重试按钮
	$(".pwdError span").bind("click",function(){
		$(".alertBox").removeClass("alertBoxOn");
	})
	//错误忘记密码按钮
	$(".pwdError i").bind("click",function(){
		$(".alertBox").removeClass("alertBoxOn");
		location.href = "../html/forgetMes.html";
	})
	$(".tips2 i").bind("click",function(){
		location.href = "../html/forgetMes.html";
	})











})