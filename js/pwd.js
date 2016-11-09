var keyVal = "";//用于记录前6点击的数字
var count = 0;//用于记录小黑点显示
$(".keyBox").on("touchstart",".key",function(){
  if($(this).index() == 11){
    $(".box").eq(keyVal.length-1).find("i").removeClass("keyOn");       
    keyVal = keyVal.substring(0,keyVal.length-1);
    count--;
    if(count < 0){
      count = 0;
    }                 
  }else if($(this).index()==9){
    keyVal = keyVal;
  }else{  
    keyVal += $(this).val();
    $(".box").eq(count).find("i").addClass("keyOn");
    if(keyVal.length > 6){
      keyVal = $(this).val();
      count = 0;                      
      
    }else if(keyVal.length==6){
      for(var i=0;i<6;i++){
        $(".box").eq(i).find("i").removeClass("keyOn");
      }
      count = -1;
      console.log("sdfsjk")
    }     
    count++;
    if(count > 6 ){
      count = 0; 
    } 
  }

  console.log(keyVal)
  console.log(count+"----"+keyVal.length)
})