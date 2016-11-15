$(function(){

	//获取店铺列表
	shopList();
	function shopList(){
		$.ajax({
			url:"/app/rest/getAccountInfo",
			type:"GET",
			dataType:"json",
			success:function(data){
				var html = "";
				for(var i = 0;i<data.shopList.length;i++){
					html += "<li class='b_shopList'>"+
								"<div class='b_shopImg'>"+
									"<img src='"+data.shopList[i].shopImg+"'/>"+
								"</div>"+
								'<div class="b_shopMes">'+
									'<div class="b_shopName">'+
										'<p>'+data.shopList[i].shopName+'</p>'+
									'</div>'+
									'<div class="b_shopAddr">'+
										'<i></i><span>'+data.shopList[i].shopAddr+'</span>'+
									'</div>'+
									'<div class="b_shopTel">'+
										'<i></i><a href="tel:'+data.shopList[i].shopTel+'">'+data.shopList[i].shopTel+'</a>'+
									'</div>'+
								'</div>'+
							"</li>"
				}
				$(".b_shopBox").html(html);

				//跳转到地图页
				$(".b_shopAddr").bind("click",function(){
					console.log($(this).find("span").text());
					location.href = "https://3gimg.qq.com/lightmap/components/locationCluster/index.html?type=1&keyword=深圳市福田区龙尾路10号&region=深圳&key=WXHBZ-JB3AU-EEEVP-B2EWG-HSKJJ-WIFKP&referer=myapp&ch=uri-api&ADTAG=uri-api.tengxun"
				})
			},
			error:function(error){

			}
		})
	}

	//弹出城市列表
	$(".b_city").on("click",function(){
		$(".b_cities").addClass("b_cListsOn");
		$(".b_classList").removeClass("b_classListOn");
		$(".b_city > i").css("transform","rotate(180deg)");
	})
	//选择城市
	$(".b_citiesList").on("click","li",function(e){
		e.stopPropagation();
		$(".b_city > span").text($(this).text());
		$(".b_city > i").css("transform","rotate(0deg)");
		$(".b_cities").removeClass("b_cListsOn")
	})
	//隐藏城市列表
	$(".b_cities").bind("click",function(){
		$(".b_cities").removeClass("b_cListsOn");
		$(".b_city > i").css("transform","rotate(0deg)");
	})

	//弹出类别列表
	$(".b_classShow").on("click",function(){
		$(".b_classList").addClass("b_classListOn");
		$(".b_cities").removeClass("b_cListsOn");
		$(".b_classShow > i").css("transform","rotate(180deg)");
	})
	//选择类别
	$(".b_cLists").on("click","li",function(e){
		e.stopPropagation();    
		$(".b_classShow > span").text($(this).text());
		$(".b_classShow > i").css("transform","rotate(0deg)");
		$(".b_classList").removeClass("b_classListOn");
	})
	//隐藏类别列表
	$(".b_classList").bind("click",function(){
		$(".b_classList").removeClass("b_classListOn");
		$(".b_classShow > i").css("transform","rotate(0deg)");
	})

	//显示搜索框事件
	$(".b_search").on("click",function(){
		$(".searchBox").addClass("searchBoxOn");
	})

	//取消搜索事件
	$(".searchBox").find("i").on("click",function(){
		//console.log("wewe");
		$(".searchBox").removeClass("searchBoxOn");
		shopList();
	})

	//搜索框键盘监听事件
	$(".searchBox").find("input").on("keyup",function(){

		$.ajax({
			url:"/app/rest/getAccountInfo",
			type:"POST",
			dataType:"json",
			data:{
				searchTxt:$(".searchBox input").val()
			},
			success:function(data){
				
				var html = "";
				var licount = 0;
				switch ($(".searchBox input").val().length){
					case 1:
						licount = 1;
					break;
					case 2:
						licount = 2;
					break;
					case 3:
						licount = 3;
					break;
					default:
						html = "<li class='unfind'><span>未找到匹配内容</span></li>";
					break;

				}
				for(var i = 0;i<licount;i++){
					html += "<li class='b_shopList'>"+
								"<div class='b_shopImg'>"+
									"<img src='"+data.shopList[i].shopImg+"'/>"+
								"</div>"+
								'<div class="b_shopMes">'+
									'<div class="b_shopName">'+
										'<p>'+data.shopList[i].shopName+'</p>'+
									'</div>'+
									'<div class="b_shopAddr">'+
										'<i></i><span>'+data.shopList[i].shopAddr+'</span>'+
									'</div>'+
									'<div class="b_shopTel">'+
										'<i></i><a href="tel:'+data.shopList[i].shopTel+'">'+data.shopList[i].shopTel+'</a>'+
									'</div>'+
								'</div>'+
							"</li>"
				}
				$(".b_shopBox").html(html);

			},
			error:function(error){

			}
		})

	})

			

})