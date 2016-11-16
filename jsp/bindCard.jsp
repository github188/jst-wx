<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="utf-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %> 
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
    <script type="text/javascript">
    	(function () {
		    document.addEventListener('DOMContentLoaded', function () {
		        var html = document.documentElement;
		        var windowWidth = html.clientWidth;
		        html.style.fontSize = windowWidth / 6.4 + 'px';
		        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';    
		    }, false);
	    })();
    </script>
	<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no">
	<title>绑卡</title>
	<link rel="stylesheet" type="text/css" href="../css/2016css_v1.0/bindCard.css">
	<script type="text/javascript" src="../js/2016js_v1.0/fastclick.js"></script>
	<script type="text/javascript" src="../js/2016js_v1.0/zepto.min.js"></script>
</head>
<body>
	<header class="bindHead">
		<div class="tipsBox">
			<p></p>
		</div>
		<div class="iconBox">
			<p class="cardTitle">卡号</p>
			<i></i>
		</div>
	</header>
	<section class="inputBox">
		<div class="cardIdBox">
			<div class="cardId">
				<span>卡号</span><input type="tel" placeholder="请输入捷顺通卡号" maxlength="20"><i></i>
			</div>
			<p></p>	
		</div>
		<div class="cardPwd">
			<span>密码</span><input type="password" placeholder="请输入6位卡数字密码" maxlength="6">
		</div>
		<div class="forgetTips">
			<i></i><span>不知道卡密码？</span>
		</div>
	</section>
	<footer class="comfirmBtn">
		<button class="btn">确定</button>
	</footer>
	<div class="tipsBox">
		<div class="tipsTitle">
			<span>捷顺通卡卡密码</span><i></i>
		</div>
		<div class="tips1">
			<span>1.如未修改卡密码，请见卡身背面刮条，输入6位数字卡密码。</span>
		</div>
		<div class="tipsImg">
			<i></i>
		</div>
		<div class="tips2">
			<span>2.如已修改并忘记卡密码，<i>请点此找回密码。</i></span>
		</div>
	</div>
	<div class="alertBox">
		<div class="alertMes">
			<span>等待时间过长，请稍后重试</span>
		</div>
		<div class="operBtn">
			<div class="longtime">
				<span>确定</span>
			</div>
			<div class="pwdError">
				<span>重试</span><i>忘记密码</i>
			</div>
		</div>
	</div>
	<script type="text/javascript" src="../js/2016js_v1.0/bindCard.js"></script>
</body>
</html>