var clientWidth = document.body.clientWidth;
var htmlobj = document.getElementsByTagName('html')[0];
htmlobj.style.fontSize = clientWidth / 10 +'px';

$youzikuapi.asyncLoad("http://api.youziku.com/webfont/FastJS/yzk_F860B893B4944F26", function () { 
  $youziku.load(".myfont", "45d2056d8da043fa9968453f19a41588", "minijianxiyuan"); 
  $youziku.draw();  
  })