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

function getPercent() {

    let result = fibos.getTableRowsSync(true, 'eosio.token', 'eosio', 'stats');
    console.log(result);
    let rows = result.rows;
    let price = 0;
    if (!!rows && rows instanceof Array) {
        rows.forEach((item, index) => {
            if (!!item && item.supply && item.supply.indexOf('FO') >= 0) {
                const {
                    connector_weight,
                    reserve_connector_balance,
                    connector_balance,
                    reserve_supply,
                    supply
                } = item;

                const supply_numStr = supply.split(' FO')[0]
                let supply_numPre = 0
                if (!!supply_numStr && supply_numStr.split('.').length >= 2) {
                    supply_numPre = supply_numStr.split('.')[1].length
                }
                const b_supply = new BigNumber(supply_numStr)
                const b_reserve_supply = new BigNumber(reserve_supply.split(' FO')[0])
                const b_cw = new BigNumber(connector_weight)
                const b_balances = new BigNumber(connector_balance.split(' EOS')[0]).plus(
                    new BigNumber(reserve_connector_balance.split(' EOS')[0])
                )

                price = (b_cw.times(b_reserve_supply.plus(b_supply))).div(b_balances)
                    .toFixed(supply_numPre, 8);
            }
        })
    }
    // console.log(result);
    return price;
}
console.log(getPercent());