//type指商品的类型 作为一个参数传递
var type=0;
var pageNum=1;
//显示分类
loadtype();
//showCount();
showProduct();
loadPages();
//为所有的元素绑定事件
//php：接受请求参数，判断用户点击的是哪一个分类商品，返回相应的数据
function loadtype(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4) {
            var res =xhr.responseText;
            res=JSON.parse(res);
            console.log(res);
            var product_type=document.getElementById("product_type");

            /*var str="<span>商品分类：</span><a href='' class='active'>不限</a>";
            for (var i = 0; i < res.length; i++) {
                str+='<a href="">'+res[i]['tname']+'</a>';
                product_type.innerHTML=str;
            }*/
            //为分类绑定事件

                //创建一个文档节点
                var frag =document.createDocumentFragment();
                var product_type=document.getElementById("product_type");
                for(var i = 0; i < res.length; i++){
                    var a =document.createElement("a");//创建一个a标签
                    a.innerHTML=res[i]['tname'];
                    a.href="#"+res[i]['tid'];
                    frag.appendChild(a);
                }
                product_type.appendChild(frag);//将a标签显示到页面上
                //为分类绑定事件
                var as =product_type.getElementsByTagName("a");
                for (var i = 0; i < as.length; i++) {
                    as[i].onclick=function (e){
                        e.preventDefault();//取消默认行为
                        for (var j = 0; j < as.length; j++) {
                            as[j].className="";
                        }
                        this.className="active";
                        type=this.href.substr(this.href.lastIndexOf("#")+1);
                        //console.log(type);
                        showProduct();
                    }
                }
        }
    }
    xhr.open('GET','php/product_list.php',true);
    xhr.send(null);
}
//显示书本总数
/*function showCount(){
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState == 4) {
            var res = xhr.responseText;
            res=JSON.parse(res);
            console.log(res);
            var product_list_head= document.getElementById("product_list_head");
            product_list_head.innerHTML="<p>共找到 <strong>"+res['pid']+"</strong> 件匹配商品</p>"
        }
    }
    xhr.open('GTE','php/product_list_count.php',true);
    xhr.send(null);
}*/
//显示目录
function showProduct(){
    var xhr =new XMLHttpRequest();
    xhr.onreadystatechange =function (){
        if (xhr.readyState==4) {
            var res =xhr.responseText;
            res=JSON.parse(res);
            console.log(res);
            var product=document.getElementById("product");
            var str="";
            for (var i = 0; i < res.length; i++) {
                str+='<li>'
                    +'<a href="product_details.html?pid='+res[i]['pid']+'" class="a_img"><img src="'+res[i]['pic']+'" alt=""/></a>'
                    +'<a href="product_details.html?pid='+res[i]['pid']+'" class="a_text">'+res[i]['title']+'</a>'
                    +'<p>人民邮电出版社</p>'
                    +'<strong>¥ '+res[i]['price']+'</strong>'
                    +'</li>';
                product.innerHTML=str;
            }
        }
    }
    xhr.open('GET','php/product_list_mulu.php?type='+type+'&pageNum='+pageNum,true);
    xhr.send(null);
}
//加载分页函数
function loadPages(){
    var xhr =new XMLHttpRequest();
    xhr.onreadystatechange =function (){
        if (xhr.readyState==4) {
            var res =xhr.responseText;
            res=JSON.parse(res);
            console.log(res);


            var product_count=document.getElementById("product_count");
            product_count.innerHTML=res.totalRecord;
            var pagesCount=res['pageCount'];
            console.log(pagesCount);

            var pages=document.getElementById("pages");
            var pagesHTML='<a href="">上一页</a>';

            for (var i = 1; i <=pagesCount; i++) {
                if (pagesCount==1) {
                    pagesHTML+='<a href=""class="cur">'+i+'</a>';
                }else{
                    pagesHTML+='<a href="">'+i+'</a>';
                }
            }
            pagesHTML+='<a href="">下一页</a>';
            pages.innerHTML=pagesHTML;

            //点击分页码，切换对应的商品
            var as = pages.getElementsByTagName("a");
            for (var i = 0; i < as.length; i++) {
                as[i].onclick=function(e){
                    e.preventDefault();//取消默认行为
                    var now=this.innerHTML;
                    console.log(now);
                    if (now=="上一页") {
                        if (pageNum==1) {
                            return;
                        }
                        pageNum--;
                    }else if (now=="下一页") {
                        if (pageNum==pagesCount) {
                            return;
                        }
                        pageNum++;
                    }else{
                        pageNum=now;
                    }
                    showProduct();
                }
            }
        }
    }
    xhr.open('GET','php/product_pages.php?type='+type,true);
    xhr.send(null);

}
