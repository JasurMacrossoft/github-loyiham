
const headers = {
    "content-type": "application/json",
    "Access-Control-Allow-Origin": "*"
  }
  
  exports.handler = async (event, context) => {
    const {username, password} = JSON.parse(event.body)


    if (username == "user" && password == "password"){
        return {
            statusCode: 200,
            body: JSON.stringify({message: "Authentication success"}),
            headers: headers
          };
    }else {
        return {
            statusCode: 401,
            body: JSON.stringify({error: "Authentication faild"}),
            headers: headers
          };
    }
    
    
  };
  