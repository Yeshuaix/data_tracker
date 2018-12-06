
const db=require("db");
var mysql = db.open("mysql://root:rootroot@127.0.0.1:3306/fibos_chain");


function readData(){
	//当前所有注册用户数
	var result=mysql.execute("select count(0) user_num from actions");
	// console.log("注册用户数:"+result[0].user_num);
	register_num=result[0].user_num;

	//使用钱包注册的用户数
	var result2=mysql.execute("select count(id) fo_user_num from actions where authorization='fibosmaster1' ");
	// console.log("钱包每日增长数:"+result2[0].fo_user_num);
	fo_add=result2[0].fo_user_num;


	//进行action操作较多的用户
	var result5=mysql.execute("select `authorization`,count('authorization') as count_auth from actions group by authorization order by count_auth desc;");
	var max_action_auth=JSON.parse(result5[0].authorization)[0];
	var max_action_auth_num=result5[0].count_auth;

	// 通过跨链转账转入的用户
	var result4=mysql.execute("select data from actions where data like '%fiboscouncil%'");
	let n= mysql.execute("select count(id) as count from actions where data like '%to fiboscouncil%'");
	var transfer_to_ranking=new Array();
	for(let i=0;i<n[0].count;i++){
		try{
			transfer_to_ranking.push(JSON.parse(result4[i].data).quantity.quantity);
		}
		catch(e){
			console.log();
		}
	}

	

	// 兑换EOS排行榜,
	var exchange_ranking=new Array();
	var result6=mysql.execute("select data from actions where `action_name` like '%exchange%' ;");
	let r6_num=mysql.execute("select count(data) as num from actions where action_name like '%exchange%';");
	for(let i=0;i<r6_num[0].num;i++){
		exchange_ranking.push(JSON.parse(result6[i].data).quantity.quantity);
	}
	

	// FIBOS主网上合约部署的数量(action 种类的数量)
	var result9=mysql.execute("select count(distinct action_name) as action_num from actions");
	// console.log("action 的种类数量:"+result9[0].action_num);
	action_sort_num=result9[0].action_num;

	// FIBOS主网上合约部署的数量(action 各类数量的展示)
	var result90=mysql.execute("select action_name,count(action_name) as action_num from actions group by action_name order by action_num desc;");
	for(var i=0;i<result9[0].action_num;i++){	
		// console.log(result90[i].action_name+":"+result90[i].action_num);
		if (result90[i].action_name === "setcode"){
			setcode=result90[i].action_num;
		}	
	}


	data={

		exchange_ranking,      //兑换EOS排行榜
		transfer_to_ranking,   //兑出EOS排行榜
		max_action_auth,       //每月操作action最多的用户
		max_action_auth_num,   //操作次数
		register_num,          //注册用户数
		fo_add,                //使用钱包注册的用户
		action_sort_num,       //action种类数量
		setcode                //部署合约数量
	}

	return data;

}

console.log(readData());
