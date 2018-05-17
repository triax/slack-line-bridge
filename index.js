const bridge = require("cf-chat-bridge");
const rules = require("./rules.js");
const vars = require("./secret.json");
const app = bridge.init({vars});
exports.webhook = app.webhook(rules);