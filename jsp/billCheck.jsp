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
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/billCheck.css">
	<title>账单查询</title>
</head>
<body>
	<header>
		<div class="cardBox">
			<i class="leftBtn"></i>
			<div class="box">
				<ul class="cardList clear">
					<li class="list"><i></i><span>卡号***1234</span></li>
					<li class="list"><i></i><span>卡号***1234</span></li>
					<li class="list"><i></i><span>卡号***1234</span></li>
				</ul>
			</div>
			
			<i class="rightBtn"></i>
		</div>
	</header>
	<section>
		<div class="billBox">
			<div class="border"></div>
			<ul class="billList">
				<li class="bill">
					<div class="billTitle">
						<div class="title">
							<span>的解放军功夫</span>
						</div>
						<div class="sum recharge">
							<span>123</span>
						</div>
					</div>
					<div class="billDate">
						<span class="date">fdd</span><i class="result">fgfg</i>
					</div>
				</li>
			</ul>
		</div>
	</section>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/billCheck.js"></script>
</body>
</html>