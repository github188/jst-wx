// Zepto(function($){

		// 	//获取卡列表
		// 	$.ajax({
		// 		url:"/app/rest/userBindBkCards",
		// 		type:"GET",
		// 		dataType:"json",
		// 		success:function(data){
		// 			console.log(data.bindBkCardList);
		// 			$(".card span").text(data.bindBkCardList[0].cardLast);
		// 			//加载默认卡账单
		// 			var billHtml = "";
		// 			if(data.bindBkCardList[0].bill.length != 0){
		// 				for(var a = 0; a < data.bindBkCardList[0].bill.length;a++){
		// 					billHtml += '<li class="bill">'+
		// 									'<div class="billTitle">'+
		// 										'<div class="title">'+
		// 											'<span>'+data.bindBkCardList[0].bill[a].title+'</span>'+
		// 										'</div>'+
		// 										'<div class="sum">'+
		// 											'￥<span>'+data.bindBkCardList[0].bill[a].sum+'</span>'+
		// 										'</div>'+
		// 									'</div>'+
		// 									'<div class="cardLast">'+
		// 										'<span>卡尾号（<i>'+data.bindBkCardList[0].cardLast+'</i>）</span>'+
		// 									'</div>'+
		// 									'<div class="billDate">'+
		// 										'<span class="date">'+data.bindBkCardList[0].bill[a].date+'</span><i class="result">'+data.bindBkCardList[0].bill[a].state+'</i>'+
		// 									'</div>'+
		// 								'</li>'
		// 				}
		// 			}else{
		// 				billHtml = '<li class="none">'+
		// 								'<div class="none-icon">'+
		// 									'<i>icon</i>'+
		// 								'</div>'+
		// 								'<div class="none-tips">'+
		// 									'<span>您最近暂无消费记录</span>'+
		// 								'</div>'+
		// 								'<div class="none-link">'+
		// 									'<a href="business.html">随便看看</a>'+
		// 								'</div>'
		// 							'</li>'
		// 			}

		// 			$(".billList").html(billHtml);

		// 			var html = '';
		// 			var missClass = '';//记录挂失状态
		// 			var main = '';//记录是否主卡
		// 			var checked = '';//记录是否选中
		// 			for(var i = 0;i<data.bindBkCardList.length;i++){
		// 				//卡状态
		// 				if(data.bindBkCardList[i].miss == "01"){
		// 					missClass = "miss-on";
		// 				}else{
		// 					missClass = "miss-icon";
		// 				}
		// 				if(data.bindBkCardList[i].mainCard == "01"){
		// 					main = "mainCard";
		// 				}else{
		// 					main = "main-on";
		// 				}
		// 				if(data.bindBkCardList[i].checked == "01"){
		// 					checked = "checked";
		// 				}else{
		// 					checked = "checked-on";
		// 				}
		// 				html += "<li class='lis'><span>****** *********<i class='last4'>"+data.bindBkCardList[i].cardLast+"</i></span><i class='miss-icon "+missClass+"'></i><i class='mainCard "+main+"'>主卡</i><i class='checked "+checked+"'></i></li>"
		// 			}
		// 			$(".list").html(html)
		// 		},
		// 		error:function(error){
		// 				console.log("获取不到数据")
		// 		}
		// 	})

		// 	//显示卡列表		
		// 	$(".card").on("click",function(){
		// 		$(".list-icon").css("transform","rotate(45deg)")
		// 		$(".cardList dd").css("display","block");
		// 	})

		// 	$(".listBox").on("click",function(event) {
		// 		$(".listBox").css("display","none");
		// 	});

			

		// 	//选择卡
		// 	$(".mList").on("click",".lis",function(){
		// 		$(".cardList dd").css("display","none");
		// 		$(".list-icon").css("transform","rotate(-135deg)");
		// 		$(".card span").text($(this).find(".last4").text());

		// 		//切换卡时，获取该卡的账单
		// 		var cardId = $(this).index();
		// 		$.ajax({
		// 			url:"/app/rest/userBindBkCards",
		// 			type:"GET",
		// 			dataType:"json",
		// 			success:function(data){
		// 				var billHtml = "";
		// 				if(data.bindBkCardList[cardId].bill.length !=0){
		// 					for(var a = 0; a < data.bindBkCardList[cardId].bill.length;a++){
		// 						billHtml += '<li class="bill">'+
		// 										'<div class="billTitle">'+
		// 											'<div class="title">'+
		// 												'<span>'+data.bindBkCardList[cardId].bill[a].title+'</span>'+
		// 											'</div>'+
		// 											'<div class="sum">'+
		// 												'￥<span>'+data.bindBkCardList[cardId].bill[a].sum+'</span>'+
		// 											'</div>'+
		// 										'</div>'+
		// 										'<div class="cardLast">'+
		// 											'<span>卡尾号（<i>'+data.bindBkCardList[cardId].cardLast+'</i>）</span>'+
		// 										'</div>'+
		// 										'<div class="billDate">'+
		// 											'<span class="date">'+data.bindBkCardList[cardId].bill[a].date+'</span><i class="result">'+data.bindBkCardList[cardId].bill[a].state+'</i>'+
		// 										'</div>'+
		// 									'</li>'
		// 					}
		// 				}else{
		// 					billHtml = '<li class="none">'+
		// 								'<div class="none-icon">'+
		// 									'<i>icon</i>'+
		// 								'</div>'+
		// 								'<div class="none-tips">'+
		// 									'<span>您最近暂无消费记录</span>'+
		// 								'</div>'+
		// 								'<div class="none-link">'+
		// 									'<a href="business.html">随便看看</a>'+
		// 								'</div>'
		// 							'</li>'
		// 				}
		// 				$(".billList").html(billHtml);

		// 			},
		// 			error:function(error){
		// 				alert("系统未开启")
		// 			}
		// 		})
		// 	})


			
		



		// })