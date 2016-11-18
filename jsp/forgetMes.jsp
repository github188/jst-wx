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
	<title>忘记卡密码</title>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/forgetMes.css">
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/main.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/forgetMes.js"></script>
</head>
<body>
	<header class="headBox">
		<div class="headIcon">
			
		</div>
		<p class="headTips">请填写您购卡时填写的相关信息，确认身份信息加密处理，仅用于卡信息校验</p>
	</header>
	<section class="messageBox">
		<div class="ueserName">
			<span>持卡人姓名</span><input type="text" placeholder="请填写您的姓名" maxlength="15">
		</div>
		<div class="creClass">
			<span>证件类型</span><i>身份证</i>
		</div>
		<div class="cardNum">
			<span>证件号</span>
			<div class="inpBox">
				<input id="cardId" type="tel" placeholder="请填写您的证件号" maxlength="18">
				<p class="inpTips"></p>
			</div>
		</div>
		<div class="password">
			<span>证件号</span><input type="tel" placeholder="请输入卡密码">
		</div>
		<div class="warmthTips">
			<i></i><span>不知道卡密码？</span>
		</div>
	</section>
	<div class="btnBox">
		<button class="nextBtn">下一步</button>
	</div>
	<div class="classListBox">
		<ul class="classList">
			<li class="list">身份证</li>
			<li class="list">驾驶证</li>
			<li class="list">士兵证</li>
			<li class="list">武装警身份证</li>
			<li class="list">港澳台通行证</li>	
			<li class="list">台胞证</li>
			<li class="list">护照</li>
			<li class="list">军残证</li>
		</ul>
	</div>
	<div class="alertBox">
		<div class="alertMes">
			<span>等待时间过长，请稍后重试</span>
		</div>
		<div class="operBtn">
			<div class="longtime btnOn">
				<span>确定</span>
			</div>
			<div class="pwdError">
				<span>重试</span><i>忘记密码</i>
			</div>
		</div>
	</div>
</body>
</html>