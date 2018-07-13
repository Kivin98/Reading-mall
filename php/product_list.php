<?php
    require_once 'init.php';
    $sql="select * from type";
    $result=mysqli_query($conn,$sql);
    $output=mysqli_fetch_all($result,MYSQLI_ASSOC);
    echo json_encode($output);
 ?>
