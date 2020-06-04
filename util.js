const ec2 = new (require("aws-sdk")).EC2();

const EC2_ID = process.env.EC2_ID;
if (!EC2_ID) {
    throw new Error("EC2_ID unavailable");
}
const TOKEN = process.env.TOKEN;
if (!TOKEN) {
    throw new Error("TOKEN unavailable");
}

exports.ec2 = async (event, method, resultKey) => {
    let tok = (event.queryStringParameters || {}).token;
    if (tok !== TOKEN) {
        return {statusCode: 401};
    }
    let data = await ec2[method]({InstanceIds: [EC2_ID]}).promise();
    return {
        headers: {"Content-Type": "text/plain"},
        body: data[resultKey].map(si => `${si.PreviousState.Name} -> ${si.CurrentState.Name}`).join("\n")
    };
};