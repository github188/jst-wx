//身份证校验
function IdentityCodeValid(code){ 
  var city={11:"北京",12:"天津",13:"河北",14:"山西",15:"内蒙古",21:"辽宁",22:"吉林",23:"黑龙江 ",31:"上海",32:"江苏",33:"浙江",34:"安徽",35:"福建",36:"江西",37:"山东",41:"河南",42:"湖北 ",43:"湖南",44:"广东",45:"广西",46:"海南",50:"重庆",51:"四川",52:"贵州",53:"云南",54:"西藏 ",61:"陕西",62:"甘肃",63:"青海",64:"宁夏",65:"新疆",71:"台湾",81:"香港",82:"澳门",91:"国外 "};
  var factor = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2 ]; //加权因子
  var parity = [ 1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2 ];  //校验位
  var pass= true;
  if(code.length == 15){
     code = code.substring(0,6) + "19" + code.substring(6,15);
     var ocode = code.split('');
     var osum = 0;
     for (var i = 0; i < 17; i++){
        osum += ocode[i] * factor[i];
      }
     code = code + (parity[osum % 11]).toString();
  }
  if(!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)){
     $(".inpTips").text("您输入的证件号格式不正确");
    pass = false; // 身份证号格式错误
   }else if(!city[code.substr(0,2)]){
       $(".inpTips").text("您输入的证件号地址编码不正确");
      pass = false; // 地址编码错误
     }else{
    //18位身份证需要验证最后一位校验位
    if(code.length == 18){
      code = code.split('');
      var sum = 0;
      for (var i = 0; i < 17; i++){
        sum += code[i] * factor[i];
      }
      if(parity[sum % 11] != code[17]){
        $(".inpTips p").text("您输入的证件号不正确");
        pass =false; // 校验位错误
      }else{
        $(".inpTips p").text("");
      }
    }
  }
  return pass;
}

//密码校验
function CheckedPwd(fun1,fun2){
  var keyVal = "";//用于记录前6点击的数字
  var count = 0;//用于记录小黑点显示
    //键盘事件
    $(".keyBox").bind("click",".key",function(){
      if($(this).index() == 9){
        keyVal = keyVal;
        console.log(keyVal)
      }else if($(this).index() == 11){
        count--;
        if(count < 0){
          count = 0;
        }
        $(".btn").removeClass("btnOn");
        //小黑点
        $(".box").eq(count).removeClass("keyOn");

        if(keyVal.length == 0){
          keyVal = "";
        }else{
          keyVal = keyVal.substring(0,keyVal.length-1);
        }
        //console.log(keyVal)
      }else{
        if(keyVal.length >= 6){
          keyVal = $(this).find("i").text();
          for(var a=0;a<6;a++){
            $(".box").eq(a).removeClass("keyOn");
          }
          count = 0;
          $(".box").eq(count).addClass("keyOn");
        }else{
          keyVal = keyVal.concat($(this).find("i").text());
          //小黑点
          $(".box").eq(count).addClass("keyOn");
        }

        count++;
        if(count > 6 ){
          count = 0; 
        }
        
        //确定按钮状态事件
        if(keyVal.length == 6){
          //$(".btn").addClass("btnOn");
          //pwd = keyVal;
          fun1(keyVal);

        }else{
          //$(".btn").removeClass("btnOn");
          fun2();
        }
        
        //console.log(keyVal)
      }
      
    })

}
