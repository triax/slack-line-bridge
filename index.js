const { Bridge } = require("cf-chat-bridge");
const rules = require("./rules.js");
const secrets = require("./secrets.json");
const bridge = new Bridge({ rules, secrets });
exports.webhook = bridge.endpoint();
