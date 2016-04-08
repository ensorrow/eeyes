//弹幕运行原理：设置总运行时间（意味着服务器只能存取一段时间内的弹幕），发送当前时间弹幕
$(function(){
	var danmuss={ 
		1:[ { "text":"hahahaha" , "color":"red" ,"size":"0","position":"0"}, { "text":"233333" , "color":"" ,"size":"0","position":"1"} ],
		3:[ { "text":"poi" , "color":"" ,"size":"1","position":"0"}, { "text":"2333" , "color":"" ,"size":"0","position":"0"} ],
		6:[ { "text":"XXX真好" , "color":"" ,"size":"0","position":"2"}, ]
		//可以设置成加载完成后ajax加载服务器弹幕数据 
	};

//  插件中定义了弹幕对象，意指具体某一条弹幕及起信息，对象名字叫”danmu”,该对象有如下属性：
// text——弹幕文本内容。 
// color——弹幕颜色。 position——弹幕位置 “0”为滚动 “1” 为顶部 “2”为底部 
// size——弹幕文字大小。 “0”为小字 ”1”为大字
// time——弹幕所出现的时间。 单位为”分秒“（及1/10秒，100毫秒）
// isnew——当出现该属性时（属性值科委任意），会认为这是用户新发的弹幕，从而弹幕在显示的时候会有边框。
	$('#danmuWra').danmu({
		left: 0, //区域的左边边界位置，相对于父div 
		top: 0 , //区域的上边边界位置，相对于父div 
		height: $('#danmu section').height(), //区域的高度
		width: $('#danmu section').width(), //区域的宽度 
		zindex :100, //div的css样式zindex
		speed:8000, //弹幕速度，飞过区域的毫秒数 
		sumtime:10000 , //弹幕运行总时间
		danmuss:danmuss, //danmuss对象，运行时的弹幕内容 
		default_font_color:"#9d9f9f", //弹幕默认字体颜色 
		font_size_small:16, //小号弹幕的字体大小,注意此属性值只能是整数
		font_size_big:20, //大号弹幕的字体大小 
		opacity:"1", //弹幕默认透明度 
		top_botton_danmu_time:4000 //顶端底端弹幕持续时间 } );
	});	
	$('#danmuWra').danmu('danmu_start');

	$('#dmSend button').click(function() {
		//本地显示弹幕
		var text = $('#danmu_text').val();
		var color = '';
		var size = 0;
		var position = 0;
		var time = $('#danmuWra').data("nowtime")+5; 
		var text_obj = '{ "text":"' + text + '","color":"' + color + '","size":"' + size + '","time":"' + time + '","position":"' + position + '","isnew":""}';
		
		var new_obj = eval('(' + text_obj + ')');		
		$('#danmuWra').danmu("add_danmu", new_obj);    //向插件中添加该danmu对象

		// 服务器上传弹幕,注意去掉了isnew属性
		// if(url){
		// 	$.post(url,{
		// 		danmu: text_obj
		// 	})
		// }

		//清空输入框
		$('#danmu_text').val('');
	})
});