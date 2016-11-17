$(function(){

				var i = 0;//计数器
                var clone = $(".list").first().clone();//克隆第一张图片
                $(".listBox").append(clone);//复制到列表最后
                var size = $(".list").size();
                $(".list").eq(0).addClass("index");
                //初始余额显示
                $(".acc_balance span").text($(".index").find(".cardNum").text().substring(15));
                $(".ele_balance span").text($(".index").find(".cardNum").text().substring(15));
				//向左滑
				$(".listBox").bind("swipeLeft",".list",function(e){
					e.preventDefault();
					//轮播图
					i++;
					if (i == size) {
                        $(".listBox").css({ left: 0 });
                        i = 1;
                    }
                    $(".listBox").animate({ left: -i * 5.8+"rem" }, 500);

					$(".list").eq(i).addClass("index");
					$(".list").eq(i).siblings().removeClass("index");
					//导航条
					if (i == size - 1) {
                        $(".navlist li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".navlist li").eq(i).addClass("on").siblings().removeClass("on");
                    }

                    //余额显示
                    $(".acc_balance span").text($(".index").find(".cardNum").text().substring(15));
                    $(".ele_balance span").text($(".index").find(".cardNum").text().substring(15));

                    //充值按钮状态
                    if($(".list").eq(i).hasClass("ycCard") || $(".list").eq(i).hasClass("gsCard")){
                    	$(".btn").removeClass("btnOn");
                    }else{
                    	$(".btn").addClass("btnOn");
                    }


					console.log("向左滑"+$(this).index())
					console.log("i"+i);
				})

				//向右滑
				$(".listBox").bind("swipeRight",".list",function(e){
					e.preventDefault();
					//轮播图
					i--;
					if (i == -1) {
                        $(".listBox").css({ left: -(size - 1) * 5.8+"rem" });
                        i = size - 2;
                    }
                    $(".listBox").animate({ left: -i * 5.8 +"rem"}, 500);

                    $(".list").eq(i).addClass("index");
					$(".list").eq(i).siblings().removeClass("index");	
					//导航条
					if (i == size - 1) {
                        $(".navlist li").eq(0).addClass("on").siblings().removeClass("on");
                    } else {
                        $(".navlist li").eq(i).addClass("on").siblings().removeClass("on");
                    }
                    //余额显示
                    $(".acc_balance span").text($(".index").find(".cardNum").text().substring(15));
                    $(".ele_balance span").text($(".index").find(".cardNum").text().substring(15));

                    //充值按钮状态
                    if($(".list").eq(i).hasClass("ycCard") || $(".list").eq(i).hasClass("gsCard")){
                    	$(".btn").removeClass("btnOn");
                    }else{
                    	$(".btn").addClass("btnOn");
                    }

					console.log("向右滑"+$(this).index());
					console.log("i"+i);
				})


				
				//设为主卡
				var memoryInfo = {}
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
					//console.log(userInfo.openId)

				})
				//弹框确定按钮
				var carry = {}//记录传递信息
				$(".alertBtn span").bind("tap",function(){
					$(".alertBox").removeClass("alertBoxOn");
					if(operType == 1){//设为主卡
						//显示主卡标志
						setMain.find(".stateIcon").addClass("mainState");
						setMain.siblings(".normalCard").find(".stateIcon").removeClass("mainState");
						//显示设为主卡标志
						setMain.find(".asMain").removeClass("asMainOn");
						setMain.siblings(".normalCard").find(".asMain").addClass("asMainOn");
		
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
						memoryInfo = {
							openId:"openId",
							cardNo:"cardNum",
							accounttype:"02",
							type:"unbind"
						}
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo));
						//location.href = "../new-html/password.html"
						
						console.log("解绑")
						console.log($(".index").find(".cardNum").text())
						operType = 0;
					}else if(operType == 3){//挂失
						memoryInfo = {
							openId:"openId",
							cardNo:"cardNum",
							accounttype:"02",
							type:"loss"
						}
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo));
						//location.href = "../new-html/password.html"

						console.log("挂失");
						console.log($(".index").find(".cardNum").text())
						operType = 0;
					}else if(operType == 4){//重置密码
						memoryInfo = {
							openId:"openId",
							cardNo:"cardNum",
							accounttype:"02",
							type:"reset"
						}
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo));
						//location.href = "../new-html/password.html"

						console.log("重置密码");
						console.log($(".index").find(".cardNum").text())
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