var FIBOS = require('fibos.js');

var fibos = FIBOS({
	chainId: "68cee14f598d88d340b50940b6ddfba28c444b46cd5f33201ace82c78896793a",
	keyProvider: "",
	httpEndpoint: "http://testnet.fibos.fo",
	logger: {
		log: null,
		error: null
	}
});

function getInformation() { //获取当前块高度
	let result=fibos.getInfoSync();
	// console.log(result);
	let head_block_num=result.head_block_num;
	console.log("区块数:"+head_block_num);
	return head_block_num;
}
	
getInformation();

