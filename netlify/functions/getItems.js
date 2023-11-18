
const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*"
}

exports.handler = async (event, context) => {
  
  return {
    statusCode: 200,
    body: JSON.stringify(),
    headers: headers
  };
};
