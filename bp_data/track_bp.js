
// 获取当前主网的Bp排行情况

const http=require("http");

let rank_bp=function(){

	var post=http.post("http://bp.fo/1.0/app/data/producers",{
		"json":{},
	}).json();

	return post;
}


console.log(rank_bp());


