$(function(){
			
	$.ajax({
		url:"/app/rest/getMemberInfo",
		type:"GET",
		dataType:"json",
		success:function(data){
			var listHtml = "";
			for(var i=0;i<data.shopList.length;i++){
				listHtml += '<li class="listItem">'+
								'<div class="listTitle">'+
									'<h2>'+data.shopList[i].shopName+'</h2>'+
								'</div>'+
								'<div class="address clear">'+
									'<i></i><span>'+data.shopList[i].shopAddr+'</span><b></b>'+
								'</div>'+
								'<div class="telephone">'+
									'<i></i><a href="tel:'+data.shopList[i].shopTel+'">'+data.shopList[i].shopTel+'</a>'+
								'</div>'+
							'</li>'
			}
			$(".lists").html(listHtml);

			$(".listTitle h2").bind("click",function(){
				location.href = "https://3gimg.qq.com/lightmap/components/locationCluster/index.html?type=1&keyword=深圳市福田区龙尾路10号&region=深圳&key=WXHBZ-JB3AU-EEEVP-B2EWG-HSKJJ-WIFKP&referer=myapp&ch=uri-api&ADTAG=uri-api.tengxun";
			})

		},
		error:function(error){

		}
	})
})