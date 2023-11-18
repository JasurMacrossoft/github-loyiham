const headers = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
};

exports.handler = async (event, context) => {
  try {
    const requestData = JSON.parse(event.body);
    const result = requestData.number * 2;

    return {
      statusCode: 200,
      body: JSON.stringify({ result }),
    };
  } catch (error) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Invalid input" }),
    };
  }
};
