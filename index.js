const bridge = require("cloud-chat-bridge");
const vars = require("./secret.json");
const rules = require("./rules");

bridge.init(vars);

exports.line = bridge.hook("LINE").pass(rules).endpoint();