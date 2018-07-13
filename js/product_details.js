var a=window.location.href;//获取地址栏的路径
var pid=a.substr(a.lastIndexOf("=")+1);
console.log(pid);
loadDetails();
function loadDetails(){
    var xhr=new XMLHttpRequest;
   xhr.onreadystatechange=function(){
       if (xhr.readyState==4) {
           var res=xhr.responseText;
           //res=JSON.parse(res);
           console.log(res);
           //var str='';
        //    str+='<div class="product_img">'+'
        //       <img id="peoduct_img" src="'+res['pic']+'" alt=""/>'+'
        //   </div>'+'
        //   <aside class="product_info" id="product_info">'+'
        //       <h2>JavaScript高级程序设计</h2>'+'
        //       <h3>前端开发经典图书 JavaScript技术名著 web前端开发国内js第一书 掌握JavaScript编程艺术</h3>'+'
        //       <ul>'+'
        //           <li>作者：[美] Nicholas C.Zakas 著；李松峰，曹力 译</li>'+'
        //           <li>出版社：人民邮电出版社</li>'+'
        //           <li>出版时间：2012年3月</li>'+'
        //       </ul>'+'
        //       <p>课程价格：<strong id="price">¥ 799.00</strong></p>'+'
        //       <div class="product_link">'+'
        //           <span href="" id="addCart"><em class="icon-cart"></em>加入购物车</span>'+'
        //       </div>';
          // var peoduct_content=document.getElementById("peoduct_info");
          // peoduct_content.innerHTML=""
       }

   }
   xhr.open('GET','php/product_details.php?pid='+pid,true);
   xhr.send(null);
}
