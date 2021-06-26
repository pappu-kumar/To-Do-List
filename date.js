
exports.getDate = function(){

    const today = new Date();

    const date = {
        weekday: "long",
        day: "numeric",
        month: "long"
    };
    return today.toLocaleDateString("en-US",date);
}

exports.getDay = function(){
    const today = new Date();
    
    const options = {
        weekday: "long"
    };
    return today.toLocaleDateString("en-US", options);
}