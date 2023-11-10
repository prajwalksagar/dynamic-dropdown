<?php
$country = $_GET["country"];

if ($country === "usa") {
    $cities = array("New York", "Los Angeles", "Chicago");
} else if ($country === "canada") {
    $cities = array("Toronta", "Vancouver", "Montreal");
} 
elseif ($country === "india") {
    $cities = array("Delhi", "Mumbai","Hyderabad","Banglore");
}
else {
    $cities = array();
}
echo json_encode($cities);
?>