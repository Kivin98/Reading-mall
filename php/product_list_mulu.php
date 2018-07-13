<?php
    require_once 'init.php';
    $type=$_REQUEST['type'] or $type=0;
    $pageNum=$_REQUEST['pageNum'] or $pageNum=1;
    $pageSize=4;//每页显示的条数
    $statr=($pageNum-1)*$pageSize;//起始位置

    if ($type==0) {
        $sql="select * from product  order by pid desc limit $statr,$pageSize";
    }else {
        $sql="select * from product where typeid=$type order by pid desc limit $statr,$pageSize";
    };
    $result=mysqli_query($conn,$sql);
    $output=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($output);
 //select tname from type join product on type.tid=product.pid where type.tid=product.pid
 ?>
