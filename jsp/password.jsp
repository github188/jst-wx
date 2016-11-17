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
	<title>密码操作</title>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/password.css">
</head>
<body>
	<header>
		<div class="tipsBox">
			<p class="cardTips"></p>
			<p class="pTips"></p>
			<p class="reTips"></p>
		</div>
	</header>
	<section>
		<div class="pwdBox">
			<div class="listBox clear">
				<i class="box"></i>
				<i class="box"></i>
				<i class="box"></i>
				<i class="box"></i>
				<i class="box"></i>
				<i class="box"></i>
			</div>
		</div>
		<div class="pwdTips">
			<span>两次密码输入不一致</span>
		</div>
		<div class="unknowTips">
			<span>不知道卡密码？</span>
		</div>
	</section>
	<div class="keyBox">
		<div class="key">
			<i>1</i>
		</div>
		<div class="key">
			<i>2</i>
		</div>
		<div class="key">
			<i>3</i>
		</div>
		<div class="key">
			<i>4</i>
		</div>
		<div class="key">
			<i>5</i>
		</div>
		<div class="key">
			<i>6</i>
		</div>
		<div class="key">
			<i>7</i>
		</div>
		<div class="key">
			<i>8</i>
		</div>
		<div class="key">
			<i>9</i>
		</div>
		<div class="key">
			<i></i>
		</div>
		<div class="key">
			<i>0</i>
		</div>
		<div class="key">
			<i></i>
		</div>			
	</div>
	<div class="pwdBtn">
		<button class="btn">确定</button>
	</div>
	<div class="toast">
		
	</div>
	<div class="rechargeTips">
		<i></i><span>不知道卡密码？</span>
	</div>
	<div class="alertBox">
		<div class="alertMes">
			<span>卡密码不正确，输入错误次数过多已被锁定，
可点击忘记密码进行找回，或10分钟后重试！</span>
		</div>
		<div class="operBtn">
			<div class="longtime">
				<span>确定</span>
			</div>
			<div class="pwdError btnOn">
				<span>重试</span><i>忘记密码</i>
			</div>
		</div>
	</div>
	<div class="pwdTipsBox">
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
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/password.js"></script>

</body>
</html>