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
	<meta name="viewport" content="width=device-width, minimum-scale=0.5, maximum-scale=0.5, user-scalable=no">
	<title>充值网点</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/rechargePoint.css">
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
</head>
<body>
	<section class="listBox">
		<ul class="lists">
			<li class="listItem">
				<div class="listTitle">
					<h2>捷顺大厦</h2>
				</div>
				<div class="address clear">
					<i></i><span>双方经双方发顺丰方尽量多可怜的结果令对方国家领导过段时间式</span><b></b>
				</div>
				<div class="telephone">
					<i></i><a href="tel:13510794442">13510794442</a>
				</div>
			</li>
		</ul>
	</section>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/rechargePoint.js"></script>
</body>
</html>