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
	    var openId='${openId}';
    </script>
	<meta name="viewport" content="width=device-width, initial-scale=0.5, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no">
	<title>我的卡</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/myCard.css">
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/fastclick.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/main.js"></script>
</head>
<body>
	<header class="cardBox">
		<ul class="listBox clear">

		</ul>
	</header>
	<div class="nav">
		<ul class="navlist">

		</ul>
	</div>
	<div class="balanceBox">
		<div class="acc_balance">
			<i>账户余额</i>
			<span>1234</span>
		</div>
		<div class="ele_balance">
			<i>电子钱包</i>
			<span>1234</span>
		</div>
		<div class="recharge_btn">
			<button class="btn">充值</button>
		</div>
	</div>

	<div class="operBox">
		<ul class="operation">
			<li class="unbind">解绑<i></i></li>
			<li class="loss">挂失<i></i></li>
			<li class="reset">重置密码<i></i></li>
		</ul>
	</div>
	<div class="gsTips">
		<p class="tips"><i></i>如需解挂此卡，请到<span>捷顺通服务网点</span>进行办理</p>
	</div>
	
	<div class="alertBox">
		<div class="alert">
			<div class="alertTips">
				<p>解绑后无法继续享受线上充值、线上快速查询等便捷功能。您确认要继续吗？</p>
			</div>
			<div class="alertBtn">
				<span>确定</span><i>取消</i>
			</div>
		</div>
	</div>

	<div class="bindBox">
		<div class="bind">
			<i></i>
		</div>
	</div>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/myCard.js"></script>
</body>
</html>