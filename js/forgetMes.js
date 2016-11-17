$(function(){
	var checked = {ueserName:false,cardNum:false};//检测用户名、证件号是否为空
	//选择卡类型
	$(".creClass i").bind("click",function(){
		$(".classListBox").addClass("classListBoxOn");
	})
	//选卡
	var type = "00";
	$(".classList").on("click",".list",function(e){
		e.stopPropagation();    
		$(".classListBox").removeClass("classListBoxOn");
		$(".creClass i").text($(this).text());
		if($(this).index() == 0){
			type = "00";
		}else if($(this).index() == 1){
			type = 1;
		}else if($(this).index() == 6){
			type = 6;
		}else{
			type = 4;
		}

	})

	$(".classListBox").bind("click",function(){
		$(".classListBox").removeClass("classListBoxOn");
	})

	//姓名输入是否为空
	$(".ueserName input").bind("keyup",function(){
		if($(this).val().length == 0){
			checked.ueserName = false;
		}else{
			checked.ueserName = true;
		}
		if(checked.ueserName && checked.cardNum){
			$(".nextBtn").addClass("nextBtnOn");
			$(".nextBtn").text("提交");
		}else{
			$(".nextBtn").removeClass("nextBtnOn");
			$(".nextBtn").text("下一步");
		}
	})

	//证件号输入是否为空
	$(".cardNum input").bind("keyup",function(){
		if($(this).val().length == 0){
			checked.cardNum = false;
		}else{
			checked.cardNum = true;
		}
		if(checked.ueserName && checked.cardNum){
			$(".nextBtn").addClass("nextBtnOn");
			$(".nextBtn").text("提交");
		}else{
			$(".nextBtn").removeClass("nextBtnOn");
			$(".nextBtn").removeClass("下一步");
		}
		console.log($(this).val().length)
	})

	//清空错误提示
	$(".cardNum input").focus(function(event) {
		$(".inpTips").text("")
	});

	//提交按钮事件
	$(".btnBox").bind("click",".nextBtnOn",function(){
		if(type == "00"){//身份证号校验
			IdentityCodeValid($("#cardId").val());
			$(".alertBox").addClass("alertBoxOn")
		}else if(type == "01"){

		}else if(type == "02"){

		}else{

		}
		console.log("提交")
		
	})

	$(".longtime span").bind("click",function(){
		$(".alertBox").removeClass("alertBoxOn")
	})









})