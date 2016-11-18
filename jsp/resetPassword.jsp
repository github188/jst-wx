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
	<title>重置密码</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/2016css_v1.0/resetPassword.css">
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/2016js_v1.0/zepto.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/2016js_v1.0/resetPassword.js"></script>
</head>
<body>
	<header class="titleBox">
		<h2>是否记得原密码？</h2>
	</header>
	<section class="resetBox">
		<div class="remember">
			<div class="reIcon">
				<i></i>
			</div>
			<span>记得！</span>
		</div>
		<div class="forget">
			<div class="forgetIcon">
				<i></i>
			</div>
			<span>忘了</span>
		</div>
	</section>
</body>
</html>