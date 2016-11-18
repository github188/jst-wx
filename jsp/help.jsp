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
	<title>帮助中心</title>
	<link rel="stylesheet" type="text/css" href="<%=request.getContextPath() %>/css/help.css">
</head>
<body>
	<section>
		<ul class="helpBox">
			<li class="helpList">
				<div class="question">
					<i>一、</i><span>使用捷顺通卡有哪些优惠？</span>
				</div>
				<div class="answerBox">
					<i></i>
					<div class="answer">
						<p>捷顺员工通过捷顺通微信公众号为捷顺通卡充值，即日起享4%的充值赠送。</p>
						<p>举个例子：充值了100元，实际到账就是104元了。</p>
						<p>充多送多，方便快捷。</p>
					</div>
				</div>
			</li>
			<li class="helpList">
				<div class="question">
					<i>二、</i><span>我的捷顺通卡遗失了怎么办？</span>
				</div>
				<div class="answerBox">
					<i></i>
					<div class="answer">
						<p>您的消费卡遗失时，可通过以下途径补办（不记名卡不能挂失）：</p>
						<p>1、拨打客服热线400-700-5305，由客服人员帮您挂失，然后再帮您补卡。为了您的用卡安全，首先我们的客服人员会与您核对资料：姓名、卡号、绑定手机号码、身份证号，再通过密码验证，（资料验证通过后）请您于周一至周五8：30~18：00之间携带身份证到捷顺通指定网点补卡。</p>
						<p>2、若您所提供的资料没有通过资料验证，请您通过您所在公司（如您是通过您所在的公司团购办理我们的卡）协助办理挂失和补卡，需要您所在的公司开具一份证明，证明此卡属于您所有并盖上公章，携带证明原件和身份证到捷顺通制定网点办理补卡。</p>
					</div>
				</div>
			</li>
		</ul>
	</section>
</body>
</html>
