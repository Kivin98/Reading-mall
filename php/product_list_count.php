<?php
require_once 'init.php';
$sql ="select count(pid) as pid from product";
$result=mysqli_query($conn,$sql);
$output=mysqli_fetch_assoc($result);
echo json_encode($output);
 ?>
