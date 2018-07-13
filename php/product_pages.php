<?php
/*
    返回页码数
    请求参数
    type-商品类型
    返回数据
    总记录数
    总页码数
*/
    require_once 'init.php';
    $type=$_REQUEST['type'] or $type=0;
    $pageSize=4;
    if ($type==0) {
        $sql="select * from product";
    }else {
        $sql="select * from product where typeid=$type";
    }
    //$sql="select * from product";
    $result=mysqli_query($conn,$sql);
    $totalRecord=mysqli_num_rows($result);
    $pageCount=ceil($totalRecord/$pageSize);
    $output['totalRecord']=$totalRecord;
    $output['pageCount']=$pageCount;
    echo json_encode($output);
?>
