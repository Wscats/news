<?php
// 指定允许其他域名访问
header('Access-Control-Allow-Origin:*');
    $ch = curl_init();
    $url = 'http://apis.baidu.com/songshuxiansheng/news/news';
    $header = array(
        'apikey: 0aea38d1a7c4443f2f00adc86c4c3e72',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    //var_dump(json_decode($res));
	echo $res
?>