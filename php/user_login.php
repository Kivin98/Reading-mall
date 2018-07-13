<?php
    require_once 'init.php';
    @$unameOrphone=$_REQUEST['nameOrphone'];//获取用户输入的用户名
    @$upwd=$_REQUEST['pwd'];//获取用户输入的密码
    $upwd=md5($upwd);//将用户输入的密码改成md5的形式
    $sql="select * from users where (uname='$unameOrphone' and upwd='$upwd') or (phone='$unameOrphone' and upwd='$upwd')";//构造SQL语句 查询
    $result=mysqli_query($conn,$sql);//执行SQL语句
    $row=mysqli_fetch_assoc($result);//获取结果集（单个）
    if ($row) {//如果
        $output['code']=1;
        $output['uid']=intval($row['uid']);//将数据库中的uid保存到output中
        $output['uname']=$row['uname'];
        $output['phone']=$row['phone'];
    }else {
        $output['code']=10;
    }
    echo json_encode($output);
 ?>
