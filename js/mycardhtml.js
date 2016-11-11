$(function(){


				//向左滑
				var html = $(".list").eq(0).clone(true);
				console.log(html)
				$(".listBox").append(html)
				var currentIndex = 0;//计数器
				var left = "";
				$(".listBox").bind("swipeLeft",".list",function(e){
					e.preventDefault();
					currentIndex++; 
					if(currentIndex == $(".list").length){
						currentIndex = 1;
						//oUL.style.left = "0px";
						left ="0rem";
					}
					left = currentIndex * 5.8 * -1 +"rem";
					//currentIndex--;
					// if(currentIndex == -1){
					// 	currentIndex = 4;
					// 	var left = -(currentIndex + 1) * 5.8 * -1 + "rem";
					// }
					//var left = -($(this).index() + 1)*5.8 + "rem";
					$(this).parent().animate({"left":left}, 300)
					// if(currentIndex == -($(".list").length)){
					// 	$(this).parent().css("left",0)
					// 	currentIndex = 0;
					// }
					// //导航条
					// navCount++;
					// $(".navlist li").eq(navCount).addClass("on");
					// $(".navlist li").eq(navCount).siblings().removeClass("on");
					// if(navCount >= $(".navlist li").length-1){
					// 	navCount = -1;
					// }
					// console.log(navCount);

					// $(".list").eq(0).removeClass("index");
					// $(this).animate({"z-index":1,"opacity":0},300);
					// if($(this).index() != $(".list").length-1){
					// 	$(".list").eq($(this).index()+1).addClass("index");
					// 	$(".list").eq($(this).index()+1).siblings().removeClass("index");
					// 	//切换动画
					// 	$(".list").eq($(this).index()+1).animate({"z-index":5,"opacity":1},300);
						
					// 	//辨别是否为异常卡,显示设为主卡标志
					// 	if($(".list").eq($(this).index()+1).hasClass("gsCard") || $(".list").eq($(this).index()+1).hasClass("ycCard") || $(".list").eq($(this).index()+1).find(".stateIcon").hasClass("mainState")){
					// 		$(".list").eq($(this).index()+1).find(".asMain").removeClass("asMainOn");
					// 	}else{
					// 		$(".list").eq($(this).index()+1).find(".asMain").addClass("asMainOn");
					// 	}
					// 	//充值按钮不可选
					// 	if($(".list").eq($(this).index()+1).hasClass("gsCard") || $(".list").eq($(this).index()+1).hasClass("ycCard")){
					// 		$(".btn").addClass("ycBtn");
					// 		$(".btn").removeClass("btnOn");
					// 		//非正常卡不显示解绑、挂失
					// 		$(".loss").addClass("operOff");
					// 		$(".reset").addClass("operOff");
					// 	}else{
					// 		$(".btn").removeClass("ycBtn");
					// 		$(".btn").addClass("btnOn");
					// 		//正常卡显示解绑、挂失
					// 		$(".loss").removeClass("operOff");
					// 		$(".reset").removeClass("operOff");
					// 	}
					// 	//是否显示挂失提示信息
					// 	if($(".list").eq($(this).index()+1).hasClass("gsCard")){
					// 		$(".gsTips").addClass("gsTipsOn");
					// 	}else{
					// 		$(".gsTips").removeClass("gsTipsOn");
					// 	}

					// 	//余额展示
					// 	//$(".acc_balance span").text(userInfo.list[$(this).index()+1].acctBal);
					// 	//$(".ele_balance span").text(userInfo.list[$(this).index()+1].cardBal);

					// }else{
					// 	$(".list").eq(0).addClass("index");
					// 	$(".list").eq(0).siblings().removeClass("index");
					// 	//切换动画
					// 	$(".list").eq(0).animate({"z-index":5,"opacity":1},300);
	
					// 	$(".list").eq(0).removeClass("asMainOn");
					// 	//充值按钮不可选
					// 	if($(".list").eq(0).hasClass("gsCard") || $(".list").eq(0).hasClass("ycCard")){
					// 		$(".btn").addClass("ycBtn");
					// 		$(".btn").removeClass("btnOn");
					// 		//非正常卡不显示解绑、挂失
					// 		$(".loss").addClass("operOff");
					// 		$(".reset").addClass("operOff");
					// 	}else{
					// 		$(".btn").removeClass("ycBtn");
					// 		$(".btn").addClass("btnOn");
					// 		//正常卡显示解绑、挂失
					// 		$(".loss").removeClass("operOff");
					// 		$(".reset").removeClass("operOff");
					// 	}
					// 	//是否显示挂失提示信息
					// 	if($(".list").eq(0).hasClass("gsCard")){
					// 		$(".gsTips").addClass("gsTipsOn");
					// 	}else{
					// 		$(".gsTips").removeClass("gsTipsOn");
					// 	}

					// 	//余额展示
					// 	//余额展示
					// 	//$(".acc_balance span").text(userInfo.list[0].acctBal);
					// 	//$(".ele_balance span").text(userInfo.list[0].cardBal);

					// }


					console.log("向左滑"+$(this).index())
				})


				//向右滑
				$(".listBox").bind("swipeRight",".list",function(e){
					e.preventDefault();
					currentIndex ++;
					var right = "";
					if($(this).index() != ($(".list").length-1)){
						right = -($(".list").length - currentIndex)*5.8 + "rem";
						$(this).parent().css("left",right)
						if(currentIndex == ($(".list").length)){
							right = -($(".list").length -1)*5.8 +"rem"
							$(this).parent().css("left",right)
							currentIndex = 0;
						}
					}else{

					 
					}
					//导航条
					// navCount --;
					// if(navCount <= -1){
					// 	navCount = $(".navlist li").length - 1;
					// }
					// $(".navlist li").eq(navCount).addClass("on");
					// $(".navlist li").eq(navCount).siblings().removeClass("on");
					// if(navCount == 0){
					// 	navCount = 0;
					// }
					// console.log(navCount);
					


					// $(".list").eq(0).removeClass("index");

					// $(this).animate({"z-index":1,"opacity":0},300);
					// if($(this).index() != 0){
					// 	$(".list").eq($(this).index()-1).addClass("index");
					// 	$(".list").eq($(this).index()-1).siblings().removeClass("index");
					// 	//切换动画
					// 	$(".list").eq($(this).index()-1).animate({"z-index":5,"opacity":1},300);
					// 	//导航条
					// 	// $(".navlist li").eq($(this).index()-1).addClass("on");
					// 	// $(".navlist li").eq($(this).index()-1).siblings().removeClass("on");
					// 	//辨别是否为异常卡,是否显示设为主卡标志
					// 	if($(".list").eq($(this).index()-1).hasClass("gsCard") || $(".list").eq($(this).index()-1).hasClass("ycCard") || $(".list").eq($(this).index()-1).find(".stateIcon").hasClass("mainState")){
					// 		$(".list").eq($(this).index()-1).find(".asMain").removeClass("asMainOn");
					// 	}else{
					// 		$(".list").eq($(this).index()-1).find(".asMain").addClass("asMainOn");
					// 	}
					// 	//充值按钮不可选
					// 	if($(".list").eq($(this).index()-1).hasClass("gsCard") || $(".list").eq($(this).index()-1).hasClass("ycCard")){
					// 		$(".btn").addClass("ycBtn");
					// 		$(".btn").removeClass("btnOn");
					// 		//非正常卡不显示解绑、挂失
					// 		$(".loss").addClass("operOff");
					// 		$(".reset").addClass("operOff");
					// 	}else{
					// 		$(".btn").removeClass("ycBtn");
					// 		$(".btn").addClass("btnOn");
					// 		//正常卡显示解绑、挂失
					// 		$(".loss").removeClass("operOff");
					// 		$(".reset").removeClass("operOff");
					// 	}
					// 	//是否显示挂失提示信息
					// 	if($(".list").eq($(this).index()-1).hasClass("gsCard")){
					// 		$(".gsTips").addClass("gsTipsOn");
					// 	}else{
					// 		$(".gsTips").removeClass("gsTipsOn");
					// 	}

					// 	//余额展示
					// 	//$(".acc_balance span").text(userInfo.list[$(this).index()-1].acctBal);
					// 	//$(".ele_balance span").text(userInfo.list[$(this).index()-1].cardBal);

					// }else{
					// 	$(".list").eq($(".list").length-1).addClass("index");
					// 	$(".list").eq($(".list").length-1).siblings().removeClass("index");
					// 	//切换动画
					// 	$(".list").eq($(".list").length-1).animate({"z-index":5,"opacity":1},300);
					// 	//导航条
					// 	// $(".navlist li").eq($(".navlist li").length-1).addClass("on");
					// 	// $(".navlist li").eq($(".navlist li").length-1).siblings().removeClass("on");
					// 	//辨别是否为异常卡,是否显示设为主卡标志
					// 	if($(".list").eq($(".list").length-1).hasClass("gsCard") || $(".list").eq($(".list").length-1).hasClass("ycCard") || $(".list").eq($(".list").length-1).find(".stateIcon").hasClass("mainState")){
					// 		$(".list").eq($(".list").length-1).find(".asMain").removeClass("asMainOn");
							
					// 	}else{
					// 		$(".list").eq($(".list").length-1).find(".asMain").addClass("asMainOn");
							
					// 	}
					// 	//充值按钮不可选
					// 	if($(".list").eq($(".list").length-1).hasClass("gsCard") || $(".list").eq($(".list").length-1).hasClass("ycCard")){
					// 		$(".btn").addClass("ycBtn");
					// 		$(".btn").removeClass("btnOn");
					// 		//非正常卡不显示解绑、挂失
					// 		$(".loss").addClass("operOff");
					// 		$(".reset").addClass("operOff");
					// 	}else{
					// 		$(".btn").removeClass("ycBtn");
					// 		$(".btn").addClass("btnOn");
					// 		//正常卡显示解绑、挂失
					// 		$(".loss").removeClass("operOff");
					// 		$(".reset").removeClass("operOff");
					// 	}
					// 	//是否显示挂失提示信息
					// 	if($(".list").eq($(".list").length-1).hasClass("gsCard")){
					// 		$(".gsTips").addClass("gsTipsOn");
					// 	}else{
					// 		$(".gsTips").removeClass("gsTipsOn");
					// 	}

					// 	//余额展示
					// 	//$(".acc_balance span").text(userInfo.list[$(".list").length-1].acctBal);
					// 	//$(".ele_balance span").text(userInfo.list[$(".list").length-1].cardBal);
					// }
					console.log("向右滑"+$(this).index())
				})

				//设为主卡
				var setMain = "";
				$(".asMain").bind("tap",function(){
					if($(this).hasClass("asMainOn")){
						operType = 1;
						$(".alertBox").addClass("alertBoxOn");
						$(".alertTips p").text("设置尾号"+$(this).parent().find(".cardNum").text().substring(16)+"的捷顺通卡为主卡吗？")
						//cardId = userInfo.list[$(".index").index()].usercode;
						setMain = $(this).parent();
						console.log(setMain);
					}
					
				})


				//解绑
				
				$(".unbind").bind("tap",function(){
					operType = 2;
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("解绑后无法继续享受线上充值、线上快速查询等便捷功能。您确认要继续吗？");

				})

				//挂失
				$(".loss").bind("tap",function(){
					operType = 3;
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("进行挂失操作后，您卡片内的金额将被冻结，保障您的资金安全，您确认要挂失吗？")
				})

				//重置密码
				$(".reset").bind("tap",function(){
					operType = 4;
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("重置尾号"+$(".index").find(".cardNum").text().substring(16)+"的捷顺通卡为主卡吗？")
					console.log(userInfo.openId)

				})
				//弹框确定按钮
				var carry = {}//记录传递信息
				$(".alertBtn span").bind("tap",function(){
					$(".alertBox").removeClass("alertBoxOn");
					if(operType == 1){//设为主卡
						console.log("设为主卡")
						// $.ajax({
						// 	url:"./setDefaultCard.execute",
						// 	type:"POST",
						// 	data:{
						// 		openId:userInfo.openId,
						// 		cardCode:cardId,
						// 		valid:1
						// 	},
						// 	success:function(data){
						// 		console.log(data)
						// 		if(JSON.parse(data).resCode == "WX000"){
						// 			setMain.find(".stateIcon").addClass("mainState");
						// 			setMain.siblings().find(".stateIcon").removeClass("mainState");
						// 			setMain.find(".asMain").removeClass("asMainOn");
						// 			setMain.siblings().find(".asMain").addClass("asMainOn");
						// 		}else{
						// 			//$(".alertBox").addClass("alertBoxOn");

						// 		}
								
						// 		operType = 0;
						// 	},
						// 	error:function(error){
						// 		alert("服务未开启");
						// 	}
						// })				

					}else if(operType == 2){//解绑
						// carry = {
						// 	openId:userInfo.openId,
						// 	carryMes:"您即将解绑尾号"+userInfo.list[$(".index").index()].usercode.substring(15)+"的捷顺通卡",
						// 	accounttype:userInfo.list[$(".index").index()].accounttype,
						// 	tips:"请输入卡密码",
						// 	type:1
						// };
						
						// sessionStorage.setItem("pwdShow",JSON.stringify(carry));
						// console.log(carry)
						console.log("解绑")
						operType = 0;
					}else if(operType == 3){//挂失
						// carry = {
						// 	openId:userInfo.openId,
						// 	carryMes:"您即将解绑尾号"+userInfo.list[$(".index").index()].usercode.substring(15)+"的捷顺通卡",
						// 	accounttype:userInfo.list[$(".index").index()].accounttype,
						// 	tips:"请输入卡密码",
						// 	type:2
						// };
						
						// sessionStorage.setItem("pwdShow",JSON.stringify(carry))
						console.log("挂失");
						operType = 0;
					}else if(operType == 4){//重置密码
						// carry = {
						// 	openId:userInfo.openId,
						// 	carryMes:"您即将解绑尾号"+userInfo.list[$(".index").index()].usercode.substring(15)+"的捷顺通卡",
						// 	accounttype:userInfo.list[$(".index").index()].accounttype,
						// 	tips:"请输入卡密码",
						// 	type:0
						// };
						
						// sessionStorage.setItem("pwdShow",JSON.stringify(carry))
						console.log("重置密码");
						operType = 0;
					}
					
				})
				//弹框取消按钮
				$(".alertBtn i").bind("tap",function(){
					$(".alertBox").removeClass("alertBoxOn");
					operType = 0;
				})

				




			//}



	

	




})