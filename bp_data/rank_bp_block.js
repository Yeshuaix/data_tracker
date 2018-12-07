// 获取当前bp出块排行

const http=require("http");

let rank_bp_block=function(){
	// 实时出块信息
	var post=http.post("http://bp.fo/1.0/app/data/live",{
		json:{}
	}).json();

	let data= new Array();

	// 排行
	for(let i=0;i<post.length;i++ ){
		for(let j=0;j<post.length;j++){
			
			if(post[j].rank===i){
				
				data.push(post[j]);
			}	
		}
	}

	return data;
}

console.log(rank_bp_block());


