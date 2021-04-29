"use strict";

var _server = _interopRequireDefault(require("./config/server"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const objServer = new _server.default();
objServer.start();