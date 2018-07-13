var inp_name =document.getElementById("uname");
var inp_upwd =document.getElementById("upwd");
var inp_but=document.getElementById("but");
inp_name.onblur=unameCheck;
inp_upwd.onblur=upwdCheck;
inp_but.onclick=doLogin;
var uname="";
var upwd="";
function unameCheck(){
    uname=inp_name.value;
    //console.log(uname);
    if (!uname) {
        inp_name.parentElement.previousElementSibling.querySelector(".tips").innerHTML="用户名不能为空";
        inp_name.parentElement.querySelector("i").style.display="block";
        return false;
    }else {
        inp_name.parentElement.previousElementSibling.querySelector(".tips").innerHTML="";
        inp_name.parentElement.querySelector("i").style.display="none";
        return true;
    }
}
function upwdCheck(){
    upwd=inp_upwd.value;
    if (!upwd) {
        inp_upwd.parentElement.previousElementSibling.querySelector(".tips").innerHTML="密码不能为空";
        inp_upwd.parentElement.querySelector("i").style.display="block";
        return false;
    }else{
        inp_upwd.parentElement.previousElementSibling.querySelector(".tips").innerHTML="";
        inp_upwd.parentElement.querySelector("i").style.display="none";
        return true;
    }
}
function doLogin(){
    var unameResult=unameCheck();
    var upwdResult=upwdCheck();
    if (unameResult && upwdResult) {
        var xhr=new XMLHttpRequest();
        xhr.onreadystatechange=function() {
            if (xhr.readyState == 4) {
                var res =xhr.responseText;
                res=JSON.parse(res);
                if (res['code']==1) {
                    sessionStorage.uid=res.uid;
                    sessionStorage.uname=res.uname;
                    sessionStorage.phone=res.phone;
                    history.go(-1);
                }else {
                    inp_name.parentElement.previousElementSibling.querySelector(".tips").innerHTML="用户名或密码错误";
                }
                console.log(res);
            }
        }
        //建立请求连接
        xhr.open('POST','php/user_login.php',true);
        //设置请求头
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
        //发送请求
        //console.log(uname);
        //console.log(upwd);
        xhr.send("nameOrphone="+uname+"&pwd="+upwd);
    }
}
//登录
/*function doLogin(){
  var unameResult=unameCheck();
  var upwdResult=upwdCheck();
  if(unameResult && upwdResult){//表单验证通过
    // 创建XHR对象
    var xhr_login = new XMLHttpRequest();
    // 设置状态信息改变后的处理函数
    xhr_login.onreadystatechange = function() {
        if (xhr_login.readyState == 4) {// 正常接收到响应了
            var res = xhr_login.responseText;
            res=JSON.parse(res);
            console.log(res);
            if(res.code==1){//登录成功
              history.go(-1);//返回登录前页面
            }else{//登录失败
              inp_uname.parentElement.previousElementSibling.querySelector(".tips").innerHTML="用户名或密码错误";
            }
        }
    };
    // 建立请求连接（并没有发送请求）
    xhr_login.open('POST', 'php/user_login.php', true);
    //设置请求头
    xhr_login.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    // 发送请求
    xhr_login.send("unameOrPhone="+uname+"&upwd="+upwd);
  }
}
*/
