<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<script type="text/javascript">
		(function () {//
		    document.addEventListener('DOMContentLoaded', function () {
		        var html = document.documentElement;
		        var windowWidth = html.clientWidth;
		        html.style.fontSize = windowWidth / 6.4 + 'px';
		        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';    
		    }, false);
	    })();
	</script>
	<meta name="viewport" content="minimum-scale=0.5, maximum-scale=0.5, user-scalable=no">
	<title>绑卡成功</title>
	<link rel="stylesheet" type="text/css" href="../css/bindSuccess.css">
	<script type="text/javascript" src="../js/2016js_v1.0/fastclick.js"></script>
	<script type="text/javascript" src="../js/2016js_v1.0/zepto.min.js"></script>
</head>
<body>
	<section class="bigBox">
		<div class="iconBox">
			<i></i>
		</div>
		<div class="result">
			<span>绑定成功!</span>
		</div>
		<div class="tips">
			<span>为保障安全，如您尚未修改卡密码，请立即修改卡密码</span>
		</div>
		<div class="btn">
			<button class="button">修改密码</button>
		</div>
	</section>

	<script type="text/javascript">
		Zepto(function($){
			var userInfo = JSON.parse(sessionStorage.getItem("memory"))
			//解决点透问题
			FastClick.attach(document.body);
			$(".btn button").on("click",function(){
				memoryInfo = {
					openId:userInfo.openId,
					cardNo:cardId,
					accounttype:userInfo.accounttype,
					type:"reset"
				};
				sessionStorage.setItem("memory",JSON.stringify(memoryInfo))
				location.href = "./jsp/password.jsp?openId="+userInfo.openId;
			})

		})




	</script>
</body>
</html>