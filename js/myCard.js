$(function(){
	var userInfo = {};
	userInfo.openId = openId;
	var cardId = "";//记录卡号

	//获取卡列表
	$.ajax({
		url:"./getUserCards.execute",
		type:"POST",
		data: {"openId": openId},
		dataType:"json",
		success:function(data){
			console.log(data);
			var listHtml = " ";
			var mainHtml = " ";
			var navHtml = " ";
			var normal = "";
			var count = 1;
			var index = "";
			var state = "";
			var setMain = "";
			var operType = 0;//记录操作类型
			var accounttype = "";//记录卡类型
			if(data.resCode == "WX001"){//未绑卡

			}else if(data.list.length == 1){//只绑一张卡
				listHtml = '<li class="list oneList'+normal+' '+index+'">'+
									'<span class="cardNum">'+data.list[i].usercode.substring(0,4)+'** *********'+data.list[i].usercode.substring(15)+'</span>'+
									'<span class="bill">账单&gt;</span>'+
									'<i class="stateIcon mainState"></i>'+
									'<span class="asMain">设为主卡</span>'+
								'</li>'


			}else{//绑多张卡
				userInfo.list = data.list;
				//初始显示余额
				$(".acc_balance span").text(data.list[0].acctBal);
				$(".ele_balance span").text(data.list[0].cardBal);
				//初始化数据
				cardId = data.list[0].usercode;
				accounttype = data.list[0].accounttype;

				for(var j = 0 ;j < data.list.length;j++){
					
					if(data.list[j].valid == "1"){//主卡
						index = "index";
						state = "mainState";
						normal = "normalCard1";
						asMainOn = "asMain";
						
					}else{//非主卡
						index = "";
						state = "";
						asMainOn = "asMain asMainOn"
						if(count == 1){
							normal = "normalCard2";
						}else if(count == 2){
							normal = "normalCard3";
						}else{
							normal = "normalCard1";
							count = 0;
						}	
					}
					listHtml += '<li class="list '+normal+' '+index+'">'+
									'<span class="cardNum">'+data.list[j].usercode.substring(0,4)+'** *********'+data.list[j].usercode.substring(15)+'</span>'+
									'<span class="bill">账单&gt;</span>'+
									'<i class="stateIcon '+state+'"></i>'+
									'<span class="'+asMainOn+'">设为主卡</span>'+
								'</li>'
					count++;

					//导航条
					if(j == 0){
						navHtml = '<li class="on"></li>';
					}else{
						navHtml += '<li></li>'
					}
				}
				
				$(".listBox").html(listHtml);
				$(".navlist").html(navHtml);
				console.log(userInfo);
				var i = 0;//计数器
                var clone = $(".list").first().clone();//克隆第一张图片
                $(".listBox").append(clone);//复制到列表最后
                var size = $(".list").size();
                $(".list").eq(0).addClass("index");

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
                    if(i == data.list.length){
                    	$(".acc_balance span").text(data.list[0].acctBal);
                    	$(".ele_balance span").text(data.list[0].cardBal);
                    	cardId = data.list[0].usercode;
                    	accounttype = data.list[0].accounttype;
                    }else{
                    	$(".acc_balance span").text(data.list[i].acctBal);
                    	$(".ele_balance span").text(data.list[i].cardBal);
                    	cardId = data.list[i].usercode;
                    	accounttype = data.list[i].accounttype;
                    }

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
                    if(i == data.list.length-1){
                    	$(".acc_balance span").text(data.list[data.list.length-1].acctBal);
                    	$(".ele_balance span").text(data.list[data.list.length-1].cardBal);
                    	cardId = data.list[data.list.length-1].usercode;
                    	accounttype = data.list[data.list.length-1].accounttype;
                    }else{
                    	$(".acc_balance span").text(data.list[i].acctBal);
                    	$(".ele_balance span").text(data.list[i].cardBal);
                    	cardId = data.list[i].usercode;
                    	accounttype = data.list[i].accounttype;
                    }

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
				var setMain = "";
				$(".asMain").bind("tap",function(){
					if($(this).hasClass("asMainOn")){
						operType = 1;//1为设置主卡
						$(".alertBox").addClass("alertBoxOn");
						$(".alertTips p").text("设置尾号"+$(this).parent().find(".cardNum").text().substring(16)+"的捷顺通卡为主卡吗？")
						setMain = $(this).parent();
						console.log(setMain);
					}
					
				})


				//解绑
				$(".unbind").bind("tap",function(){
					operType = 2;//2为解绑
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("解绑后无法继续享受线上充值、线上快速查询等便捷功能。您确认要继续吗？");

				})

				//挂失
				$(".loss").bind("tap",function(){
					operType = 3;//3为挂失
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("进行挂失操作后，您卡片内的金额将被冻结，保障您的资金安全，您确认要挂失吗？")
				})

				//重置密码
				$(".reset").bind("tap",function(){
					operType = 4;//4为重置密码
					$(".alertBox").addClass("alertBoxOn");
					$(".alertTips p").text("重置尾号"+cardId.substring(15)+"的捷顺通卡为主卡吗？")
					console.log(userInfo.openId)

				})
				//弹框确定按钮
				var memoryInfo = {}//记录传递信息
				$(".alertBtn span").bind("tap",function(){
					$(".alertBox").removeClass("alertBoxOn");
					if(operType == 1){//设为主卡
						console.log("设为主卡")
						$.ajax({
							url:"./setDefaultCard.execute",
							type:"POST",
							data:{
								openId:userInfo.openId,
								cardCode:cardId,
								valid:1
							},
							success:function(data){
								console.log(data)
								if(JSON.parse(data).resCode == "WX000"){
									setMain.find(".stateIcon").addClass("mainState");
									setMain.siblings().find(".stateIcon").removeClass("mainState");
									setMain.find(".asMain").removeClass("asMainOn");
									setMain.siblings().find(".asMain").addClass("asMainOn");
								}else{
									//$(".alertBox").addClass("alertBoxOn");

								}
								
								operType = 0;
							},
							error:function(error){
								alert("服务未开启");
							}
						})				

					}else if(operType == 2){//解绑						
						memoryInfo = {
							openId:userInfo.openId,
							cardNo:cardId,
							accounttype:accounttype,
							type:"unbind"
						};
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo));
						console.log(memoryInfo)
						console.log("解绑")
						location.href = "./jsp/password.jsp?openId="+userInfo.openId;
						operType = 0;
					}else if(operType == 3){//挂失
						memoryInfo = {
							openId:userInfo.openId,
							cardNo:cardId,
							accounttype:accounttype,
							type:"loss"
						};
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo))
						console.log("挂失");
						location.href = "./jsp/password.jsp?openId="+userInfo.openId;
						operType = 0;
					}else if(operType == 4){//重置密码
						memoryInfo = {
							openId:userInfo.openId,
							cardNo:cardId,
							accounttype:accounttype,
							type:"reset"
						};
						sessionStorage.setItem("memory",JSON.stringify(memoryInfo))
						console.log("重置密码");
						location.href = "./jsp/password.jsp?openId="+userInfo.openId;
						operType = 0;
					}
					
				})
				//弹框取消按钮
				$(".alertBtn i").bind("tap",function(){
					$(".alertBox").removeClass("alertBoxOn");
					operType = 0;
				})

				




			}
		},
		error:function(err){
			alert("获取列表失败");
		}
	})

	//绑卡
	$(".bind i").bind("click",function(){
		var bindInfo = {
			openId:userInfo.openId,
		}
		sessionStorage.setItem("bind",JSON.stringify(bindInfo));
		console.log(bindInfo);
		location.href = "./jsp/bindCard.jsp";
	})
	




	

	




})