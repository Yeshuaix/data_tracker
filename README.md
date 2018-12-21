# data_tracker
**获取运营数据:**
### 1.bp_data
**获取bp网站上的数据:**
* 通过命令 fibos rank_bp.js 获取当前bp排行情况;
* 通过命令 fibos rank_bp_blocks 获取当前出块排行;
* 通过命令 fibos rank_bp_error 出块故障记录,捕获出块异常时间.

### 2.chain_data
**获取链上数据:**
* 通过命令 fibos FOprice.js 获取FO的当前流通价格;
* 通过命令 fibos getInfo.js 获取当前区块高度;
* 通过命令 fibos reserve.js 获取当前的准备金.

### 3.dapp_data
**dapp排行榜:**
* 通过命令 fibos rank_dapp.js 获取dapp上线排行

### 4.mysql_data
> 框架 fibos_tracker 会对链上的数据进行自动抓取,在 fibos_tracker 的ORM会自动在fibos_chain数据库中自动创建数据表,并向表中自动写入数据
**通过命令 fibos readData.js 来读取mysql表中数据:**
* 兑换EOS排行榜
* 兑出EOS排行榜
* 充值EOS排行榜
* 每月操作action最多的用户
* 每月操作action最多用户的操作次数
* 注册用户数
* 使用钱包注册的用户
* action种类数量
* 部署合约数量
