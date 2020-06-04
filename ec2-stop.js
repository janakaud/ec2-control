const {ec2} = require("./util");
exports.handler = async (event) => ec2(event, "stopInstances", "StoppingInstances");