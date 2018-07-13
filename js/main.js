
/*
   1、创建XHR对象
   2、设置状态信息改变后的处理函数
   3、建立请求连接
   4.发送请求
*/
// console.log(sessionStorage.uid);
loadHeader();
loadFooter();
//加载header.html头文件
    function loadHeader(){
    //创建XHR对象
    var xhr_header=new XMLHttpRequest();
    //设置状态信息改变后的处理函数
    xhr_header.onreadystatechange=function(){
        if (xhr_header.readyState == 4) {//正常接收到了响应
            var res=xhr_header.responseText;
            var header_box=document.getElementById("header_box");
            header_box.innerHTML=res;
            //判断用户是否登录，如果已登录，显示个人中心按钮及下拉菜单
            var nav_user=document.getElementById("nav_user");
            if (sessionStorage.uid) {
                nav_user.innerHTML='<a href="user/user.html"><em class="icon-user"></em>个人中心<em class="icon-triangle"></em></a>'+
                '<div class="user_dropdown">'
                    +'<p><span>'+sessionStorage.uname+'</span>，您好~</p>'
                    +'<div class="userlink_1 clearfloat">'
                    +'<a href="user/user.html">我的订单</a>'
                    +'<a href="" id="user_quit">退出登录</a>'
                    +'</div>'
                +'</div>';
                //退出
                var user_quit=document.getElementById("user_quit");
                user_quit.onclick =function(){
                    sessionStorage.clear();//清除sessionStorage
                    }
                }


        }
    }
    // 建立请求连接
    xhr_header.open('GET','header.html?12',true);
    //发送请求
    xhr_header.send(null);
}
//加载footer.html尾文件
    function loadFooter(){
        //创建xhr对象
        var xhr_footer=new XMLHttpRequest();
        //设置状态信息改变后的处理函数
        xhr_footer.onreadystatechange=function(){
            if (xhr_footer.readyState == 4) {
                var res =xhr_footer.responseText;
                var footer_box= document.getElementById("footer_box");
                footer_box.innerHTML=res;
            }
        }
        //建立请求连接
        xhr_footer.open('GET','footer.html',true);
        //发送请求
        xhr_footer.send(null);
    }
