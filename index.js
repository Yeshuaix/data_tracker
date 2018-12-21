// [fibos]
const fibos = require("fibos");
fibos.config_dir = "./data";
fibos.data_dir = "./data";
fibos.load("http", {
	"http-server-address": "0.0.0.0:8870",
	"access-control-allow-origin": "*",
	"http-validate-host": false,
	"verbose-http-errors": true
});

fibos.load("net", {
	"p2p-peer-address": ["127.0.0.1:9801"],
	"p2p-listen-endpoint": "0.0.0.0:9870"
});

fibos.load("producer");
fibos.load("chain", {
	"contracts-console": true,
	"delete-all-blocks": true,
	"genesis-json": "genesis.json"
});

fibos.load("chain_api");

//[fibos-tracker]
const Tracker = require('fibos-tracker');
Tracker.Config.DBconnString = "mysql://root:123456@127.0.0.1/fibos_chain";

Tracker.Config.isSyncSystemBlock = true;

const tracker = new Tracker();

tracker.Queues.clear();


tracker.emitter(fibos);

fibos.start();
