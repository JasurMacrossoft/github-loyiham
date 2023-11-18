exports.handler = async(event, context)=>{
    const items =  [
        {id: 1, name: "item1"},
        {id: 2, name: "item2"},
        {id: 3, name: "item3"},
        {id: 4, name: "item4"},
        {id: 5, name: "item5"},
        {id: 6, name: "item6"},
    ]
    return {
        statusCode: 200,
        body: JSON.stringify(items),
    }    
}