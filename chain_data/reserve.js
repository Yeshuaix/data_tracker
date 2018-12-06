const FIBOS = require("fibos.js");
const BigNumber = require('bignumber.js');
var ssl = require("ssl");
ssl.ca.loadRootCerts();

var fibos = FIBOS({
    chainId: "6aa7bd33b6b45192465afa3553dedb531acaaff8928cf64b70bd4c5e49b7ec6a",
    httpEndpoint: "http://api.fibos.me",
    privkey: "",
    logger: {
        log: null,
        error: null
    }
});

function reserve(){
	let result=fibos.getTableRowsSync(true,'eosio.token','eosio','stats');
	// console.log(result);
	console.log("准备金为:"+result.rows[0].connector_balance);
	// 获取其中EOS的准备金总额
}

reserve();
