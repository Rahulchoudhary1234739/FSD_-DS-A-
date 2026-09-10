const username = "Rahul";
const password = "1234";
function passwordCheck(username, password){
    if(username === "Rahul" && password === "1234"){
        console.log("Password is correct");
    } else {
        console.log("Password is incorrect");
    }
}
function passwordCheck(username, password,callback){
    setTimeout(() => {
        callback(username, password);
    }, 2000);
}
