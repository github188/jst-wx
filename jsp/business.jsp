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
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/business.css">
	<title>特约商户</title>
</head>
<body>
	<header>
		<div class="b_nav">
			<div class="searchBox">
				<input type="text"><i>取消</i>
			</div>
			<div class="b_addr">
				<div class="b_city">
					<span>深圳</span><i></i>
				</div>
			</div>
			<div class="b_class">
				<div class="b_classShow">
					<span>全部</span><i></i>
				</div>
			</div>
			<div class="b_search">
				<span>搜索</span><i></i>	
			</div>

		</div>
	</header>
	<section>
		<ul class="b_shopBox">
			<li class="b_shopList">
				<div class="b_shopImg">
					<img src="../images/food.jpg">
				</div>
				<div class="b_shopMes">
					<div class="b_shopName">
						<p>设计开发经理根据地哦世界观省纪念历史</p>
					</div>
					<div class="b_shopAddr">
						<i></i><span>生活方式立刻恢复快结束了看法离开谁告诉就</span>
					</div>
					<div class="b_shopTel">
						<i></i><a href="tel:13359845612">13359845612</a>
					</div>
				</div>
			</li>
		</ul>
	</section>
	<div class="b_cities">
		<ul  class="b_citiesList">
			<li>深圳</li>
			<li>广州</li>
			<li>北京</li>
			<li>上海</li>
			<li>其他</li>
		</ul>
	</div>
	<div class="b_classList">
		<ul id="b_cLists" class="b_cLists">
			<li>餐饮类</li>
			<li>零售类</li>
			<li>商超百货类</li>
			<li>汽车服务类</li>
			<li>医疗保健类</li>
			<li>健身美业类</li>
			<li>旅游相关类</li>
			<li>文化教育类</li>
			<li>其他</li>
			<li>全部</li>
		</ul>
	</div>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/zepto.min.js"></script>
	<script type="text/javascript" src="<%=request.getContextPath() %>/js/business"></script>
</body>
</html>