<?php
    /*
        API(application programming interface)应用程序编程接口;
        返回商品表中的8条数据
    */
    require_once 'init.php';//引入init文件
    $count=8;
    $sql="select * from product order by pid desc limit $count";//按照降序的查询前8条数据源
    $result=mysqli_query($conn,$sql);//执行SQL语句
    // var_dump($result);
    $output=mysqli_fetch_all($result,MYSQLI_ASSOC);//遍历
    //var_dump($output);
    echo json_encode($output);

 ?>
