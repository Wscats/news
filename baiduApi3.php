<?php
	header('Access-Control-Allow-Origin:*');
	if($_GET['channelId']){
		$_GET['channelId']?$_GET['channelId']:'';
	}else{
		$_GET['channelId'] = '5572a109b3cdc86cf39001db';
	}
    $ch = curl_init();
    $url = 'http://apis.baidu.com/showapi_open_bus/channel_news/search_news?channelId='.$_GET['channelId'].'&channelName=%E5%9B%BD%E5%86%85%E6%9C%80%E6%96%B0&title=%E4%B8%8A%E5%B8%82&page=1&needContent=0&needHtml=0';
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    $header = array(
        'apikey: 6543ddbd76c6cdf5d9b907d66656a22f',
    );
    // 添加apikey到header
    curl_setopt($ch, CURLOPT_HTTPHEADER  , $header);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    // 执行HTTP请求
    curl_setopt($ch , CURLOPT_URL , $url);
    $res = curl_exec($ch);

    //var_dump(json_decode($res));
	echo $res;
?>