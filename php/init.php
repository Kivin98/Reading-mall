<?php
    //设置返回的数据的类型及字符编码
    header('Content-type:application/json;charset=UTF-8');
    //建立数据库连接
    $conn=mysqli_connect('localhost','root','123','ibook');
    //设置连接过程中字符的编码类型
    mysqli_set_charset($conn,'utf8');
    $output=[];
 ?>