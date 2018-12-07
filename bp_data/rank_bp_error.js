//bp 出块故障记录,捕获出块异常时间

const http=require("http");

let rank_bp_error=function(){
	var post=http.post("http://bp.fo/1.0/app/data/getmonitor",{
		json:{}
	}).json();

	let data=new Array();
	for(let i=0;i<post.length;i++){
		if (post[i].last_abnormal_time && post[i].last_abnormal_time >0){
			data.push(post[i]);
		}
	}

	return data;
}

console.log(rank_bp_error());

