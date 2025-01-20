"use strict";
module.exports = proto3_target;

var protobuf = require("@tanglechat/protobufjs");

proto3_target.description = "Protocol Buffers, Version 3";

function proto3_target(root, options, callback) {
    require("./proto")(root, protobuf.util.merge(options, { syntax: "proto3" }), callback);
}
