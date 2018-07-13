<?php
require_once 'init.php';
    $a=$_REQUEST['pid'];
     $sql="select * from product where pid=$a";
     $result=mysqli_query($conn,$sql);
     $output=mysqli_fetch_assoc($result);
     echo json_encode($output);

 ?>
