//图片轮播
carousel();
function carousel() {
    var lis = document.querySelectorAll("#banner ul li"); //获取id为banner下的li标签
    var as = document.querySelectorAll("#indicator a"); //获取id为indicator下的a标签
    var banner = document.getElementById("banner"); //获取id为banner的元素
    var lis_len = lis.length; //获取li标签的长度
    var as_len = as.length;//获取a标签的长度
    //console.log(banner);
    var timer = setInterval(slideNext, 2000); //定时器
    var i = 0; //当前显示的图片的下标
    //图片轮播
    function slideNext() {
        if (i < lis_len - 1) { //判断当图片不是最后一张时，
            lis[i].className = "";
            as[i].className = "";
            i++;
            lis[i].className = "cur";
            as[i].className = "cur";
        } else { //如果是最后一张时
            lis[i].className = "";
            as[i].className = "";
            i = 0;
            lis[i].className = "cur";
            as[i].className = "cur";
        }
        //console.log(i);
    }
    function slidePrev() {
        if (i > 0) { //判断当图片不是最后一张时，
            lis[i].className = "";
            as[i].className = "";
            i--;
            lis[i].className = "cur";
            as[i].className = "cur";
        } else { //如果是最后一张时
            lis[i].className = "";
            as[i].className = "";
            i = lis_len-1;
            lis[i].className = "cur";
            as[i].className = "cur";
        }
        //console.log(i);
    }
    //鼠标移入
    banner.onmouseover = function() {
        //清除定时器
        clearInterval(timer);
    }
    //鼠标移出
    banner.onmouseout = function() {
        //启动定时器
        timer = setInterval(slidePrev, 2000);
    }
    //小圆点指示切换
    for (var j = 0; j < as_len; j++) {
        as[j].onmouseover = function() {//为每个a标签添加鼠标移入事件
            for (var y = 0; y < as_len; y++) {
                if (this == as[y]) {//循环遍历鼠标移入的是
                    if (i != y) {
                        
                        lis[i].className = "";
                        as[i].className = "";
                        i = y;
                        lis[i].className = "cur";
                        as[i].className = "cur";
                    }
                }
            }
        }
    }
    //左右小箭头
    //下一张
    var next=document.getElementById("next");
    next.onclick=slideNext;
    //上一张
    var prev=document.getElementById("prev");
    prev.onclick=slidePrev;
}
newProduct();
//加载商品列表
function newProduct(){
    //发送ajax请求，拿到后端响应的数据，进行处理
    //循环生成li，最后一次性加到ul中
    var xhr=new XMLHttpRequest();
    xhr.onreadystatechange=function(){
        if (xhr.readyState==4) {
            var res =xhr.responseText;
            var ress = JSON.parse(res);
            console.log(ress);
            var strHTML="";
            for (var i = 0; i < ress.length; i++) {
                strHTML+='<li>'
                +'<a href="" class="a_img"><img src="'+ress[i]['pic']+'" alt=""/></a>'
                +'<a href="" class="a_text">'+ress[i]['title']+'</a>'
                +'<strong>¥ '+ress[i]['price']+'</strong>'
                +'</li>';
                var ind_product=document.getElementById("ind_product");
                ind_product.innerHTML=strHTML;
            }
        }
    }
    xhr.open('GET','php/ind_product.php',true);
    xhr.send(null);
}
