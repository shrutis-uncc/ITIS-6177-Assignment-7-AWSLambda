module.exports.handler = async (event) => {
    const keyword = event.queryStringParameters.keyword || '';
    const name = "Shruti";

    return {
        statusCode: 200,
        body: JSON.stringify(`${name} says ${keyword}`),
    };
};
